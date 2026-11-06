import { documentEventHandler } from "@sanity/functions";
import { createClient } from "@sanity/client";

type MusicVideoEvent = {
  _id: string;
  sortOrder?: number;
  title?: string;
};

export const handler = documentEventHandler<MusicVideoEvent>(
  async ({ context, event }) => {
    const { data } = event;
    const sortOrder = data.sortOrder ?? 1;

    if (sortOrder !== 1) {
      console.log(
        `Skipping auto-promote for ${data.title ?? data._id} (sortOrder ${sortOrder})`
      );
      return;
    }

    const publishedId = data._id.replace(/^drafts\./, "");
    const draftId = `drafts.${publishedId}`;

    const client = createClient({
      ...context.clientOptions,
      apiVersion: "2025-01-01",
      useCdn: false,
    });

    const otherIds = await client.fetch<string[]>(
      `*[_type == "musicVideo" && !(_id in [$id, $draftId])]._id`,
      { id: publishedId, draftId }
    );

    if (context.local) {
      console.log("Would make this video #1:", data.title ?? publishedId);
      console.log("Would increment sortOrder on:", otherIds);
      return;
    }

    const tx = client.transaction();

    for (const id of otherIds) {
      tx.patch(id, {
        setIfMissing: { sortOrder: 1 },
        inc: { sortOrder: 1 },
      });
    }

    tx.patch(publishedId, { set: { sortOrder: 1 } });

    await tx.commit();
    console.log(
      `Promoted ${data.title ?? publishedId} to #1 and shifted ${otherIds.length} video(s).`
    );
  }
);

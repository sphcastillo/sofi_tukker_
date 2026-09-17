import type { StructureResolver } from "sanity/structure";

type TourDateListItem = {
  _id: string;
  date?: string;
  venue?: string;
};

export const structure: StructureResolver = (S, context) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Tour Dates")
        .schemaType("tourDate")
        .child(async () => {
          const client = context.getClient({ apiVersion: "2025-01-01" }).withConfig({
            perspective: "previewDrafts",
          });
          const tourDates: TourDateListItem[] = await client.fetch(
            `*[_type == "tourDate"] | order(eventDate asc) {_id, date, venue}`
          );

          return S.list()
            .id("tour-dates-chronological")
            .title("Tour Dates")
            .items(
              tourDates.map((doc) => {
                const id = doc._id.replace(/^drafts\./, "");
                return S.listItem()
                  .id(id)
                  .title(doc.date || doc.venue || "Untitled")
                  .schemaType("tourDate")
                  .child(S.document().documentId(id).schemaType("tourDate"));
              })
            )
            .menuItems([
              S.menuItem()
                .title("Create")
                .intent({ type: "create", params: { type: "tourDate" } })
                .showAsAction(true),
            ]);
        }),
      S.listItem()
        .title("Store Items")
        .child(S.documentTypeList("storeItem").title("Store Items")),
      S.listItem()
        .title("Bread Goods")
        .child(S.documentTypeList("breadGood").title("Bread Goods")),
      S.listItem()
        .title("Merch Products")
        .child(S.documentTypeList("merchProduct").title("Merch Products")),
      S.listItem()
        .title("Music Releases")
        .child(S.documentTypeList("musicRelease").title("Music Releases")),
      S.listItem()
        .title("Music Videos")
        .child(S.documentTypeList("musicVideo").title("Music Videos")),
      S.listItem()
        .title("Social Links")
        .child(S.documentTypeList("socialLink").title("Social Links")),
    ]);

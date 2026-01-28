import "dotenv/config";
import prisma from "../lib/prisma";
import { SofiTukkerMusicObjectives } from "../data/SofiTukkerMusicData";

async function main() {
  await prisma.musicRelease.deleteMany();

  await prisma.musicRelease.createMany({
    data: SofiTukkerMusicObjectives.map((r) => ({
      id: r.id,
      title: r.title,
      url: r.url,
    })),
  });

  console.log("Seeded music_releases:", SofiTukkerMusicObjectives.length);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

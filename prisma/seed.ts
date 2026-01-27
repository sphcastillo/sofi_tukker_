import "dotenv/config";
import { prisma } from "../lib/prisma";
import { BandStoreProducts } from "../data/SofiTukkerStoreData";

console.log("DATABASE_URL:", process.env.DATABASE_URL);


async function main() {
  await prisma.storeItem.deleteMany();

  await prisma.storeItem.createMany({
    data: BandStoreProducts.map((p) => ({
      title: p.title,
      image: p.image,
      price: p.price,
    })),
  });

  console.log("Seeded store_items:", BandStoreProducts.length);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

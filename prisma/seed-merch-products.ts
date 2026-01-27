import "dotenv/config";
import prisma from "../lib/prisma";
import { SofiTukkerMerchItems } from "../data/SofiTukkerMerchData";

async function main() {
  await prisma.merchProduct.deleteMany();

  await prisma.merchProduct.createMany({
    data: SofiTukkerMerchItems.map((p) => ({
      title: p.title,
      price: p.price,
      image: p.image,
      link: p.link,
    })),
  });

  console.log("Seeded merch_products:", SofiTukkerMerchItems.length);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => prisma.$disconnect());

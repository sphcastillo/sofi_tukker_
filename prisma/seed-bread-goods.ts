import "dotenv/config";
import prisma from "../lib/prisma";

const breadGoods = [
  {
      title: "VINYL",
      price: "34.99",
      image: '/images/homepage/musicStore/vinyl.png',
      link: "/",
  },
  {
    title: "CD",
    price: "14.99",
    image: '/images/homepage/musicStore/cd.png',
    link: "/",
  },
  {
    title: "CASSETTE",
    price: "14.99",
    image: '/images/homepage/musicStore/cassette.png',
    link: "/",
  },
];

async function main() {
  await prisma.breadGood.deleteMany();

  await prisma.breadGood.createMany({
    data: breadGoods,
  });

  console.log("Seeded bread_goods:", breadGoods.length);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => prisma.$disconnect());

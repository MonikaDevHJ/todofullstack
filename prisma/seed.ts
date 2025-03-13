// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

// async function main() {
//   await prisma.shoppingList.createMany({
//     data: [
//       { item: "Milk", quantity: 2 },
//       { item: "Eggs", quantity: 12 },
//       { item: "Bread", quantity: 1 },
//       { item: "Rice", quantity: 5 },
//     ],
//   });
// }

// main()
//   .catch((e) => {
//     console.error(e);
//     process.exit(1);
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });

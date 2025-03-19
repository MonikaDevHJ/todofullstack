import { prisma } from "../src/app/lib/Prisma"; // Import global Prisma instance

async function main() {
    // Create a new user
  const newUser = await prisma.user.create({
    data: {
      name: "Alice",
      email: "alice@example.com",
      password: "hashedpassword123",
    },
  });
  const users = await prisma.user.findMany(); // Fetch all users
  console.log("Users in the database:", users);
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });

import prisma from "./app/lib/prisma";

async function test() {
  await prisma.$connect();
  const profiles = await prisma.user.findMany();
  console.log(profiles);

  await prisma.$disconnect();
}
test();

import prisma from "./prisma";

export async function getUniqueProfileForUser(id = "") {
  const user = await prisma.user.findUnique({
    where: {
      id: id,
    },
    include: {
      profile: true,
    },
  });
  console.log(user?.profile);

  return user?.profile;
}

export async function getProfileAll() {
  const profiles = await prisma.user.findMany({
    orderBy: {
      createdAt: "desc",
    },
    select: {
      id: true,
      email: true,
      createdAt: true,
      image: true,
      name: true,
    },
  });
  return profiles;
}
export async function getProfileProClavier() {
  const profiles = await prisma.user.findMany({
    take: 5,
    orderBy: {
      createdAt: "desc",
    },
    select: {
      id: true,
      email: true,
      createdAt: true,
      image: true,
      name: true,
    },
  });
  return profiles;
}

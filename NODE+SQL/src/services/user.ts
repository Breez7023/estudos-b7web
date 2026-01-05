import { prisma } from "../libs/prisma";
import { Prisma } from "@prisma/client";

export const createUser = async (data: Prisma.UserCreateInput) => {
  return await prisma.user.upsert({
    where: {
      email: data.email,
    },
    update: {},
    create: data,
  });
};

export const createUsers = async (users: Prisma.UserCreateInput[]) => {
  try {
    return await prisma.user.createMany({
      data: users,
      skipDuplicates: true,
    });
  } catch (error) {
    return false;
  }
};

export const getAllUsers = async () => {
  let page = 1;
  let skip = (page - 1) * 2;
  return await prisma.user.findMany({
    skip: skip,
    take: 2,

    orderBy: {
      id: "asc",
    },
    select: {
      id: true,
      name: true,
      email: true,
      status: true,
      Post: {
        select: {
          id: true,
          title: true,
        },
      },
    },
  });
};

export const getUserByEmail = async (email: string) => {
  return await prisma.user.findUnique({
    where: { email },
    select: {
      id: true,
      name: true,
      email: true,
      status: true,
    },
  });
};

export const UpdateUser = async () => {
  return await prisma.user.update({
    where: {
      email: "teste@teste.com",
    },
    data: {
      role: "ADMIN",
    },
  });
};

export const DeleteUser = async () => {
  return await prisma.user.delete({
    where: {
      email: "teste@teste.com",
    },
  });
};

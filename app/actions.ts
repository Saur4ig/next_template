import { auth } from "@/auth";
import prisma from "@/prisma/client";
import { User } from "@prisma/client";

// this is only example action, do not use it in real projects
export async function getUser(id: string): Promise<User | null> {
  const session = await auth();
  if (!session) {
    return null;
  }

  try {
    const user = await prisma.user.findUnique({
      where: { id },
    });
    return user;
  } catch (error) {
    console.error(`Failed to retrieve user with ID ${id}:`, error);
    throw new Error(`Failed to get user with ID ${id}`);
  }
}

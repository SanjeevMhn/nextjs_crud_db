"use server";

import { Post, PrismaClient } from "@/generated/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const prisma = new PrismaClient();

export async function createPost(formData: any) {
  const title = formData.get("title");
  const content = formData.get("content");
  await prisma.post.create({
    data: { title, content },
  });
  revalidatePath("/");
  redirect("/");
}

export async function getPosts() {
  return await prisma.post.findMany();
}

export async function getPost(id: number) {
  return await prisma.post.findFirst({
    where: {
      id: id,
    },
  });
}

export async function updatePost( id: number, formData: any) {
  await prisma.post.update({
    where: {
      id: id,
    },
    data: {
      title: formData.get("title"),
      content: formData.get("content"),
    },
  });
  revalidatePath(`/post/${id}`);
  redirect(`/post/${id}`);
  // redirect('/')
}

export async function deletePost(id: number) {
  await prisma.post.delete({
    where: {
      id: id,
    },
  });
  revalidatePath("/");
  redirect("/");
}

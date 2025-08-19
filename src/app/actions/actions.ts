'use server'

import { PrismaClient } from "@/generated/prisma"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"



const prisma = new PrismaClient()

export async function createPost(formData:any) {
    const title = formData.get('title')
    const content = formData.get('content')
    await prisma.post.create({
        data: {title,content}
    })
    revalidatePath('/')
    redirect('/')
}

export async function getPosts(){
    return await prisma.post.findMany()
}

export async function deletePost(id:number){
    await prisma.post.delete({
        where:{
            id: id
        }
    })
    revalidatePath('/')
    redirect('/')
}
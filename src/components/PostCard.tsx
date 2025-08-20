"use client";
import { EllipsisVertical } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { FC, useState, useTransition } from "react";
import { Post } from "@/generated/prisma";
import { deletePost } from "@/app/actions/actions";
import Link from "next/link";

const PostCard: FC<{ post: Post }> = ({ post }) => {
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [isPending, startTransition] = useTransition();

  return (
    <div
      className={`post bg-white border-2 border-neutral-300 p-[2.5rem] rounded-lg grid grid-cols-[1fr_2.4rem] gap-[1.5rem] ${
        isPending ? "loading" : ""
      }`}
    >
      <h2 className="post-title text-[2rem] font-semibold col-1 row-1">
        {post.title}
      </h2>
      <p className="post-content text-[1.7rem] col-[1/span_2] row-2">
        {post.content}
      </p>
      <DropdownMenu>
        <DropdownMenuTrigger className="cursor-pointer col-2 row-1 flex">
          <EllipsisVertical />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuGroup>
            <DropdownMenuItem className="hover:bg-neutral-200 cursor-pointer">
              <Link href={`/post/${post.id}`}>Show</Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-neutral-200 cursor-pointer">
              <Link href={`/post/${post.id}/edit`}>Edit</Link>
            </DropdownMenuItem>
            <DropdownMenuItem
              className="text-red-800 hover:bg-neutral-200 cursor-pointer"
              onClick={() => setShowDeleteAlert(true)}
            >
              Delete
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>

      <AlertDialog open={showDeleteAlert} onOpenChange={setShowDeleteAlert}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Post?</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete this post?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setShowDeleteAlert(false)}>
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={async () => {
                startTransition(async () => {
                  await deletePost(post.id);
                });
              }}
              className="bg-red-800"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default PostCard;

import { getPosts } from "./actions/actions";
import { Post } from "@/generated/prisma";
import PostCard from "@/components/PostCard";

export default async function Home() {
  const posts = await getPosts();
  return (
    <div
      className={`post-container grid ${
        posts.length > 0
          ? "grid-cols-[repeat(auto-fill,minmax(min(100%,25rem),1fr))] gap-[1.5rem]"
          : "place-items-center"
      }`}
    >
      {posts.length > 0 ? (
        posts.map((post: Post) => (
          <PostCard post={post} key={post.id} />
        ))
      ) : (
        <h2>No posts</h2>
      )}
    </div>
  );
}

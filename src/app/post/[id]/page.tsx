import { getPost } from "@/app/actions/actions";
export type PostDetailProp = {
  params: {
    id: number;
  };
};
export default async function Page({ params }: PostDetailProp) {
  const { id } = params;
  const post = await getPost(Number(id));
  return (
    <div className="post-container w-full h-ful grid place-items-center">
      <div className="post bg-white p-[2.5rem] border-2 border-neutral-300 rounded-lg flex flex-col gap-[1.5rem] w-[min(90%,50rem)]">
        <h2 className="post-title text-[2.2rem] font-bold">{post!.title}</h2>
        <p className="post-desc text-[1.7rem] font-medium">{post!.content}</p>
      </div>
    </div>
  );
}

import { getPost, updatePost } from "@/app/actions/actions";
import { PostDetailProp } from "../page";

export default async function Page({ params }: PostDetailProp) {
  const { id } = params;
  const post = await getPost(Number(id));

  return (
    <div className="form-wrapper w-full h-full grid place-items-center">
      <form
        className="form bg-white p-[2.5rem] border-2 border-neutral-300 rounded-lg flex flex-col gap-[1.5rem] w-[min(90%,50rem)]"
        action={updatePost.bind(null,Number(id))}
      >
        <div className="form-group flex flex-col gap-[0.8rem]">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            className="form-control text-[1.7rem] p-[1rem] border border-neutral-300 rounded-lg"
            placeholder="Title"
            defaultValue={post!.title}
          />
        </div>
        <div className="form-group flex flex-col gap-[0.8rem]">
          <label htmlFor="content" className="form-label">
            Content
          </label>
          <textarea
            name="content"
            id="content"
            className="form-control  text-[1.7rem] p-[1rem] border border-neutral-300 rounded-lg"
            placeholder="Content"
            rows={5}
            defaultValue={post!.content ?? ""}
          ></textarea>
        </div>
        <div className="form-actions">
          <button
            type="submit"
            className="p-[0.5rem_1rem] rounded-lg bg-blue-500 text-white text-center min-w-[8rem]"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
}

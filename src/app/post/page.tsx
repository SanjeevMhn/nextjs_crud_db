import { createPost } from "../actions/actions";

export default async function Page(){
    return (
        <div className="form-wrapper w-full h-full grid place-items-center">
        <form action={createPost} className="form bg-white p-[2.5rem] border-2 border-neutral-300 rounded-lg flex flex-col gap-[1.5rem] w-[min(90%,50rem)]">
            <div className="form-group flex flex-col gap-[0.8rem]">
                <label htmlFor="title" className="form-label">Title</label>
                <input type="text" name="title" id="title" className="form-control text-[1.7rem] p-[1rem] border border-neutral-300 rounded-lg" placeholder="Title" />
            </div>
            <div className="form-group flex flex-col gap-[0.8rem]">
                <label htmlFor="content" className="form-label">Content</label>
                <textarea name="content" id="content" className="form-control  text-[1.7rem] p-[1rem] border border-neutral-300 rounded-lg" placeholder="Content" rows={5}></textarea>
            </div>
            <div className="form-actions">
                <button type="submit" className="p-[0.5rem_1rem] rounded-lg bg-blue-500 text-white text-center min-w-[8rem]">Save</button>
            </div>
        </form>
        </div>

    )
}
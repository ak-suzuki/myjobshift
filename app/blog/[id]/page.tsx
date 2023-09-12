import Link from "next/link";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Layout from "../../layout";

export async function generateMetadata({
  params
} : {
  params: { id: number };
}) {
  const post = await getPostData(params.id);
  return {
    title: post?.title,
    description: post?.title,
  };
}

export default async function Post({
  params
} : {
  params: { id: number};
}) {
  const post = await getPostData(params.id);
  return (
    <span className="text-center">
      <p className="m-4">
        {"ID : "}
        {post.id}
      </p>
      <p className="mb-8 text-xl font-bold">{post.title}</p>
      <p className="px-10">{post.body}</p>
      <Link href="/blog">
        <div className="flex justify-center cursor-pointer mt-12">
          <svg
            className="w-6 h-6 mr-3"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span>Back to blog-page</span>
        </div>
      </Link>
    </span>
  );
}

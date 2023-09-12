import Link from "next/link";

export default function Post({
  post
} : {
  post: { id: number, title: string};
}) {
  return (
    <div>
      <span>{post.id}</span>
      {" : "}
      <Link href={`/blog/${post.id}`}>
        <span className="cursor-pointer text-blue-500 border-b border-blue-500 hover:bg-gray-200">
          {post.title}
        </span>
      </Link>
    </div>
  );
}

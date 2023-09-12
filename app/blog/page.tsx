import Post from "../components/Post";
import { getAllPostsData} from "../lib/posts";

export const metadata = {
  title: 'Blog page',
  description: 'Blog pageです。',
};

export default async function BlogPage(){
  const posts = await getAllPostsData();
  return (
    <ul className="m-10">
      {posts.map((post: any) => (
          <Post key={post.id} post={post}/>
        ))}
    </ul>
  );
}

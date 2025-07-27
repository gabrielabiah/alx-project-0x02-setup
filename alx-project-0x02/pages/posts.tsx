import PostCard from "@/components/common/PostCard";
import Header from "@/components/layout/Header"
import { PostProps, PostsPageProps } from "@/interfaces";
import { GetStaticProps } from "next";

const Posts: React.FC<PostsPageProps> = ({ posts }) => {

	return (
		<>
			<Header />
			<main>
				<h1>Posts</h1>
				<p>This is the posts page of our application.</p>
				{posts.map((post: PostProps) => (
					<PostCard key={post.id} title={post.title} body={post.body} userId={post.userId} id={post.id} />
				))}
			</main>
		</>
	);
}


export const getStaticProps: GetStaticProps = async () => {
	const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
	const data = await response.json();
	const posts: PostProps[] = data.map((post: PostProps) => ({
		id: post.id.toString(),
		title: post.title,
		body: post.body,
		userId: post.userId.toString()
	}));

	return {
		props: {
			posts,
		},
		revalidate: 10 // Revalidate every 10 seconds
	};
}

export default Posts;
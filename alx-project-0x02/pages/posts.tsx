import PostCard from "@/components/common/PostCard";
import Header from "@/components/layout/Header"
import { PostProps } from "@/interfaces";
import { useEffect, useState } from "react";

const Posts: React.FC = () => {
	const [posts, setPosts] = useState<PostProps[]>([]);

	useEffect(() => {
		const fetchPosts = async () => {
			const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
			const data = await response.json();
			const formattedPosts = data.map((post: PostProps) => ({
				id: post.id.toString(),
				title: post.title,
				body: post.body,
				userId: post.userId.toString()
			}));
			setPosts(formattedPosts);
		};

		fetchPosts();
	}, [])
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

export default Posts;
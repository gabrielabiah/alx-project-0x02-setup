// pages/home.tsx
import { useState } from "react";
import Header from "@/components/layout/Header";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";

interface Post {
	title: string;
	content: string;
}

export default function HomePage() {
	const [modalOpen, setModalOpen] = useState(false);
	const [posts, setPosts] = useState<Post[]>([]);

	const handleAddPost = (title: string, content: string) => {
		setPosts([{ title, content }, ...posts]);
		setModalOpen(false);
	};

	return (
		<div className="p-4">
			<h1 className="text-2xl font-bold mb-4">Home Page</h1>

			<button
				className="mb-4 px-4 py-2 bg-green-600 text-white rounded"
				onClick={() => setModalOpen(true)}
			>
				Add Post
			</button>

			<PostModal
				isOpen={modalOpen}
				onClose={() => setModalOpen(false)}
				onSubmit={handleAddPost}
			/>

			<div className="grid gap-4">
				{posts.map((post, index) => (
					<Card key={index} title={post.title} content={post.content} />
				))}
			</div>
		</div>
	);
}

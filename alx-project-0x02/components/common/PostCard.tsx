import { PostProps } from "@/interfaces";

const PostCard: React.FC<PostProps> = ({ title, body, userId }) => {
	return (
		<div className="border p-4 rounded shadow-md bg-white mt-3 border-gray-200">
			<h2 className="text-xl font-bold">{title}</h2>
			<p className="text-gray-700 mt-2">{body}</p>
			<span className="text-gray-500 text-sm">User ID: {userId}	</span>
		</div>
	);
}

export default PostCard;
// components/common/PostModal.tsx
import { useState } from "react";

interface PostModalProps {
	isOpen: boolean;
	onClose: () => void;
	onSubmit: (title: string, content: string) => void;
}

export default function PostModal({ isOpen, onClose, onSubmit }: PostModalProps) {
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");

	const handleSubmit = () => {
		if (title && content) {
			onSubmit(title, content);
			setTitle("");
			setContent("");
			onClose();
		}
	};

	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
			<div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md">
				<h2 className="text-lg font-bold mb-4">Create Post</h2>
				<form action="">
					<input
						type="text"
						placeholder="Title"
						className="w-full border border-gray-300 p-2 rounded mb-2"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
					/>
					<textarea
						placeholder="Content"
						className="w-full border border-gray-300 p-2 rounded mb-2"
						value={content}
						onChange={(e) => setContent(e.target.value)}
					/>
				</form>
				<div className="flex justify-end space-x-2">
					<button onClick={onClose} className="px-4 py-2 bg-gray-300 rounded">Cancel</button>
					<button onClick={handleSubmit} className="px-4 py-2 bg-blue-600 text-white rounded">Post</button>
				</div>
			</div>
		</div>
	);
}

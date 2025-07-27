import { CardProps } from "@/interfaces";

const Card: React.FC<CardProps> = ({ title, content }) => {
	return (
		<div className="bg-white shadow-md rounded-lg p-4 mb-4">
			<h2 className="card-title">{title}</h2>
			<p className="card-content">{content}</p>
		</div>
	)
}
export default Card;
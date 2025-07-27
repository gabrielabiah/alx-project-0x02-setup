import { ButtonProps } from "@/interfaces";

const sizeClasses = {
	small: "px-2 py-1 text-sm",
	medium: "px-4 py-2 text-base",
	large: "px-6 py-3 text-lg",
};

const Button: React.FC<ButtonProps> = ({ size = 'small', shape = 'rounded-md', label, onClick }) => {
	return (
		<button className={`btn ${sizeClasses[size]} ${shape} bg-blue-500 hover:bg-blue-600 text-white cursor-pointer`} onClick={onClick}>
			{label}
		</button>
	);
}

export default Button;
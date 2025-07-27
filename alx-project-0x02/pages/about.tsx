import Button from "@/components/common/Button";
import Header from "@/components/layout/Header";

const About: React.FC = () => {
	return (
		<div>
			<h1>About Us</h1>
			<p>This is the about page of our application.</p>

			<Button label="Small Rounded sm" size="small" shape="rounded-sm" />
			<Button label="Medium Rounded md" size="medium" shape="rounded-md" />
			<Button label="Large Rounded full" size="large" shape="rounded-full" />
		</div>
	);
}

export default About;

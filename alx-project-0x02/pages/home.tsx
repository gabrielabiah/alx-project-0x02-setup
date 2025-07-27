import Card from "@/components/common/Card";
import Header from "@/components/layout/Header";

const Home: React.FC = () => {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen">
			<h1>Welcome to the Home Page</h1>
			<p>This is the main entry point of our application.</p>
			<Card title="My first card" content="This is the content of my first card." />
			<Card title="My second card" content="This is the content of my second card." />
			<Card title="My third card" content="This is the content of my third card." />
		</div>
	);
}

export default Home;

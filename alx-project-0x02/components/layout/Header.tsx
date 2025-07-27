import Link from "next/link";

const Header: React.FC = () => {
	return (
		<header className="flex justify-between py-4 bg-white shadow-md px-6">
			<h1>My Application</h1>
			<nav>
				<ul className="flex space-x-4">
					<li><Link href="/home">Home</Link></li>
					<li><Link href="/about">About</Link></li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
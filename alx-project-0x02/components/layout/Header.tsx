import Link from "next/link";

const Header: React.FC = () => {
	return (
		<header className="flex sticky justify-between py-4 bg-blue-600 text-white shadow-md px-6">
			<h1><Link href="/">My Application</Link></h1>
			<nav>
				<ul className="flex gap-4">
					<li><Link href="/home">Home</Link></li>
					<li><Link href="/about">About</Link></li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
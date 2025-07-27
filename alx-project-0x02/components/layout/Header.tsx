import Link from "next/link";

const Header: React.FC = () => {
	return (
		<header className="flex sticky justify-between py-4 bg-blue-600 text-white shadow-md px-6">
			<h1><Link href="/">My Application</Link></h1>
			<nav className="flex gap-4">
				<Link href="/home">Home</Link>
				<Link href="/about">About</Link>
				<Link href="/posts" className="hover:underline">Posts</Link>
			</nav>
		</header>
	);
}

export default Header;
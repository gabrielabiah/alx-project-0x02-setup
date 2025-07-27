const Header: React.FC = () => {
	return (
		<header className="flex justify-between py-4 bg-white shadow-md px-6">
			<h1>My Application</h1>
			<nav>
				<ul className="flex space-x-4">
					<li><a href="/home">Home</a></li>
					<li><a href="/about">About</a></li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
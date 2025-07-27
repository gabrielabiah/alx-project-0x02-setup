// pages/users.tsx
import { GetStaticProps } from "next";
import { UserProps } from "@/interfaces";
import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";

interface UsersPageProps {
	users: UserProps[];
}

const UsersPage = ({ users }: UsersPageProps) => {
	return (
		<>
			<Header />
			<main className="p-4">
				<h1 className="text-2xl font-bold mb-4">Users</h1>
				{users.map(user => (
					<UserCard
						key={user.id}
						id={user.id}
						name={user.name}
						email={user.email}
						address={user.address}
					/>
				))}
			</main>
		</>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const res = await fetch("https://jsonplaceholder.typicode.com/users");
	const users: UserProps[] = await res.json();

	return {
		props: {
			users,
		},
	};
};

export default UsersPage;

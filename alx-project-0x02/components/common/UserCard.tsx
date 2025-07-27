import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
	return (
		<div className="border p-4 rounded shadow mb-4 bg-white">
			<h2 className="text-lg font-semibold">{name}</h2>
			<p className="text-sm text-gray-600">{email}</p>
			<p className="text-sm text-gray-500">
				{address.street}, {address.suite}, {address.city}, {address.zipcode}
			</p>
		</div>
	);
};

export default UserCard;

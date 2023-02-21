import { fakeUsers } from "@/data/fakeUsers";
import { FakeUsersInterface } from "@/interfaces/FakeUsersInterface";
import { Avatar } from "../layout/Avatar";

export const Recommendations = () => {
	return (
		<ul className="mt-4">
			{fakeUsers.map((user: FakeUsersInterface) => (
				<li key={user.name} className="flex items-center gap-4 mb-4">
					<Avatar src={user.avatar} alt={`${user.name} profile picture`} />

					<div className="flex flex-col">
						<p>{user.name}</p>
						<p className="text-gray-400 text-sm">{user.description}</p>
					</div>
				</li>
			))}
		</ul>
	);
};

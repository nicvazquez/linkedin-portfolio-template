import { user } from "@/data/user";
import { Avatar } from "../layout/Avatar";

export const PostHeader = () => {
	return (
		<div className="flex items-center mb-4">
			<Avatar src={user.avatar} alt={`${user.name} profile picture`} />
			<div className="ml-2 truncate">
				<p className="text-sm">{user.name}</p>
				<p className="text-xs text-gray-300 truncate">{user.role}</p>
				<p className="text-xs text-gray-300">1h</p>
			</div>
		</div>
	);
};

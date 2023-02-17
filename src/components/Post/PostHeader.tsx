import { user } from "@/data/user";
import Image from "next/image";

export const PostHeader = () => {
	return (
		<div className="flex items-center">
			<Image
				className="rounded-full"
				src={user.avatar}
				width={50}
				height={50}
				alt={`${user.name} profile picture`}
			/>
			<div className="ml-2 truncate">
				<p className="text-sm">{user.name}</p>
				<p className="text-xs text-gray-300 truncate">{user.role}</p>
				<p className="text-xs text-gray-300">1h</p>
			</div>
		</div>
	);
};

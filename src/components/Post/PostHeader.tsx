import { user } from "@/data/user";
import Image from "next/image";

export const PostHeader = () => {
	return (
		<div>
			<Image
				src={user.avatar}
				width={50}
				height={50}
				alt={`${user.name} profile picture`}
			/>
			<div>
				<p>{user.name}</p>
				<p>{user.role}</p>
			</div>
		</div>
	);
};

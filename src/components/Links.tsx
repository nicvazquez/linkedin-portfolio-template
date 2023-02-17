import { user } from "@/data/user";
import { Post } from "./Post/Post";

export const Links = () => {
	return (
		<Post title="My links:">
			<ul>
				{user.links.map((link) => (
					<li key={link}>
						<a href={link} target="_blank" rel="noreferrer">
							{link}
						</a>
					</li>
				))}
			</ul>
		</Post>
	);
};

import { user } from "@/data/user";
import { Post } from "../Post/Post";

export const Skills = () => {
	return (
		<Post title="My skills:">
			<ul>
				{user.skills.map((skill) => (
					<li key={skill}>{skill}</li>
				))}
			</ul>
		</Post>
	);
};

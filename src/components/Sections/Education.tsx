import { user } from "@/data/user";
import { Post } from "../Post/Post";

export const Education = () => {
	return (
		<Post title="Education:">
			<ul>
				{user.education?.map((exp) => (
					<li key={exp.institute}>
						<div className="mb-4">
							<p>{exp.title}</p>

							<p className="text-gray-300">
								{exp.institute} · {exp.date}
							</p>

							<p className="text-gray-300">{exp.description}</p>
						</div>
					</li>
				))}
			</ul>
		</Post>
	);
};

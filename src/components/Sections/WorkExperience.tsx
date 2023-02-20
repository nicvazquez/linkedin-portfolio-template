import { user } from "@/data/user";
import React from "react";
import { Post } from "../Post/Post";

export const WorkExperience = () => {
	return (
		<Post title="Work experience:">
			<ul>
				{user.workExperience?.map((exp) => (
					<li key={exp.company}>
						<div className="mb-4">
							<p>{exp.role}</p>
							<p className="text-gray-300">{exp.date}</p>
							<div className="flex">
								<p className="text-gray-300">
									{exp.company} · {exp.type}
								</p>
							</div>
						</div>
					</li>
				))}
			</ul>
		</Post>
	);
};

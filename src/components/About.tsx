import { user } from "@/data/user";
import { useState } from "react";
import { Post } from "./Post/Post";

export const About = () => {
	return (
		<Post>
			<p>{user.about}</p>
		</Post>
	);
};

import { user } from "@/data/user";
import { useState } from "react";
import { PostFooter } from "./PostFooter";
import { PostHeader } from "./PostHeader";

export const Post = () => {
	const [chars, setChars] = useState<number>(150);

	return (
		<article className="p-4 relative">
			<PostHeader />

			<p className="text-sm text-gray-200 whitespace-pre-wrap inline">
				{user.about.slice(0, chars)}
			</p>
			{chars !== user.about.length && (
				<button
					onClick={() => setChars(user.about.length)}
					className="text-white font-medium"
				>
					... more
				</button>
			)}
			<div className="my-10"></div>
			<PostFooter />
		</article>
	);
};

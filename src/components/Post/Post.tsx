import { PostFooter } from "./PostFooter";
import { PostHeader } from "./PostHeader";

interface Props {
	children: JSX.Element;
}

export const Post = ({ children }: Props) => {
	return (
		<article className="mb-2 p-4 relative">
			<PostHeader />

			<div className="text-sm text-gray-200 whitespace-pre-wrap inline">
				{children}
			</div>

			<div className="my-12"></div>
			<PostFooter />
		</article>
	);
};

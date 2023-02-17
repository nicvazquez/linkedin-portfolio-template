import { PostFooter } from "./PostFooter";
import { PostHeader } from "./PostHeader";

interface Props {
	children: JSX.Element | JSX.Element[];
	title: string;
}

export const Post = ({ children, title }: Props) => {
	return (
		<article className="mb-2 p-4 relative">
			<PostHeader />

			<div className="text-sm text-gray-200 whitespace-pre-wrap inline">
				<p className="mb-2">
					<strong>{title}</strong>
				</p>

				{children}
			</div>

			<div className="my-12"></div>
			<PostFooter />
		</article>
	);
};

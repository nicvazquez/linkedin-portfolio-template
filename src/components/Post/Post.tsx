import { PostFooter } from "./PostFooter";
import { PostHeader } from "./PostHeader";

interface Props {
	children: JSX.Element | JSX.Element[];
	title: string;
}

export const Post = ({ children, title }: Props) => {
	return (
		<article className="background-container mb-2 p-4 rounded relative w-full">
			<PostHeader />

			<div className="text-sm text-gray-200 whitespace-pre-wrap inline">
				<p className="mb-2">
					<strong>{title}</strong>
				</p>

				{children}
			</div>

			<div className="my-16"></div>
			<PostFooter />
		</article>
	);
};

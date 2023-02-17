import { FaRegThumbsUp } from "react-icons/fa";
import { FaRegCommentDots } from "react-icons/fa";
import { FaShare } from "react-icons/fa";

const Button = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
	return (
		<button className="text-gray-300 flex items-center gap-2">
			{children}
		</button>
	);
};

export const PostFooter = () => {
	return (
		<div className="text-sm font-medium flex justify-between items-center border-solid border-t-2 border-b-2 md:border-b-0 border-white border-opacity-10 absolute bottom-1 right-0 left-0 md:left-4 md:right-4 py-2 px-4">
			<Button>
				<FaRegThumbsUp />
				<span>Recommend</span>
			</Button>

			<Button>
				<FaRegCommentDots />
				<div>Comment</div>
			</Button>

			<Button>
				<FaShare />
				<div>Share</div>
			</Button>
		</div>
	);
};

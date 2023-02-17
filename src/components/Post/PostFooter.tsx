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
		<div className="text-sm font-medium flex justify-between items-center border-solid border-t-2 border-gray-700 absolute bottom-0 right-0 left-0 py-2 px-4">
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

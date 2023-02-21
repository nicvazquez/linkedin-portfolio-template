import {
	FaRegThumbsUp,
	FaRegCommentDots,
	FaRetweet,
	FaShare,
} from "react-icons/fa";
import { Button } from "../layout/Buttons";

export const PostFooter = () => {
	return (
		<div className="text-sm font-medium flex justify-between items-center border-solid border-t-2 border-b-2 md:border-b-0 border-white border-opacity-10 absolute right-0 bottom-1 left-0 md:left-4 md:right-4 py-2 px-4 md:py-1 md:px-0">
			<Button>
				<FaRegThumbsUp size={15} />
				<span>Like</span>
			</Button>

			<Button>
				<FaRegCommentDots size={15} />
				<span>Comment</span>
			</Button>

			<Button>
				<FaRetweet size={15} />
				<span>Repost</span>
			</Button>

			<Button>
				<FaShare size={15} />
				<span>Send</span>
			</Button>
		</div>
	);
};

import { Button } from "../layout/Buttons";
import { HiPhoto } from "react-icons/hi2";
import { RiVideoFill } from "react-icons/ri";
import { MdEvent, MdArticle } from "react-icons/md";

export const StartPostFooter = () => {
	return (
		<div className="flex items-center justify-between mt-4">
			<Button>
				<HiPhoto color="lightblue" size={20} />
				<span>Photo</span>
			</Button>

			<Button>
				<RiVideoFill color="lightgreen" size={20} />
				<span>Video</span>
			</Button>

			<Button>
				<MdEvent color="orange" size={20} />
				<span>Audio event</span>
			</Button>

			<Button>
				<MdArticle color="salmon" size={20} />
				<span>Write article</span>
			</Button>
		</div>
	);
};

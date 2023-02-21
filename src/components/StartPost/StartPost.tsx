import { Avatar } from "../layout/Avatar";
import { StartPostFooter } from "./StartPostFooter";

export const StartPost = () => {
	return (
		<div className="hidden md:flex flex flex-col background-container w-full rounded p-4">
			<div className="flex items-center gap-2">
				<Avatar src="/user-placeholder.png" alt="User avatar" />

				<button className="border border-1 border-gray-600 hover:bg-gray-700 transition-all p-2 rounded-full w-full flex pl-6">
					<span>Start a post</span>
				</button>
			</div>

			<StartPostFooter />
		</div>
	);
};

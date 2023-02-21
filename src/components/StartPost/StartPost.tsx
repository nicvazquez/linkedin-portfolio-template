import Image from "next/image";
import React from "react";
import { StartPostFooter } from "./StartPostFooter";

export const StartPost = () => {
	return (
		<div className="hidden md:flex flex flex-col background-container w-full rounded p-4">
			<div className="flex items-center gap-2">
				<Image
					className="rounded-full"
					src="/user-placeholder.png"
					width={40}
					height={40}
					alt="User profile picture"
				/>

				<button className="border border-1 border-gray-600 hover:bg-gray-700 transition-all p-2 rounded-full w-full flex pl-6">
					<span>Start a post</span>
				</button>
			</div>

			<StartPostFooter />
		</div>
	);
};

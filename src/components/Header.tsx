import Image from "next/image";
import { FaCommentDots, FaSearch } from "react-icons/fa";

export const Header = () => {
	return (
		<header className="py-2 flex justify-around items-center border-b-2 border-white border-opacity-10 md:mb-6 md:justify-center md:gap-6">
			<div
				className="rounded-full bg-gray-300 bg-opacity-10 grid place-items-center"
				style={{ width: "35px", height: "35px" }}
			>
				<Image
					src={"/user-placeholder.png"}
					alt="User placeholder"
					width={20}
					height={20}
				/>
			</div>

			<div className="relative">
				<FaSearch fill="lightgray" className="absolute top-2 left-2 w-3 h-3" />
				<input
					className="pl-7 pr-4 py-0.5 rounded-[2px] text-md font-bold"
					type="search"
					placeholder="Search"
					autoComplete="on"
				/>
			</div>
			<FaCommentDots />
		</header>
	);
};

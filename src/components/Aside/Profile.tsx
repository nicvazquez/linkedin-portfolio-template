import { user } from "@/data/user";
import Image from "next/image";

export const Profile = () => {
	const getWordFromURL = (word: string) => {
		const convertedWord = word.split("/")[2].split(".")[0];
		return convertedWord.charAt(0).toUpperCase() + convertedWord.slice(1);
	};
	return (
		<div className="text-sm flex flex-col items-center justify-center">
			<Image
				className="rounded-full mb-4"
				src={user.avatar}
				width={100}
				height={100}
				alt={`${user.name} profile picture`}
			/>
			<h1>{user.name}</h1>
			<h2>{user.role}</h2>

			<ul className="mt-4">
				{user.links.map((link) => (
					<li key={link}>
						{getWordFromURL(link)}:{" "}
						<a href={link} target="_blank" rel="noreferrer">
							{link}
						</a>
					</li>
				))}
			</ul>
		</div>
	);
};

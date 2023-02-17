import { Profile } from "./Profile";

export const Aside = () => {
	return (
		<aside className="hidden md:flex absolute md:left-6 2xl:left-20">
			<Profile />
		</aside>
	);
};

import { Profile } from "./Profile";

export const Aside = () => {
	return (
		<aside className="hidden md:flex absolute left-20">
			<Profile />
		</aside>
	);
};

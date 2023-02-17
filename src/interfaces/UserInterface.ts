interface WorkExperience {
	role: string;
	company: string;
	date: string;
	type: string;
}

export interface UserInterface {
	name: string;
	avatar: string;
	role: string;
	about: string;
	skills: string[];
	links: string[];
	workExperience: WorkExperience[];
}

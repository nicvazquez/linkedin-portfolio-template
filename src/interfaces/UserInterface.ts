interface WorkExperience {
	role: string;
	company: string;
	date: string;
	type: string;
}

interface Education {
	institute: string;
	title: string;
	date: string;
	description: string;
}

export interface UserInterface {
	name: string;
	avatar: string;
	role: string;
	about: string;
	skills: string[];
	links: string[];
	workExperience: WorkExperience[] | null;
	education: Education[] | null;
}

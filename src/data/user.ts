import { UserInterface } from "@/interfaces/UserInterface";

export const user: UserInterface = {
	name: "Nicolás Vazquez",
	avatar: "/avatar.webp",
	role: "Software Developer",
	about: `My name is Nicolas Vazquez. I am a software developer with a passion for technology.

I started programming in high school with the C++ language, knowing from that day that computer science was my thing.

One of my motivations is to constantly learn, teaching and writing about my knowledge.
My interest is in collaborating in innovative projects, working together with unstoppable teams that allow me to improve, developing quality solutions.
`,
	workExperience: [
		{
			role: "Tech Assistant",
			company: "Digital House",
			date: "Jan. 2023 - Present",
			type: "Part time",
		},
		{
			role: "Web Developer",
			company: "AppDirect",
			date: "Dec. 2022 - Present",
			type: "Full time",
		},
		{
			role: "Software Developer",
			company: "Novared",
			date: "Aug. 2021 - Dec. 2022",
			type: "Full time",
		},
	],
	skills: [
		"HTML",
		"CSS",
		"Bootstrap",
		"Tailwind CSS",
		"Sass",
		"JavaScript",
		"TypeScript",
		"Node.js",
		"React",
		"Next.js",
		"SQL",
		"Python",
		"Flask",
		"Twig",
		"WordPress",
		"Craft CMS",
		"Strapi CMS",
	],
	education: [
		{
			institute: "Instituto Nuestra Señora de la Unidad",
			title: "Bachelor's Degree in Computer Science",
			date: "2015 - 2020",
			description:
				"Education at my high school, where I took my first steps in programming with the C++ language",
		},
		{
			institute: "St. Michael's of English Culture",
			title: "English as a foreing language",
			date: "2012 - 2021",
			description:
				"English institute where I learned to speak this language fluently",
		},
	],
	links: [
		"https://github.com/nicvazquez",
		"https://linkedin.com/in/nicvazquez",
	],
};

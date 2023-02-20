import { Aside } from "@/components/Aside/Aside";
import { Header } from "@/components/Header";
import { About } from "@/components/Sections/About";
import { Education } from "@/components/Sections/Education";
import { Links } from "@/components/Sections/Links";
import { Skills } from "@/components/Sections/Skills";
import { WorkExperience } from "@/components/Sections/WorkExperience";
import { SEO } from "@/components/SEO";
import { user } from "@/data/user";

export default function Home() {
	return (
		<>
			<SEO />

			<Header />

			<Aside />

			<main>
				<section>
					<ul>
						<li className="md:grid md:place-items-center">
							<About />
						</li>
						<li className="md:grid md:place-items-center">
							{user.workExperience !== null && <WorkExperience />}
						</li>
						<li className="md:grid md:place-items-center">
							<Skills />
						</li>
						<li className="md:grid md:place-items-center">
							{user.education !== null && <Education />}
						</li>
						<li className="md:grid md:place-items-center">
							<Links />
						</li>
					</ul>
				</section>
			</main>
		</>
	);
}

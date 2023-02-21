import { AsideLeft } from "@/components/Aside/AsideLeft";
import { AsideRight } from "@/components/Aside/AsideRight";
import { Header } from "@/components/Header";
import { About } from "@/components/Sections/About";
import { Education } from "@/components/Sections/Education";
import { Links } from "@/components/Sections/Links";
import { Skills } from "@/components/Sections/Skills";
import { WorkExperience } from "@/components/Sections/WorkExperience";
import { SEO } from "@/components/SEO";
import { StartPost } from "@/components/StartPost/StartPost";
import { user } from "@/data/user";

export default function Home() {
	return (
		<>
			<SEO />

			<Header />

			<div className="flex items-start justify-center gap-4">
				<AsideLeft />

				<main className="md:flex md:flex-col md:items-center md:justify-center md:w-2/5 2xl:w-1/3">
					<StartPost />

					<hr className="hidden md:flex h-px my-4 border-0 bg-gray-800 w-full" />

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

				<AsideRight />
			</div>
		</>
	);
}

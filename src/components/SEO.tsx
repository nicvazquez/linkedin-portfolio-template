import Head from "next/head";
import { useRouter } from "next/router";
import { metadata } from "@/data/metadata";

export const SEO = () => {
	const router = useRouter();
	return (
		<Head>
			<title>{metadata.title}</title>
			<meta name="robots" content="follow, index" />
			<meta name="description" content={metadata.description} />
			<meta property="og:url" content={`${metadata.siteUrl}${router.asPath}`} />
			<meta property="og:site_name" content={metadata.title} />
			<meta property="og:description" content={metadata.description} />
			<meta property="og:title" content={metadata.title} />
			<meta property="og:image" content={metadata.image} />
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:site" content={metadata.twitter} />
			<meta name="twitter:title" content={metadata.title} />
			<meta name="twitter:description" content={metadata.description} />
			<meta name="twitter:image" content={metadata.image} />
			<link rel="canonical" href={`${metadata.siteUrl}${router.asPath}`} />
		</Head>
	);
};

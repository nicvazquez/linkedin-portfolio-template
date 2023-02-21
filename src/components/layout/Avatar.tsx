import Image from "next/image";
import React from "react";

interface Props {
	src: string;
	alt: string;
}
export const Avatar = ({ src, alt }: Props) => {
	return (
		<Image
			className="rounded-full"
			src={src}
			width={50}
			height={50}
			alt={alt}
		/>
	);
};

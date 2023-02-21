import React from "react";

interface Props {
	children: JSX.Element | JSX.Element[];
}

export const Aside = ({ children }: Props) => {
	return (
		<aside className="hidden md:flex background-container rounded md:p-4 xxl:px-10">
			{children}
		</aside>
	);
};

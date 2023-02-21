import React from "react";
import { Aside } from "../layout/Aside";
import { BsFillInfoSquareFill } from "react-icons/bs";
import { Recommendations } from "./Recommendations";

export const AsideRight = () => {
	return (
		<Aside>
			<div className="flex flex-col">
				<div className="flex items-center justify-between">
					<h2>Add to your feed</h2>
					<BsFillInfoSquareFill />
				</div>

				<Recommendations />
			</div>
		</Aside>
	);
};

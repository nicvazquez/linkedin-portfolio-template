interface Props {
	children: JSX.Element | JSX.Element[];
}

export const Button = ({ children }: Props) => {
	return (
		<button className="text-gray-300 flex items-center gap-1 flex flex-col md:flex-row md:gap-2 md:hover:bg-gray-700 rounded transition-all md:p-3">
			{children}
		</button>
	);
};

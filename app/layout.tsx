import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "SuperSupply",
	description: "Store for superheroes",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Navbar />
				{children}
			</body>
		</html>
	);
}

const Navbar = () => {
	return (
		<nav className="flex px-3 items-center bg-red-500 justify-between">
			<span className="text-xl font-bold text-neutral-50">
				SuperSupply
			</span>
			<div className="flex rounded m-3 flex-grow box-content">
				<input
					type="text"
					className="rounded-l px-1 w-full"
					placeholder="Search..."
				></input>
				<div className="aspect-square px-3 rounded-r bg-neutral-200 flex items-center justify-center text-center">
					L
				</div>
				{
				// replace L and C with icons
				}
			</div>
			<div className="text-neutral-50 aspect-square">C</div>
		</nav>
	);
};

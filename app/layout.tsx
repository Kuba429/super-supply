import "./globals.css";
import { Inter } from "next/font/google";
import { FaShoppingCart } from "react-icons/fa";
import { SearchBar } from "./SearchBar";

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
		<nav className="flex border-b sticky shadow-red-500 items-center justify-between text-neutral-800 px-3">
			<span className="text-xl font-bold text-red-500">SuperSupply</span>
			<SearchBar />
			<div className="flex aspect-square items-center justify-center gap-1">
				<span>$0.00</span>
				<FaShoppingCart size={20} />
			</div>
		</nav>
	);
};

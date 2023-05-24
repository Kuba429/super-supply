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
		<nav className="flex items-center justify-between bg-red-500 px-3">
			<span className="text-xl font-bold text-neutral-50">
				SuperSupply
			</span>
			<SearchBar />
			<div className="flex aspect-square items-center justify-center gap-1 text-neutral-50">
				<span>$0.00</span>
				<FaShoppingCart size={20} />
			</div>
		</nav>
	);
};

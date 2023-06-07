import "./globals.css";
import { Inter } from "next/font/google";
import { FaShoppingCart } from "react-icons/fa";
import { SearchBar } from "./SearchBar";
import { Lobster } from "next/font/google";
const lobster = Lobster({
	weight: "400",
	subsets: ["latin"],
});
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
			<body className={inter.className + " flex min-h-screen flex-col"}>
				<Navbar />
				<div className="m-auto max-w-7xl">{children}</div>
				<Footer />
			</body>
		</html>
	);
}

function Footer() {
	return (
		<>
			<div className="flex-grow" />
			<footer className="mt-5 bg-red-500 p-10 text-center text-white">
				This is going to be a footer
			</footer>
		</>
	);
}

function Navbar() {
	return (
		<nav className="sticky flex items-center justify-between border-b px-3 text-neutral-800 shadow-red-500">
			<span
				className={
					"text-2xl font-bold text-red-500 " + lobster.className
				}
			>
				SuperSupply
			</span>
			<SearchBar />
			<div className="flex aspect-square items-center justify-center gap-1">
				<span>$0.00</span>
				<FaShoppingCart size={20} />
			</div>
		</nav>
	);
}

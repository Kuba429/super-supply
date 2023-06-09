import "./globals.css";
import { Inter } from "next/font/google";
import { SearchBar } from "./SearchBar";
import { Lobster } from "next/font/google";
import Link from "next/link";
import { Provider } from "react-redux";
import store from "./store";
import Cart from "./Cart";
import ReduxProvider from "./ReduxProvider";

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
		<ReduxProvider>
			<html lang="en">
				<body
					className={inter.className + " flex min-h-screen flex-col"}
				>
					<Navbar />
					<div className="container-lg">{children}</div>
					<Footer />
				</body>
			</html>
		</ReduxProvider>
	);
}

function Footer() {
	return (
		<>
			<div className="flex-grow" />
			<footer className="mt-5 bg-red-500 p-10 text-center text-white">
				<div className="container-lg">This is going to be a footer</div>
			</footer>
		</>
	);
}

function Navbar() {
	return (
		<div className="container-lg sticky top-0 z-20 h-16 bg-slate-200">
			<nav className="flex items-center justify-between border-b px-3 text-neutral-800">
				<Link
					href="/"
					className={
						"text-2xl font-bold text-red-500 " + lobster.className
					}
				>
					SuperSupply
				</Link>
				<SearchBar />
				<Cart />
			</nav>
		</div>
	);
}

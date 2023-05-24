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
		<nav className="bg-red-500 p-5">
			<span className="text-xl font-bold text-neutral-50">
				SuperSupply
			</span>
		</nav>
	);
};

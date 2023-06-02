// universal naming to avoid having different spelling of the same thing like 'spiderman' and 'spider-man'
export const heroes = [
	{ name: "Spider-Man", image: "" },
	{ name: "Iron Man", image: "" },
	{ name: "Hulk", image: "" },
	{ name: "Captain America", image: "" },
	{ name: "Daredevil", image: "" },
	{ name: "Rocket Raccoon", image: "" },
	{ name: "Star Lord", image: "" },
	{ name: "Doctor Strange", image: "" },
	{ name: "Thor", image: "" },
] as const;

export const categories = [
	{ name: "suits", image: "/items/spiderman.webp" },
	{ name: "apparel", image: "/banners/starlord.webp" },
	{ name: "weapons", image: "/items/billy-club.png" },
	{ name: "artifacts", image: "/items/space-stone.webp" },
	{ name: "accesories", image: "/items/tony-stark-glasses.webp" },
	{ name: "defensive equipment", image: "/items/vibranium-shield.webp" },
	{ name: "body enhancements", image: "/items/hulk-serum.png" },
] as const;

export type itemType = {
	id: number;
	name: string;
	categories: (typeof categories)[number]["name"][];
	usedBy: (typeof heroes)[number]["name"][];
	image: string;
	price: number;
};
let id = 0;
// db mock kinda
export const fetchAllItems: () => itemType[] = () => [
	{
		id: ++id,
		name: "Spider-man's classic suit",
		categories: ["suits", "apparel"],
		usedBy: ["Spider-Man"],
		image: "/items/spiderman.webp",
		price: 50,
	},
	{
		id: ++id,
		name: "Tony Stark Glasses",
		categories: ["apparel", "accesories"],
		usedBy: ["Iron Man"],
		image: "/items/tony-stark-glasses.webp",
		price: 1_050,
	},
	{
		id: ++id,
		name: "Element Gun",
		categories: ["weapons"],
		usedBy: ["Star Lord"],
		image: "/items/star-lord-gun.webp",
		price: 2_500,
	},
	{
		id: ++id,
		name: "Laser Cannon",
		categories: ["weapons"],
		usedBy: ["Rocket Raccoon"],
		image: "/items/laser-cannon.png",
		price: 5_000,
	},
	{
		id: ++id,
		name: "Iron Man's suit",
		categories: ["suits", "apparel"],
		usedBy: ["Iron Man"],
		image: "/items/ironman.webp",
		price: 1_000_000_000_000,
	},
	{
		id: ++id,
		name: "Vibranium Shield",
		categories: ["weapons", "defensive equipment"],
		usedBy: ["Captain America"],
		image: "/items/vibranium-shield.webp",
		price: 350_000,
	},
	{
		id: ++id,
		name: "Cloak of Levitation",
		categories: ["apparel", "artifacts", "defensive equipment"],
		usedBy: ["Doctor Strange"],
		image: "/items/cloak-of-levitation.png",
		price: 2_000_000,
	},
	{
		id: ++id,
		name: "Mjolnir",
		categories: ["artifacts", "weapons"],
		usedBy: ["Thor"],
		image: "/items/mjolnir.webp",
		price: 50_000_000,
	},
	{
		id: ++id,
		name: "Super Soldier Serum - Hulk",
		categories: ["body enhancements"],
		usedBy: ["Hulk"],
		image: "/items/hulk-serum.png",
		price: 100_000,
	},
	{
		id: ++id,
		name: "Super Soldier Serum - Classic",
		categories: ["body enhancements"],
		usedBy: ["Captain America"],
		image: "/items/super-soldier-serum.png",
		price: 100_000,
	},
	{
		id: ++id,
		name: "Web Shooter",
		categories: ["accesories"],
		usedBy: ["Spider-Man"],
		image: "/items/web-shooter.png",
		price: 8000,
	},
	{
		id: ++id,
		name: "Billy Club",
		categories: ["weapons"],
		usedBy: ["Daredevil"],
		image: "/items/billy-club.png",
		price: 100,
	},
];

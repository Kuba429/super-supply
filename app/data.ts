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
	{ name: "Wolverine", image: "" },
	{ name: "Black Panther", image: "" },
	{ name: "Ant-Man", image: "" },
	{ name: "Black Widow", image: "" },
] as const;
export type heroType = (typeof heroes)[number]["name"];

export const categories = [
	{ name: "suits", image: "/items/spiderman.webp" },
	{ name: "apparel", image: "/banners/starlord.webp" },
	{ name: "weapons", image: "/items/billy-club.png" },
	{ name: "artifacts", image: "/items/space-stone.webp" },
	{ name: "accesories", image: "/items/tony-stark-glasses.webp" },
	{ name: "defensive equipment", image: "/items/vibranium-shield.webp" },
	{ name: "body enhancements", image: "/items/hulk-serum.png" },
] as const;
export type categoryType = (typeof categories)[number]["name"];
export type categoriesType = typeof categories;

export const manufacturers = [
	{ name: "Stark Industries" },
	{ name: "Oscorp" },
	{ name: "Pym Technologies" },
	{ name: "Wakandan Design Group" },
	{ name: "S.H.I.E.L.D" },
	{ name: "Kree-Tech Innovations" },
	{ name: "Dwarves of Nidavellir" },
	{ name: "Project Rebirth Laboratories" },
	{ name: "Parker Industries" },
	{ name: "Nelson and Murdock" },
	{ name: "Department H" },
	{ name: "Red Room Industries" },
] as const;
export type manufacturerType = (typeof manufacturers)[number]["name"];

export type itemType = {
	id: string;
	name: string;
	categories: categoryType[];
	usedBy: heroType[];
	image: string;
	price: number;
	manufacturer?: manufacturerType;
	discount?: number; // i don't think it's possible to restrict number to be within range with types sooo
};
// db mock kinda
export const fetchAllItems: () => itemType[] = () => {
	let id = 0;
	return [
		{
			id: (++id).toString(),
			name: "Spider-man's classic suit",
			categories: ["suits", "apparel"],
			usedBy: ["Spider-Man"],
			image: "/items/spiderman.webp",
			price: 50,
			manufacturer: "Parker Industries",
		},
		{
			id: (++id).toString(),
			name: "Tony Stark Glasses",
			categories: ["apparel", "accesories"],
			usedBy: ["Iron Man"],
			image: "/items/tony-stark-glasses.webp",
			price: 1_050,
			manufacturer: "Stark Industries",
		},
		{
			id: (++id).toString(),
			name: "Element Gun",
			categories: ["weapons"],
			usedBy: ["Star Lord"],
			image: "/items/star-lord-gun.webp",
			price: 2_500,
			manufacturer: "Kree-Tech Innovations",
		},
		{
			id: (++id).toString(),
			name: "Laser Cannon",
			categories: ["weapons"],
			usedBy: ["Rocket Raccoon"],
			image: "/items/laser-cannon.png",
			price: 5_000,
			manufacturer: "Kree-Tech Innovations",
		},
		{
			id: (++id).toString(),
			name: "Iron Man's suit",
			categories: ["suits", "apparel"],
			usedBy: ["Iron Man"],
			image: "/items/ironman.webp",
			price: 1_000_000_000_000,
			manufacturer: "Stark Industries",
		},
		{
			id: (++id).toString(),
			name: "Vibranium Shield",
			categories: ["weapons", "defensive equipment"],
			usedBy: ["Captain America"],
			image: "/items/vibranium-shield.webp",
			price: 350_000,
		},
		{
			id: (++id).toString(),
			name: "Cloak of Levitation",
			categories: ["apparel", "artifacts", "defensive equipment"],
			usedBy: ["Doctor Strange"],
			image: "/items/cloak-of-levitation.png",
			price: 2_000_000,
		},
		{
			id: (++id).toString(),
			name: "Mjolnir",
			categories: ["artifacts", "weapons"],
			usedBy: ["Thor"],
			image: "/items/mjolnir.webp",
			price: 50_000_000,
			manufacturer: "Dwarves of Nidavellir",
		},
		{
			id: (++id).toString(),
			name: "Super Soldier Serum - Hulk",
			categories: ["body enhancements"],
			usedBy: ["Hulk"],
			image: "/items/hulk-serum.png",
			price: 100_000,
			manufacturer: "Project Rebirth Laboratories",
			discount: 0.2,
		},
		{
			id: (++id).toString(),
			name: "Super Soldier Serum - Classic",
			categories: ["body enhancements"],
			usedBy: ["Captain America"],
			image: "/items/super-soldier-serum.png",
			price: 100_000,
			manufacturer: "Project Rebirth Laboratories",
		},
		{
			id: (++id).toString(),
			name: "Web Shooter",
			categories: ["accesories"],
			usedBy: ["Spider-Man"],
			image: "/items/web-shooter.png",
			price: 8_000,
			manufacturer: "Parker Industries",
		},
		{
			id: (++id).toString(),
			name: "Billy Club",
			categories: ["weapons"],
			usedBy: ["Daredevil"],
			image: "/items/billy-club.png",
			price: 100,
			manufacturer: "Nelson and Murdock",
		},
		{
			id: (++id).toString(),
			name: "Adamantium Claws",
			categories: ["weapons", "body enhancements"],
			image: "/items/adamantium-claws.png",
			usedBy: ["Wolverine"],
			price: 250_000,
			manufacturer: "Department H",
		},
		{
			id: (++id).toString(),
			name: "Infinity Gauntlet",
			categories: ["weapons", "artifacts"],
			image: "/banners/gauntlet.webp",
			usedBy: [],
			price: 2_000_000,
			manufacturer: "Department H",
		},
		{
			id: (++id).toString(),
			name: "Ant-Man's Suit",
			categories: ["suits", "apparel"],
			image: "/items/ant-man-suit.webp",
			usedBy: ["Ant-Man"],
			price: 750_000,
			manufacturer: "Pym Technologies",
		},
		{
			id: (++id).toString(),
			name: "Widow's Bite Gauntlets",
			categories: ["weapons", "apparel"],
			image: "/items/widow-gauntlet.png",
			usedBy: ["Black Widow"],
			price: 275_000,
			manufacturer: "Red Room Industries",
		},
	];
};

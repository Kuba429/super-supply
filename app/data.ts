// universal naming to avoid having different spelling of the same thing like 'spiderman' and 'spider-man'
const heroes = [
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

const categories = [
	{ name: "suit", image: "" },
	{ name: "apparel", image: "" },
	{ name: "weapon", image: "" },
	{ name: "material", image: "" },
	{ name: "artifact", image: "" },
	{ name: "accesory", image: "" },
	{ name: "defensive equipment", image: "" },
	{ name: "body enhancement", image: "" },
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
		categories: ["suit", "apparel"],
		usedBy: ["Spider-Man"],
		image: "/items/spiderman.webp",
		price: 50,
	},
	{
		id: ++id,
		name: "Element Gun",
		categories: ["weapon"],
		usedBy: ["Star Lord"],
		image: "/items/star-lord-gun.webp",
		price: 2_500,
	},
	{
		id: ++id,
		name: "Laser Cannon",
		categories: ["weapon"],
		usedBy: ["Rocket Raccoon"],
		image: "/items/laser-cannon.png",
		price: 5_000,
	},
	{
		id: ++id,
		name: "Iron Man's suit",
		categories: ["suit", "apparel"],
		usedBy: ["Iron Man"],
		image: "/items/ironman.webp",
		price: 1_000_000_000_000,
	},
	{
		id: ++id,
		name: "Vibranium Shield",
		categories: ["weapon", "defensive equipment"],
		usedBy: ["Captain America"],
		image: "/items/vibranium-shield.webp",
		price: 350_000,
	},
	{
		id: ++id,
		name: "Cloak of Levitation",
		categories: ["apparel", "artifact", "defensive equipment"],
		usedBy: ["Doctor Strange"],
		image: "/items/cloak-of-levitation.png",
		price: 2_000_000,
	},
	{
		id: ++id,
		name: "Mjolnir",
		categories: ["artifact", "weapon"],
		usedBy: ["Thor"],
		image: "/items/mjolnir.webp",
		price: 50_000_000,
	},
	{
		id: ++id,
		name: "Super Soldier Serum - Hulk",
		categories: ["body enhancement"],
		usedBy: ["Hulk"],
		image: "/items/hulk-serum.png",
		price: 100_000,
	},
	{
		id: ++id,
		name: "Super Soldier Serum - Classic",
		categories: ["body enhancement"],
		usedBy: ["Captain America"],
		image: "/items/super-soldier-serum.png",
		price: 100_000,
	},
	{
		id: ++id,
		name: "Web Shooter",
		categories: ["accesory"],
		usedBy: ["Spider-Man"],
		image: "/items/web-shooter.png",
		price: 8000,
	},
	{
		id: ++id,
		name: "Billy Club",
		categories: ["weapon"],
		usedBy: ["Daredevil"],
		image: "/items/billy-club.png",
		price: 100,
	},
];

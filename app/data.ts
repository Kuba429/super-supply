export type itemType = {
	name: string;
	categories: (typeof categories)[keyof typeof categories][];
	usedBy: (typeof heroes)[keyof typeof heroes][];
	image: string;
	price: number;
};
// db mock kinda
export const fetchAllItems: () => itemType[] = () => [
	{
		name: "Spider-man's classic suit",
		categories: ["suit", "apparel"],
		usedBy: ["Spider-Man"],
		image: "/items/spiderman.webp",
		price: 50,
	},
	{
		name: "Element Gun",
		categories: ["weapon"],
		usedBy: ["Star Lord"],
		image: "/items/star-lord-gun.webp",
		price: 2500,
	},
	{
		name: "Laser Cannon",
		categories: ["weapon"],
		usedBy: ["Rocket Raccoon"],
		image: "/items/laser-cannon.png",
		price: 5000,
	},
	{
		name: "Iron Man's suit",
		categories: ["suit", "apparel"],
		usedBy: ["Iron Man"],
		image: "/items/ironman.webp",
		price: 1_000_000_000_000,
	},
];

// universal naming to avoid having different spelling of the same thing like 'spiderman' and 'spider-man'
const heroes = [
	"Spider-Man",
	"Iron Man",
	"Rocket Raccoon",
	"Star Lord",
] as const;
const categories = ["suit", "apparel", "weapon", "material"] as const;

export type itemType = {
	name: string;
	categories: typeof categories[keyof typeof categories][];
	usedBy: typeof heroes[keyof typeof heroes][];
};
// db mock kinda
export const fetchAllItems: () => itemType[] = () => [
	{
		name: "Spider-man's suit",
		categories: ["suit"],
		usedBy: ["Spider-Man"],
	},
	{
		name: "Iron Man's suit",
		categories: ["suit"],
		usedBy: ["Iron Man"],
	},
];

// universal naming to avoid having different spelling of the same thing like 'spiderman' and 'spider-man'
const heroes = ["Spider-Man", "Iron Man"] as const;
const categories = ["suit", "weapon"] as const;

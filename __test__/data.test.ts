import { categories, fetchAllItems, heroes, manufacturers } from "@/app/data";

describe("Data", () => {
	const items = fetchAllItems();
	it("All items have correct usedBy", () => {
		const heroesNames = heroes.map((h) => h.name);
		items.forEach((item) => {
			item.usedBy.forEach((hero) => expect(heroesNames).toContain(hero));
		});
	});
	it("All items have correct categories", () => {
		const categoriesNames = categories.map((c) => c.name);
		items.forEach((item) => {
			item.categories.forEach((category) =>
				expect(categoriesNames).toContain(category)
			);
		});
	});
	it("All items have correct manufacturers", () => {
		const manufacturersNames = manufacturers.map((m) => m.name);
		items.forEach((item) => {
			if (!item.manufacturer) return;
			expect(manufacturersNames).toContain(item.manufacturer);
		});
	});
	it("Items have unique ids", () => {
		const ids = items.map((i) => i.id);
		ids.forEach((id, idx) => {
			const foundIndex = ids.findIndex((i) => i === id);
			expect(foundIndex).toBe(idx);
		});
	});
	it("Discount is between 0 and 1", () => {
		items.forEach((item) => {
			if (item.discount === undefined) return;
			expect(item.discount).toBeLessThan(1);
			expect(item.discount).toBeGreaterThan(0);
		});
	});
	it("Discount limited to 10s place", () => {
		items.forEach((item) => {
			if (item.discount === undefined) return;
			const actualPercentage = item.discount * 100;
			const desiredPercentage = Math.floor(item.discount * 100);
			expect(actualPercentage).toEqual(desiredPercentage);
		});
	});
});

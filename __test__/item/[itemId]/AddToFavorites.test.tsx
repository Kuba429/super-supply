import AddToFavoritesButton from "@/app/item/[itemId]/AddToFavorites";
import { cleanup, fireEvent, render } from "@testing-library/react";

describe("<AddToFavoritesButton />", () => {
	afterEach(() => {
		cleanup();
		localStorage.clear();
	});
	it("Renders properly", async () => {
		const { getByRole } = render(
			<AddToFavoritesButton itemId={(1).toString()} />
		);
		const el = getByRole("button");
		expect(el).toBeInTheDocument();
	});
	it("Renders with respect to localStorage - false", () => {
		const { getByRole } = render(
			<AddToFavoritesButton itemId={(1).toString()} />
		);
		const el = getByRole("button");
		expect(el.dataset.isadded).toBe("false");
	});
	it("Renders with respect to localStorage - false case", () => {
		const { getByRole } = render(
			<AddToFavoritesButton itemId={(1).toString()} />
		);
		const el = getByRole("button");
		expect(el.dataset.isadded).toBe("false");
	});
	it("Renders with respect to localStorage - true case", () => {
		localStorage.setItem("favorite-items", "1");
		const { getByRole } = render(
			<AddToFavoritesButton itemId={(1).toString()} />
		);
		const el = getByRole("button");
		expect(el.dataset.isadded).toBe("true");
	});
	it("Responds to click", () => {
		const { getByRole } = render(
			<AddToFavoritesButton itemId={(1).toString()} />
		);
		const el = getByRole("button");
		expect(el.dataset.isadded).toBe("false");
		fireEvent.click(el);
		expect(el.dataset.isadded).toBe("true");
	});
});

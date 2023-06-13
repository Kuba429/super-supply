import Cart, { formatPrice } from "@/app/Cart";
import ReduxProvider from "@/app/ReduxProvider";
import { addItem } from "@/app/store";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { useDispatch } from "react-redux";

const AddItemButton = ({ price }: { price: number }) => {
	const dispatch = useDispatch();
	const handleClick = () => {
		dispatch(
			addItem({
				id: "unique_id_123",
				name: "Test item",
				image: "image_path",
				price: price,
				usedBy: ["Ant-Man"],
				categories: ["weapons"],
			})
		);
	};
	return (
		<button data-testid="add-item-to-cart" onClick={handleClick}>
			Add
		</button>
	);
};

describe("<Cart/>", () => {
	afterEach(() => cleanup());
	it("Format price", () => {
		expect(formatPrice(123)).toBe("123.00");
		expect(formatPrice(0)).toBe("0.00");
		expect(formatPrice(55.3)).toBe("55.30");
		expect(formatPrice(1.1234)).toBe("1.12");
	});
	it("Component gets rendered", () => {
		render(
			<ReduxProvider>
				<Cart />
			</ReduxProvider>
		);
		const cart = screen.getByText(/0.00/);
		expect(cart).toBeInTheDocument();
	});
	it("Updates and displays correct price", () => {
		const price = 10;
		render(
			<ReduxProvider>
				<AddItemButton price={price} />
				<Cart />
			</ReduxProvider>
		);
		const priceDisplay = screen.getByRole("status");
		const addItemButton = screen.getByTestId("add-item-to-cart");

		expect(addItemButton).toBeInTheDocument();
		expect(priceDisplay).toBeInTheDocument();

		expect(priceDisplay.textContent).toBe("$" + formatPrice(0));
		fireEvent.click(addItemButton);
		expect(priceDisplay.textContent).toBe("$" + formatPrice(price));
	});
});

import Cart from "@/app/Cart";
import ReduxProvider from "@/app/ReduxProvider";
import { addItem } from "@/app/store";
import { cleanup, fireEvent, render } from "@testing-library/react";
import { useDispatch } from "react-redux";
import { testItemProp } from "./utils";

const AddItemButton = () => {
	const dispatch = useDispatch();
	const handleClick = () => {
		dispatch(addItem(testItemProp));
	};
	return (
		<button data-testid="add-item-to-cart" onClick={handleClick}>
			Add
		</button>
	);
};

describe("<Cart/>", () => {
	afterEach(() => cleanup());
	it("Component gets rendered", () => {
		const { getByRole } = render(
			<ReduxProvider>
				<Cart />
			</ReduxProvider>
		);
		const cart = getByRole("status").parentElement;
		expect(cart).toBeInTheDocument();
	});
	it("Updates and displays correct price", () => {
		const { getByRole, getByTestId } = render(
			<ReduxProvider>
				<AddItemButton />
				<Cart />
			</ReduxProvider>
		);
		const priceDisplay = getByRole("status");
		const addItemButton = getByTestId("add-item-to-cart");

		expect(addItemButton).toBeInTheDocument();
		expect(priceDisplay).toBeInTheDocument();

		expect(priceDisplay.textContent).toBe("0");
		fireEvent.click(addItemButton);
		expect(priceDisplay.textContent).toBe("1");
	});
});

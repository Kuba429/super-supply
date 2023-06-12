import Cart, { formatPrice } from "@/app/Cart";
import ReduxProvider from "@/app/ReduxProvider";
import { render, screen } from "@testing-library/react";

describe("<Cart/>", () => {
	it("Format price", () => {
		const formatted = formatPrice(123);
		expect(formatted).toBe("123.00");
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
});

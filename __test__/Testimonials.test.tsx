import { Testimonial } from "@/app/Testimonials";
import { render } from "@testing-library/react";

describe("<Testimonial />", () => {
	const props = {
		name: "test name",
		description: "test description",
		imageSrc: "/link_to_image",
	};
	it("Renders correctly", () => {
		const { getByText, getByAltText } = render(
			<Testimonial
				name={props.name}
				description={props.description}
				imageSrc={props.imageSrc}
			/>
		);
		const nameEl = getByText(props.name);
		const descriptionEl = getByText(props.description);
		const imageEl = getByAltText(props.name);

		expect(nameEl).toBeInTheDocument();
		expect(descriptionEl).toBeInTheDocument();
		expect(imageEl).toBeInTheDocument();
	});
});

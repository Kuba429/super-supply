import { categoryType } from "@/app/data";

export default async function Category({
	params,
}: {
	params: { category: categoryType };
}) {
	console.log(params);
	return <div>{params.category}</div>;
}

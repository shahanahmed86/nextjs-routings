import { FC } from 'react';
import { Metadata } from 'next';

type Props = {
	params: {
		productId: string;
	};
};

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
	const title = await new Promise<string>((resolve) => setTimeout(() => resolve(`iPhone ${params.productId}`), 100));
	return { title: `Product ${title}` };
};

const ProductDetail: FC<Props> = ({ params }) => {
	return (
		<div>
			<h1>Product Detail Page of id {params.productId}</h1>
		</div>
	);
};

export default ProductDetail;

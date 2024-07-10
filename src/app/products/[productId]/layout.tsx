import React, { FC, ReactNode } from 'react';

type Props = {
	children: ReactNode;
};

const ProductDetailsLayout: FC<Props> = ({ children }) => {
	const random = getRandomCount(2);
	if (random === 1) throw new Error(`Error loading product on count: ${random}`);
	return (
		<div>
			{children}
			<h1>Featuring products</h1>
		</div>
	);
};

export default ProductDetailsLayout;

function getRandomCount(count: number): number {
	return Math.floor(Math.random() * count);
}

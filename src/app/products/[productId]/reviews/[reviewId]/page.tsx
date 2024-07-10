'use client';

import { FC } from 'react';
import { notFound } from 'next/navigation';

type Props = {
	params: {
		productId: string;
		reviewId: string;
	};
};

const ReviewDetail: FC<Props> = ({ params }) => {
	// const random = getRandomInt(2);
	// if (random === 1) throw new Error(`Error loading review on count: ${random}`);

	if (parseInt(params.reviewId, 10) > 1000) return notFound();
	return (
		<div>
			<h1>
				Review {params.reviewId} for product {params.productId}
			</h1>
		</div>
	);
};

export default ReviewDetail;

function getRandomInt(count: number): number {
	return Math.floor(Math.random() * count);
}

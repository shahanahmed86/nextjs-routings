'use client';

import { useRouter } from 'next/navigation';

const OrderProduct = () => {
	const router = useRouter();

	const handleClick = () => {
		console.log('Placing your order...');
		router.back();
	};
	return (
		<div>
			<h1>Order product page</h1>
			<button onClick={handleClick}>Place order</button>
		</div>
	);
};

export default OrderProduct;

import Link from 'next/link';
import wonders from './wonders';
import Image from 'next/image';
import { useId } from 'react';

export default function Home() {
	const homeId = useId();
	console.log('homeId', homeId);
	return (
		<main className='container mx-auto'>
			<h1 className='text-center text-3xl font-bold my-4'>New Wonders of the World</h1>
			<div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
				{wonders.map(({ id, src, name }) => (
					<Link key={`component-id-${homeId}-data-id-${id}`} href={`/photo-feed/${id}`}>
						<Image alt={name} src={src} className='w-full object-cover aspect-square' />
					</Link>
				))}
			</div>
		</main>
	);
}

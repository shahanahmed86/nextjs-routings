import Link from 'next/link';

const HomePage = () => {
	return (
		<div>
			<h1>Welcome Home</h1>
			<ul>
				<li>
					<Link href='/blog'>Blog</Link>
				</li>
				<li>
					<Link href='/products'>Products</Link>
				</li>
			</ul>
		</div>
	);
};

export default HomePage;

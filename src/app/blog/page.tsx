import { Metadata } from 'next';

export const metadata: Metadata = {
	title: {
		absolute: 'Blog'
	}
};

function Blog() {
	return (
		<div>
			<h1>My Blog</h1>
		</div>
	);
}

export default Blog;

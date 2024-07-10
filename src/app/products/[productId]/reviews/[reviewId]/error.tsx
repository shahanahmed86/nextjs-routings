'use client';

import { FC } from 'react';

type Props = {
	error: Error;
	reset: () => void;
};

const ErrorBoundary: FC<Props> = ({ error, reset }) => {
	return (
		<div>
			<h1>{error.message}</h1>
			<button onClick={reset}>Try again</button>
		</div>
	);
};

export default ErrorBoundary;

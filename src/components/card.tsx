import { FC, ReactNode, useMemo } from 'react';

type Props = {
	children: ReactNode;
};

const Card: FC<Props> = ({ children }) => {
	const styles = useMemo(
		() => ({
			padding: 100,
			margin: 10,
			boxShadow: '0px 4px 8px 0px rgba(0, 0, 0, 0.2)',
			border: '1px solid #ddd',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center'
		}),
		[]
	);
	return <div style={styles}>{children}</div>;
};

export default Card;

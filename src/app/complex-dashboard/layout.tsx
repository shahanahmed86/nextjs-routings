import { FC, ReactNode } from 'react';

type Props = {
	children: ReactNode;
	users: ReactNode;
	revenue: ReactNode;
	notifications: ReactNode;
	login: ReactNode;
};

const DashboardLayout: FC<Props> = ({ children, users, revenue, notifications, login }) => {
	const isLoggedIn = false;
	if (!isLoggedIn) return login;
	return (
		<>
			<h1>{children}</h1>
			<div style={{ display: 'flex' }}>
				<div style={{ display: 'flex', flexDirection: 'column' }}>
					<div>{users}</div>
					<div>{revenue}</div>
				</div>
				<div style={{ display: 'flex', flex: 1 }}>{notifications}</div>
			</div>
		</>
	);
};

export default DashboardLayout;

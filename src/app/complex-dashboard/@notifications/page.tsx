import Card from '@/components/card';
import Link from 'next/link';

const NotificationPage = () => {
	return (
		<Card>
			<h1>Notification Page</h1>
			<Link href='/complex-dashboard/archived'>Archived</Link>
		</Card>
	);
};

export default NotificationPage;

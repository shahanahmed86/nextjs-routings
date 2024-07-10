import Card from '@/components/card';
import Link from 'next/link';

const ArchivedNotificationPage = () => {
	return (
		<Card>
			<h1>Archived Notification Page</h1>
			<Link href='/complex-dashboard'>Default</Link>
		</Card>
	);
};

export default ArchivedNotificationPage;

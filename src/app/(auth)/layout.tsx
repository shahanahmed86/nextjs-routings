'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC, ReactNode, useState } from 'react';
import './style.css';

const navLinks = [
	{ name: 'Register', href: '/register' },
	{ name: 'Login', href: '/login' },
	{ name: 'Forgot Password', href: '/forgot-password' }
];

type Props = {
	children: ReactNode;
};

const AuthLayout: FC<Props> = ({ children }) => {
	const pathname = usePathname();

	const [input, setInput] = useState('');
	return (
		<div>
			<div><input type="text" value={input} onChange={({ target: { value }}) => setInput(value)} /></div>
			<ul>
				{navLinks.map((navLink) => {
					const isActive = pathname.startsWith(navLink.href);
					return (
						<li key={navLink.href}>
							<Link href={navLink.href} className={isActive ? 'font-bold' : 'text-blue-500'}>
								{navLink.name}
							</Link>
						</li>
					);
				})}
			</ul>
			{children}
		</div>
	);
};

export default AuthLayout;

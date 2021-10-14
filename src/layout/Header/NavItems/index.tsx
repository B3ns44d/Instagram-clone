import Link from 'next/link';
import { useRouter } from 'next/router';
import type { FC } from 'react';
import { createKey, createLinkPath, navItems } from '../utils';

interface NavItemsProps {
	hasNotifications?: boolean;
	numberOfNotifications?: number;
}

const NavItems: FC<NavItemsProps> = ({
	hasNotifications,
	numberOfNotifications,
}): JSX.Element => {
	const { pathname } = useRouter();
	return (
		<>
			{navItems?.map(
				({ outlineIcon: OutlineIcon, solidIcon: SolidIcon, path, key }) => {
					const Icon = pathname === path ? SolidIcon : OutlineIcon;
					return (
						<Link href={createLinkPath(path)} key={createKey(key)} passHref>
							<div className="relative nav-button">
								<Icon className="nav-button" />
								{hasNotifications && (
									<div className="absolute text-sm w-5 h-5 text-white rounded-full flex justify-center items-center bg-red-500 -top-1 -right-2 animate-pulse">
										{numberOfNotifications}
									</div>
								)}
							</div>
						</Link>
					);
				}
			)}
		</>
	);
};

NavItems.defaultProps = {
	hasNotifications: false,
	numberOfNotifications: 0,
};
export default NavItems;

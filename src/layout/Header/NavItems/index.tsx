import { createLinkPath } from '@shared/utils';
import Link from 'next/link';
import { useRouter } from 'next/router';
import type { FC, ReactElement } from 'react';
import { useRecoilState } from 'recoil';
import { modalState } from 'src/atoms';
import { createKey, navItems } from '../utils';

interface NavItemsProps {
	hasNotifications?: boolean;
	numberOfNotifications?: number;
}

const NavItems: FC<NavItemsProps> = ({
	hasNotifications,
	numberOfNotifications,
}): ReactElement => {
	const { pathname } = useRouter();
	const [isOpen, setIsOpen] = useRecoilState(modalState);

	return (
		<>
			{navItems?.map(
				({
					key,
					outlineIcon: OutlineIcon,
					solidIcon: SolidIcon,
					path,
					needNotifications,
					isModal,
				}) => {
					const Icon = pathname === path ? SolidIcon : OutlineIcon;
					const shouldShowNotifications =
						needNotifications && hasNotifications && numberOfNotifications > 0;

					return (
						<Link href={createLinkPath(path)} key={createKey(key)} passHref>
							<div className="relative">
								<Icon
									className="nav-button"
									onClick={() => isModal && setIsOpen(!isOpen)}
								/>
								{shouldShowNotifications && (
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

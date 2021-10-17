import { useEffect, useState } from 'react';
import IMAGES from '@shared/constants/images';
import Image from 'next/image';
import { useSize } from 'ahooks';
import { PAGE_MAX_WIDTH } from '@shared/constants';
import clsx from 'clsx';
import { SearchIcon, MenuIcon } from '@heroicons/react/outline';
import Avatar from '@components/Avatar';
import type { ReactElement } from 'react';
import NavItems from './NavItems';

const Header = (): ReactElement => {
	const [pageSize, setPageSize] = useState(null);
	const { width } = useSize(pageSize);
	const { largeLogo, smallLogo } = IMAGES;

	useEffect(() => {
		setPageSize(document.querySelector('html'));
	}, []);

	const isMaxWidth: boolean = width > PAGE_MAX_WIDTH;
	const logoSrc: string = isMaxWidth ? largeLogo : smallLogo;

	return (
		<nav className="shadow-sm border-b bg-white sticky top-0 z-20">
			<div className="flex justify-between bg-white align-items-center max-w-6xl mx-5 lg:mx-auto h-14">
				<div
					className={clsx([
						'relative cursor-pointer',
						isMaxWidth ? 'w-24 h-14' : 'w-10 h-14 flex-shrink-0',
					])}
				>
					<Image src={logoSrc} alt="logo" layout="fill" objectFit="contain" />
				</div>
				<div className="hidden md:flex items-center justify-center px-2 lg:ml-12">
					<div className="max-w-lg w-full lg:max-w-xs">
						<div className="relative">
							<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
								<SearchIcon className="h-5 w-5 text-gray-500" />
							</div>
							<input
								id="search"
								className="search-input search-input-focus"
								placeholder="Search"
								type="search"
							/>
						</div>
					</div>
				</div>
				<div className="flex items-center justify-end space-x-4">
					<NavItems />
					<MenuIcon className="h-6 w-6 md:hidden cursor-pointer" />
					<div className="relative h-8 w-8">
						<Avatar
							src="https://k.top4top.io/p_21165x5vn1.jpeg"
							alt="profilePicture"
						/>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Header;

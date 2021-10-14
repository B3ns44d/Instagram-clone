import {
	HomeIcon,
	HeartIcon,
	PlusCircleIcon,
	PaperAirplaneIcon,
} from '@heroicons/react/outline';
import {
	HomeIcon as SolidHomeIcon,
	HeartIcon as SolidHeartIcon,
	PlusCircleIcon as SolidPlusCircleIcon,
	PaperAirplaneIcon as SolidPaperAirplaneIcon,
} from '@heroicons/react/solid';
import { IconType } from '@shared/types';

interface IconProps {
	key?: number;
	name: string;
	outlineIcon: IconType;
	solidIcon?: IconType;
	path?: string;
	isModal?: boolean;
	needNotifications?: boolean;
}

type IconsType = IconProps[];

export const navItems: IconsType = [
	{
		key: 1,
		name: 'Home',
		outlineIcon: HomeIcon,
		solidIcon: SolidHomeIcon,
		path: '/',
		needNotifications: false,
	},
	{
		key: 2,
		name: 'Direct',
		outlineIcon: PaperAirplaneIcon,
		solidIcon: SolidPaperAirplaneIcon,
		path: '/direct',
		needNotifications: true,
	},
	{
		key: 3,
		name: 'New Post',
		outlineIcon: PlusCircleIcon,
		solidIcon: SolidPlusCircleIcon,
		isModal: true,
		needNotifications: false,
	},
	{
		key: 4,
		name: 'explore',
		outlineIcon: HeartIcon,
		solidIcon: SolidHeartIcon,
		path: '/explore',
		needNotifications: true,
	},
];

export const createLinkPath = (path: string): string => {
	if (path === undefined) {
		return '/';
	}
	return path.startsWith('/') ? path : `/${path}`;
};

export const createKey = (key: number): string => `nav-item-${key}`;

import { IconType } from '@shared/types';
import {
	OutlineActivityIcon,
	SolidActivityIcon,
} from '@shared/assets/icons/ActivityIcon';
import { OutlineHomeIcon, SolidHomeIcon } from '@shared/assets/icons/HomeIcon';
import {
	SolidExploreIcon,
	OutlineExploreIcon,
} from '@shared/assets/icons/ExploreIcon';
import {
	OutlineDirectIcon,
	SolidDirectIcon,
} from '@shared/assets/icons/DirectIcon';
import NewPost from '@shared/assets/icons/NewPost';

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
		outlineIcon: OutlineHomeIcon,
		solidIcon: SolidHomeIcon,
		path: '/',
		needNotifications: false,
	},
	{
		key: 2,
		name: 'Direct',
		outlineIcon: OutlineDirectIcon,
		solidIcon: SolidDirectIcon,
		path: '/direct',
		needNotifications: true,
	},
	{
		key: 3,
		name: 'New Post',
		outlineIcon: NewPost,
		isModal: true,
		needNotifications: false,
	},
	{
		key: 4,
		name: 'explore',
		outlineIcon: OutlineExploreIcon,
		solidIcon: SolidExploreIcon,
		path: '/explore',
		needNotifications: true,
	},
	{
		key: 5,
		name: 'activity',
		outlineIcon: OutlineActivityIcon,
		solidIcon: SolidActivityIcon,
		path: '/activity',
		needNotifications: true,
	},
];

export const createKey = (key: number): string => `nav-item-${key}`;

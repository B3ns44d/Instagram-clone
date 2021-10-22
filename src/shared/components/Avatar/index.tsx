/* eslint-disable @next/next/no-img-element */
import type { FC, ReactElement } from 'react';
import { AvatarProps } from './utils';

const Avatar: FC<AvatarProps> = ({
	src,
	alt,
	onProfileClick,
	...rest
}): ReactElement => (
	<img
		aria-hidden="true"
		onClick={() => onProfileClick()}
		src={src}
		alt={alt}
		className="rounded-full cursor-pointer mx-auto object-contain"
		{...rest}
	/>
);

export default Avatar;

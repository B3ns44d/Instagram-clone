import type { FC, ReactElement } from 'react';
import Image from 'next/image';
import { AvatarProps } from './utils';

const Avatar: FC<AvatarProps> = ({ src, alt, ...rest }): ReactElement => (
	<Image
		src={src}
		alt={alt}
		layout="fill"
		objectFit="contain"
		className="rounded-full cursor-pointer mx-auto"
		{...rest}
	/>
);

export default Avatar;

/* eslint-disable @next/next/no-img-element */
import type { FC, ReactElement } from 'react';
// import Image from 'next/image';
import { StoryProps } from './utils';

const Story: FC<StoryProps> = ({
	username,
	src,
	alt,
	...rest
}): ReactElement => (
	<div>
		<div className="hover:-rotate-12 transform transition duration-300">
			<img
				className="h-14 w-14 rounded-full p-[1px] border-2 border-pink-300 object-contain cursor-pointer"
				src={src}
				alt={alt}
				{...rest}
			/>
		</div>
		<p className="text-xs w-14 truncate text-center">{username}</p>
	</div>
);

export default Story;

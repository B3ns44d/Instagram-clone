/* eslint-disable @next/next/no-img-element */
// import PostHeader from '@components/PostHeader';
import type { ReactElement, FC } from 'react';
import { EmojiHappyIcon, DotsHorizontalIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import PostActions from '@components/PostActions';
import { PostProps } from './utils';

const Post: FC<PostProps> = ({
	name,
	username,
	caption,
	userAvatar,
	imageUrl,
	...rest
}): ReactElement => (
	<div className="bg-white my-7 border rounded-sm" {...rest}>
		<div className="flex items-center p-4">
			<div className="flex-shrink-0">
				<img
					src={userAvatar}
					alt={username}
					className="rounded-full h-12 w-12 object-contain border p-1 mr-3"
				/>
			</div>
			<div className="flex-1 p-0 m-0">
				<p className="font-bold text-gray-900">{username}</p>
				<span className="text-xs text-gray-500">{name}</span>
			</div>
			<DotsHorizontalIcon className="h-5 cursor-pointer justify-end" />
		</div>

		<img src={imageUrl} alt={username} className="object-cover w-full" />
		<PostActions />
		<p className="p-5 truncate">
			<Link href={username} passHref>
				<span className="font-bold cursor-pointer mr-1">{username} </span>
			</Link>
			{caption}
		</p>
		<form className="flex items-center justify-between p-4">
			<EmojiHappyIcon className="w-7 h-7 cursor-pointer" />
			<input
				type="text"
				placeholder="Add a comment"
				className="flex-1 border-none focus:ring-0 outline-none"
			/>
			<button type="submit" className="font-semibold text-blue-400">
				Post
			</button>
		</form>
	</div>
);

export default Post;

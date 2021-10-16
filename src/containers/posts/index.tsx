/* eslint-disable @typescript-eslint/no-explicit-any */
import Post from '@containers/posts/components/Post';
import type { FC, ReactElement } from 'react';

const posts = [
	{
		id: '1',
		name: 'Sidi Bou Saïd',
		username: 'samy.chaffai',
		caption: 'This is a post',
		userAvatar: 'https://j.top4top.io/p_2115nou3r1.jpg',
		imageUrl: 'https://i.top4top.io/p_21159t4dh1.jpg',
	},
	{
		id: '2',
		name: 'Adil Taouil - عادل تاويل',
		username: 'adiltaouil',
		caption: 'This is a post',
		userAvatar: 'https://g.top4top.io/p_2115ysiuq1.jpg',
		imageUrl: 'https://d.top4top.io/p_21157528p1.jpg',
	},
];
const Posts: FC = (): ReactElement => (
	<div>
		{posts?.map((post: any) => (
			<Post
				key={post.id}
				name={post.name}
				username={post.username}
				caption={post.caption}
				userAvatar={post.userAvatar}
				imageUrl={post.imageUrl}
			/>
		))}
	</div>
);

export default Posts;

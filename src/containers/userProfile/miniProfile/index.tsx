/* eslint-disable @next/next/no-img-element */
import UserNameText from '@components/UserNameText';
import type { FC, ReactElement } from 'react';

const MiniProfile: FC = (): ReactElement => (
	<div className="flex items-center justify-between mt-14 ml-10">
		<img
			src="https://k.top4top.io/p_21165x5vn1.jpeg"
			alt="youssef.py3's profile"
			className="rounded-full border p-[2px] w-16 h-16"
		/>
		<div className="flex-1 mx-4">
			<UserNameText userName="youssef.py3" />
			<h3 className="text-sm text-gray-500">검은 색 | black</h3>
		</div>
		<button type="submit" className="text-blue-400 text-sm font-semibold">
			Sign out
		</button>
	</div>
);

export default MiniProfile;

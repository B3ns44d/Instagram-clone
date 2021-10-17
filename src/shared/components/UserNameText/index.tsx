import type { FC, ReactElement } from 'react';
import Link from 'next/link';

interface UserNameTextProps {
	userName?: string;
}

const UserNameText: FC<UserNameTextProps> = ({
	userName,
	...rest
}): ReactElement => (
	<>
		<Link href={`/${userName}`} passHref>
			<h2 {...rest} className="font-bold cursor-pointer">
				{userName}
			</h2>
		</Link>
	</>
);
UserNameText.defaultProps = {
	userName: '',
};

export default UserNameText;

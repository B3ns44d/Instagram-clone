import type { FC, ReactElement } from 'react';
import clsx from 'clsx';

interface Props {
	iconType: string;
}

const SocialMediaIcons: FC<Props> = ({ iconType }): ReactElement => (
	<div className={clsx(['bg-no-repeat cursor-pointer', iconType])} />
);

export default SocialMediaIcons;

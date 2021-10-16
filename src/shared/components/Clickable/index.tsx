import type { FC, ReactElement } from 'react';
import { childrenProps } from '@shared/interfaces';
import Link from 'next/link';

interface ClickableProps {
	href: string | undefined;
	children: childrenProps;
}
const Clickable: FC<ClickableProps> = ({
	href,
	children,
	...rest
}): ReactElement => (
	<Link href={href || ''} passHref>
		<div {...rest} className="cursor-pointer">
			{children}
		</div>
	</Link>
);

export default Clickable;

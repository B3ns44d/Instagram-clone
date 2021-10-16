import type { ReactElement, FC } from 'react';
import { DotsHorizontalIcon } from '@heroicons/react/outline';

const PostHeader: FC = (): ReactElement => (
	<div>
		<DotsHorizontalIcon className="h-5 cursor-pointer" />
	</div>
);

export default PostHeader;

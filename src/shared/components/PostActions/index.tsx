import type { ReactElement, FC } from 'react';
import { OutlineDirectIcon } from '@shared/assets/icons/DirectIcon';
import CommentIcon from '@shared/assets/icons/CommentIcon';
import { OutlineActivityIcon } from '@shared/assets/icons/ActivityIcon';
import BookmarkIcon from '@shared/assets/icons/BookmarkIcon/index';

interface PostActionsProps {
	onCommentIconClick?: () => void;
	onShareIconClick?: () => void;
	onLikeIconClick?: () => void;
	onBookmarkIconClick?: () => void;
}

const PostActions: FC<PostActionsProps> = ({
	onCommentIconClick,
	onShareIconClick,
	onLikeIconClick,
	onBookmarkIconClick,
	...rest
}): ReactElement => (
	<>
		<div className="flex space-x-4" {...rest}>
			<OutlineActivityIcon
				className="post-button"
				onClick={() => onLikeIconClick}
			/>
			<CommentIcon className="post-button" onClick={() => onCommentIconClick} />
			<OutlineDirectIcon
				className="post-button"
				onClick={() => onShareIconClick}
			/>
		</div>
		<BookmarkIcon className="post-button" onClick={() => onBookmarkIconClick} />
	</>
);

PostActions.defaultProps = {
	onLikeIconClick: () => null,
	onCommentIconClick: () => null,
	onShareIconClick: () => null,
	onBookmarkIconClick: () => null,
};

export default PostActions;

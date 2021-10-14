import type { SVGProps } from 'react';

const DirectIcon = ({
	height = '22px',
	width = '22px',
	color = '#000000',
	...props
}: SVGProps<SVGSVGElement>): JSX.Element => (
	<svg
		aria-label="Direct"
		fill={color}
		viewBox="0 0 48 48"
		height={height}
		width={width}
		{...props}
	>
		<path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z" />
	</svg>
);

export default DirectIcon;

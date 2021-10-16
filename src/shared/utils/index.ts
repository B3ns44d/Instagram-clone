export const createLinkPath = (path: string): string => {
	if (path === undefined) {
		return '/';
	}
	return path.startsWith('/') ? path : `/${path}`;
};

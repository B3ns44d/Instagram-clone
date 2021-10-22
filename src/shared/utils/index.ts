export const createLinkPath = (path: string): string => {
	if (path === undefined) {
		return '/';
	}
	return path.startsWith('/') ? path : `/${path}`;
};

export const nextAuthProviderConfig = {
	clientMaxAge: 0,
	keepAlive: 0,
};

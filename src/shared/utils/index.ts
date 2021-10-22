const createLinkPath = (path: string): string => {
	if (path === undefined) {
		return '/';
	}
	return path.startsWith('/') ? path : `/${path}`;
};

const nextAuthProviderConfig = {
	clientMaxAge: 0,
	keepAlive: 0,
};

const generateUsername = (name: string): string => {
	const username = name.toLowerCase().replace(/\s/g, '_');
	return username.length > 0 ? username : 'user';
};

export { generateUsername, createLinkPath, nextAuthProviderConfig };

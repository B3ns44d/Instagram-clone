const firebaseConfig = {
	apiKey: process.env.FIREBASE_API_KEY,
	authDomain: process.env.FIREBASE_AUTH_DOMAIN,
	projectId: process.env.FIREBASE_PROJECT_ID,
	storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.FIREBASE_APP_ID,
	measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

const nextAuthConfig = {
	domain: process.env.NEXTAUTH_URL,
	facebook: {
		clientId: process.env.FACEBOOK_ID,
		clientSecret: process.env.FACEBOOK_SECRET,
	},
	google: {
		clientId: process.env.GOOGLE_ID,
		clientSecret: process.env.GOOGLE_SECRET,
	},
};

export { firebaseConfig, nextAuthConfig };

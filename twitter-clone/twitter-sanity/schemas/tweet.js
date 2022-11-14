export default {
	name: "tweet",
	title: "Tweet",
	type: "document",
	fields: [
		{
			name: "text",
			title: "Text in Tweet",
			type: "string",
		},
		{
			name: "blockTweet",
			title: "Block Tweet",
			description: "ADMIN Control: Toggle if Tweet is blocked",
			type: "boolean",
		},
		{
			name: "username",
			title: "Username",
			type: "string",
		},
		{
			name: "profileImg",
			title: "Profile image",
			type: "string",
		},
		{
			name: "image",
			title: "Tweet Image",
			type: "string",
		},
	],
};

import type {Static} from '@sinclair/typebox';
import {Type} from '@sinclair/typebox';

export const PostsResponseSchema = Type.Array(
	Type.Object({
		username: Type.String(),
		fullName: Type.String(),
		posts: Type.Array(
			Type.Object({
				title: Type.String(),
				description: Type.String(),
				date: Type.String(),
				link: Type.String()
			})
		)
	})
);

export type PostsResponseType = Static<typeof PostsResponseSchema>;

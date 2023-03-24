import {Types} from '../enums/types.enum.js';
import type {Static} from '@sinclair/typebox';
import {Type} from '@sinclair/typebox';

export const PostsRequestSchema = Type.Array(
	Type.Object({
		username: Type.String(),
		fullName: Type.String(),
		type: Type.Enum(Types)
	}),
	{
		minItems: 1
	}
);

export type PostsRequestType = Static<typeof PostsRequestSchema>;

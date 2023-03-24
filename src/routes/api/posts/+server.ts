import {PostsService} from '../../../libs/server/services/posts.service';
import type {RequestHandler} from '@sveltejs/kit';
import {error, json} from '@sveltejs/kit';
import {validate} from 'jsonschema';
import {PostsRequestSchema} from '../../../libs/server/schemas/posts-request.schema';

export const POST: RequestHandler = async ({request}) => {
    const body = await request.json();

    const validationResult = validate(body, PostsRequestSchema);

    if (!validationResult.valid) {
        throw error(400, validationResult.toString())
    }

    return json(await PostsService.getPosts(body));
};

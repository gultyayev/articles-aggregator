import cors from "@fastify/cors";
import Fastify from "fastify";
import { PostsResponseSchema } from "./schemas/posts-response.schema.js";
import { PostsRequestSchema } from "./schemas/posts-request.schema.js";
import { PostsService } from "./services/posts.service.js";

const fastify = Fastify({
  logger: true,
});

/**
 * @type {import('fastify').RouteShorthandOptions}
 * @const
 */
const opts = {
  schema: {
    response: {
      200: PostsResponseSchema,
    },
    body: PostsRequestSchema,
  },
};

await fastify.register(cors);

fastify.post("/", opts, async (request, reply) => {
  const posts = await PostsService.getPosts(request.body);

  reply.send(posts);
});

fastify.listen({ port: 3000 }, function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});

<script lang="ts">
    import "../app.css";
    import axios from "axios";
    import Post from "../libs/Post.svelte";
    import {authors} from "../libs/authors";
    import Contributor from "../libs/Contributor.svelte";

    const authorsRequest = axios.post("/api/posts", authors).then(({data: authors}) => {
        return authors.flatMap(author => {
            return author.posts.map(post => {
                post.fullName = author.fullName;
                return post;
            });
        }).sort((a, b) => new Date(b.date) - new Date(a.date));
    });
</script>

<div class="flex mx-auto max-w-4xl gap-8">
    <aside class="basis-2/6 border-r-4 border-blue-800 py-8 hidden md:block">
        <h2 class="text-3xl text-gray-900 font-medium mb-4">Contributors</h2>
        <ul class="divide-y-2 divide-blue-800">
            {#each authors as author}
                <li>
                    <Contributor contributor={author}/>
                </li>
            {/each}
        </ul>
    </aside>
    <main class="md:basis-4/6 p-8 md:px-0">
        {#await authorsRequest}
            Loading...
        {:then posts}
            <h1 class="sr-only">Articles digest</h1>
            <ul class="flex flex-col gap-y-8">
                {#each posts as item}
                    <li>
                        <Post post={item}/>
                    </li>
                {/each}
            </ul>
        {:catch err}
            <h2 class="text-3xl text-red-500 font-medium">Ooops...</h2>
            <p>{err.message}</p>
        {/await}
    </main>
</div>

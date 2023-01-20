<script lang="ts">
    import axios from "axios";
    import Post from "./lib/Post.svelte";
    import { authors } from "./authors";

    const authorsRequest = axios.post("http://localhost:3000", authors).then(({data: authors}) => {
        return authors.flatMap(author => {
            return author.posts.map(post => {
                post.fullName = author.fullName;
                return post;
            })
        }).sort((a, b) => new Date(b.date) - new Date(a.date))
    });
</script>

<main>
    {#await authorsRequest}
        Loading...
    {:then posts}
        <ul class="flex flex-col gap-y-6">
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

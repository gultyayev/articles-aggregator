<script lang="ts">
    import type {Author} from "./models/author.model";

    export let contributor: Author;
</script>

<p class="text-xl py-3">{contributor.fullName}</p>

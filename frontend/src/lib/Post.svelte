<script>
  export let post;
</script>

<article class="bg-white rounded-xl p-8">
  <h2 class="font-semibold">
    <a class="text-2xl text-blue-900" href={post.link} target="_blank">
      <span class="material-symbols-outlined align-text-bottom">open_in_new</span>
      <span class="underline">{post.title}</span>
    </a>
    <span class="text-xl italic text-gray-800">by {post.fullName}</span></h2>
  <time class="text-gray-400 block font-medium italic mb-3">{post.date}</time>

  <p class="text-gray-700">{post.description}</p>
</article>

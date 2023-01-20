<script>
  export let post;
</script>

<h2 class="font-semibold"><a class="underline text-2xl text-blue-900" href={post.link} target="_blank">{post.title}</a>
  <span class="text-xl italic">by {post.fullName}</span></h2>
<span class="text-gray-400 block font-medium italic mb-3">{post.date}</span>

<p class="">{post.description}</p>

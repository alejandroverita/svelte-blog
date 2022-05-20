<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`blog.json`).then(r => r.json()).then(posts => {
			return { posts };
		});
	}
</script>

<script>
	import Post from '../components/Post.svelte';
	export let posts;
</script>

<style>
	.Post {
		display: grid;
		justify-content: space-between;
		grid-gap: 15px;
		grid-template-columns: 1fr;
	}
</style>

<svelte:head>
	<title>Alejandro Vera</title>
	<meta name="description" content="Blog de alejandro" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@" />
	<meta name="twitter:creator" content="@" />
	<meta name="twitter:title" content="Alejandro Vera Blog" />
	<meta name="twitter:description" content="Blog de Alejandro Vera" />
	<meta name="twitter:image" content="https://arepa.s3.amazonaws.com/blogpost-cover.png" />

	<meta name="og:title" content="Alejandro Vera Hernandez" />
	<meta name="og:description" content="Blog de Alejandro" />
	<meta name="og:image" content="https://arepa.s3.amazonaws.com/blogpost-cover.png" />
	<meta name="og:url" content="https://svelte-blog-alejandro.netlify.app/" />
	<meta name="og:site_name" content="Blog Alejandro" />
	<meta name="og:locale" content="es_ES" />
	<meta name="og:type" content="article" />
	<meta name="fb:app_id" content="" />
</svelte:head>

<div class="Home">
	<div class="Post">
		{#each posts as post}
			<Post {post }/>
		{/each}
	</div>
</div>

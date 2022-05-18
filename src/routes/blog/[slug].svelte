<script context="module">
	export async function preload({ params }) {
		// the `slug` parameter is available because
		// this file is called [slug].svelte
		const res = await this.fetch(`blog/${params.slug}.json`);
		const data = await res.json();

		if (res.status === 200) {
			return { post: data };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>
	import { onMount } from 'svelte';
	import formatIsoTime from '../../utils/formatIsoTime';
	import readingTime from '../../utils/readingTime';
	export let post;

	const disqus = () => { 
		let d = document, s = d.createElement('script');
		s.src = 'https://alejandroblog.disqus.com/embed.js';
		s.setAttribute('data-timestamp', +new Date());
		(d.head || d.body).appendChild(s);	
	};

	onMount(async() => {
		document.readyState === 'complete' ? await disqus() : document.addEventListener('readystatechange', async() => document.readyState === 'complete' && await disqus())
	});

</script>

<style>
	h2 {
		color: #22215b;
		font-size: 28px;
		margin: 0;
		padding: 0;
	}

	.Post-title {
		color: #555;
		font-size: 14px;
		font-weight: 300;
		margin-top: 5px;
		padding: 0;
	}

	.comments {
		margin:  2em 0 0 0;
	}
</style>

<svelte:head>
	<title>{post.title}</title>
</svelte:head>


<div class="Post">
	<div class="Post-title">
		<h2>{post.title}</h2>
	</div>
	<p class="date">
		<time datatime={post.createdAt}>
			🗓 {formatIsoTime(post.createdAt)}
		</time>
		<span>{readingTime(post.html)}</span>
	</p>
	<div class="content">
		{@html post.html}
	</div>
	<div class="comments">
		<div id="disqus_thread">

		</div>
	</div>
</div>

<script>
	import Loader from '$lib/Loader.svelte';
	import Layer from '$lib/Layer.svelte';
	import { sleep } from '$lib';
	export let data;
	const initPage = async () => {
		await sleep(600);
		return data;
	};

	let promise = initPage();
</script>

{#await promise}
	<Loader />
{:then value}
	<Layer>
		<div class="container-lg py-4">
			<nav class="d-flex flex-column gap-2">
				<h1>BB Session List</h1>
				{#each value.groups as { id, kat, group, name, description, thumbnailUrl } (group)}
					<section class="border d-flex rounded media">
						<aside class="flex-shrink-0" style="max-width: 33%;">
							<img src={thumbnailUrl} alt="img" class="thumb" />
						</aside>
						<article class="d-flex flex-column flex-grow-1 justify-content-between ms-2 p-2">
							<h3>{name}</h3>
							<div class="lh-sm mb-0 multi-line text-muted">
								{description}
							</div>
							<nav class="d-flex gap-2">
								<a
									href="/session/{group}"
									class="fw-light"
									title="View Record"
									data-toggle="tooltip">Link</a
								>
							</nav>
						</article>
					</section>
				{/each}
			</nav>
		</div>
	</Layer>
{/await}

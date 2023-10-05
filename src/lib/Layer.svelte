<script>
	export let out = false;
</script>

<section class:out>
	<slot><!-- optional fallback --></slot>
</section>

<style>
	section {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		transition: opacity 600ms cubic-bezier(0.42, -0, 0.58, 1) 110ms,
			transform 500ms cubic-bezier(0.42, -0, 0.58, 1) 10ms;
		overflow-x: hidden;
		overflow-y: auto;
		flex-direction: column;
		display: flex;
		z-index: var(--z, auto);
	}

	section.out {
		transform: translateY(100%);
		transition: transform 400ms ease;
	}
</style>

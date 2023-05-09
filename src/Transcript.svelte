<script lang="ts">
	import type { Segment } from '$lib/subtitles';

	export let segments: Segment[] = [];
	export let currentIndex = 0;
	export let jumpTo = (time: number) => {};
</script>

<div>
	{#each segments as segment, index}
		<p
			style="font-weight: {index == currentIndex ? 'bold' : 'normal'}"
			on:click={() => jumpTo(segment.start)}
		>
			{segment.text}
		</p>
	{/each}
</div>

<style>
	div {
		height: 100%;
		overflow-y: auto;
	}
</style>

<script lang="ts">
	import Search from '../Search.svelte';
	import Video from '../Video.svelte';
	import Transcript from '../Transcript.svelte';

	import { subtitlesJson, type Segment } from '../lib/subtitles';

	$: segments = subtitlesJson.segments;

	let query = '';
	let currentTime = 0;

	const findSegment = (segments: Segment[], query: string, next = false): Segment | undefined => {
		const rest = segments.filter((segment) => (next ? segment.start > currentTime + 0.001 : true));
		const segment = query ? rest.find((segment) => segment.text.includes(query)) : rest[0];
		if (segment) {
			return segment;
		}

		if (next) {
			return findSegment(segments, query);
		} else {
			return undefined;
		}
	};

	const setTime = (segments: Segment[], query: string, next = false) => {
		const segment = findSegment(segments, query, next);
		if (segment) {
			currentTime = segment.start;
		}
	};

	$: {
		setTime(segments, query);
	}

	const locateSegmentIndex = (segments: Segment[], time: number) => {
		const segmentIndex = segments.findIndex((segment) => segment.end >= time);
		return segmentIndex;
	};

	$: currentIndex = locateSegmentIndex(segments, currentTime);

	const jumpTo = (time: number) => {
		currentTime = time;
	};
</script>

<h2>Search for scenes by query</h2>

<form on:submit|preventDefault={() => setTime(segments, query, true)}>
	<div class="left">
		<Video bind:time={currentTime} />
		<Search bind:query />
	</div>
	<div class="right">
		<Transcript {segments} {currentIndex} {jumpTo} />
	</div>
</form>

<style>
	form {
		display: flex;
	}

	.left,
	.right {
		flex: 1;
	}
</style>

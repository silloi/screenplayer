<script lang="ts">
	export let time = 0;
	// export let subtitlesSrc = '';
</script>

<video width="480" bind:currentTime={time} controls loop>
	<source src="https://i.gyazo.com/8e963beac562cacfe7da8b67f1b3d7ae.mp4" type="video/mp4" />
	<!-- <track kind="captions" srclang="ja" src={subtitlesSrc} /> -->
</video>

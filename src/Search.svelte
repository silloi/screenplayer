<script lang="ts">
	export let query = '';
</script>

<input type="text" bind:value={query} placeholder="Input query (Press Enter to skip)" />

<style>
	input[type='text'] {
		width: 100%;
		box-sizing: border-box;
	}
</style>

<script lang="ts">

	import { getUserState } from '$lib/state/user-state.svelte';

	let userContext = getUserState();
	// let {allBooks} = userContext;
</script>
<script lang="ts">
	import '../app.css';
	import { Header } from '$component';
	let { children } = $props();
</script>

<Header />
{@render children()}

<script lang="ts">
	import '../app.css';
	import { Footer, Header } from '$component';
	let { children } = $props();
</script>

<Header />
{@render children()}
<Footer />

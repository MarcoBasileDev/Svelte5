<script lang="ts">
	import type { Snippet } from 'svelte';

	interface ButtonProps {
		children: Snippet,
		onclick: ((e: MouseEvent) => void) | (() => void),
		className?: string;
	}

	let { children, className, ...props }: ButtonProps = $props();
</script>

<button class={`btn bg-black text-white text-2xl py-3 px-10 mx-auto rounded ${className}`} {...props}>
	{@render children()}
</button>

<style>
	.btn {
			font-family: 'Inter Tight', sans-serif;
			font-weight: 500;
	}
</style>

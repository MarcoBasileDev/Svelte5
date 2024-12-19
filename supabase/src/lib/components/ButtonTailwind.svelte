<script lang="ts">
	import type { Snippet } from 'svelte';

	interface BasicProps {
		children: Snippet;
		isSecondary?: boolean;
		isDanger?: boolean;
		isMenu?: boolean;
	}

	interface ButtonProps extends BasicProps {
		onclick: (e: MouseEvent) => void;
		href?: never;
	}

	interface LinkProps extends BasicProps {
		href: string;
		onclick?: never;
	}

	type ComponentProps = ButtonProps | LinkProps;

	let { children, href, onclick, isSecondary, isDanger, isMenu, ...props }: ComponentProps = $props();

	// Base e varianti
	const baseClasses = "text-center text-white bg-black border border-white rounded-xl text-[22px] font-normal min-w-[230px] px-6 py-3";
	const secondaryClasses = "text-black bg-white border-black";
	const dangerClasses = "bg-[rgb(136,4,4)]";
	const menuClasses = "min-w-[150px] px-5 py-2";
</script>

{#if href}
	<a
		{href}
		class="{baseClasses}
           {isSecondary ? secondaryClasses : ''}
           {isDanger ? dangerClasses : ''}
           {isMenu ? menuClasses : ''}
           block no-underline hover:no-underline"
	>
		{@render children()}
	</a>
{:else}
	<button
		{...props}
		{onclick}
		class="{baseClasses}
           {isSecondary ? secondaryClasses : ''}
           {isDanger ? dangerClasses : ''}
           {isMenu ? menuClasses : ''}"
	>
		{@render children()}
	</button>
{/if}
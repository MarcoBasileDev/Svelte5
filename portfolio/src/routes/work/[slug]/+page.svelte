<script lang="ts">
	let {data} = $props();

	const { company, name, dateAccomplished, stack, projectImageUrl, content } = data.project;

	function getTagFromStyle(style: ProcessedTextContent["style"]): { tag: string, cssClass: string } {
		switch(style) {
			case "normal":
				return { tag: "p", cssClass: "text-xl" };
			case "h1":
				return { tag: "h1", cssClass: "font-bold mb-s" };
			case "h2":
				return { tag: "h2", cssClass: "font-bold mb-s" };
			case "h3":
				return { tag: "h3", cssClass: "font-bold text-2xl mb-s" };
			default:
				return { tag: style, cssClass: "" };
		}
	}

</script>

<main class="default-margin work-page">
	<h4 class="font-semibold text-2xl">{company}</h4>
	<div class="underscore"></div>
	<h2 class="mb-s">{name}</h2>
	<img class="project-image" src={projectImageUrl} alt="" />
	<div class="flex mt-m">
		<div class="meta-data">
			<h3 class="font-bold mt-s">Date</h3>
			<p class="text-xl">{dateAccomplished.slice(0, 7)}</p>
			<h3 class="font-bold mt-m">Tech Stack</h3>
			<ul>
				{#each stack as skill}
					<li class="text-xl">{skill}</li>
				{/each}
			</ul>
		</div>
		<div class="project-text text-justify">
			{#each content as block}
				{#if block.type === "text"}
					{@const { tag, cssClass } = getTagFromStyle(block.style)}
					<svelte:element this={tag} class={cssClass}>
						{block.textToRender}
					</svelte:element>
				{:else}
					<img class="content-image" src={block.url} alt="" />
				{/if}
			{/each}
		</div>
	</div>
</main>

<style>
    .work-page {
        padding-top: 50px;
        padding-bottom: 140px;
    }

    .project-image {
        width: 100%;
        max-height: 500px;
        object-fit: cover;
				border-radius: 20px;
    }

    .content-image {
        width: 100%;
    }

    .meta-data {
        min-width: 200px;
    }
</style>
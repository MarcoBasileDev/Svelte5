<script lang="ts">
	import { SectionHeadline } from '$lib/components';

	interface MyWorkSectionProps {
		project: ProcessedProject[];
	}

	let { projects }: MyWorkSectionProps = $props();
	const mainProject = projects[0];
	const otherProjects = projects.slice(1);
</script>

<section class="mt-l">
	<SectionHeadline sectionName="my-work">My Work</SectionHeadline>
	<div class="default-margin projects-container mt-m">
		<article class="main-project mb-m group">
			<a href={`/work/${mainProject.slug}`}>
				<img src={mainProject.projectImageUrl} alt={mainProject.name} class="group-hover:opacity-70 transition-opacity duration-200 ease-in-out" />
			</a>
			<div class="project-info mt-s">
				<div class="title-and-company">
					<h3 class="semi-bold">{mainProject.name}</h3>
					<p class="company dark-grey">{mainProject.company}</p>
				</div>
				<a href={`/work/${mainProject.slug}`} class="block w-24 border-2 border-black text-4xl text-center pb-2 rounded-full hover:text-white hover:bg-black">→</a>
			</div>
		</article>
		<div class="more-projects-container">
			{#each otherProjects as project}
				<article class="project project group">
					<a href={`/work/${project.slug}`}>
						<img src={project.projectImageUrl} alt={project.name} class="group-hover:opacity-70 transition-opacity duration-200 ease-in-out" />
					</a>
					<div class="project-info mt-s">
						<div class="title-and-company">
							<h3 class="semi-bold">{project.name}</h3>
							<p class="company dark-grey">{project.company}</p>
						</div>
						<a href={`/work/${project.slug}`} class="block w-24 border-2 border-black text-4xl text-center pb-2 rounded-full hover:text-white hover:bg-black">→</a>
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>

<style>
    img {
        width: 100%;
        border-radius: 20px;
        object-fit: cover;
        cursor: pointer;
				border: black 1px solid;
    }

    .more-projects-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .more-projects-container img {
        height: 350px;
    }

    .main-project img {
        max-height: 450px;
    }

    .project {
        width: 48%;
    }

    .project-info {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .company {
        font-size: 18px;
        margin-bottom: 0;
    }
</style>
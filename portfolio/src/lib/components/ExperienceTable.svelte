<script lang="ts">
	import type { DevExperience } from '$lib/types/sanity';

	interface ExperienceTableProps {
		workExperience: DevExperience[];
	}

	let { workExperience }: ExperienceTableProps = $props();

</script>

<section class="default-margin flex justify-between w-full mt-m">
	<ul class="w-1/2">
		{#each workExperience as job}
			<li class="work-item">
				<article>
					<h3 class="font-bold mb-2 text-2xl">{job.jobTitle}</h3>
					<div class="company-and-date font-semibold">
						<div class="text-xl mb-1">{job.company}</div>
						<div class="dark-grey text-xl mb-3">
							{job.startDate.slice(0, 7)}
							{#if job.endDate} / {job.endDate.slice(0, 7)} {:else } / Present {/if}
						</div>
					</div>
					<div class="border border-gray-300 mb-3"></div>
				</article>
			</li>
			{/each}
	</ul>
	<h2 class="text-right">Work <br/> Experience</h2>
</section>

<style>

</style>
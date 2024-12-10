<script lang="ts">

	interface WorkExperience {
		jobTitle: string;
		company: string;
		startDate: string;
		endDate?: string;
	}

	const workExperience: WorkExperience[] = [
		{
			jobTitle: "Software Engineer",
			company: "Intesa Sanpaolo",
			startDate:"2024-06",
		},
		{
			jobTitle:"Software Engineer",
			company: "Townhall of Milan",
			startDate:"2020-12",
			endDate:"2024-06",
		},
		{
			jobTitle:"Software Engineer",
			company: "Fulcri SRL",
			startDate:"2020-01",
			endDate:"2020-12",
		}
		]
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
							{job.startDate}
							{#if job.endDate} / {job.endDate} {:else } / Present {/if}
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
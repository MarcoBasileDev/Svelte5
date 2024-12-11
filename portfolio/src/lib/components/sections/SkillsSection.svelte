<script lang="ts">
	import { SectionHeadline } from '$lib/components';

	interface SkillsSectionProps {
		skills: Skill[];
	}

	let { skills }: SkillsSectionProps = $props();

</script>

<section class="mt-l">
	<SectionHeadline sectionName="Skills">Skills</SectionHeadline>
	<div class="default-margin mt-l">
		<div class="grid grid-cols-2 sm:grid-cols-4 gap-4 justify-center">
			{#each skills as skill}
				<div class="flex justify-center items-center w-12 h-12">{@html skill.iconClass}</div>
			{/each}
		</div>
	</div>
</section>
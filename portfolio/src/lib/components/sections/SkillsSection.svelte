<script lang="ts">
	import { SectionHeadline } from '$lib/components';

	interface SkillsSectionProps {
		skills: Skill[];
	}

	let { skills }: SkillsSectionProps = $props();

</script>

<section class="mt-l">
	<SectionHeadline sectionName="Skills">Skills</SectionHeadline>
	<div class="flex flex-col items-center justify-center default-margin mt-l">
		<div class="grid grid-cols-4 gap-10">
			{#each skills as skill}
				<div class="w-16 h-16">{@html skill.iconClass}</div>
			{/each}
		</div>
	</div>
</section>
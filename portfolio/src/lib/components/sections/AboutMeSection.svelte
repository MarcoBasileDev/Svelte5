<script lang="ts">
	import { Button, ExperienceTable, SectionHeadline } from '$component';
	import avatar from '$assets/my_avatar.svg';
	import { goto } from '$app/navigation';
	import type { DevExperience } from '$lib/types/sanity';
	import EducationTable from '$component/EducationTable.svelte';

	interface AboutMeProps {
		workExperience: DevExperience;
	}

	let { workExperience }: AboutMeProps = $props();

	function onclick() {
		goto("/#contact-form");
	}
</script>

<section class="about-me mt-l">
	<SectionHeadline sectionName={"about-me"}>About Me</SectionHeadline>
	<div class="mt-m flex justify-between items-stretch default-margin">
		<img src={avatar} alt="avatar" class="w-[42%] rounded-3xl object-cover" />
		<div class="text-justify w-[55%]">
			<p class="text-xl">I am a full-stack developer with a deep passion for the ever-evolving IT landscape. I thrive on bringing innovative projects to life, as each new endeavor allows me to acquire new skills and explore emerging technologies.</p>

			<p class="text-xl">My expertise spans from modern JavaScript frameworks such as React and Svelte, to backend development using Node.js, Java, and C#, working with both relational and non-relational databases. I am also highly enthusiastic about the field of Artificial Intelligence, continually expanding my knowledge and experience in this transformative area.</p>

			<p class="text-xl">With a strong commitment to continuous learning and problem-solving, I aim to combine technical proficiency with creativity to deliver efficient, scalable, and cutting-edge solutions.</p>
			<Button className="mt-m" {onclick}>Tell me about your projects</Button>
		</div>
	</div>
	<ExperienceTable {workExperience} />
	<EducationTable />

</section>

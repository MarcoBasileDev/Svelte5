<script lang="ts">
	import { AboutMeSection, HeroSection, MyWorkSection } from '$component';

	const { data } = $props();
	let { workExperience, projects, skills } = data;
	$inspect(skills)
</script>

<HeroSection />
<AboutMeSection {workExperience} />
<MyWorkSection {projects} />
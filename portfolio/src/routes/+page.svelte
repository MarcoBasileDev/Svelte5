<script lang="ts">
	import { AboutMeSection, HeroSection, MyWorkSection } from '$component';

	const { data } = $props();
	let { workExperience, projects } = data;
</script>

<HeroSection />
<AboutMeSection {workExperience} />
<MyWorkSection {projects} />
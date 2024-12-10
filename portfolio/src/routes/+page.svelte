<script lang="ts">
	import { AboutMeSection, HeroSection } from '$component';

	const { data } = $props();
	let { workExperience } = data;
</script>

<HeroSection />
<AboutMeSection {workExperience} />
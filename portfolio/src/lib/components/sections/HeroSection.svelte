<script>
import { Button } from '$component';
import { goto } from '$app/navigation';

	function onclick() {
		goto('/#contact-form')
	}
</script>

<section class="hero-section default-margin pt-16">
	<h3>Hello! I'm Marco</h3>
	<div class="underscore mb-m"></div>
	<h1 class="text-justify">I am a full - stack developer with a deep passion for the ever - evolving IT</h1>
	<h1 class="dark-grey mb-m">landscape.</h1>
	<Button {onclick}>Let's talk</Button>
</section>
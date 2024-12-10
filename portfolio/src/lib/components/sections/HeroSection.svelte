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
	<h1 class="text-justify">I am a <span class="dark-grey">full-stack developer</span> with a passion for everything related to the world of IT.</h1>
	<Button {onclick}>Let's talk</Button>
</section>
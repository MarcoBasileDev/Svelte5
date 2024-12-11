<script>
import { Button } from '$component';
import { goto } from '$app/navigation';

	function onclick() {
		goto('/#contact-form')
	}
</script>

<section class="hero-section default-margin pt-10">
	<h3 class="text-2xl">Hello! I'm Marco</h3>
	<div class="underscore mb-m"></div>
	<h1 class="text-justify mb-2">I am a <span class="dark-grey">full-stack developer</span> with a passion for everything related to the world of IT.</h1>
	<Button {onclick}>Let's talk</Button>
</section>
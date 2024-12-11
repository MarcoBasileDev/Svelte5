<script lang="ts">
	import { Button } from '$component';
	import { goto } from '$app/navigation';

	function onclick() {
		goto("/#contact-form");
	}
</script>

<nav class="default-margin flex justify-between items-center p-6">
	<a class="text-2xl font-bold" href="/">Home</a>
	<div class="space-x-8">
		<a href="/#about-me" class="text-2xl font-bold hover:underline">About Me</a>
		<a href="/#my-work" class="text-2xl font-bold hover:underline">Work</a>
		<a href="/#skills" class="text-2xl font-bold hover:underline">Skills</a>
		<Button className="nav-bar" {onclick}>Contact</Button>
	</div>
</nav>
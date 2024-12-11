<script lang="ts">
	import { Button, SectionHeadline } from '$component';

	let contactName = $state("");
	let contactEmail = $state("");
	let projectInformation = $state("");
	let isformInvalid = $state(false);
	let isEmailSent = $state(false);
	let showErrorMessage = $state(false);
	let isLoading = $state(false);

	async function onsubmit(event: Event) {
		event.preventDefault();

		if (contactName && contactEmail && projectInformation) {
			isLoading = true;
			const response = await fetch("/api/send-mail", {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					contactName,
					contactEmail,
					projectInformation
				})
			});
			isLoading = false;
			if (response.ok) {
				isEmailSent = true;
			} else {
				showErrorMessage = true;
			}
		} else {
			isformInvalid = true;
		}
	}

	$effect(() => {
		if (contactName || contactEmail || projectInformation) {
			isformInvalid = false;
		}
	})
</script>

<section class="mt-l pb-36">
	<SectionHeadline sectionName="contact-form">Let's talk</SectionHeadline>
	<div class="flex justify-between default-margin mt-m">
		{#if isEmailSent}
			<div class="spinner-container">
				<h3>Thank you for getting in contact with me. I'll usually reply within 48 hours. </h3>
			</div>
		{:else if isLoading}
			<div class="spinner-container">
				<div class="spinner"></div>
				<h3>Sending...</h3>
			</div>
		{:else if showErrorMessage}
			<h3>We seem to have trouble with our server at the moment.<br/> Please try again later!</h3>
		{:else}
			<form class="flex flex-col items-start">
				<input class="text-input mb-m h-12" placeholder="Your name" bind:value={contactName} class:input-error={isformInvalid && !contactName.length}/>
				<input class="text-input mb-m h-12" placeholder="Your email" bind:value={contactEmail} class:input-error={isformInvalid && !contactEmail.length} />
				<textarea class="h-36 mb-10" placeholder="Tell me about your project" bind:value={projectInformation} class:input-error={isformInvalid && !projectInformation.length}></textarea>
				<Button onclick={onsubmit}>Submit</Button>
			</form>
		{/if}
		<div class="w-1/2">
			<h3 class="bold mb-s text-2xl">I'd love to hear more about your project</h3>
			<p class="text-justify text-lg">
				I'm always excited to hear about new and innovative ideas! Whether
				you're in the early stages of planning or have a well-defined project,
				I'm here to help bring your vision to life. Feel free to drop me a
				message with some details about your project, and let's start a
				conversation about how we can work together. I look forward to
				connecting with you and discussing the possibilities. Talk to you soon!
			</p>
		</div>
	</div>
</section>

<style>
    form {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 45%;
    }

    form * {
        font-size: 20px;
        font-family: "Inter Tight", sans-serif;
        font-weight: 500;
        color: black;
    }

    textarea,
    input {
        width: 100%;
        background-color: rgba(0, 0, 0, 0.035);
        border-radius: 8px;
        padding: 4px 12px;
        outline: none;
        border: none;
    }

    textarea::placeholder,
    input::placeholder {
        font-size: 20px;
        font-weight: 400;
    }

    .input-error {
        background-color: rgba(255, 27, 27, 0.70);
    }

    .input-error::placeholder {
        color: white;
    }

    .spinner {
        border: 4px solid rgba(0, 0, 0, 0.1);
        border-left-color: black;
        border-radius: 50%;
        width: 16px;
        height: 16px;
        display: inline-block;
        margin-right: 8px;
        animation: spin 0.5s linear infinite;
    }

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    .spinner-container {
        display: flex;
    }

</style>
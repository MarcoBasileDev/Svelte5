<script lang="ts">
import Dropzone from 'svelte-file-dropzone';
import Icon from '@iconify/svelte';
import { convertFileToBase64 } from '$lib/utils/openai-helpers';

let isLoading = $state(false);
let errorMessage = $state("");

interface OpenAiBook {
	author: string;
	bookTitle: string;
}

async function handleDrop(e: CustomEvent) {
	const { acceptedFiles} = e.detail;

	if (acceptedFiles.length) {
		isLoading = true;
		const fileToSendToOpenAi = acceptedFiles[0];
		const base64String = await convertFileToBase64(fileToSendToOpenAi);

		try {
			const response = await fetch("/api/scan-shelf", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ base64: base64String }),
			});

			isLoading = false;
			const result = await response.json() as {bookArray: OpenAiBook[] };
		} catch (error) {
			errorMessage = "Error processing the uploaded file.";
		}
	} else {
		errorMessage = "Could not upload given file. Are you sure it's an image with a file size of les than 10MB?"
	}
}
</script>

<h2 class="mt-m mb-l">Take a picture to add books</h2>
<div class="upload-area">
	<div class="upload-container">
		{#if errorMessage}
			<h4 class="text-center mb-s uploaded-error">{errorMessage}</h4>
		{/if}

		{#if isLoading}
			<div class="spinner-container">
				<div class="spinner"></div>
				<p>Processing your books.</p>
			</div>
		{:else}
			<Dropzone
				on:drop={handleDrop}
				multiple={false}
				accept="image/*"
				maxSize={10 * 1024 * 1024}
				containerClasses={"dropzone-cover"}
			>
				<Icon icon="bi:camera-fill" width={40} height={40} />
				<p>Drag a picture here or click to select a file</p>
			</Dropzone>
		{/if}
	</div>
</div>

<style>
    .book-list {
        width: 800px;
        background-color: white;
        border-radius: 8px;
        border-collapse: collapse;
    }

    .book-list th {
        font-size: 22px;
        text-align: left;
        padding: 8px 16px;
        border-bottom: 3px solid black;
    }

    .book-list td {
        padding: 12px 16px;
        border-bottom: 1px solid rgb(205, 205, 205);
        font-size: 22px;
    }

    .book-list tr:last-child td {
        border-bottom: none;
    }
    :global(.remove-book svg) {
        color: red;
    }

    .upload-error {
        color: rgb(131, 0, 0);
    }

    .upload-area {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }

    .upload-container {
        width: 600px;
    }

    .spinner-container {
        display: flex;
    }

    .spinner {
        border: 4px solid rgba(0, 0, 0, 0.1);
        border-left-color: black;
        border-radius: 50%;
        width: 32px;
        height: 32px;
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

    :global(.dropzone-books) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-width: 600px !important;
        min-height: 400px !important;
        flex: 0 !important;
        cursor: pointer;
    }
</style>
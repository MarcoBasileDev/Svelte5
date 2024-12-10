<script lang="ts">

	interface EducationTable {
		title: string,
		company: string,
		finalProject: string,
		endDate: string,
		startDate: string,
	}

	const educationExperiences: EducationTable[] = [
		{
			title:  "Master Degree in Computer Science",
			company: " University of Milano - Bicocca",
			finalProject: "The aim of the project is to investigate the effectiveness of Bi-Encoding Techniques in Fine - Grained Entity Typing. This involves the adaptation of BLINK, a state-of-the-art entity linker solution. The idea to adapt BLINK for Fine-Grained Entity Typing, exploiting type descriptions, arose from the similarity between Named Entity Linking and Fine Entity Typing tasks.",
			endDate: "2023-03",
			startDate: "2020-10"
		},
		{
			title:  "Bachelor Degree in Computer Science",
			company: " University of Milano - Bicocca",
			finalProject: "Developed an Android application focusing on Walkability, a term denoting the measure of how friendly an area is to walking. Targeted towards older demographics and aiming to preserve the historical memory of old buildings in their area. The project underwent a study to ensure usability and simplicity. This project enabled them to share their experiences through the implementation of Google Maps, Google autocomplete API, and the possibility to share voice notes, videos, or images about the place visited, creating a digital archive accessible via a gallery integrated within the application. Surveys and real user tests were conducted, guaranteeing user-friendly functionality and intuitive design.",
			endDate: "2020-02",
			startDate: "2016-10"
		}
	]

</script>

<section class="default-margin flex justify-between w-full mt-m">
	<h2 class="text-right">Education</h2>
	<ul class="w-1/2">
		{#each educationExperiences as edu}
			<li class="work-item">
				<article>
					<h3 class="font-bold mb-2 text-2xl">{edu.title}</h3>
					<div class="company-and-date font-semibold">
						<div class="text-xl mb-1">{edu.company}</div>
						<div class="dark-grey text-xl mb-3">
							{edu.startDate} / {edu.endDate}
						</div>
					</div>
					<div class="text-justify mb-1"><span class="font-bold">Final Project:</span> {edu.finalProject}</div>
					<div class="border border-gray-300 mb-3"></div>
				</article>
			</li>
		{/each}
	</ul>

</section>
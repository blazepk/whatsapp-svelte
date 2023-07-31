<script lang="ts">
	import { onMount } from 'svelte';
	import Search from './Search.svelte';

	onMount(() => {
		const objDiv = document.getElementById('messageBody');
		const personAPIUrl = 'https://randomuser.me/api/';
		const mainMessages: any = document.getElementById('mainMessages');
		var template = document.querySelector('#messageBlock');

		//@ts-ignore
		objDiv.scrollTop = objDiv.scrollHeight;

		// Create multiple entries in the left panel
		for (let i = 0; i <= 25; i++) {
			fetch(personAPIUrl)
				.then((response) => response.json())
				.then((data) => {
					let out = data;
					out = out.results;
					out = out[0];
					//@ts-ignore
					var clone = template.content.cloneNode(true);
					let img = clone.getElementById('personHeadshot');
					let personName = clone.getElementById('personName');
					let messagePreview = clone.getElementById('messagePreview');
					img.src = out.picture.thumbnail;
					personName.innerText = `${out.name.first} ${out.name.last}`;
					messagePreview.innerHTML = `${out.location.city} ${out.location.state} ${out.location.postcode} ${out.email}`;
					mainMessages.appendChild(clone);
				});
		}
	});
</script>

<template id="messageBlock">
	<div class="message text-gray-300 px-4 py-3 border-b border-gray-700">
		<div class="flex items-center relative">
			<div class="w-1/6">
				<img class="w-11 h-11 rounded-full" id="personHeadshot" src="" />
			</div>
			<div class="w-5/6">
				<div class="text-xl text-white" id="personName">Josh Peters</div>
				<div class="text-sm truncate" id="messagePreview" />
			</div>
			<span class="absolute right-0 top-0 text-xs mt-1">13:00</span>
		</div>
	</div>
</template>

<aside class="bg-gray-200 overflow-y-auto border-r border-gray-800 relative block">
	<div class="aside-header sticky top-0 right-0 left-0 z-40 text-gray-400">
		<div class="flex items-center px-4 py-3">
			<div class="flex-1">
				<img
					class="w-11 h-11 rounded-full"
					src="https://www.writersdigest.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTcxMDY5MzE5OTYyMzcyMDgx/image-placeholder-title.jpg"
				/>
			</div>
			<div class="flex-1 text-right">
				<svg
					class="inline w-6 h-6 mr-4 cursor-pointer"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
					/>
				</svg>
				<svg
					class="inline w-6 h-6 mr-3 cursor-pointer"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path
						fill-rule="evenodd"
						d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
						clip-rule="evenodd"
					/>
				</svg>
				<svg
					class="inline w-6 h-6 cursor-pointer"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path
						d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"
					/>
				</svg>
			</div>
		</div>
	</div>
	<div id="mainMessages" class="aside-messages">
		<Search />
	</div>
</aside>

<style>
	aside {
		width: 40rem;
	}
	.aside-header {
		background-color: #2a2f32;
	}

	.aside-messages {
		background-color: #131c21;
	}
</style>

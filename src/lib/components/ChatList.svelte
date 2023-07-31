<script lang="ts">
	import { onMount } from 'svelte';
	import Search from './dashboard/Search.svelte';
	import ProfileBlock from './dashboard/ProfileBlock.svelte';
	import ChatListItem from './dashboard/ChatListItem.svelte';

	let chatList: any[] = [];
	async function getChatList() {
		const chatListUrl = 'https://randomuser.me/api/';
		const res = await fetch(chatListUrl);
		const jsonRes = await res.json();
		// console.log('json response', jsonRes);
		chatList = [...chatList, jsonRes.results[0]];
	}

	onMount(() => {
		// const personAPIUrl = 'https://randomuser.me/api/';
		// const mainMessages: any = document.getElementById('mainMessages');
		// var template = document.querySelector('#messageBlock');

		// Create multiple entries in the left panel
		for (let i = 0; i <= 25; i++) {
			getChatList();
			// fetch(personAPIUrl)
			// 	.then((response) => response.json())
			// 	.then((data) => {
			// 		let out = data;
			// 		out = out.results;
			// 		out = out[0];
			// 		//@ts-ignore
			// 		var clone = template.content.cloneNode(true);
			// 		let img = clone.getElementById('personHeadshot');
			// 		let personName = clone.getElementById('personName');
			// 		let messagePreview = clone.getElementById('messagePreview');
			// 		img.src = out.picture.thumbnail;
			// 		personName.innerText = `${out.name.first} ${out.name.last}`;
			// 		messagePreview.innerHTML = `${out.location.city} ${out.location.state} ${out.location.postcode} ${out.email}`;
			// 		mainMessages.appendChild(clone);
			// 	});
		}
	});
</script>

<!-- <template id="messageBlock">
	<div class="message text-gray-300 px-4 py-3 border-b border-gray-700">
		<div class="flex items-center relative">
			<div class="w-1/6">
				<img class="w-11 h-11 rounded-full" id="personHeadshot" src="" alt="personHeadshot" />
			</div>
			<div class="w-5/6">
				<div class="text-xl text-white" id="personName">Josh Peters</div>
				<div class="text-sm truncate" id="messagePreview" />
			</div>
			<span class="absolute right-0 top-0 text-xs mt-1">13:00</span>
		</div>
	</div>
</template> -->

<aside class="bg-gray-200 overflow-y-auto border-r border-gray-800 relative block">
	<div class="aside-header sticky top-0 right-0 left-0 z-40 text-gray-400">
		<ProfileBlock />
	</div>
	<div id="mainMessages" class="aside-messages">
		<Search />
		{#each chatList as item}
			<ChatListItem {item} />
		{/each}
	</div>
</aside>

<style>
	/* width */
	::-webkit-scrollbar {
		width: 8px;
	}

	/* Track */
	::-webkit-scrollbar-track {
		background: #131c21;
	}

	/* Handle */
	::-webkit-scrollbar-thumb {
		background: #394045;
	}

	/* Handle on hover */
	::-webkit-scrollbar-thumb:hover {
		background: #555;
	}
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

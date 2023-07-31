<script lang="ts">
	import { onMount } from 'svelte';
	import ChatBottom from './dashboard/ChatBottom.svelte';
	import ChatTop from './dashboard/ChatTop.svelte';
	import IncomingMessage from './dashboard/IncomingMessage.svelte';
	import MyMessage from './dashboard/MyMessage.svelte';

	onMount(() => {
		const objDiv: any = document.getElementById('messageBody');
		objDiv.scrollTop = objDiv.scrollHeight;
	});
</script>

<main id="messageBody" class="w-full bg-whatsapp relative overflow-y-auto">
	<ChatTop />
	<div class="main-messages h-full block px-4 py-3">
		<MyMessage />
		<IncomingMessage />
	</div>
	<div class="main-footer sticky bottom-0 right-0 left-0 text-gray-400">
		<ChatBottom />
	</div>
</main>

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

	.bg-whatsapp {
		background-color: #0d1418;
		background-image: url(https://web.whatsapp.com/img/bg-chat-tile-dark_a4be512e7195b6b733d9110b408f075d.png);
		background-size: inherit;
		background-position: top;
		background-repeat: repeat;
	}
	.main-messages {
		background: #0e1921f0;
	}

	.main-footer {
		background-color: #1e2428;
	}
</style>

<script>
	import ActiveChat from '$lib/components/ActiveChat.svelte';
	import ChatList from '$lib/components/ChatList.svelte';
</script>

<div class="w-full h-screen flex border-t-8 green-border bg-black">
	<ChatList />
	<ActiveChat />
</div>

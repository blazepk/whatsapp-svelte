<script>
	import ActiveChat from '$lib/components/ActiveChat.svelte';
	import ChatList from '$lib/components/ChatList.svelte';
</script>

<!-- desktop / tab view -->
<div
	class="w-full h-screen md:flex border-t-8 green-border bg-black hidden max-w-screen-2xl mx-auto"
>
	<ChatList />
	<ActiveChat />
</div>

<!-- Mobile view -->

<div
	class="w-full h-screen md:hidden border-t-8 green-border bg-black flex max-w-screen-2xl mx-auto"
>
	<ChatList />
</div>

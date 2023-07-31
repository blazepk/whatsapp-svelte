<script lang="ts">
	import IncomingMessage from './IncomingMessage.svelte';
	import MyMessage from './MyMessage.svelte';

	export let messageData: any;
</script>

{#if messageData.type === 'user'}
	<MyMessage message={messageData.message} timeStamp={messageData.timeStamp} />
{:else}
	<IncomingMessage message={messageData.message} timeStamp={messageData.timeStamp} />
{/if}

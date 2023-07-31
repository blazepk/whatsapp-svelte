<script>
	import AttachBtn from '../SVGButtons/AttachBtn.svelte';
	import EmojiBtn from '../SVGButtons/EmojiBtn.svelte';
	import MicBtn from '../SVGButtons/MicBtn.svelte';
	import MessageInput from './MessageInput.svelte';
</script>

<div class="flex items-center px-4 py-1">
	<div class="flex-none">
		<EmojiBtn />
		<AttachBtn />
	</div>
	<div class="flex-grow">
		<MessageInput />
	</div>
	<div class="flex-none text-right">
		<MicBtn />
	</div>
</div>

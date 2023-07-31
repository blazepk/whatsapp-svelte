<script>
	import EmojiBtn from '../SVGButtons/EmojiBtn.svelte';
	import MessageBtn from '../SVGButtons/MessageBtn.svelte';
	import ThreeDots from '../SVGButtons/ThreeDots.svelte';
</script>

<div class="flex items-center px-4 py-3">
	<div class=" flex gap-x-4 items-center flex-1">
		<img
			alt="profilePic"
			class="w-11 h-11 rounded-full"
			src="https://www.writersdigest.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTcxMDY5MzE5OTYyMzcyMDgx/image-placeholder-title.jpg"
		/>
		<p>Username</p>
	</div>
	<div class="flex-1 text-right">
		<EmojiBtn />
		<MessageBtn />
		<ThreeDots />
	</div>
</div>

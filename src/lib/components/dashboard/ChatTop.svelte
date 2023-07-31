<script>
	import SearchBtn from '../SVGButtons/SearchBtn.svelte';
	import ThreeDots from '../SVGButtons/ThreeDots.svelte';
</script>

<div class="main-header z-40 sticky top-0 right-0 left-0 text-gray-400">
	<div class="flex items-center px-4 py-3">
		<div class="flex-1">
			<div class="flex">
				<div class="mr-4">
					<img class="w-11 h-11 rounded-full" src="" alt="chatProfile" />
				</div>
				<div>
					<p class="text-md font-bold text-white">Josh Peters</p>
					<p class="text-sm text-gray-400">last seen today at 14:46</p>
				</div>
			</div>
		</div>
		<div class="flex-1 text-right">
			<SearchBtn />
			<ThreeDots />
		</div>
	</div>
</div>

<style>
	.main-header {
		background-color: #262d31;
	}
</style>

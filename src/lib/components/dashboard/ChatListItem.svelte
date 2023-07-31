<script lang="ts">
	export let item: any;
</script>

<div class="message text-gray-300 px-4 py-3 border-b border-gray-700">
	<div class="flex items-center relative">
		<div class="w-1/6">
			<img
				class="w-11 h-11 rounded-full"
				id="personHeadshot"
				src={item.picture.thumbnail}
				alt="personHeadshot"
			/>
		</div>
		<div class="w-5/6">
			<div class="text-xl text-white" id="personName">{`${item.name.first} ${item.name.last}`}</div>
			<div class="text-sm truncate" id="messagePreview">
				{`${item.location.city} ${item.location.state} ${item.location.postcode} ${item.email}`}
			</div>
		</div>
		<span class="absolute right-0 top-0 text-xs mt-1">13:00</span>
	</div>
</div>

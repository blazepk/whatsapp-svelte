<div class="search-bar sticky top-0 px-4 py-2 w-full">
	<form method="GET">
		<div class="relative text-gray-600 focus-within:text-gray-200">
			<span class="absolute inset-y-0 left-0 flex items-center pl-2">
				<button type="submit" class="p-1 focus:outline-none focus:shadow-outline">
					<svg
						fill="none"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						viewBox="0 0 24 24"
						class="w-4 h-4 text-gray-300"
					>
						<path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
					</svg>
				</button>
			</span>
			<input
				type="search"
				name="q"
				class="w-full py-2 text-sm text-white bg-gray-600 rounded-full pl-10 focus:outline-none focus:bg-white focus:text-gray-900"
				placeholder="Search or start new chat"
				autocomplete="off"
			/>
		</div>
	</form>
</div>

<style>
	.search-bar input {
		color: #00a884;
	}
	.search-bar {
		background-color: #131c21;
	}
</style>

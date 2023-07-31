<script lang="ts">
	export let message: string;
	export let timeStamp: Date;
	const time = timeStamp.toLocaleTimeString();
</script>

<div class="flex">
	<span
		><svg
			class="incoming-svg"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 8 13"
			width="8"
			height="13"
		>
			<path opacity=".13" d="M5.188 1H0v11.193l6.467-8.625C7.526 2.156 6.958 1 5.188 1z" />
			<path fill="currentColor" d="M5.188 0H0v11.193l6.467-8.625C7.526 1.156 6.958 0 5.188 0z" />
		</svg></span
	>
	<div
		class="single-message rounded-tr-lg text-gray-200 rounded-bl-lg rounded-br-lg mb-4 px-4 py-2"
	>
		<span class="text-lg">{message}</span>
		<span class="text-xs inline-block">{time}</span>
	</div>
</div>

<style>
	.single-message {
		background-color: #262d31;
	}

	.incoming-svg {
		color: #262d31;
		transform: scaleX(-1);
	}
</style>

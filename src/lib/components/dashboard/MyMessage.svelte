<script lang="ts">
	export let message: string;
	export let timeStamp: Date;
	const time = timeStamp.toLocaleTimeString();
</script>

<div class="flex justify-end">
	<div
		class="single-message rounded-tl-lg rounded-bl-lg text-gray-200 rounded-br-lg user mb-4 px-4 py-2"
	>
		{message}
		<span class="text-xs inline-block"
			>{time}
			<img
				src="https://www.flaticon.com/svg/vstatic/svg/60/60727.svg?token=exp=1611581819~hmac=ebbc941635810f019c46f5b4f9b1ff89"
				class="w-4 h-4 inline -mt-1 ml-2"
				alt=""
			/></span
		>
	</div>
	<span
		><svg
			class="user-svg"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 8 13"
			width="8"
			height="13"
		>
			<path opacity=".13" d="M5.188 1H0v11.193l6.467-8.625C7.526 2.156 6.958 1 5.188 1z" />
			<path fill="currentColor" d="M5.188 0H0v11.193l6.467-8.625C7.526 1.156 6.958 0 5.188 0z" />
		</svg></span
	>
</div>

<style>
	.single-message {
		background-color: #262d31;
	}
	.single-message.user {
		background-color: #056162;
	}
	.user-svg {
		color: #056162;
	}
</style>

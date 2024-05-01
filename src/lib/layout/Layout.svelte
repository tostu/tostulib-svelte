<script lang="ts">
	import "./layout.css"

	export let hideFooter = false;
</script>

<div class="flex min-h-svh flex-col">
	<slot name="header"/>
	<div class="flex-grow">
		<slot name="main"/>
		{#if !hideFooter}
			<slot name="footer"/>
		{/if}
	</div>
	{#if hideFooter}
		<slot name="footer"/>
	{/if}
</div>


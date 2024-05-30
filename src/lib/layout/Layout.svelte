<script lang="ts">
	export let hideFooter = false;
</script>

<div class="flex min-h-svh flex-col">
	<slot name="header"/>
	<div class="flex-grow flex flex-col">
		<slot name="main"/>
		{#if !hideFooter}
			<slot name="footer"/>
		{/if}
	</div>
	{#if hideFooter}
		<slot name="footer"/>
	{/if}
</div>


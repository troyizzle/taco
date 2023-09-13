<script lang="ts">
	import type { PageData } from "./$types";
	import ReviewForm from "./review-form.svelte";

	export let data: PageData;
</script>

<ReviewForm form={data.form} />

<script lang="ts">
	import * as Form from "$lib/components/ui/form";
	import { formSchema, type FormSchema } from "./schema";
	import type { SuperValidated } from "sveltekit-superforms";

	export let form: SuperValidated<FormSchema>;
</script>

<div class="container mx-auto p-4">
	<h2 class="text-5xl mb-4">Create Review</h2>

	<Form.Root method="POST" {form} schema={formSchema} let:config>
		<Form.Field {config} name="name">
			<Form.Item>
			<Form.Label>Name</Form.Label>
				<Form.Input type="text" placeholder="Name.." />
				<Form.Validation />
			</Form.Item>
		</Form.Field>
		<Form.Field {config} name="rating">
			<Form.Item>
			<Form.Label>Rating</Form.Label>
				<Form.Input type="number" placeholder="Rating.." />
				<Form.Validation />
			</Form.Item>
		</Form.Field>

    <Form.Button size="lg">Submit</Form.Button>
	</Form.Root>
</div>

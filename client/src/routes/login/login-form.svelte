<script lang="ts">
  import * as Form from "$lib/components/ui/form"
  import { formSchema, type FormSchema } from "./schema";
  import type { SuperValidated } from "sveltekit-superforms"

  export let form: SuperValidated<FormSchema>;
</script>

<div class="container mx-auto p-4">
  <h2 class="text-5xl mb-4">Login</h2>
  <Form.Root method="POST" {form} schema={formSchema} let:config>
    <Form.Field {config} name="email">
      <Form.Item>
	<Form.Label>Email</Form.Label>
	<Form.Input type="email" placeholder="Email address.." />
	<Form.Validation />
      </Form.Item>
    </Form.Field>
    <Form.Field {config} name="password">
      <Form.Item>
	<Form.Label>Password</Form.Label>
	<Form.Input type="password" placeholder="Password..." />
	<Form.Validation />
      </Form.Item>
    </Form.Field>
    <Form.Button size="lg">Submit</Form.Button>
  </Form.Root>
</div>

<script lang="ts">
  import { onMount } from 'svelte';
  import { apiData } from './store.ts';

  onMount(async () => {
    fetch('http://localhost:3001/reviews')
      .then((resp) => resp.json())
      .then((data) => {
        apiData.set(data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  import TacoSvg from './taco-svg.svelte';
</script>

<h1 class="text-5xl text-center">
  <span class="text-pink-500">Fanny</span> & <span class="text-blue-500">Troy</span>'s
</h1>
<div class="flex items-center justify-center mb-6">
  <TacoSvg rotate={false} />
  <h4 class="text-2xl">
    Favorite <span class="text-orange-500">Tacos</span>
  </h4>
  <TacoSvg rotate={true} />
</div>

<div class="grid grid-cols-5 gap-4">
  <div class="col-span-4">LOCATION</div>
  <div class="col-span-1">SCORE</div>
  {#each $apiData as review}
    <div class="col-span-4">
      {review.name}
    </div>
    <div class="col-span-1">
      {review.rating}
    </div>
  {/each}
</div>

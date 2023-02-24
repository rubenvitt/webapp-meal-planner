<script lang="ts" setup>
const recipes = [
  {
    id: 1,
    title: "Recipe 1",
  },
  {
    id: 2,
    title: "Recipe 2",
  },
  {
    id: 3,
    title: "Recipe 3",
  },
];
</script>

<template>
  <h1 class="text-red-600">List of recipes</h1>

  <ul>
    <li v-for="recipe in recipes" :key="recipe.id">
      <a :href="`/app/recipes/${recipe.id}`">
        {{ recipe.title }}
      </a>
    </li>
  </ul>
</template>

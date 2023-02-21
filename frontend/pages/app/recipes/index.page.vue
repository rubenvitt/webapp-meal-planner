<script lang="ts" setup>
import { usePageContext } from "../../../renderer/usePageContext";

const { routeParams } = usePageContext();

const { recipeId } = routeParams as { recipeId: string };
</script>

<template>
  <h1 class="text-red-600">Rezept - {{ recipeId }}</h1>
</template>

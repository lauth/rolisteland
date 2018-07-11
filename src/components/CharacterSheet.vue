<template>
    <div class="character-sheet">
        <app-fight-form></app-fight-form>
    </div>
</template>

<script>
import FightForm from "@/components/FightForm";

export default {
  components: {
    "app-fight-form": FightForm
  }
};
</script>

<style scoped>
</style>

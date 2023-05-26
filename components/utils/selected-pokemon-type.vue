<script setup>
import { useTypesStore } from "/stores/Types.js";
const typesStore = useTypesStore();

function Lowercase(item) {
  if (item != null) {
    return item.toLowerCase();
  }
}
</script>

<template>
  <div>
    <h2 class="subtitle text-center">Suas escolhas</h2>
    <div class="grid grid-cols-2 gap-6">
      <div class="col-span-1">
        <h3 class="legend">Desvantagens</h3>
        <ul class="flex flex-wrap flex-row items-center gap-4 gap-y-2">
          <li
            v-for="item in typesStore.selected_type.disadvantages"
            class="type"
            :class="Lowercase(item)"
            :key="'typeSelected' + item"
          >
            {{ item }}
          </li>

          <li
            v-for="item in typesStore.errors.disadvantages[0]"
            class="type error"
            :key="'typeSelected' + item"
          >
            {{ item }}
          </li>
        </ul>
      </div>

      <div class="col-span-1">
        <h3 class="legend">Vantagens</h3>

        <ul class="flex flex-wrap flex-row items-center gap-4 gap-y-2">
          <li
            v-for="item in typesStore.selected_type.advantages"
            class="type"
            :class="Lowercase(item)"
            :key="'typeSelected' + item"
          >
            {{ item }}
          </li>

          <li
            v-for="item in typesStore.errors.advantages[0]"
            class="type error"
            :key="'typeSelected' + item"
          >
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.type {
  padding: $px8 $px16;

  text-transform: uppercase;
  @include font($px16, $semibold, $white);
  @include border(1px, solid, transparent, $px8);
  text-shadow: -1px 1px 0 rgba($color: $black, $alpha: 0.25);

  transition: $transition;

  &.error {
    background-color: $white !important;
    border-color: $base !important;
    color: $base !important;
  }

  &.fairy {
    background-color: $fairy;
  }
  &.steel {
    background-color: $steel;
  }
  &.dark {
    background-color: $dark;
  }
  &.dragon {
    background-color: $dragon;
  }
  &.ghost {
    background-color: $ghost;
  }
  &.rock {
    background-color: $rock;
  }
  &.bug {
    background-color: $bug;
  }
  &.psychic {
    background-color: $psychic;
  }
  &.flying {
    background-color: $flying;
  }
  &.ground {
    background-color: $ground;
  }
  &.poison {
    background-color: $poison;
  }
  &.fighting {
    background-color: $fight;
  }
  &.ice {
    background-color: $ice;
  }
  &.grass {
    background-color: $grass;
  }
  &.electric {
    background-color: $electr;
  }
  &.water {
    background-color: $water;
  }
  &.fire {
    background-color: $fire;
  }
  &.normal {
    background-color: $normal;
  }
  &.none {
    background-color: $black;
  }
}
</style>
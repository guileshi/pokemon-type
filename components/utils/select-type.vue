<script>
import { useTypesStore } from "/stores/Types.js";

export default {
  props: {
    which: {
      type: String,
      required: true,
    },
  },

  setup() {
    const typesStore = useTypesStore();

    return {
      typesStore,
    };
  },
};
</script>

<template>
  <div>
    <ul class="flex flex-wrap flex-row items-center gap-4 gap-y-2">
      <li v-for="item in typesStore.types" :key="'Selecionar' + item.type">
        <button
          class="type"
          type="button"
          :class="[
            item.type,
            { selected: typesStore.GetActiveClass(item.type, which) },
          ]"
          :id="'selecionar' + item.type"
          @click="typesStore.SelectType(item.type, which)"
        >
          {{ item.type }}
        </button>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.type {
  padding: $px8 $px16;

  text-transform: uppercase;
  @include font($px16, $semibold, $grey6);
  @include border(1px, solid, $grey6, $px8);
  text-shadow: -1px 1px 0 rgba($color: $black, $alpha: 0.25);

  transition: $transition;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }

  &.error {
    border-color: $base !important;
  }

  &.selected {
    border-color: transparent;
    color: $white;

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
}
</style>
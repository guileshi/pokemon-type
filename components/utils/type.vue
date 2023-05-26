<script>
export default {
  props: {
    type: {
      type: String,
      required: false,
    },
  },
};
</script>

<template>
  <div>
    <div class="type" :class="type.type" :id="type">
      {{ type.type }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.type {
  padding: $px8 $px16;

  border-radius: $px8;

  @include font($px24, $semibold, $white);

  text-shadow: 0 2px 0 rgba($color: #000000, $alpha: 0.25);

  text-transform: uppercase;

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
}
</style>
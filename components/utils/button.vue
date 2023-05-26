<template>
  <button
    class="button"
    :class="bclass"
    :type="type"
    @click="Execute"
    :disabled="disabled"
    :id="id"
  >
    <ClientOnly>
      <fa :icon="['fas', icon]" class="icon" v-if="icon" />
    </ClientOnly>
    <span>
      {{ title }}
    </span>

    <a
      :href="link"
      target="_blank"
      class="full__link noDecoration"
      v-if="link && external"
      :title="title"
    >
    </a>

    <nuxt-link
      :title="title"
      :to="link"
      class="full__link noDecoration"
      v-if="link && !external"
    >
    </nuxt-link>
  </button>
</template>

<script>
export default {
  props: {
    bclass: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: false,
      default: "button",
    },
    icon: {
      type: String,
      required: false,
    },
    title: {
      type: String,
      required: true,
    },
    myFunction: {
      type: Function,
      required: false,
    },
    params: {
      required: false,
    },
    link: {
      required: false,
      type: String,
    },
    external: {
      required: false,
      type: Boolean,
      default: false,
    },
    disabled: {
      required: false,
      type: Boolean,
      default: false,
    },
    id: {
      required: false,
      type: String,
      default: "",
    },
    coin: {
      required: false,
      type: Boolean,
      default: false,
    },
  },

  methods: {
    Execute() {
      if (this.myFunction) {
        if (this.params) {
          this.myFunction(this.params);
        } else {
          this.myFunction();
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.button {
  .cargas-coin-svg {
    width: $px16;
    height: 100%;

    margin-right: $px8;
  }
}
</style>
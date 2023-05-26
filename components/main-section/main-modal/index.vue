<script setup>
import { useTypesStore } from "/stores/Types.js";

const typesStore = useTypesStore();

function VerifyLength(ar) {
  if (ar.length == []) {
    return "nenhum";
  }

  return ar;
}

onMounted(() => {
  typesStore.GetRandomType();
});
</script>

<template>
  <div class="main-modal">
    <utils-pokedex-header />

    <div class="main-modal-container">
      <div class="mt-14" v-if="!typesStore.answered">
        <h1 class="title">PokéTipo</h1>
        <div>
          <p class="description">
            Selecione abaixo as fraqueza e vantagens do tipo do Pokemon
            escolhido. Clique sobre a que você achar e depois clique em Enviar
          </p>
        </div>
      </div>

      <div class="mt-14" v-else>
        <Client-Only>
          <img
            src="~/assets/img/stars.svg"
            alt="Estrelas"
            class="mx-auto mb-2"
          />
        </Client-Only>
        <h1
          class="title"
          v-if="
            typesStore.perfect.advantages && typesStore.perfect.disadvantages
          "
        >
          Perfeito!!
        </h1>
        <h1 v-else class="title">Foi uma boa tentativa!</h1>
      </div>

      <h2 class="subtitle text-center mt-4">Tipo Escolhido</h2>
      <div class="flex justify-center mt-4 mb-6">
        <utils-type :type="typesStore.selected_type" />
      </div>

      <p v-if="typesStore.answered" class="description">
        Você selecionou que um Pokemon
        <strong class="strong"> {{ typesStore.selected_type.type }}</strong> é
        fraco contra
        <strong
          class="strong mr-1"
          v-for="item in typesStore.disadvantages"
          :key="'desvantagem selecionada: ' + item"
          >{{ item }}</strong
        >
        e forte contra
        <strong
          class="strong mr-1"
          v-for="item in typesStore.advantages"
          :key="'vantagem selecionada: ' + item"
          >{{ item }}</strong
        >
      </p>

      <div v-if="!typesStore.answered">
        <div class="grid grid-cols-2 gap-6" key="Não respondido">
          <div class="col-span-1">
            <h3 class="legend">Fraquezas</h3>
            <utils-select-type which="disadvantages" />
          </div>

          <div class="col-span-1">
            <h3 class="legend">Vantagens</h3>
            <utils-select-type which="advantages" />
          </div>
        </div>

        <utils-button
          bclass="base mt-6 ml-auto"
          title="Enviar"
          :myFunction="typesStore.SubmitTypes"
        />
      </div>

      <div v-else key="Respondido" class="mt-4">
        <utils-selected-pokemon-type />

        <utils-button
          bclass="base mt-10 mx-auto"
          title="Jogar novamente"
          :myFunction="typesStore.Reset"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main-modal {
  position: fixed;

  max-width: 80vw;
  min-width: 70vw;

  background-color: $white;

  border-top-left-radius: $px8;
  border-top-right-radius: $px8;

  z-index: 1000;

  top: $px64;
  bottom: $px64;

  left: 50%;
  transform: translateX(-50%);

  .main-modal-container {
    padding: 0 $px64 $px32 $px64;
  }

  .title {
    @include font($px24, $bold, $black);

    text-align: center;
  }

  .strong {
    @include font($px16, $bold, $grey6);
    text-transform: uppercase;
  }

  .description {
    @include font($px16, $regular, $grey6);
    max-width: 50vw;

    margin: 0 auto;

    margin-top: $px8;

    text-align: center;
  }
}
</style>
<template>
  <div class="pokedex">
    <div class="body">
      <div class="body-secondary-party"></div>

      <div class="outside-lens">
        <div class="lens">
          <div class="inside-lens">
            <div class="reflection-lens"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.pokedex {
  .body {
    width: 100%;

    height: 70px;

    background-color: $base;

    border-bottom: 4px solid #8a001f;

    border-top-left-radius: $px8;
    border-top-right-radius: $px8;

    position: relative;

    box-shadow: 0 4px 4px rgba($color: #000000, $alpha: 0.25);

    .body-secondary-party {
      background-color: $base;

      width: 30vw;
      height: $px32;

      position: absolute;

      top: 100%;

      box-shadow: 0 4px 4px rgba($color: #000000, $alpha: 0.25);

      &::after {
        content: "";

        position: absolute;

        right: -32px;
        bottom: 0;

        width: 50px;
        height: 32px;

        transform: skew(-50deg);

        background-color: $base;
      }
    }
  }

  .outside-lens {
    width: 67px;
    height: 67px;

    background-color: $white;

    border-radius: 100px;

    position: absolute;

    top: $px16;
    left: $px64;

    .lens {
      @include absolute-center-all();

      width: $px64;
      height: $px64;

      background-color: #2faef9;

      border-radius: 100px;

      position: absolute;

      .inside-lens {
        position: absolute;

        width: 62px;
        height: 62px;

        background-color: #1d6b9c;
        border-radius: 100px;

        bottom: 0;
        right: 0;

        .reflection-lens {
          width: 25px;
          height: 25px;

          background-color: #2faef9;
          border-radius: 100px;

          position: absolute;

          top: 4px;
          left: 5px;

          &::after {
            content: "";
            height: 10px;
            width: 10px;

            background-color: #9fddfd;
            border-radius: 100px;

            position: absolute;

            top: 3px;
            left: 5px;
          }
        }
      }
    }
  }
}
</style>
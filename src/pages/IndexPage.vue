<template>
  <q-page>
    <div class="row">
      <div class="col-12 col-md-6">
        <div
          class="fotoHome"
          :class="{ active: coluna === 1 }"
          @click="coluna = 1"
        >
          <div class="unidade" :class="{ active: coluna === 1 }">
            <h4>Unidade 01</h4>
            <template v-if="coluna === 1">
              <div class="q-pa-sm texto">
                Alguns clientes dizem que a unidade 01 é uma espécie de resort,
                um pequeno paraíso, embora fazemos apenas locação da chacara,
                sem serviços de café da manhã e outros.
              </div>
              <q-btn color="primary" to="/unidade01" class="q-mt-lg"
                >conhecer unidade</q-btn
              >
            </template>
          </div>
          <q-img src="~/assets/u01.jpeg" />
        </div>
      </div>
      <div class="col-12 col-md-6">
        <div
          class="fotoHome"
          @click="coluna = 2"
          :class="{ active: coluna === 2 }"
        >
          <div class="unidade" :class="{ active: coluna === 2 }">
            <h4>Unidade 02</h4>
            <template v-if="coluna === 2">
              <div class="q-pa-sm texto">
                A unidade 2 é uma bela de uma mansão a poucos metros da unidade
                01, casa de alto padrão com excelente estrutura para curtir e
                relaxar com a família e amigos.
              </div>
              <q-btn color="primary" to="/unidade02" class="q-mt-lg"
                >conhecer unidade</q-btn
              >
            </template>
          </div>
          <q-img src="~/assets/u02.jpeg" />
        </div>
      </div>
    </div>
    <div style="border: none">
      <q-carousel
        v-model="slide"
        vertical
        transition-prev="slide-down"
        transition-next="slide-up"
        swipeable
        style="background-color: darkcyan"
        animated
        control-color="white"
        navigation-icon="radio_button_unchecked"
        navigation
        padding
        arrows
        height="300px"
        class="text-white shadow-1 rounded-borders"
      >
        <q-carousel-slide name="style" class="column no-wrap flex-center">
          <q-icon name="pool" size="56px" />
          <div class="q-mt-md text-center">
            Piscina climatizada para deixar os dias de lazer muito mais
            divertidos.
          </div> </q-carousel-slide
        ><q-carousel-slide name="cake" class="column no-wrap flex-center">
          <q-icon name="cake" size="56px" />
          <div class="q-mt-md text-center">
            As chacáras são ideias para festas, casamentos, famílias e amigos
            curtirem dias que jamais serão esquecidos pela beleza natural da
            mata em torno delas.
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="tv" class="column no-wrap flex-center">
          <q-icon name="sports_tennis" size="56px" />
          <div class="q-mt-md text-center">
            Salão de festas de frente para toda chacára com linda vista para os
            lagos e muito aconchegante.
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="layers" class="column no-wrap flex-center">
          <q-icon name="airport_shuttle" size="56px" />
          <div class="q-mt-md text-center">
            Contamos ainda com um estacionamento com capacidade para 70 carros
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="map" class="column no-wrap flex-center">
          <q-icon name="sports_soccer" size="56px" />
          <div class="q-mt-md text-center">
            Uma quadra de grama natural para jogar volei ou futebol, ao fundo
            área de fogueira e brinquedos.
          </div>
        </q-carousel-slide>
      </q-carousel>
    </div>
    <div class="q-pa-md column items-center q-gutter-md">
      <q-card
        class="my-card bg-darkcyan text-white q-mt-lg"
        style="max-width: 80%; background-color: darkcyan"
      >
        <q-card-section>
          <div class="row">
            <div class="col-sm-4 q-pa-lg">
              <q-img src="~/assets/contato.jpg" class="" />
            </div>
            <div class="col-sm-8 q-pa-lg">
              As chacáras são ideias para festas, casamentos, famílias e amigos
              curtirem dias que jamais serão esquecidos pela beleza natural da
              mata em torno delas.<br />
              Contamos ainda com um estacionamento com capacidade para 70
              carros.
            </div>
          </div>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexPage",
  data() {
    return {
      coluna: 0,
      slide: "style",
      lorem:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.",
    };
  },
});
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Rubik:wght@400;800&display=swap");
.fotoHome {
  cursor: pointer;
  filter: grayscale(0%);

  border: 1px solid #fff;
  transition-duration: 1s;
  transition-timing-function: ease-in-out;
}
.fotoHome img {
}
.texto {
  font-size: 17px;
  font-weight: 400;
  color: #000;
}
.fotoHome.active {
  border: 20px solid #000;
  filter: grayscale(0%);
}
.unidade {
  font-family: "Rubik", sans-serif;
  text-transform: uppercase;
  background: rgba(255, 255, 255, 0.8);
  z-index: 9000;
  text-align: center;
  top: 0%;
  height: 20%;
  width: 100%;
  transition-duration: 1s;
  transition-timing-function: ease-in-out;
  position: absolute;
}
.unidade.active {
  transition-duration: 1s;
  height: 100%;
}
.fotoHome.active {
  border: 0px solid #fff;
}
</style>

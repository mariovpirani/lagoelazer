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
                um pequeno paraíso.
              </div>
              <q-btn color="primary" class="q-mt-lg">conhecer</q-btn>
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
                Alguns clientes dizem que a unidade 01 é uma espécie de resort,
                um pequeno paraíso.
              </div>
              <q-btn color="primary" class="q-mt-lg">conhecer</q-btn>
            </template>
          </div>
          <q-img src="~/assets/u02.jpeg" />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-6">a</div>
      <div class="col-sm-6">b</div>
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
  font-size: 16px;
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
  border: 20px solid #fff;
}
</style>

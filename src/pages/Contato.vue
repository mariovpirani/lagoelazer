<template>
  <q-page>
    <div class="row">
      <div class="col-sm-6 q-pa-lg">
        <h5>Entre em contato</h5>
        <q-btn icon="phone" class="q-mb-sm"> 11 93020-1599</q-btn>
        <q-btn icon="person" class="q-mb-sm q-ml-sm" color="positive">
          Fale agora com um atendente</q-btn
        ><br />
        Rua Gennaro Teófilo, 641 - Mailasqui, São Roque - SP, 18143-812
      </div>
      <div class="col-sm-6">
        <div class="fotoHome">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14630.762289494776!2d-47.0905741!3d-23.5436291!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf0d0f5a06bc31%3A0x21649c51b96a09c7!2sCh%C3%A1cara%20Lago%20e%20Lazer!5e0!3m2!1spt-BR!2sbr!4v1681956592763!5m2!1spt-BR!2sbr"
            width="100%"
            height="450"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
    <div class="row q-ma-lg">
      <div class="col-sm-12">
        <h5>O que nossos clientes estão dizendo</h5>
        <div class="elfsight-app-db8c7bf0-49a2-42b1-88f5-188614c8a96c"></div>
      </div>
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

<template>
  <q-page>
    <div class="row">
      <div class="col-sm-12 q-pa-lg" style="width: 100%">
        <q-carousel animated v-model="slide33" infinite>
          <q-carousel-slide :name="1" img-src="~/assets/unidade01/banner01.jpg">
            <div class="absolute-bottom custom-caption">
              <div class="text-h2">Unidade 01</div>
              <div class="text-subtitle1"></div>
            </div>
          </q-carousel-slide>
        </q-carousel>
      </div>
    </div>

    <div class="row salao q-my-lg">
      <div class="col-sm-6 q-pa-lg">
        <strong>Salão de festas</strong>
        <p>
          Salão de festas com 250 metros quadrados, de frente para toda chacára,
          com linda vista para os lagos e muito aconchegante com bilhar e ping
          pong.
        </p>
        <q-carousel
          animated
          v-model="slide"
          arrows
          navigation
          infinite
          swipeable
          control-color="amber"
          padding
        >
          <q-carousel-slide :name="1" img-src="~/assets/unidade01/salao001.jpg">
          </q-carousel-slide>
          <q-carousel-slide
            :name="2"
            img-src="~/assets/unidade01/salao02.jpg"
          />
          <q-carousel-slide
            :name="3"
            img-src="~/assets/unidade01/salao03.jpg"
          />
          <q-carousel-slide
            :name="4"
            img-src="~/assets/unidade01/salao04.jpg"
          />
        </q-carousel>
      </div>
      <div class="col-sm-6 q-pa-lg">
        <strong>Cozinhas</strong>
        <p>
          Duas cozinhas completamente equipadas com todos utensilios domesticos.
          2 Geladeiras, 1 Freezer, 2 Fogões, Churrasqueira , 4 pias sendo toda
          planejada e muito funcional.
        </p>
        <q-carousel
          animated
          v-model="slide2"
          arrows
          navigation
          infinite
          swipeable
          control-color="amber"
          padding
        >
          <q-carousel-slide
            :name="1"
            img-src="~/assets/unidade01/cozinha00.jpg"
          >
          </q-carousel-slide>
          <q-carousel-slide
            :name="2"
            img-src="~/assets/unidade01/cozinha01.jpg"
          />
          <q-carousel-slide
            :name="3"
            img-src="~/assets/unidade01/cozinha02.jpg"
          />
        </q-carousel>
      </div>
    </div>
    <q-separator class="q-my-lg" size="4px"></q-separator>
    <div class="row salao q-my-lg">
      <div class="col-sm-6 q-pa-lg">
        <strong>Sala de TV</strong>
        <p>
          Uma linda sala com sofá cama novo onde da pra dar aquele cochilo
          olhando para os lagos.
        </p>
        <q-carousel
          animated
          v-model="slide3"
          arrows
          navigation
          infinite
          swipeable
          control-color="amber"
          padding
        >
          <q-carousel-slide :name="1" img-src="~/assets/unidade01/sala01.jpg">
          </q-carousel-slide>
        </q-carousel>
      </div>
      <div class="col-sm-6 q-pa-lg">
        <strong>Banheiros e Lavabo</strong>
        <p>
          Dentro do Salão de Festas com 4 banheiros, sendo 2 masculinos e 2
          femininos e 1 lindo lavabo com uma linda pia esculpida.
        </p>
        <q-carousel
          animated
          v-model="slide4"
          arrows
          navigation
          infinite
          swipeable
          control-color="amber"
          padding
        >
          <q-carousel-slide
            :name="1"
            img-src="~/assets/unidade01/banheiro01.jpg"
          >
          </q-carousel-slide>
          <q-carousel-slide
            :name="2"
            img-src="~/assets/unidade01/banheiro02.jpg"
          />
        </q-carousel>
      </div>
    </div>
    <q-separator class="q-my-lg" size="4px"></q-separator>
    <div class="row salao q-my-lg">
      <div class="col-sm-6 q-pa-lg">
        <strong>Fogueira</strong>
        <p>
          A fogueira é integrada no salão de festas e de uso muito frequente
          entre hóspedes disponibilizamos lenha de eucalipto, local ideal para
          fazer marshmallow com as crianças ouvindo música.
        </p>
        <q-carousel
          animated
          v-model="slide5"
          arrows
          navigation
          infinite
          swipeable
          control-color="amber"
          padding
        >
          <q-carousel-slide
            :name="1"
            img-src="~/assets/unidade01/churrasco01.jpg"
          >
          </q-carousel-slide>
        </q-carousel>
      </div>
      <div class="col-sm-6 q-pa-lg">
        <strong>Lagos</strong>
        <p>
          Um lindo lago ornamental e outro belo lago para pesca esportiva com
          tilapias e carpas de até 5kg, com 1 pedalinho para diversão e fotos
          instagramáveis para tornar o passeio nota mil.
        </p>
        <q-carousel
          animated
          v-model="slide6"
          arrows
          navigation
          infinite
          swipeable
          control-color="amber"
          padding
        >
          <q-carousel-slide :name="1" img-src="~/assets/unidade01/lago01.jpg">
          </q-carousel-slide>
          <q-carousel-slide :name="2" img-src="~/assets/unidade01/lago02.jpg" />
          <q-carousel-slide :name="3" img-src="~/assets/unidade01/lago03.jpg" />
          <q-carousel-slide :name="4" img-src="~/assets/unidade01/lago04.jpg" />
          <q-carousel-slide :name="5" img-src="~/assets/unidade01/lago05.jpg" />
          <q-carousel-slide :name="6" img-src="~/assets/unidade01/lago06.jpg" />
          <q-carousel-slide :name="7" img-src="~/assets/unidade01/lago07.jpg" />
          <q-carousel-slide :name="8" img-src="~/assets/unidade01/lago08.jpg" />
        </q-carousel>
      </div>
    </div>
    <q-separator class="q-my-lg" size="4px"></q-separator>
    <div class="row salao q-my-lg">
      <div class="col-sm-6 q-pa-lg">
        <strong>Playground</strong>
        <p>
          Em nosso playground temos pula-pula, escalada, escorregador, balança,
          casinha de boneca e um local com arco e flexa esportivo.
        </p>
        <q-carousel
          animated
          v-model="slide7"
          arrows
          navigation
          infinite
          swipeable
          control-color="amber"
          padding
        >
          <q-carousel-slide
            :name="1"
            img-src="~/assets/unidade01/brinquedo01.jpg"
          >
          </q-carousel-slide>
        </q-carousel>
      </div>
      <div class="col-sm-6 q-pa-lg">
        <strong>Quartos</strong>
        <p>
          Dois lindos quartos com suítes e ar condicionado quente e frio cada
          quarto contém 2 camas de casal, 1 treliche e 1 colchão de solteiro
          avulso acomodando até 8 pessoas.
        </p>
        <q-carousel
          animated
          v-model="slide8"
          arrows
          navigation
          infinite
          swipeable
          control-color="amber"
          padding
        >
          <q-carousel-slide :name="1" img-src="~/assets/unidade01/quarto01.jpg">
          </q-carousel-slide>
          <q-carousel-slide
            :name="2"
            img-src="~/assets/unidade01/quarto02.jpg"
          />
          <q-carousel-slide
            :name="2"
            img-src="~/assets/unidade01/quarto03.jpg"
          />
        </q-carousel>
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
      slide: 1,
      slide2: 1,
      slide33: 1,
      slide3: 1,
      slide4: 1,
      slide5: 1,
      slide6: 1,
      slide7: 1,
      slide8: 1,
    };
  },
});
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Rubik:wght@400;800&display=swap");
.q-img__image {
  border: 3px solid #fff;
}
.custom-caption {
  text-align: center;
  padding: 12px;
  color: white;
  background-color: rgba(0, 0, 0, 0.3);
}
</style>

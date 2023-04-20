<template>
  <q-page>
    <div class="row">
      <div class="col-sm-12 q-pa-lg" style="width: 100%">
        <q-carousel animated v-model="slide33">
          <q-carousel-slide :name="1" img-src="~/assets/unidade02/banner01.jpg">
            <div class="absolute-bottom custom-caption">
              <div class="text-h2">Unidade 02</div>
              <div class="text-subtitle1"></div>
            </div>
          </q-carousel-slide>
        </q-carousel>
      </div>
    </div>

    <div class="row salao">
      <div class="col-sm-6 q-pa-lg">
        <strong>Casa</strong>
        <p>
          Casa de alto padrão, linda, com excelente estrutura para curtir e
          relaxar com a família e amigos.
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
          <q-carousel-slide :name="1" img-src="~/assets/unidade02/casa01.jpg">
          </q-carousel-slide>
          <q-carousel-slide :name="2" img-src="~/assets/unidade02/casa02.jpg" />
          <q-carousel-slide :name="3" img-src="~/assets/unidade02/casa03.jpg" />
          <q-carousel-slide :name="4" img-src="~/assets/unidade02/casa04.jpg" />
          <q-carousel-slide :name="5" img-src="~/assets/unidade02/casa05.jpg" />
          <q-carousel-slide :name="6" img-src="~/assets/unidade02/casa06.jpg" />
        </q-carousel>
      </div>
      <div class="col-sm-6 q-pa-lg">
        <strong>Quartos</strong>
        <p>
          Contém 4 quartos, sendo 3 com capacidade para 5 pessoas cada e um
          outro quarto para 3 pessoas, sendo duas suítes.
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
          <q-carousel-slide :name="1" img-src="~/assets/unidade02/quarto01.jpg">
          </q-carousel-slide>
          <q-carousel-slide
            :name="2"
            img-src="~/assets/unidade02/quarto02.jpg"
          />
          <q-carousel-slide
            :name="3"
            img-src="~/assets/unidade02/quarto03.jpg"
          />
        </q-carousel>
      </div>
    </div>
    <q-separator class="q-my-lg" size="4px"></q-separator>
    <div class="row salao q-my-lg">
      <div class="col-sm-6 q-pa-lg">
        <strong>Salas</strong>
        <p>
          Uma maravilhosa sala de jantar, sala de tv e uma linda sala de
          estar<br /><br />
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
          <q-carousel-slide :name="1" img-src="~/assets/unidade02/sala01.jpg">
          </q-carousel-slide>
          <q-carousel-slide :name="2" img-src="~/assets/unidade02/sala02.jpg">
          </q-carousel-slide>
          <q-carousel-slide :name="3" img-src="~/assets/unidade02/sala03.jpg">
          </q-carousel-slide>
          <q-carousel-slide :name="4" img-src="~/assets/unidade02/sala04.jpg">
          </q-carousel-slide>
          <q-carousel-slide :name="5" img-src="~/assets/unidade02/sala05.jpg">
          </q-carousel-slide>
          <q-carousel-slide :name="6" img-src="~/assets/unidade02/sala06.jpg">
          </q-carousel-slide>
        </q-carousel>
      </div>
      <div class="col-sm-6 q-pa-lg">
        <strong>Cozinha</strong>
        <p>
          Uma sofisticada cozinha integrada com as salas com todos utensilios
          domésticos e muito funcional.
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
            img-src="~/assets/unidade02/cozinha01.jpg"
          >
          </q-carousel-slide>
        </q-carousel>
      </div>
    </div>
    <q-separator class="q-my-lg" size="4px"></q-separator>
    <div class="row salao q-my-lg">
      <div class="col-sm-6 q-pa-lg">
        <strong>Lago e Jardim</strong>
        <p>
          Um lindo lago ornamental de frente para a casa deixando a muito mais
          bonita e trazendo passáros interagindo com nosso jardim.
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
          <q-carousel-slide :name="1" img-src="~/assets/unidade02/lago01.jpg">
          </q-carousel-slide>
          <q-carousel-slide :name="2" img-src="~/assets/unidade02/lago02.jpg">
          </q-carousel-slide>
          <q-carousel-slide :name="3" img-src="~/assets/unidade02/lago03.jpg">
          </q-carousel-slide>
          <q-carousel-slide :name="3" img-src="~/assets/unidade02/lago04.jpg">
          </q-carousel-slide>
        </q-carousel>
      </div>
      <div class="col-sm-6 q-pa-lg">
        <strong>Piscina climatizada</strong>
        <p>
          Piscina climatizada para deixar os dias de lazer muito mais
          divertidos.<br /><br />
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
          <q-carousel-slide
            :name="1"
            img-src="~/assets/unidade02/piscina01.jpg"
          >
          </q-carousel-slide>
          <q-carousel-slide
            :name="2"
            img-src="~/assets/unidade02/piscina02.jpg"
          />
        </q-carousel>
      </div>
    </div>
    <q-separator class="q-my-lg" size="4px"></q-separator>
    <div class="row salao q-my-lg">
      <div class="col-sm-6 q-pa-lg">
        <strong>Salão de jogos</strong>
        <p>
          Salão de jogos com banheiro, mesa de bilhar, pebolim e Ping Pong com
          vista para churrasqueira e piscina.
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
          <q-carousel-slide :name="1" img-src="~/assets/unidade02/jogos01.jpg">
          </q-carousel-slide>
        </q-carousel>
      </div>
      <div class="col-sm-6 q-pa-lg">
        <strong>Quadra</strong>
        <p>
          Uma quadra de grama natural para jogar volei ou futebol, ao fundo área
          de fogueira e brinquedos. 
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
          <q-carousel-slide :name="1" img-src="~/assets/unidade02/quadra01.jpg">
          </q-carousel-slide>
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

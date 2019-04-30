<template>
  <div id="products1">
    <div class="orange">
      <h1>Most popular products in 2019</h1>
    </div>
    <div class="main-wrapper">
      <div class="hold-image" v-for="product in products">
        <div class="row">
          <div class="column">
            <img :src="product.imgName" width="300">
          </div>
          <div class="column">
            <h2 class="name">{{ product.name}}</h2>
            <p>{{ product.text}}</p>
            <h2 class="price" v-bind:class="{ crossout: clicked }">€{{ product.price}}</h2>
            <h2 class="price" v-if="clicked">€{{ parseInt(product.price * (1 - 0.10)) }}</h2>
            <button class="button" @click="reducePriceThis()">Todays discount</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      clicked: false
    };
  },
  computed: {
    products() {
      //now using data from vuex store.js file, one single source of truth
      return this.$store.state.products;
    },
    ...mapGetters(["saleProducts", "specialDailyOffers"]),
    minusPrice: function() {
      return product.price;
    }
  },
  methods: {
    ...mapActions(["reducePrice", "specialForToday"]),
    reducePriceThis: function() {
      this.clicked = !this.clicked;
    }
  }
};
</script>

<style lang="scss">
$orange: #e8800c;
.orange {
  background-color: $orange;
  padding: 1em;
}
#products1 {
  h1 {
    text-align: center;
    color: white;
    text-shadow: 0px 2px 2px black;
    font-size: 3em;
    margin: 0.2em;
  }
}

.main-wrapper {
  margin: 0 auto;
  text-align: center;
  .hold-image {
    display: inline-block;
    margin: 3em;
    width: 40%;
    .row {
      display: flex;
    }
    .crossout {
      color: red;
      text-decoration: line-through;
    }
    .column {
    }
    .name {
    }
    .price {
    }
    .name,
    .price,
    p {
      margin: 0.5em 0.5em 0.5em 1em;
    }
  }
}

@media (max-width: 1400px) and (min-width: 601px) {
  .main-wrapper .hold-image {
    display: block;
    margin-right: 1em;
    width: unset;
    max-width: 800px;
  }
}

@media (max-width: 600px) {
  .main-wrapper .hold-image {
    display: block;
    margin-right: 1em;
    width: unset;
  }
  img {
    width: 200px;
    margin-top: 2em;
  }
}
</style>

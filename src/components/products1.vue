<template>
  <div class="main-wrapper">
    <div class="hold-image" v-for="(product, index) in products">
      <div class="row">
        <div class="column">
          <img :src="product.imgName" width="300">
        </div>
        <div class="column">
          <h2 class="name">{{ product.name}}</h2>
          <p>{{ product.text}}</p>
          <h2 class="price" v-bind:class="{ crossout: activeIndex === index }">€{{ product.price}}</h2>
          <h2
            class="price red1"
            v-if="activeIndex === index"
          >€{{ parseInt(product.price * (1 - 0.10)) }}</h2>
          <button class="button" @click="reducePriceThis(index)">Todays discount</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      clicked: false,
      activeIndex: undefined
    };
  },
  computed: {
    products() {
      //now using data from vuex store.js file, one single source of truth
      return this.$store.state.products;
    }
  },
  methods: {
    reducePriceThis: function(index) {
      this.clicked = !this.clicked;
      this.activeIndex = index;
    }
  }
};
</script>

<style lang="scss">
$orange: #e8800c;
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
      text-decoration: line-through;
    }
    .red1 {
      color: red;
    }
    .name,
    .price,
    p {
      margin: 0.5em 0.5em 0.5em 1em;
    }
  }
}

@media (max-width: 1200px) and (min-width: 601px) {
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
    margin: unset;
    margin-right: 1em;
    width: unset;

    .row {
      display: block;
    }
  }
  img {
    width: 200px;
    margin-top: 2em;
  }
}
</style>

<template>
  <div id="products2">
    <h1>Most popular products in 2018</h1>
    <button
      class="button"
      @click.once="reducePrice(0.20); clickedTrue()"
    >Special offer discount FOR TODAY ONLY</button>
    <ul>
      <li v-for="product in products2018">
        <span class="name">{{ product.name}}</span>
        <span
          class="price"
          v-if="clicked"
          v-bind:class="{ crossedout: clicked }"
        >€{{ product.originalprice }}</span>
        <span class="price" v-bind:class="{ red: clicked }">€{{ parseInt(product.price) }}</span>
      </li>
    </ul>
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
    products2018() {
      return this.$store.state.products2018;
    },
    saleProducts() {
      return this.$store.getters.saleProducts;
    }
  },
  methods: {
    ...mapActions(["reducePrice", "specialForToday"]),
    clickedTrue: function() {
      this.clicked = !this.clicked;
    }
  }
};
</script>

<style lang="scss">
$orange: #e8800c;
#products2 {
  background: #fff8b1;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
  margin-bottom: 30px;
  padding: 10px 20px;
}
#products2 ul {
  padding: 0;
}
#products2 li {
  display: inline-block;
  margin-right: 10px;
  margin-top: 10px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.7);
}
.price {
  color: $orange;
  margin-left: 10px;
}

.red {
  color: red;
  font-size: 1.2em;
}
.crossedout {
  text-decoration: line-through;
}
</style>

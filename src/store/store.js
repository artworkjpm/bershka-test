import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    products: [
      {
        name: "1. Shapewear",
        price: 20,
        imgName: require("../assets/1-shapewear-product.jpg"),
        text:
          "Shapewear is shaping up to be one of the best evergreen niches to start a store in. For the second year in a row, this product category has made the list. By 2022, the shapewear market is expected to skyrocket to about $5.6 billion in sales. What started as an undergarment has transitioned to a piece for everyday wear."
      },

      {
        name: "2. Men’s plaid shirt",
        price: 30,
        imgName: require("../assets/2-plaid-shirt-product.jpg"),
        text:
          "The best thing about selling plaid fashion products is that you can create a standalone category in your fashion store called “Plaid,” or adopt the trend subtly in your collection of shirts. Either way, you can capitalize on the seasonal trend while allowing yourself the freedom to promote other trending fashion styles as well."
      },
      {
        name: "3. Athleisure",
        price: 28,
        imgName: require("../assets/3-athleisure-product.jpg"),
        text:
          "In fashion, trends are constantly changing. However, athleisure is one fashion trend that’s here to stay. And that’s why it’s made the list two years in a row. Athleisure is active wear worn as an everyday look rather than for athletic purposes like going to the gym. Within this category you can sell everything from sweatshirts, sweatpants, leggings, sports bras, tank tops, headbands, capris, and shoes, all in countless colors and styles."
      },
      {
        name: "4. Travel accessories",
        price: 13,
        imgName: require("../assets/4-scratch-off-map.jpg"),
        text:
          "With the rise of digital nomads, traveling the world has never been more popular. So it’s not surprising that this scratch off world map is driving strong sales for store owners."
      },
      {
        name: "5. Automotive accessories",
        price: 59,
        imgName: require("../assets/5-auto-accessories.jpg"),
        text:
          "As cars become increasingly digital, digital automotive accessories are becoming more popular among consumers. Take a look at this car projector that showcases your engine speed, water temperature, battery voltage and more. This handy product helps prevent car accidents by allowing drivers to keep their eyes forward as it projects key information in front of you."
      },
      {
        name: "6. Smartwatches",
        price: 399,
        imgName: require("../assets/6-smartchwatch-product.jpg"),
        text:
          "Around 1.2 billion watches are sold globally each year. And the number keeps rising. Last year we saw the rise of minimalist watches. For 2019, smartwatches will likely continue trending upward. December tends to be the peak month for watch sales—while you can sustain year round sales with a watch store, it would be wise to include a relevant summer accessory to ensure higher profits."
      },
      {
        name: "7. Minimalist jewelry",
        price: 205,
        imgName: require("../assets/7-jewelry-product.jpg"),
        text:
          "Shapewear is shaping up to be one of the best evergreen niches to start a store in. For the second year in a row, this product category has made the list. By 2022, the shapewear market is expected to skyrocket to about $5.6 billion in sales. What started as an undergarment has transitioned to a piece for everyday wear."
      },
      {
        name: "8. Heated vests",
        price: 89,
        imgName: require("../assets/8-heated-vest-product.jpg"),
        text:
          "The footwear niche is expected to have an annual growth rate of about 8.1% until 2023. While ankle boots are currently stepping up in terms of searches and sales, there are plenty of other footwear products you can promote on your store as well. "
      },
      {
        name: "9. Ankle boots",
        price: 69,
        imgName: require("../assets/9-ankle-boots-product.jpg"),
        text:
          "Shapewear is shaping up to be one of the best evergreen niches to start a store in. For the second year in a row, this product category has made the list. By 2022, the shapewear market is expected to skyrocket to about $5.6 billion in sales. What started as an undergarment has transitioned to a piece for everyday wear."
      },
      {
        name: "10. Posture corrector",
        price: 65,
        imgName: require("../assets/10-posture-corrector-product.jpg"),
        text:
          "A study led by Columbia University found that, on average, people spent about 77% of their waking life in a sitting or sedentary position. Along the same note, most people working at their desks use laptops, which results in them looking down instead of directly in front. Kenneth Hansraj, a spinal surgeon, has been studying the spinal changes caused by looking down at your phone. And our postures only seem to be getting worse."
      }
    ],
    products2018: [
      {
        name: "1. Phone Accessories",
        price: 8,
        originalprice: 8
      },
      {
        name: "2. Smartwatches",
        price: 399,
        originalprice: 399
      },
      {
        name: "3. Shapewear",
        price: 65,
        originalprice: 65
      },
      {
        name: "4. Facial Masks",
        price: 8,
        originalprice: 8
      },
      {
        name: "5. Video Doorbells",
        price: 299,
        originalprice: 299
      },
      {
        name: "6. Athleisure",
        price: 25,
        originalprice: 25
      },
      {
        name: "7. Indoor Herb Planting Accessories",
        price: 25,
        originalprice: 25
      },
      {
        name: "8. Flame Lamps",
        price: 39,
        originalprice: 39
      },
      {
        name: "9. Instant Foods and Drinks",
        price: 5.5,
        originalprice: 5
      },
      {
        name: "10. Maternity Dressess",
        price: 55,
        originalprice: 55
      }
    ]
  },
  getters: {
    saleProducts: state => {
      var saleProducts = state.products2018.map(product => {
        return {
          name: product.name,
          price: product.price / 2
        };
      });
      return saleProducts;
    }
  },
  mutations: {
    reducePrice: (state, payload) => {
      state.products2018.forEach(product => {
        product.price *= 1 - payload;
      });
    }
  },
  actions: {
    reducePrice: (context, payload) => {
      context.commit("reducePrice", payload);
    }
  }
});

<template>
  <div id="main-container">
    <div class="title_bar">
      <strong>Product Page</strong>
      <a
        class="btn btn-primary"
        href="javascript:void(0)"
        @click="showModal(true)"
        >ADD PRODUCT</a
      >
    </div>
    <div class="content">
      <div class="main_content">
        <product
          v-for="(product, index) in products"
          :key="index"
          :product="product"
        ></product>
      </div>
    </div>
    <paging></paging>
    <add-product-modal></add-product-modal>
  </div>
</template>

<script lang="ts">
import { mapGetters, mapMutations } from "vuex";
import Paging from "./Paging.vue";
import Product from "./Product.vue";
import AddProductModal from "./Add-Product-Modal.vue";
export default {
  components: {
    Paging,
    Product,
    AddProductModal,
  },
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  data() {
    return {
      newProduct: {
        title: "Product 2",
        description: "Description",
        tag: ["tag 1", "tag 2"],
        link: "Deserunt anim",
      },
    };
  },
  computed: {
    ...mapGetters(["products"]),
  },
  methods: {
    ...mapMutations(["showModal"]),
    // showModal(): void {
    //   const modal = document.getElementById("add-product-modal");
    //   if (modal) {
    //     modal.style.display = "block";
    //   }
    // },
  },
};
</script>

<style lang="scss" scoped>
#main-container {
  padding: 35px;
  .title_bar {
    display: flex;
    justify-content: space-between;
    strong {
      font-family: Poppins;
      font-size: 32px;
      line-height: 42px;
      color: #3a414d;
      font-weight: bold;
    }
  }
  .content {
    display: flex;
    justify-content: center;
    .main_content {
      margin: 20px;
      height: auto;
      width: 100%;
      padding: 42px 80px;
      background: rgba(255, 255, 255, 1);
      border-radius: 12px;
      box-shadow: 0px 7px 21px rgba(0, 0, 0, 0.22),
        0px 0px 2px rgba(0, 0, 0, 0.16);
      display: grid;
      grid-template-columns: auto auto;
    }
    @media only screen and (max-width: 1470px) {
      .main_content {
        grid-template-columns: auto;
      }
    }
  }
}
</style>
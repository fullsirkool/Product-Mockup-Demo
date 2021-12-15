<template>
  <div id="add-product-modal" v-show="isShowModal" class="modal">
    <div class="modal-content">
      <div class="title">Product information</div>
      <div class="grid">
        <div class="field-box">
          <div
            v-for="(field, index) in fieldList"
            :key="index"
            class="row item-space-between"
          >
            <label :for="field.field" v-text="field.label"></label>
            <input
              v-if="field.type == 'text'"
              :id="field.field"
              type="text"
              class="textbox"
              :placeholder="field.placeholder"
              v-model="product[`${field.field}`]"
            />
            <textarea
              v-if="field.type == 'text-area'"
              :id="field.field"
              class="textbox"
              :rows="field.row"
              :placeholder="field.placeholder"
              v-model="product[`${field.field}`]"
            ></textarea>
          </div>
        </div>

        <div class="row button-row">
          <a
            id="btn-close-modal"
            href="javascript:void(0)"
            class="btn btn-light"
            @click="showModal(false)"
            >Close</a
          >
          <a
            id="btn-close-modal"
            href="javascript:void(0)"
            class="btn btn-primary"
            @click="addProductToList()"
            >Add</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  data() {
    return {
      fieldList: [
        { label: "Title", field: "title", type: "text", placeholder: "Title" },
        { label: "Tag", field: "tag", type: "text", placeholder: "Tag" },
        { label: "Link", field: "link", type: "text", placeholder: "Link" },
        {
          label: "Description",
          field: "description",
          type: "text-area",
          placeholder: "Add your note to your product",
          row: 7,
        },
      ],
      product: {
        title: "",
        description: "",
        tag: "",
        link: "",
      },
    };
  },
  computed: {
    ...mapGetters(["isShowModal"]),
  },
  methods: {
    ...mapMutations(["showModal", "addProduct"]),
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    addProductToList() {
      let product = this.product;
      let listTags = this.product.tag.split(/\s*,\s*/);
      if (listTags.length > 0) {
        product.tags = listTags.filter((item) => item != null && item != "");
      } else {
        product.tags = [];
      }
      this.addProduct(product);
      this.showModal(false);
    },
  },
};
</script>

<style lang="scss" scope>
.modal {
  //   display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: auto; /* Enable scroll if needed */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
  box-shadow: 0px 2px 11px #333a47, 0px 0px 2px #333a47;
  .grid {
    display: grid;
    height: 95%;
    align-content: space-between;
  }
  .title {
    width: 512px;
    font-family: Inter;
    font-size: 32px;
    line-height: 48px;
    color: #21262eff;
    font-weight: bold;
  }
  .modal-content {
    width: 568px;
    height: 465px;
    background-color: #ffffff;
    border-radius: 6px;
    margin: 10% 35%;
    padding: 35px;
  }
  .row {
    display: flex;
    margin: 20px 0px;
    width: 100%;
    label {
      font-family: Josefin Sans;
      font-size: 14px;
      line-height: 22px;
      color: #21262eff;
    }
    .textbox {
      width: 424px;
      padding: 9px 14px;
      font-family: Josefin Sans;
      font-size: 14px;
      background: #ffffffff;
      border-radius: 6px;
      //   border-width: 1px;
      //   border-color: #bbc0c9ff;
      border: none;
      outline: 1px solid #bbc0c9ff;
    }
    .textbox input:hover {
      color: #bbc0c9;
      background: #ffffffff;
      border-color: #56b4b8ff;
    }
    /* focused */
    .textbox input:focused {
      color: #bbc0c9;
      background: #ffffffff;
      border-color: #56b4b8ff;
    }
    /* disabled */
    .textbox input:disabled {
      color: #bbc0c9;
      background: #ffffffff;
      border-color: #bbc0c9ff;
    }
    .textbox :disabled + .icon,
    .textbox :disabled + .icon + .icon {
      fill: #21262e;
    }
  }
  .item-space-between {
    justify-content: space-between;
  }
  .button-row {
    justify-content: center;
  }
}
.btn {
  padding: 10px 30px !important;
  margin: 0px 50px;
}
</style>
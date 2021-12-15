<template>
  <div id="product">
    <img src="../assets/product.jpg" alt="" />
    <div class="product_infor">
      <div class="title">
        <strong>{{product.title}}</strong>
      </div>
      <div>
        <span>{{product.description}}</span>
      </div>
      <div class="tag">
        <div v-for="(tag, index) in product.tags" :key="index" class="tag-item">{{tag}}</div>
      </div>
      <div class="link">
        <svg
          class="w-6 h-6"
          fill="#686583"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g>
            <path d="M13 10h7l-9 13v-9H4l9-13z" />
          </g>
        </svg>
        <span>{{product.link}}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props:{
    product: Object
  }
};
</script>

<style lang="scss" scoped>
#product {
  display: flex;
  width: 400px;
  height: 130px;
  background: #ffffff;
  border-radius: 6px;
  padding: 20px;
  box-shadow: 0px 0px 7px rgba(51, 58, 71, 0.15),
    0px 0px 2px rgba(51, 58, 71, 0.16);
    margin: 0px 20px 20px 0px;
  img {
    width: 130px;
    height: 130px;
    margin-right: 15px;
  }
  .product_infor {
    .title {
      font-family: Inter;
      font-size: 26px;
      color: #21262e;
      white-space: nowrap;
      margin-bottom: 10px;
    }
    .tag {
      width: 100px;
      height: 21px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-family: Josefin Sans;
      font-size: 11px;
      line-height: 18px;
      margin: 10px 0px;
    }
    /* Tag 9 - Item */
    .tag .tag-item {
      height: 21px;
      padding-left: 7px;
      padding-right: 7px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 10.5px;
    }
    .tag .tag-item > * {
      padding-left: 3px;
      padding-right: 3px;
    }
    /* Tag item 0 */
    .tag .tag-item:nth-child(1) {
      font-family: Josefin Sans;
      font-size: 11px;
      line-height: 18px;
      color: #5a6372;
      background: #f3f4f6;
    }
    /* Tag item 0 - Hover */
    .tag .tag-item:nth-child(1):hover {
      color: #5a6372;
      background: #ced2d9;
    }
    /* Tag item 0 - Pressed */
    .tag .tag-item:nth-child(1):hover:active {
      color: #5a6372;
      background: #a6acb6;
    }
    /* Tag item 0 - Disabled */
    .tag .tag-item:nth-child(1):disabled {
      color: #5a6372;
      background: #f3f4f6;
      opacity: 0.4;
    }
    /* Tag item 1 */
    .tag .tag-item:nth-child(2) {
      font-family: Josefin Sans;
      font-size: 11px;
      line-height: 18px;
      color: #5a6372;
      background: #f3f4f6;
    }
    /* Tag item 1 - Hover */
    .tag .tag-item:nth-child(2):hover {
      color: #5a6372;
      background: #ced2d9;
    }
    /* Tag item 1 - Pressed */
    .tag .tag-item:nth-child(2):hover:active {
      color: #5a6372;
      background: #a6acb6;
    }
    /* Tag item 1 - Disabled */
    .tag .tag-item:nth-child(2):disabled {
      color: #5a6372;
      background: #f3f4f6;
      opacity: 0.4;
    }

    .link {
      font-family: Josefin Sans;
      font-size: 14px;
      line-height: 22px;
      color: #56b4b8;
    }
    .link svg {
      width: 16px;
      height: 16px;
      fill: #56b4b8;
    }
  }
}
</style>
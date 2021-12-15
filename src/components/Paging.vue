<template>
  <div id="paging">
    <a v-if="currentPage > 1" href="javascript:void(0)" @click="changePage(-1)">Previous</a>
    <div class="page">
      <span>{{`${currentPage} Of ${pageNumber}`}} </span>
    </div>
    <a v-if="currentPage < pageNumber" href="javascript:void(0)" @click="changePage(1)">Next</a>
  </div>
</template>

<script lang="ts">
import { mapGetters, mapMutations } from 'vuex';
export default {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  data() {
    return {
      pageSize: 6,
    };
  },
  methods:{
      ...mapMutations(['changePage'])
  },
  computed:{
      ...mapGetters(['pageNumber', 'currentPage']),
  }
};
</script>

<style lang="scss" scoped>
#paging {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  a {
    width: 80px;
    height: 36px;
    padding: 0 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Josefin Sans;
    font-size: 14px;
    line-height: 22px;
    color: #5a6372;
    background: #eaecf0;
    border: none;
    border-radius: 6px;
    text-decoration: none;
  }
  /* Hover */
  a:hover {
    color: #5a6372;
    background: #ced2d9;
  }
  /* Pressed */
  a:hover:active {
    color: #5a6372;
    background: #bbc0c9;
  }
  /* Disabled */
  a:disabled {
    opacity: 0.4;
  }
  .page {
    font-family: Josefin Sans;
    font-size: 14px;
    line-height: 22px;
    color: #8e949f;
    margin: 0px 20px 0px 20px;
  }
}
</style>
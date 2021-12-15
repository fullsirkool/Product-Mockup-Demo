<template>
  <div id="search-bar">
    <div class="search-box">
      <svg
        class="w-6 h-6"
        fill="#686583"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <g>
          <path
            d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"
          />
        </g>
      </svg>
      <input type="text" placeholder="Search" />
    </div>
    <div class="noti-box">
      <a href="">
        <svg
          class="w-6 h-6"
          fill="#686583"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g>
            <path
              d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"
            />
          </g>
        </svg>
      </a>
      <a href="">
        <svg
          class="w-6 h-6"
          fill="#686583"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g>
            <path
              d="M22 20H2v-2h1v-6.969C3 6.043 7.03 2 12 2s9 4.043 9 9.031V18h1v2zM5 18h14v-6.969C19 7.148 15.866 4 12 4s-7 3.148-7 7.031V18zm4.5 3h5a2.5 2.5 0 1 1-5 0z"
            />
          </g>
        </svg>
      </a>
      <a href="">
        <svg
          class="w-6 h-6"
          fill="#686583"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g>
            <path
              d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-1-5h2v2h-2v-2zm2-1.645V14h-2v-1.5a1 1 0 0 1 1-1 1.5 1.5 0 1 0-1.471-1.794l-1.962-.393A3.501 3.501 0 1 1 13 13.355z"
            />
          </g>
        </svg>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
export default {};
</script>

<style lang="scss" scope>
$text-box-width: 512px;
$text-box-height: 36px;
#search-bar {
  height: 36px;
  background: #ffffff;
  border-radius: 0px;
  box-shadow: 0px 0px 7px rgba(51, 58, 71, 0.15),
    0px 0px 2px rgba(51, 58, 71, 0.16);
  padding: 13px 29px;
  display: flex;
  justify-content: space-between;
  .search-box {
    position: relative;
    width: $text-box-width;
    height: $text-box-height;
    padding-right: 14px;
    input {
      height: $text-box-height - 2;
      width: $text-box-width;
      padding-left: 40px;
      margin: 0;
      font-family: Josefin Sans;
      font-size: 14px;
      background: #ffffff;
      border-radius: 6px;
      border: none;
      outline: 1px solid #bbc0c9;
    }
    svg {
      position: absolute;
      transform: translate(60%, 60%);
      width: 16px;
      height: 16px;
      fill: #21262e !important;
    }
  }
  .noti-box {
    display: inline-flex;
    align-items: center;
    a{
      width: 27px;
      height: 27px;
      margin-left: 15px;
    }
    svg {
      top: 16px;
      left: 1136px;
      width: 24px;
      height: 24px;
      fill: #3a414d;
    }
  }
}
</style>
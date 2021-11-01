<template>
  <div class="header">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#/"> <img
                  
            class="mb-1"
            src="../../../public/front_assets/happy.png"
            height="40"
        /><span class="ms-2">柴窩</span></a>
        
       
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#/">首頁</a>
            </li>
            <!-- <li class="nav-item">
              <a class="nav-link" href="#/signin">登入</a>
            </li> -->
            <li class="nav-item">
              <a class="nav-link" href="#/register2">註冊會員</a>
            </li>

            <li class="nav-item dropdown" v-if="MixnaccountData == null">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span class="fa fa-user mr-2" style title></span> 訪客,你好
              </a>

              <ul
                class="dropdown-menu dropdown-menu-lg-end"
                aria-labelledby="navbarDropdown"
              >
                <li><a class="dropdown-item" href="#/signin">登入</a></li>
              </ul>
            </li>
            <!--登入後的樣式-->
            <li class="nav-item dropdown" v-if="MixnaccountData != null">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  class="mb-1"
                  src="../../../public/front_assets/diamond2.svg"
                  height="20"
                  v-if="MixnaccountData.AI_Status == 'Diamond'"
                />
                <img
                  class="mb-1"
                  src="../../../public/front_assets/bronze-medal.png"
                  height="20"
                  v-if="MixnaccountData.AI_Status == 'copper'"
                />
                <img
                  class="mb-1"
                  src="../../../public/front_assets/crown.png"
                  height="20"
                  v-if="MixnaccountData.AI_Status == 'crown'"
                />
                <!-- <span class="fa fa-user mr-2" style title></span> -->
                {{ MixnaccountData.AC_USERNAME }},你好
              </a>

              <ul
                class="dropdown-menu dropdown-menu-lg-end"
                aria-labelledby="navbarDropdown"
              >
                <li><a href="#" class="dropdown-item" @click="SignOut()">登出</a></li>
                <!-- <li><a class="dropdown-item" href="#">個人資料</a></li> -->
                <li><hr class="dropdown-divider" /></li>
                <li>
                  <a class="dropdown-item" href="#">個人資料</a>
                </li>
              </ul>
            </li>
            <!-- <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li> -->
          </ul>
          <!-- <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> -->
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  name: "fornt_header",
  data() {
    return {
      ACCOUNT_Data: {
        AC_USER: "",
      },
    };
  },
  mounted() {
    if (this.TokenID != null) {
      this.GetAccount();
    }
  },
  methods: {
    showAlert(object) {
      // Use sweetalert2
      return this.$swal(object);
    },
    SignOut: async function () {
      const checkSignOut = await this.showAlert({
        title: "您確定嗎？",
        text: "登出後無法觀看圖片！",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText: "取消",
        confirmButtonText: "登出",
      });

      if (checkSignOut.value) {
        sessionStorage.clear();
        this.MixnaccountData = null;
        this.$router.push({ path: "/" });
        this.$router.go(0);
      }
    },
    search: function () {
      this.FunctionToken(this.searchFunction, this.ACCOUNT_Data);
    },
    searchFunction: function (data_in) {
      console.log(data_in);
      this.apiSelectUser(data_in)
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err + "錯誤");
        });
    },
  },
};
</script>

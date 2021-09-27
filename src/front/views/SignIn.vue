<template>
  <div>
    <div id="SigninId" class="text-center">
      <main class="form-signin">
        <form>
          <img
            class="mb-4"
            src="../../assets/logo.png"
            alt=""
            width="72"
            height="57"
          />
          <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

          <div class="form-floating">
            <input
              type="email"
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              v-model="ACCOUNT_Data.AC_USER"
            />
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating">
            <input
              type="password"
              class="form-control"
              id="floatingPassword"
              placeholder="Password"
              v-model="ACCOUNT_Data.AC_PWD"
            />
            <label for="floatingPassword">Password</label>
          </div>

          <div class="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <div><a href="#" @click="ShowForgetPasswordLog()"> 忘記密碼</a></div>
          <button
            class="w-100 btn btn-lg btn-primary"
            type="button"
            @click="userLogin()"
          >
            Sign in
          </button>
          <p class="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
        </form>
      </main>
    </div>
    <!-- 圖型驗證Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form>
              <div id="passwordHelpBlock" class="form-text">
                請在下方輸入圖型驗證碼，以便驗證是否為機器人。
              </div>
              <!-- <label for="recipient-name" class="col-form-label"> 請在下方輸入圖型驗證碼，以便驗證是否為機器人。</label> -->
              <div class="form-floating mb-3">
                <input
                  type="email"
                  class="form-control"
                  id="floatingInput"
                  v-model="ACCOUNT_Data.imagepasscode"
                  placeholder="name@example.com"
                />
                <label for="floatingInput">驗證碼 :</label>
              </div>
            </form>
            <div class="form-group row">
              <div class="col-sm-4">
                <div class="col-form-label">
                  <div v-html="ImageCode"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              class="btn btn-primary"
              @click="SaveAccount()"
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
    <!--忘記密碼Modal-->
    <div
      class="modal fade"
      id="ForgetPasswordModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="mt-2">
            <button
              type="button"
              class="btn-close ms-2 mt-2"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
            <span class="ms-5"></span>
            <span class="ms-5"></span>
            <span class="ms-5"></span>
            <span class="ms-5"><i class="fab fa-apple fa-2x"></i></span>
            <!--
              <span
                class="ForgetTitle text-center"
                style="font-weight: 900; font-size: 25px"
                >尋找你的帳戶。</span > -->
          </div>
          <div class="text-center mt-4">
            <span class="ForgetTitle" style="font-weight: 900; font-size: 25px"
              >尋找你的帳戶。</span
            >
          </div>
          <!-- </div> -->
          <div class="modal-body mt-3">
            <form>
              <!-- <label for="recipient-name" class="col-form-label"> 請在下方輸入圖型驗證碼，以便驗證是否為機器人。</label> -->
              <div class="form-floating mb-4">
                <input
                  type="name"
                  class="form-control"
                  id="floatingInput"
                  v-model="Forget_ACCOUNT_Data.AC_USER"
                  placeholder="name@example.com"
                />
                <label for="floatingInput">帳號 :</label>
              </div>
              <div class="form-floating mb-5">
                <input
                  type="email"
                  class="form-control"
                  id="floatingInput"
                  v-model="Forget_ACCOUNT_Data.AC_EMAIL"
                  placeholder="name@example.com"
                />
                <label for="floatingInput">電子信箱 :</label>
              </div>
            </form>
          </div>
          <div class="">
            <button
              type="button"
              class="w-75 ms-5 mb-3 btn btn-primary"
              @click="userForget()"
            >
              搜尋
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
//引入外部
// import '../../../public/front_css/bootstrap.min.css'
import "../../../public/front_css/signin.css";

export default {
  name: "SignIn",
  data() {
    return {
      ImageCode: "",
      ACCOUNT_Data: {
        AC_USER: "",
        AC_PWD: "",
        imagepasscode: "",
      },
      Forget_ACCOUNT_Data: {
        AC_USER: "",
        AC_EMAIL: "",
      },
      DialogModal: "",
    };
  },
  mounted() {
    this.ImageCodeFunction();
  },
  methods: {
    Showdialog: function () {
      this.DialogModal = new bootstrap.Modal(
        document.getElementById("exampleModal"),
        {
          keyboard: false,
        }
      );
      this.DialogModal.show();
    },
    ShowForgetPasswordLog: function () {
      this.DialogModal = new bootstrap.Modal(
        document.getElementById("ForgetPasswordModal"),
        {
          keyboard: false,
        }
      );
      this.DialogModal.show();
    },
    checkFrogetData: async function () {
      if (this.Forget_ACCOUNT_Data.AC_EMAIL == "") {
        alert("請輸入信箱");
        return false;
      }
      if (this.Forget_ACCOUNT_Data.AC_USER == "") {
        alert("請輸入帳號");
        return false;
      }
    },
    userForget: async function () {
      let data_result = await this.checkFrogetData();
      if (data_result == false) {
        return false;
      }

      this.FunctionToken(this.forgetFunction, this.Forget_ACCOUNT_Data);
    },
    forgetFunction: function (data_in) {
      this.apiSendForget(data_in)
        .then((res) => {
          if (res.data.Status == true) {
            alert("郵件已寄出");
            this.Forget_ACCOUNT_Data.AC_USER = "";
            this.Forget_ACCOUNT_Data.AC_EMAIL = "";
            this.DialogModal.hide();
            this.$router.push({ path: "/ForgetPassword" });
          }
          if (res.data.Status == false) {
            alert("郵件或帳號輸入有誤，找不到使用者");
            this.Forget_ACCOUNT_Data.AC_USER = "";
            this.Forget_ACCOUNT_Data.AC_EMAIL = "";
            this.DialogModal.hide();
          }
        })
        .catch((err) => {
          console.log(err + "錯誤");
        });
    },
    SaveAccount: async function () {
      let checkImagePassData_result = await this.checkImagePassData();
      if (checkImagePassData_result == false) {
        return false;
      }
      this.FunctionToken(this.loginFunction, this.ACCOUNT_Data);
    },
    loginFunction: function (data_in) {
      this.apilogin(data_in)
        .then((res) => {
          if (res.data.Status == true) {
            alert("歡迎登入");
            this.DialogModal.hide();
            this.$router.push({ path: "/" });
            sessionStorage.setItem("TokenID", res.data.Data);
            this.$router.go(0); // 刷新頁面
            console.log("T1");
          }
          if (res.data.Status == false) {
            alert("登入資訊有誤");
            this.DialogModal.hide();
          }
        })
        .catch((err) => {
          console.log(err + "錯");
        });
    },
    userLogin: async function () {
      let data_result = await this.checkLoginData();
      if (data_result == false) {
        return false;
      }
      this.Showdialog();
    },
    checkLoginData: async function () {
      if (this.ACCOUNT_Data.AC_USER == "") {
        alert("請輸入帳號");
        return false;
      }
      if (this.ACCOUNT_Data.AC_PWD == "") {
        alert("請輸入密碼");
        return false;
      }
    },
    checkImagePassData: async function () {
      if (this.ACCOUNT_Data.imagepasscode == "") {
        alert("請輸入圖型驗證碼");
        return false;
      }
    },
    ImageCodeFunction: function () {
      this.apigetImageCode()
        .then((res) => {
          if (res.data.Status == true) {
            this.ImageCode = res.data.Data;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
<style>
/* .bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
} */
</style>

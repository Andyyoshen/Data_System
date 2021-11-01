<template>
  <div class="container">
    <!-- <br>  <p class="text-center">More bootstrap 4 components on <a href="http://bootstrap-ecommerce.com/"> Bootstrap-ecommerce.com</a></p> -->
    <hr />

    <div class="card bg-light">
      <article class="card-body mx-auto" style="max-width: 400px">
        <h4 class="card-title mt-3 text-center">註 冊 會 員</h4>
        <p class="text-center">加入會員即可觀看免費圖片</p>
        <p>
          <button type="button" class="w-100 btn btn-block btn-twitter mb-2">
            <i class="fab fa-twitter"></i>   Login for Twitter</button
          >
          <button type="button" class="w-100 btn btn-block btn-facebook mb-2">
            <i class="fab fa-facebook-f"></i>   Login for facebook</button
          >
        </p>
        <p class="divider-text">
          <span class="bg-light">OR</span>
        </p>
        <form>
          <div class="form-group input-group">
            <div class="input-group mb-3">
              <span class="input-group-text" id="basic-addon1"
                ><i class="fa fa-user"></i
              ></span>
              <input
                type="text"
                :class="
                  ACUSERNAME_COLOR == 'blue'
                    ? 'form-control'
                    : 'form-control is-invalid'
                "
                placeholder="用戶名"
                aria-label="Username"
                aria-describedby="basic-addon1"
                v-model="ACCOUNT_Data.AC_USERNAME"
              />
              <small
                v-if="ACUSERNAME_COLOR == 'red'"
                class="w-100 text-danger"
                style="font-size: 10px"
                >已有相同用戶名</small
              >
            </div>
            <!-- <h6 class="text-danger" style="font-size:10px">
              Please provide a valid city.
            </h6> -->
            <!-- <span class="small text-danger" >
              Please provide a valid city.
            </span> -->

            <!-- <div class="input-group-prepend">
		    <span class="input-group-text"> <i class="fa fa-user"></i> </span>
		 </div>
        <input name="" class="form-control" placeholder="Full name" type="text"> -->
          </div>
          <!-- form-group// -->
          <div class="form-group input-group">
            <div class="input-group mb-3">
              <span class="input-group-text" id="basic-addon1"
                ><i class="fa fa-car"></i
              ></span>
              <input
                type="text"
                :class="
                  ACUSER_COLOR == 'blue'
                    ? 'form-control'
                    : 'form-control is-invalid'
                "
                placeholder="帳號"
                aria-label="Username"
                aria-describedby="basic-addon1"
                v-model="ACCOUNT_Data.AC_USER"
              />
              <small
                v-if="ACUSER_COLOR == 'red'"
                class="w-100 text-danger"
                style="font-size: 10px"
                >已有相同帳號</small
              >
            </div>
          </div>
          <!-- form-group// -->
          <div class="form-group input-group">
            <div class="input-group mb-3">
              <span class="input-group-text" id="basic-addon1"
                ><i class="fa fa-envelope"></i
              ></span>
              <input
                type="text"
                :class="
                  ACEMAIL_COLOR == 'blue'
                    ? 'form-control'
                    : 'form-control is-invalid'
                "
                placeholder="信箱"
                aria-label="Username"
                aria-describedby="basic-addon1"
                v-model="ACCOUNT_Data.AC_EMAIL"
              />
              <small
                v-if="ACEMAIL_COLOR == 'red'"
                class="w-100 text-danger"
                style="font-size: 10px"
                >已有相同信箱</small
              >
            </div>
          </div>

          <!-- form-group end.// -->
          <div class="form-group input-group">
            <div class="input-group mb-3">
              <span class="input-group-text" id="basic-addon1"
                ><i class="fa fa-lock"></i>
              </span>
              <input
                type="password"
                class="form-control"
                placeholder="密碼"
                aria-label="Username"
                aria-describedby="basic-addon1"
                v-model="ACCOUNT_Data.AC_PWD"
              />
            </div>
          </div>
          <!-- form-group// -->
          <div class="form-group input-group">
            <div class="input-group mb-3">
              <span class="input-group-text" id="basic-addon1"
                ><i class="fa fa-lock"></i
              ></span>
              <input
                type="password"
                :class="
                  ACPWDCHECK_COLOR == 'blue'
                    ? 'form-control'
                    : 'form-control is-invalid'
                "
                placeholder="確認密碼"
                aria-label="Username"
                aria-describedby="basic-addon1"
                v-model="AC_PWDCHECK"
              />
              <small
                v-if="ACPWDCHECK_COLOR == 'red'"
                class="w-100 text-danger"
                style="font-size: 10px"
                >密碼不相同</small
              >
            </div>
          </div>
          <!-- form-group// -->
          <div class="form-group mb-3">
            <button
              type="button"
              :class="
                this.registerButtonCheck == false
                  ? 'w-100 btn btn-primary btn-block disabled'
                  : 'w-100 btn btn-primary btn-block'
              "
              @click="register()"
            >
              確 定 送 出
            </button>
          </div>
          <!-- form-group// -->
          <p class="text-center">已 有 會 員 了 嗎? <a href="#" @click="Gotosignin()">登 入</a></p>
        </form>
      </article>
    </div>
    <div class="vld-parent">
        <loading 
        loader="Dots"
        width=100
        color='blue'
        :active.sync="this.$store.state.LoadingforData" 
        :can-cancel="true" 
        :on-cancel="onCancel"
        :is-full-page="fullPage">
        </loading>
    </div>
    <!-- card.// -->
  </div>
  <!--container end.//-->
</template>
<script>
import VueLoading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
export default {
  name: "Register2",
  components:{
    'loading':VueLoading
  },
  data() {
    return {
      isLoading: false,
      fullPage: true,
      ACCOUNT_Data: {
        AC_USER: "",
        AC_PWD: "",
        AC_USERNAME: "",
        AC_EMAIL: "",
      },
      ACUSER_COLOR: "blue",
      ACEMAIL_COLOR: "blue",
      ACUSERNAME_COLOR: "blue",
      ACPWDCHECK_COLOR: "blue",
      ACPWD_COLOR: "blue",
      AC_PWDCHECK: "",
      registerButtonCheck: false,
    };
  },
  // beforeCreate(){
  // this.isLoading = true;
  // },
  // created(){
  //   this.isLoading = false
  // },
  mounted() {
   // this.isLoading = true;
  },
  methods: {
    Gotosignin: function(){
      this.$router.push({ path: '/Signin' })
    },
     doAjax() {
          alert("ddd")
                this.isLoading = true;
                // simulate AJAX
                //this.isLoading = false
                
            },
            onCancel() {
               alert('User cancelled the loader.')
              console.log('User cancelled the loader.')
            },
    checkpassword: async function (data) {
      console.log(this.AC_PWDCHECK);
      if (this.AC_PWDCHECK != "") {
        console.log("nnnnn");
        if (this.ACCOUNT_Data.AC_PWD != data || this.AC_PWDCHECK != data) {
          this.ACPWDCHECK_COLOR = "red";
        } else {
          this.ACPWDCHECK_COLOR = "blue";
        }
      }
      console.log(this.ACPWDCHECK_COLOR);
    },
    checkaccountUserName: async function (data) {
      this.FunctionToken(this.GetapiCheckAccountUserName, data);
    },
    GetapiCheckAccountUserName: function (data_in) {
      this.apiCheckAccountUserName(data_in)
        .then((res) => {
          if (res.data.Status == true) {
            if (res.data.Data == "fail") {
              this.ACUSERNAME_COLOR = "red";
            }
            if (res.data.Data == "sucess") {
              this.ACUSERNAME_COLOR = "blue";
            }
          }
          console.log(res.data.Data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    checkaccountEmail: function (data) {
      this.FunctionToken(this.GetapiCheckAccountEmail, data);
    },
    GetapiCheckAccountEmail(data_in) {
      this.apiCheckAccountEmail(data_in)
        .then((res) => {
          if (res.data.Status == true) {
            if (res.data.Data == "fail") {
              this.ACEMAIL_COLOR = "red";
            }
            if (res.data.Data == "sucess") {
              this.ACEMAIL_COLOR = "blue";
            }
          }
          console.log(res.data.Data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    checkaccount: function (data) {
      this.FunctionToken(this.GetapiSearchAccount, data);
    },
    GetapiSearchAccount(data_in) {
      this.apiSearchAccount(data_in)
        .then((res) => {
          if (res.data.Status == true) {
            if (res.data.Data == "fail") {
              this.ACUSER_COLOR = "red";
            }
            if (res.data.Data == "sucess") {
              this.ACUSER_COLOR = "blue";
            }
          }
          console.log(res.data.Data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // diableregister: async function(){ 暫時用不到
    //   if(this.ACCOUNT_Data.AC_USERNAME != "" &&
    //      this.ACCOUNT_Data.AC_USER != ""     &&
    //      this.ACCOUNT_Data.AC_EMAIL != ""    &&
    //      this.ACCOUNT_Data.AC_PWD != "" )
    //      {
    //        this.registerButtonCheck = true
    //      }
    //      else{
    //        this.registerButtonCheck =false
    //      }
    // },
    checkregister: async function () {
      if (this.ACCOUNT_Data.AC_USERNAME == "") {
        return false;
      }
      if (this.ACCOUNT_Data.AC_USER == "") {
        return false;
      }
      if (this.ACCOUNT_Data.AC_EMAIL == "") {
        return false;
      }
      if (this.ACCOUNT_Data.AC_PWD == "") {
        return false;
      }
      // if(this.ACCOUNT_Data.AC_PWD != this.ACCOUNT_Data.AC_PWDCHECK){
      //   this.registerButtonCheck = false
      //   return false
      // }
    },
    register: async function () {
      let checkregister_result = await this.checkregister();

      if (checkregister_result != false) {
        this.$store.commit("LoadforData",true)
        this.FunctionToken(this.registerFunction, this.ACCOUNT_Data);
      }
    },
    registerFunction: function (data_in) {
      this.apiRegister(data_in)
        .then(async (res) => {
          console.log(res.data);
          this.$store.commit("LoadforData",false)
          if (res.data.Status == true) {
            await this.showAlert({
              title: "成功",
              text: "註冊成功",
              icon: "success",
              confirmButtonColor: "#3085d6",
            });
            await this.$router.push({ path: "/" });
            await sessionStorage.setItem("TokenID", res.data.Data);
            await this.$router.go(0); // 刷新頁面
          } else {
            alert("發生錯誤請聯絡管理員");
          }
          
        })
        .catch((err) => {
          this.$store.commit("LoadforData",false)
          console.log(err);
          alert("發生錯誤請聯絡管理員");
        });
    },
    showAlert(object) {
      // Use sweetalert2
      return this.$swal(object);
    },
  },
  watch: {
    $data: {
      handler: function (nval, oval) {
        // 觀看data裡的值是否符合條件(控制註冊按鈕)
        console.log(oval.ACCOUNT_Data.AC_USER);
        this.checkaccountUserName(oval.ACCOUNT_Data.AC_USERNAME);
        this.checkaccount(oval.ACCOUNT_Data.AC_USER);
        this.checkaccountEmail(oval.ACCOUNT_Data.AC_EMAIL);
        this.checkpassword(oval.AC_PWDCHECK);

        if (
          oval.ACCOUNT_Data.AC_USERNAME != "" &&
          oval.ACCOUNT_Data.AC_USER != "" &&
          oval.ACCOUNT_Data.AC_EMAIL != "" &&
          oval.ACCOUNT_Data.AC_PWD != "" &&
          oval.AC_PWDCHECK != "" &&
          oval.AC_PWDCHECK == oval.ACCOUNT_Data.AC_PWD &&
          oval.ACUSER_COLOR != "red" &&
          oval.ACEMAIL_COLOR != "red" &&
          oval.ACUSERNAME_COLOR != "red" &&
          oval.ACPWDCHECK_COLOR != "red"
        ) {
          this.registerButtonCheck = true;
        } else {
          this.registerButtonCheck = false;
        }
      },
      deep: true,
    },
  },
  
};
</script>
<style scoped>
.divider-text {
  position: relative;
  text-align: center;
  margin-top: 15px;
  margin-bottom: 15px;
}
.divider-text span {
  padding: 7px;
  font-size: 12px;
  position: relative;
  z-index: 2;
}
.divider-text:after {
  content: "";
  position: absolute;
  width: 100%;
  border-bottom: 1px solid #ddd;
  top: 55%;
  left: 0;
  z-index: 1;
}

.btn-facebook {
  background-color: #405d9d;
  color: #fff;
}
.btn-twitter {
  background-color: #42aeec;
  color: #fff;
}
</style>

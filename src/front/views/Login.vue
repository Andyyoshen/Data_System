<template>
  <div class="login">
    <div class="top-title bg-primary">
      <div class="container">
        <h2
          class="text-light text-right"
          data-aos="fade-left"
          data-aos-delay="300"
        >
          帳號登入
        </h2>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <router-link to="/">首頁</router-link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">帳號登入</li>
          </ol>
        </nav>
      </div>
    </div>
    <div class="inner text-center">
      <div class="container">
        <div class="row">
          <div class="col-md-6 offset-md-3">
            <div class="card login my-4">
              <form>
                <div class="form-group row">
                  <label for="staticEmail" class="col-sm-3 col-form-label"
                    >帳號</label
                  >
                  <div class="col-sm-5">
                    <input
                      type="text"
                      class="form-control"
                      v-model="ACCOUNT_Data.AC_USER"
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <label for="inputPassword" class="col-sm-3 col-form-label"
                    >密碼</label
                  >
                  <div class="col-sm-5">
                    <input
                      type="password"
                      class="form-control"
                      v-model="ACCOUNT_Data.AC_PWD"
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <label for="inputPassword" class="col-sm-3 col-form-label"
                    >驗證碼</label
                  >
                  <div class="col-sm-5">
                    <input
                      type="text"
                      class="form-control"
                      v-model="ACCOUNT_Data.imagepasscode"
                    />
                    <!-- <img width="100%" :src="imageCode"> -->
                  </div>
                  <div class="col-sm-4">
                    <div class="col-form-label">
                      <div v-html="ImageCode"></div>
                    </div>
                  </div>
                </div>
                <div class="form-group form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="exampleCheck1"
                  />
                  <label class="form-check-label" for="exampleCheck1"
                    >記住我的帳號</label
                  >
                  <div class="pull-right">
                    <button type="button" @click="show()">忘記密碼</button>
                    <!-- <a  data-bs-toggle="modal" data-bs-target="#exampleModal">
                  Launch demo modal
                </a> -->
                  </div>
                </div>
                <button
                  type="button"
                  class="btn btn-primary btn-block"
                  @click="userLogin()"
                >
                  登入
                </button>
              </form>
            </div>
            <div class="text-center">
              <!-- <a href="./default.html#/signup">加入會員</a> -->
              <router-link to="/signup">加入會員</router-link> /
              <router-link to="/login2">憑證登入</router-link>
            </div>
          </div>
        </div>
        <!-- Modal -->
        <div
          class="modal fade"
          id="exampleModalCenter"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">忘記密碼</h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="form-group row">
                    <label for="staticEmail" class="col-sm-4 col-form-label"
                      >Email</label
                    >
                    <div class="col-sm-8">
                      <input
                        type="email"
                        class="form-control"
                        v-model="Forget_ACCOUNT_Data.AC_EMAIL"
                      />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="inputName" class="col-sm-4 col-form-label"
                      >帳號名稱</label
                    >
                    <div class="col-sm-8">
                      <input
                        type="name"
                        class="form-control"
                        v-model="Forget_ACCOUNT_Data.AC_USER"
                      />
                    </div>
                  </div>
                </form>
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
                  @click="userForget()"
                >
                  寄送郵件
                </button>
              </div>
            </div>
          </div>
        </div>
        <!-- 忘記密碼 -->
        <!-- <div
          class="modal fade"
          id="exampleModalCenter"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalCenterTitle">
                  忘記密碼
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <p class="text-danger">
                  ※重新寄送帳號啟用通知信，請輸入申請帳號所填入資料
                </p>
                <form>
                  <div class="form-group row">
                    <label for="staticEmail" class="col-sm-4 col-form-label"
                      >Email</label
                    >
                    <div class="col-sm-8">
                      <input
                        type="email"
                        class="form-control"
                        
                      />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="inputName" class="col-sm-4 col-form-label"
                      >帳號名稱</label
                    >
                    <div class="col-sm-8">
                      <input
                        type="name"
                        class="form-control"
                        
                      />
                    </div>
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  取消
                </button>
                <button
                  type="button"
                  class="btn btn-primary"
                 
                >
                  寄送密碼
                </button>
              </div>
            </div>
          </div>
        </div> -->
      </div>
      <!-- /.container -->
    </div>
  </div>
</template>
<script>
//import func from 'vue-editor-bridge';
// @ is an alias to /src
// import $ from 'jquery';
// window.$ = $;
export default {
  name: "Login",
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
      errormsg: "",
    };
  },
  mounted() {
    this.ImageCodeFunction();
    //console.log("tettt")
    // this.showtest()
  },
  methods: {
    Test: function () {
      console.log("ddd");
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
      if (this.ACCOUNT_Data.imagepasscode == "") {
        alert("請輸入圖型驗證碼");
        return false;
      }
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
    userLogin: async function () {
      let data_result = await this.checkLoginData();
      if (data_result == false) {
        return false;
      }
      this.FunctionToken(this.loginFunction, this.ACCOUNT_Data);
    },
    show: function () {
      var myModal = new bootstrap.Modal(
        document.getElementById("exampleModalCenter"),
        {
          keyboard: false,
        }
      );
      myModal.show();
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
            $("#exampleModalCenter").modal("hide");
          }
          if (res.data.Status == false) {
            alert("郵件或帳號輸入有誤，找不到使用者");
            var myModal = new bootstrap.Modal(
              document.getElementById("exampleModalCenter"),
              {
                keyboard: false,
              }
            );
            myModal.hide();
            // $('#exampleModalCenter').modal('hide');
          }
        })
        .catch((err) => {
          console.log(err + "錯誤");
        });
    },
    loginFunction: function (data_in) {
      this.apilogin(data_in)
        .then((res) => {
          if (res.data.Status == true) {
            alert("歡迎登入");
            this.$router.push({ path: "/" });
            sessionStorage.setItem("TokenID", res.data.Data);
          }
          if (res.data.Status == false) {
            alert("登入資訊有誤");
          }
        })
        .catch((err) => {
          console.log(err + "錯");
        });
    },
    // CryptionTestFunction: function(data){

    //   console.log("一")
    //   this.apiToken(data_in)
    //   .then(res=>{
    //     alert(res)
    //   })
    //   .catch(err=>{
    //     console.log(err)
    //   })
    // },
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

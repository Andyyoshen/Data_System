<template>
  <div id="register">
    <div class="top-title bg-primary">
      <div class="container">
        <h2
          class="text-light text-right"
          data-aos="fade-left"
          data-aos-delay="300"
        >
          加入會員
        </h2>
      </div>
    </div>
    <!-- /.top-title -->
    <div class="container">
      <div class="row">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <router-link to="/">首頁</router-link>
            </li>
            <li class="breadcrumb-item">
              <router-link to="/signup">加入會員</router-link>
            </li>
            <li class="breadcrumb-item">
              <router-link to="/signupagree">啟用帳號</router-link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              個人資料填寫
            </li>
          </ol>
        </nav>
      </div>
    </div>

    <div class="inner">
      <div class="container">
        <div class="row">
          <div class="col-md-6 offset-md-3">
            <div class="card login my-4">
              <form>
                <div class="form-group">
                  <label for="staticName" class="col-form-label">帳號</label>
                  <div class="col-sm-5">
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputName"
                      v-model="ACCOUNT_Data.AC_USER"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label for="staticName" class="col-form-label">密碼</label>

                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputID"
                    v-model="ACCOUNT_Data.AC_PWD"
                  />
                </div>
                <div class="form-group">
                  <label for="inputPassword" class="col-form-label"
                    >重複一次密碼</label
                  >

                  <input
                    type="password"
                    class="form-control"
                    id="inputPassword"
                    v-model="AC_PWDCHECK"
                  />
                </div>
                <!-- <div class="form-group">
                  <label for="staticName" class="col-form-label"
                    >專業人員身分</label
                  >

                  <div class="row">
                    <div class="col-8">
                      <select class="form-control" v-model="type">
                        <option value disabled>請選擇</option>
                        <option
                     
                        >
                        </option>
                      </select>
                    </div>
                   
                  </div>
                  <small class="text-danger"
                    >如有多個專業人員證號，請填入任一均可</small
                  >
                </div> -->
                <div class="form-group">
                  <label for="staticName" class="ol-form-label">姓名</label>

                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputID"
                    v-model="ACCOUNT_Data.AC_USERNAME"
                  />
                  <!-- <small class="text-danger">做為您未來登入本系統的帳號</small> -->
                </div>
                <div class="form-group">
                  <label for="inputPassword" class="col-form-label"
                    >使用者信箱</label
                  >

                  <input class="form-control" v-model="ACCOUNT_Data.AC_EMAIL" />
                </div>

                <button
                  type="button"
                  class="btn btn-primary btn-block"
                  @click="register()"
                >
                  送出
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <!-- /.container -->
    </div>
  </div>
</template>
<script>
export default {
  name: "Register",
  data() {
    return {
      ACCOUNT_Data: {
        AC_USER: "",
        AC_PWD: "",
        AC_USERNAME: "",
        AC_EMAIL: "",
      },
      AC_PWDCHECK: "",
    };
  },
  mounted() {},
  methods: {
    register: function () {
      this.FunctionToken(this.registerFunction, this.ACCOUNT_Data);
    },
    registerFunction: function (data_in) {
      this.apiRegister(data_in);
    },
  },
};
</script>

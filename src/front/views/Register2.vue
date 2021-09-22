<template>
  <div class="container">
    <!-- <br>  <p class="text-center">More bootstrap 4 components on <a href="http://bootstrap-ecommerce.com/"> Bootstrap-ecommerce.com</a></p> -->
    <hr />

    <div class="card bg-light">
      <article class="card-body mx-auto" style="max-width: 400px">
        <h4 class="card-title mt-3 text-center">Create Account</h4>
        <p class="text-center">Get started with your free account</p>
        <p>
          <a href="" class="w-100 btn btn-block btn-twitter mb-2">
            <i class="fab fa-twitter"></i>   Login via Twitter</a
          >
          <a href="" class="w-100 btn btn-block btn-facebook mb-2">
            <i class="fab fa-facebook-f"></i>   Login via facebook</a
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
                class="form-control"
                placeholder="用戶名"
                aria-label="Username"
                aria-describedby="basic-addon1"
                v-model="ACCOUNT_Data.AC_USERNAME"
              />
            </div>
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
                class="form-control"
                placeholder="帳號"
                aria-label="Username"
                aria-describedby="basic-addon1"
                v-model="ACCOUNT_Data.AC_USER"
              />
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
                class="form-control"
                placeholder="信箱"
                aria-label="Username"
                aria-describedby="basic-addon1"
                v-model="ACCOUNT_Data.AC_EMAIL"
              />
            </div>
          </div>

          <!-- form-group end.// -->
          <div class="form-group input-group">
            <div class="input-group mb-3">
              <span class="input-group-text" id="basic-addon1"
                ><i class="fa fa-lock"></i>
              </span>
              <input
                type="text"
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
                type="text"
                class="form-control"
                placeholder="確認密碼"
                aria-label="Username"
                aria-describedby="basic-addon1"
                v-model="AC_PWDCHECK"
              />
            </div>
          </div>
          <!-- form-group// -->
          <div class="form-group mb-3">
            <button type="submit" 
            class="w-100 btn btn-primary btn-block"
            @click="register()">
              Create Account
            </button>
          </div>
          <!-- form-group// -->
          <p class="text-center">Have an account? <a href="">Log In</a></p>
        </form>
      </article>
    </div>
    <!-- card.// -->
  </div>
  <!--container end.//-->
</template>
<script>
export default {
  name: "Register2",
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
  mounted(){

  },
  methods:{
     register: function () {
      this.FunctionToken(this.registerFunction, this.ACCOUNT_Data);
    },
    registerFunction: function (data_in) {
      this.apiRegister(data_in)
      .then(res=>{
        if(res.data.Status == true){
          alert("帳號註冊成功")
          this.$router.push({ path: "/" });
        }
      });
    },
  }
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

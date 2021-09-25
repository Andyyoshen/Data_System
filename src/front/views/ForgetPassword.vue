<template>
  <div class="container">
	<div class="row">
		<div class="col-md-4 col-md-offset-4">
            <div class="panel panel-default">
              <div class="panel-body">
                <div class="text-center">
                  <h3><i class="fa fa-lock fa-4x"></i></h3>
                  <div class="mt-3" v-if="forgetcodecheck=='No'">
                  <h2 class="text-center">郵件驗證碼。</h2>
                  <p class="mt-3">請 在 這 輸 入 您 收 到 的郵 件 驗 證 碼.</p>
                  </div>

                  <div class="mt-3" v-if="forgetcodecheck=='Yes'">
                  <h2 class="text-center">設定新的密碼。</h2>
                  <p class="mt-3">您 可 以 在 這 裡 重 新 設 定 密 碼.</p>
                  </div>  

                  <div class="mt-3" v-if="forgetcodecheck=='Finish'">
                  <h2 class="text-center">修改完成</h2>
                  <p class="mt-3">您已成功重新修改密碼.</p>
                  </div>

                  <div class="panel-body">
                      <!---輸入驗證碼group----->
                      <form id="register-form" role="form" autocomplete="off" class="form" v-if="forgetcodecheck=='No'">
                      <div class="form-group">
                        <div class="input-group">
                          <span class="input-group-addon"><i class="glyphicon glyphicon-envelope color-blue"></i></span>
                          <input    placeholder="驗證碼"
                                    class="form-control" 
                                    type="password"
                                    v-model="sendforgetverifycode.code">
                        </div>
                      </div>
                      <div class="form-group mt-3">
                        <button class="btn btn-lg btn-primary btn-block"  type="button" @click="SendForgetVerify()">
                            確認
                        </button>                      
                        </div>
                      
                      <input type="hidden" class="hide" name="token" id="token" value=""> 
                    </form>
                    <!---更改密碼group----->
                    <form id="register-form" role="form" autocomplete="off" class="form" v-if="forgetcodecheck=='Yes'">
    
                      <div class="form-group">
                        <div class="input-group">
                          <span class="input-group-addon"><i class="glyphicon glyphicon-envelope color-blue"></i></span>
                          <input  placeholder="密碼"
                                  class="form-control"  
                                  type="password"
                                  v-model="newPassWord.newpwd">
                        </div>
                        <div class="input-group mt-3">
                          <span class="input-group-addon"><i class="glyphicon glyphicon-envelope color-blue"></i></span>
                          <input  placeholder="確認密碼" 
                                  class="form-control" 
                                  type="password"
                                  v-model="checknewpwd" > 
                        </div>
                      </div>
                      <div class="form-group mt-3">
                        <button class="btn btn-lg btn-primary btn-block"  type="button" @click="changePassword()">
                            確認
                        </button>
                      </div>
                      
                      <input type="hidden" class="hide" name="token" id="token" value=""> 
                    </form>
    
                  </div>
                </div>
              </div>
            </div>
          </div>
	</div>
</div>
</template>
<script>
export default {
    name: "ForgetPassword",
    data(){
        return{
            sendforgetverifycode:{
                TYPE:"check",
                code: null
            },
            forgetcodecheck:'No',
            newPassWord:{
                newpasswordtoken : null,
                newpwd:"",
                TYPE:"change"
            },
            checknewpwd:""
        }

    },
    mounted(){

    },
    methods: {
        SendForgetVerify: function(){
            this.apiGetForget(this.sendforgetverifycode)
            .then(res=>{
                if(res.data.Status == true){
                    alert("驗證成功")
                    this.newPassWord.newpasswordtoken = this.sendforgetverifycode.code
                    this.sendforgetverifycode.code = null
                    this.forgetcodecheck = 'Yes'
                    

                }
                else{
                    alert("驗證失敗")
                    this.sendforgetverifycode.code = null
                }
                console.log(res)
            })
            .catch(err=>{
                console.log(err+"錯誤")
            })
        },
        checknewpwdfun:  function(){
          if(this.newPassWord.newpwd == ""){
            alert("請輸入密碼")
            return false
          }
          if(this.checknewpwd == ""){
            alert("請輸入確認密碼")
            return false
          }
          if(this.newPassWord.newpwd != this.checknewpwd){
            alert("確認密碼有誤")
            return false
          }
        },
        changePassword :async function(){
          let checknewpwdfun_result = await this.checknewpwdfun()
          if(checknewpwdfun_result == false){
            return false
          }
          this.apiGetForget(this.newPassWord)
          .then(res=>{
            if(res.data.Status == true){
              this.newPassWord.newpasswordtoken = null
              this.newPassWord.newpwd = ""
              this.checknewpwd = ""
              alert("密碼修改成功")
              this.forgetcodecheck = 'Finish'
            }
            else{
              this.newpwd = ""
              this.checknewpwd = ""
              alert("密碼修改失敗，請重新寄送郵件")
            }
          })
          .catch(err=>{
            console.log(err+"錯誤")
          })
        }
        //重更改密碼開始接
    }
}
</script>
<style>
    .form-gap {
    padding-top: 70px;
}
</style>

<template>
  <div class="container">
    <!-- <br>  <p class="text-center">More bootstrap 4 components on <a href="http://bootstrap-ecommerce.com/"> Bootstrap-ecommerce.com</a></p> -->
    <hr />

    <div class="card bg-light">
      <article class="card-body mx-auto" style="max-width: 400px">
        <h4 class="card-title mt-3 text-center">Create Account</h4>
        <p class="text-center">Get started with your free account</p>
        <p>
          <a href="" class="btn btn-block btn-twitter">
            <i class="fab fa-twitter"></i>   Login via Twitter</a
          >
          <a href="" class="btn btn-block btn-facebook">
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
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
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
                ><i class="fa fa-envelope"></i
              ></span>
              <input
                type="text"
                class="form-control"
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
          </div>
          <!-- form-group// -->
          <div class="form-group input-group">
            <div class="input-group mb-3">
              <div class="input-group-prepend">
		        <span class="input-group-text" id="basic-addon1"> <i class="fa fa-phone"></i> </span>
		    </div>
              <button
                class="btn btn-outline-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </button>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li>
                  <a class="dropdown-item" href="#">Something else here</a>
                </li>
                <li><hr class="dropdown-divider" /></li>
                <li><a class="dropdown-item" href="#">Separated link</a></li>
              </ul>
              <input
                type="text"
                class="form-control"
                aria-label="Text input with dropdown button"
              />
            </div>

            <!-- <div class="input-group-prepend">
		    <span class="input-group-text"> <i class="fa fa-phone"></i> </span>
		</div>
		<select class="custom-select" style="max-width: 120px;">
		    <option selected="">+971</option>
		    <option value="1">+972</option>
		    <option value="2">+198</option>
		    <option value="3">+701</option>
		</select>
    	<input name="" class="form-control" placeholder="Phone number" type="text"> -->
          </div>
          <!-- form-group// -->
          <div class="form-group input-group">
            <div class="input-group mb-3">
                <div class="input-group-prepend">
		    <span class="input-group-text"> <i class="fa fa-building"></i> </span>
		</div>
            <!-- <label class="input-group-text" for="inputGroupSelect02">Options</label> -->
              <select class="form-select" id="inputGroupSelect02">
                <option selected>Choose...</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
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
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
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
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
          </div>
          <!-- form-group// -->
          <div class="form-group">
            <button type="submit" class="btn btn-primary btn-block">
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
    return {};
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
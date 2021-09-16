<script>
export default {
  name: "Mixin",
  data() {
    return {
      userRequest: this.$axios.create({ baseURL: "/api2" }),
      TokenID: "",
      apiToken: (data) => this.userRequest.post("/CryptionTest"),
      apigetImageCode: (data) => this.userRequest.post("/getImageCode"),
      apilogin: (data) => this.userRequest.post("/login", data),
      apiSelectUser: (data) => this.userRequest.post("/SelectUser", data),
      apiRegister: (data) => this.userRequest.post("/Register", data),
      apiSendForget: (data) => this.userRequest.post("/SendForget", data),
    };
  },
  mounted() {
    this.TokenID = sessionStorage.getItem("TokenID");
  },
  methods: {
    showtest: function (a) {
      alert(a);
    },
    FunctionToken: function (EXfunction, data_in) {
      console.log("二");
      this.apiToken({})
        .then((res) => {
          if (res.data.Status == true) {
            var DTO = {
              U_data: data_in,
              Token_data: {
                TokenID: this.TokenID,
                Token: res.data.Data,
              },
            };
            EXfunction(DTO);
          }
        })
        .catch((err) => {
          console.log("錯誤", err);
        });
    },
  },
};
</script>

<template>
  <div class="home">
    <main>
      <div id="Home_Title" class="py-5 text-center container-fluid">
        <div class="row py-lg-5">
          <div class="col-lg-6 col-md-8 mx-auto">
            <h1 class="fw-bold text-white">相 簿 展 示</h1>
            <p class="lead text-white">
              A bird in the hand is worth two in the bush 。 birds of a feather
              flock together。have one's cake and eat it too 。 No pain no gain.
              Knowledge is power
            </p>
            <p>
              <button type="button" class="btn btn-primary my-2">
                關於本公司
              </button>
              <!-- <button type="button" class="btn btn-secondary my-2">取消</button> -->
            </p>
          </div>
        </div>
      </div>
     
      <div class="album py-5 bg-light">
        
        <div class="container">
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div class="col">
              <div class="card shadow-sm">
                <img
                  src="../../../public/front_assets/TaiwnaMap.jpg"
                  class="TWimg"
                  width="100%"
                  height="100%"
                  fill="#55595c"
                />
                <!-- <svg
                  class="bd-placeholder-img card-img-top"
                  width="100%"
                  height="225"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Placeholder: Thumbnail"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <title>Placeholder</title>
                  <img src="../../../public/front_assets/TaiwnaMap.jpg" class="TWimg" width="100%" height="100%" fill="#55595c" />
                  <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                    Thumbnail
                  </text>
                </svg> -->

                <div class="card-body">
                  <p class="card-text">
                    點擊各個區域縣市，可以顯示及時肇事數據。
                  </p>
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        @click="LookTaiwanMapWeb()"
                      >
                        觀看
                      </button>
                      <!-- <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                      >
                        Edit
                      </button> -->
                    </div>
                    <small class="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card shadow-sm">
                <img
                  id="ssss"
                  :src="usualImage_path.path"
                  class="TWimg"
                  width="100%"
                  height="100%"
                  fill="#55595c"
                />
                <div class="card-body">
                  <p class="card-text">
                    {{ usualImage_path.contan }}
                  </p>
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        @click="usualLookDogImage()"
                      >
                        觀看
                      </button>
                    </div>
                    <small class="text-muted">8 mins</small>
                  </div>
                </div>
              </div>
            </div>

            <div class="col" v-for="(value, index) in Image_path" :key="index">
              <div class="card shadow-sm">
                <img
                  id="ssss"
                  :src="value.path"
                  class="TWimg"
                  width="100%"
                  height="100%"
                  fill="#55595c"
                />
                <div class="card-body">
                  <p class="card-text">
                    {{ value.contan }}
                  </p>
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        @click="LookDogImage(value.Img_number)"
                      >
                        觀看
                      </button>
                    </div>
                    <small class="text-muted">8 mins</small>
                  </div>
                </div>
              </div>
            </div>
            
            <!----------------假資料---------->
            <!-- <div class="col">
              <div class="card shadow-sm">
                <img
                  src="../../../public/front_assets/Dog3.jpg"
                  class="TWimg"
                  width="100%"
                  height="100%"
                  fill="#55595c"
                />
                <div class="card-body">
                  <p class="card-text">
                    思思瀏覽專區
                  </p>
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        @click="forsusu()"
                      >
                        觀看
                      </button>
                    </div>
                    <small class="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div> -->
            <!----------------假資料---------->

            <!-- <div class="col">
              <div class="card shadow-sm">
                   <img
                  src="../../../public/front_assets/Dog2.jpg"
                  class="TWimg"
                  width="100%"
                  height="100%"
                  fill="#55595c"
                />

                <div class="card-body">
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        @click="LookDogImage()"
                      >
                        觀看
                      </button>
                    </div>
                    <small class="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div> -->
          </div>
        </div>
      </div>
    </main>
    
  </div>
  
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox.css";
// import DatePicker from "../components/DatePicker.vue"
export default {
  name: "Home",
  components: {
  },
  data() {
    return {
     
      gallery: [
        {
          src: require("../../../public/front_assets/Dog5.jpg"),
          caption: "曬太陽",
        },
        {
          src: require("../../../public/front_assets/Dog11.jpg"),
          caption: "酷嗎",
        },
        {
          src: require("../../../public/front_assets/Dog12.jpg"),
          caption: "冰淇淋好吃",
        },
      ],
      Image_data: {
        Img_number: "",
      },
      usualImage_path: {
        path: require("../../../public/front_assets/Dog5.jpg"),
        contan: "訪客即可觀看，我是和服柴",
      },
      Image_path: [
        {
          path: require("../../../public/front_assets/Dog.jpg"),
          Img_number: "Test01",
          contan: "權限皇冠才能觀看，我是復古柴",
        },
        {
          path: require("../../../public/front_assets/Dog2.jpg"),
          Img_number: "Test02",
          contan: "權限鑽石才能觀看，我是墨鏡柴",
        },
        {
          path: require("../../../public/front_assets/Dog3.jpg"),
          Img_number: "Test03",
          contan: "權限同牌才能觀看，我是少年柴",
        },
      ],
      // Image_path2:[
      //   {
      //     path
      //   }
      // ]
    };
  },
  mounted() {
    // fancybox.next();
    // fancybox.close();
    //Fancybox.getInstance().jumpTo(1);
    //     console.log(fancybox)
    //     Fancybox.bind('[data-fancybox="gallery"]', {
    //     caption: function (fancybox, carousel, slide) {
    //       console.log(carousel)
    //       console.log(slide)
    //   },
    // });
    //Fancybox.show(gallery);
    //Fancybox.bind('[data-fancybox="gallery"]')
  },

  methods: {
    // forsusu: function(){
    //   Fancybox.show(    [
    //                       {
    //                             src: require("../../../public/front_assets/Dog3.jpg"),
    //                             type: "image", //將格式放入
    //                       },
    //                       {
    //                             src: require("../../../public/front_assets/Dog4.jpg"),
    //                             type: "image", //將格式放入
    //                       },
    //                       {
    //                             src: require("../../../public/front_assets/Dog5.jpg"),
    //                             type: "image", //將格式放入
    //                       },
    //                       {
    //                             src: require("../../../public/front_assets/Dog6.jpg"),
    //                             type: "image", //將格式放入
    //                       },

    //                     ],
    //                 {
    //                     Toolbar: {
    //                     display: [
    //                         { id: "zoom", position: "left" },
    //                         {id:  "fullscreen", position:"left"},
    //                         { id: "counter", position: "center" },
    //                         { id: "close", position: "right" },
    //                     ],
    //                   },
    //                 }
    //         );
    // },
    showAlert(object) {
      // Use sweetalert2
      return this.$swal(object);
    },
    usualLookDogImage: async function (data) {
      Fancybox.show(
        this.gallery, //將格式放入
        {
          Toolbar: {
            display: [
              { id: "zoom", position: "left" },
              { id: "fullscreen", position: "left" },
              { id: "counter", position: "center" },
              { id: "close", position: "right" },
            ],
          },
        }
      );
    },
    LookDogImage: async function (data) {
      this.Image_data.Img_number = data;
      console.log(this.Image_data.Img_number);
      this.FunctionToken(this.GetapiDogViewCard, this.Image_data);
    },

    GetapiDogViewCard: function (data_in) {
      this.apiDogViewCard(data_in)
        .then((res) => {
          if (res.data.Status == true) {
            console.log(res.data.Data);
            //處理回傳資料符合Fancybox格式
            let img_data = [];
            res.data.Data.forEach((element) => {
              img_data.push({ src: element, type: "image" });
            });

            Fancybox.show(
              img_data, //將格式放入
              {
                Toolbar: {
                  display: [
                    { id: "zoom", position: "left" },
                    { id: "fullscreen", position: "left" },
                    { id: "counter", position: "center" },
                    { id: "close", position: "right" },
                  ],
                },
              }
            );
            //   window.open(res.data.Data); //暫時
          }

          if (res.data.Status == false) {
            this.showAlert({
              title: "失敗",
              text: "權線不足",
              icon: "error",
              confirmButtonColor: "#3085d6",
            });
          }
          if (res.data.Status == 505) {
            this.showAlert({
              title: "失敗",
              text: "請聯絡管理員",
              icon: "error",
              confirmButtonColor: "#3085d6",
            });
          }
        })
        .catch((err) => {
          console.log(err);
          alert("錯誤");
        });
    },

    LookTaiwanMapWeb: async function () {
      this.$router.push({ path: "/TaiwanMap" });
      // this.FunctionToken(this.GetapiViewCard);
    },
    GetapiViewCard: function (data_in) {
      this.apiViewCard(data_in)
        .then((res) => {
          if (res.data.Status == true)
            this.$router.push({ path: res.data.Data });
          if (res.data.Status == false) return alert("無權訪問");
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },

  components: {
    //HelloWorld,
  },
};
</script>
<style scoped>
#Home_Title {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)),
    url("../../../public/img/pexels-quintin-gellar-313782.jpg");

  background-position: center;
  background-size: cover;
}
.TWimg {
  /*控制圖片縮放比例*/
  width: 100%;
  height: 50vh;
  object-fit: fill;
}
/* #TWimg{
  background-image: url("../../../public/front_assets/TaiwnaMap.jpg");
} */
/* .carousel-item {
  height: 20rem;
  background: #777;
  color: white;
  position: relative;
} */
/* .container {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding-bottom: 50px;
} */
/* .overlay-imgae{
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top:0;
  background-image: url(../../assets/1.jpg);
  background-position: center;
  background-size: cover;
} */
</style>

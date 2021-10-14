<template>
  <div class="home">
    <main>
      <div id="Home_Title" class="py-5 text-center container-fluid">
        <div class="row py-lg-5">
          <div class="col-lg-6 col-md-8 mx-auto">
            <h1 class="fw-bold text-white">Album example</h1>
            <p class="lead text-white">
              Something short and leading about the collection below—its
              contents, the creator, etc. Make it short and sweet, but not too
              short so folks don’t simply skip over it entirely.
            </p>
            <p>
              <a href="#" class="btn btn-primary my-2">Main call to action</a>
              <a href="#" class="btn btn-secondary my-2">Secondary action</a>
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
                        @click="LookDogImage(value.Img_number)"
                      >
                        觀看
                      </button>
                    </div>
                    <small class="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div>

          <!----------------假資料---------->
          <div class="col">
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
                    思思專屬瀏覽
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
export default {
  name: "Home",
   components:{
  },
  data() {
    return {
          gallery : [
      {
        src: "https://lipsum.app/id/2/800x600",
        thumb: "https://lipsum.app/id/2/80x80",
        caption: "First image",
      },
      {
        src: "https://lipsum.app/id/3/800x600",
        thumb: "https://lipsum.app/id/3/80x80",
        caption: "Second image",
      },
      {
        src: "https://lipsum.app/id/4/800x600",
        thumb: "https://lipsum.app/id/4/80x80",
        caption: "Third image",
      },
    ],
      Image_data: {
        Img_number: "",
      },
      Image_path: [
        {
          path: require("../../../public/front_assets/Dog.jpg"),
          Img_number: "Test01",
        },
        {
          path: require("../../../public/front_assets/Dog2.jpg"),
          Img_number: "Test02",
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
    console.log(fancybox)
    Fancybox.bind('[data-fancybox="gallery"]', {
    caption: function (fancybox, carousel, slide) {
      console.log(carousel)
      console.log(slide)
  },
});
    //Fancybox.show(gallery);
    //Fancybox.bind('[data-fancybox="gallery"]')
  },

  methods: {
    forsusu: function(){
      Fancybox.show(    [
                          {
                                src: require("../../../public/front_assets/Dog3.jpg"),
                                type: "image", //將格式放入
                          },
                          {
                                src: require("../../../public/front_assets/Dog4.jpg"),
                                type: "image", //將格式放入
                          },
                          {
                                src: require("../../../public/front_assets/Dog5.jpg"),
                                type: "image", //將格式放入
                          },
                          {
                                src: require("../../../public/front_assets/Dog6.jpg"),
                                type: "image", //將格式放入
                          },

                        ],
                    {
                        Toolbar: {
                        display: [
                            { id: "zoom", position: "left" },
                            {id:  "fullscreen", position:"left"},
                            { id: "counter", position: "center" },
                            { id: "close", position: "right" },
                        ],
                      },
                    }
            );
    },
    showAlert(object) {
      // Use sweetalert2
      return this.$swal(object);
    },
    LookDogImage: async function (data) {
     
      this.Image_data.Img_number = data;
      console.log(this.Image_data.Img_number)
      this.FunctionToken(this.GetapiDogViewCard, this.Image_data);
    },

    GetapiDogViewCard: function (data_in) {
      this.apiDogViewCard(data_in)
        .then((res) => {
          if (res.data.Status == true) {

              //處理回傳資料符合Fancybox格式
                let img_data = []
                res.data.Data.forEach(element => {
                img_data.push({src:element,type:"image"})
                });
              
              Fancybox.show( 
               img_data, //將格式放入
              {
                  Toolbar: {
                  display: [
                      { id: "zoom", position: "left" },
                      {id:  "fullscreen", position:"left"},
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
      this.FunctionToken(this.GetapiViewCard);
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
    url("https://breakthroughdesign.com/wp-content/themes/bdg/images/home-slider-qualitrol-corp-color2.png");

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

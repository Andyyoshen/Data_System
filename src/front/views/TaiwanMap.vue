<template>
  <div id="MapAll">
    <div class="container">
      <div class="row">
        <div class="taiwan-map col-lg-4" ref="map">
        <div id="map">
          <svg
            id="svg"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid meet"
          ></svg>
        </div>
      </div>
      <div  class="taiwan-bar col" ref="bar">
        <div   class="bar-title text-center">
          <h1>{{ h1 }}</h1>
          <h2>{{ h2 }}</h2>
        </div>
        <div class="bar-data"></div>
      </div>
      
      
    </div>
    </div>
  </div>
  
</template>
<script>
// import "../../../public/front_css/TaiwanMap.css"
export default {
  name: "taiwanmap",
  data() {
    return {
      h1: "臺南市",
      h2: "Tainan City",
      taiwanCountry: [],
      da: [
        { x: 1, w: 10, name: "大雅" },
        { x: 2, w: 20, name: "神岡" },
        { x: 3, w: 30, name: "東海" },
        { x: 4, w: 40, name: "沙鹿" },
        { x: 5, w: 50, name: "梧棲" },
        { x: 6, w: 10, name: "大雅" },
        { x: 7, w: 20, name: "神岡" },
        { x: 8, w: 30, name: "東海" },
        { x: 9, w: 40, name: "沙鹿" },
        { x: 10, w: 50, name: "梧棲" },
      ],
      Taiwan_city_data: {
        Cyear: "110",
        Month: "ALL",
        City: "",
        Area: "ALL",
        Calculation: "CBI",
      },
      January_Accident: "",
      February_Accident: "",
      Tai_None_Accident: "",
      Total_Tai_None_Arry: [],
      taiwan_bar_screenpage:true
    };
  },
  mounted() {
    //  this.testapi()
    this.getTaiwanMap();
    this.GetTaiwanAlongapi();
    
    // window.onresize = () => {
    //  console.log(document.documentElement.scrollWidth)
    // };
    console.log("uuu")
    //window.addEventListener('resize',this.listenResize);  //監控螢幕寬度
    // this.showbar();
    // this.GetTaiwanAccapi('臺南市')

    //this.GetTaiwanApi();
  },
  
  methods: {
    listenResize(){
      console.log(document.documentElement.scrollWidth)
      if(document.documentElement.scrollWidth <1064)
      this.taiwan_bar_screenpage = false
      
    },
    GetTaiwanApi() {
      this.$axios
        .get(
          "https://datacenter.taichung.gov.tw/swagger/OpenData/c5a1044e-e7f0-4227-9734-d9278cf62311"
        )
        .then((respose) => {
          if (respose.status == 200) {
            this.January_Accident = respose.data.slice(0, 10);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    GetTaiwanAlongapi() {
      this.$axios
        .post("outapi/api/AccLocCbiAjax", {
          Cyear: "110",
          Month: "ALL",
          City: "臺南市",
          Area: "ALL",
          Calculation: "CBI",
        })
        .then((res) => {
          if (res.status == 200) {
            this.Tai_None_Accident = res.data;
            this.showbar(this.Tai_None_Accident);
            //  this.Tai_None_Accident.filter((ans) => {
            //  this.Total_Tai_None_Arry.push(
            //     ans.rdname.split("、")[0] + "(" + ans.crossRoadArea + ")"
            //   );
            // });
            console.log(this.Total_Tai_None_Arry);
          }
        })
        .catch((err) => {
          console.log(err + "錯誤");
        });
    },
    async GetTaiwanAccapi(datacity_in) {
      this.$axios
        .post("outapi/api/AccLocCbiAjax", {
          Cyear: "110",
          Month: "ALL",
          City: datacity_in,
          Area: "ALL",
          Calculation: "CBI",
        })
        .then((res) => {
          if (res.status == 200) {
            this.February_Accident = res.data;
            this._transition(this.February_Accident);
            //console.log(this.February_Accident);
          }
        })
        .catch((err) => {
          console.log(err + "錯誤");
        });
    },
    _transition(trans_data) {
      var Vue_this = this;

      // 字串解析
      var arry_road = [];
      trans_data.filter((ans) => {
        arry_road.push(
          ans.rdname.split("、")[0] + "(" + ans.crossRoadArea + ")"
        );
      });

      // 改變名子
      var s = d3.select(".bar-data");
      var text = s
        .select("#name")
        .selectAll("text")
        .data(arry_road)
        .text(function (d) {
          return d;
        });

      //改變bar
      s.selectAll("rect")
        .data(trans_data)
        .transition()
        .duration(1500)
        .attr({
          width: function (d) {
            return Number(d.caseQty) * 8.6;
          },
        });
      //-------改變數值-----
      s.selectAll("text")
        .data(trans_data)
        .transition()
        .duration(1500)
        .attr({
          fill: "#FFFF",
          x: function (d) {
            return Number(d.caseQty) * 8.6 + 250;
          },
        })
        .tween("number", function (d) {
          var Node_this = this;
          //console.log(Vue_this.da)
          var i = d3.interpolateRound(Vue_this.da[d.no - 1].w, d.caseQty);
          //console.log(Vue_this.da[d.no - 1].w);
          Vue_this.da[d.no - 1].w = d.caseQty;
          return function (t) {
            Node_this.textContent = i(t);
          };
        });
    },
    showbar(show_data) {
      // 字串解析
      var n  = this
      var arry_road = [];
      show_data.filter((ans) => {
        arry_road.push({
          road_no: ans.no,
          road_name: ans.rdname.split("、")[0] + "(" + ans.crossRoadArea + ")",
        });
      });
       const width = this.$refs.bar.offsetWidth
       
       console.log(n.$refs)
      var s = d3.select(".bar-data").append("svg").attr({
        width: width-100,
        height: 500,
      })
      .attr("viewBox", `0 0 690 600`); //0 0 690 600

      var rect = s.append("g").attr({
        id: "rect",
      });
      var num = s.append("g").attr({
        id: "num",
      });
      var name = s.append("g").attr({
        id: "name",
      });
      //-------chart bar長度-------
      rect
        .selectAll("rect")
        .data(show_data)
        .enter()
        .append("rect")
        .attr({
          fill: "#FFA9AB",
          width: 0,
          height: 30,
          x: 250,
          y: function (d) {
            return (Number(d.no) - 1) * 50;
          },
        })
        .transition()
        .duration(1500)
        .attr({
          width: function (d) {
            return Number(d.caseQty) * 8.6;
          },
        });
      //----- 標簽上面的數值-------
      num
        .selectAll("text")
        .data(show_data)
        .enter()
        .append("text")
        .text(function (d) {
          return Number(d.caseQty);
        })
        .attr({
          fill: "#FFFF",
          x: 250,
          y: function (d) {
            return Number(d.no) * 50 - 30;
          },
        })
        .transition()
        .duration(1500)
        .attr({
          x: function (d) {
            // console.log(d)
            return Number(d.caseQty) * 8.6 + 250;
          },
        })
        .tween("number", function (d) {
          var i = d3.interpolateRound(0, d.caseQty);
          return function (t) {
            this.textContent = i(t);
          };
        });
      // -----標籤上面的名子------

      name
        .selectAll("text")
        .data(arry_road)
        .enter()
        .append("text")
        // .append("tspan")
        .text(function (d) {
          return d.road_name;
        })
        .attr({
          fill: "#FFFFFF",
          "text-anchor": "end",
          x: 240,
          y: function (d) {
            return Number(d.road_no) * 50 - 30;
          },
        })
        .style({
          "font-size": "20px",
        });
    },
    async getTaiwanMap() {
      console.log(this.$refs.map)
      const width = this.$refs.map.offsetWidth.toFixed(),
        height = this.$refs.map.offsetHeight.toFixed();
      console.log(width);
      console.log(height);
      // 判斷螢幕寬度，給不同放大值
      let mercatorScale,
        w = window.screen.width;
      console.log("-----------");
      console.log(w);
      console.log(document.documentElement.scrollWidth)
      if (w > 1366) {
        mercatorScale = 12000;
      } else if (w <= 1366 && w > 480) {
        mercatorScale = 9000;
      } else {
        mercatorScale = 6000;
      }
      console.log(mercatorScale);
      // d3：svg path 產生器
      var path = await d3.geo.path().projection(
        // !important 座標變換函式
        d3.geo
          .mercator()
          .center([123, 25.3])
          .scale(9000) 
         
      );
      // 讓d3抓svg，並寫入寬高
      var svg = await d3
        .select("#svg")
        .attr("width", width)  //width 關鍵!!暫時
        .attr("height", 900) 
        .attr("viewBox", `0 0 ${width} 900`);  // -200 100 1 900  原.attr("viewBox", `0 0 ${width} 900`);
      // 讓d3抓GeoJSON檔，並寫入path的路徑 data:geometry
      var url = "front_assets/taiwan.geojson";
      await d3.json(url, (error, geometry) => {
        if (error) throw error;

        svg
          .selectAll("path")
          .data(geometry.features)
          .enter()
          .append("path")
          .attr("d", path)
          
          .attr({
            // 設定id，為了click時加class用
            id: (d) => "city" + d.properties.COUNTYCODE,
          })
          .attr({
            class: "county-borders",
          })
          .on("click", (n) => {
            this.h1 = n.properties.COUNTYNAME; // 換中文名
            this.h2 = n.properties.COUNTYENG; // 換英文名

            this.GetTaiwanAccapi(n.properties.COUNTYNAME);
            // 有 .active 存在，就移除 .active
            if (document.querySelector(".active")) {
              document.querySelector(".active").classList.remove("active");
            }
            // 被點擊的縣市加上 .active
            document
              .getElementById("city" + n.properties.COUNTYCODE)
              .classList.add("active");
          });
      });
      console.log(svg);
      return svg;
    },
  },
  beforeDestroy() {
  //window.removeEventListener("resize",this.listenResize); // 停止監控螢幕寬度
}
};
</script>
<style >
#svg {
  fill: #12213a;
}
#svg :hover {
  fill: #ffa9ab;
  transition: 0.5s;
}
 /* path {
  stroke: #ffa9ab;
  stroke-width: 5px;
} */
.county-borders {
     
        stroke: #ffa9ab;
        stroke-width: 5px;
    } 
#MapAll {
  background-color: #12213a;
 
}
/* .taiwan-bar {
  position: absolute;
  right: 190px;
  top: 200px;
} */
.bar-title {
  color: white;
  /* position: absolute; */
  /* right: 200px; */
  /* bottom: 520px; */
  font-size: 50px;
}
.bar-title h1 {
  font-size: 100px;
  /* color: #ffb44c; */
  /* font-family:SF Pro TC,SF Pro Display,SF Pro Icons,PingFang TC,Helvetica Neue,Helvetica,Arial,sans-serif; */
}
.bar-title h2 {
  font-size: 56px;
}
.bar-data {
  margin-top: 150px;
}
</style>

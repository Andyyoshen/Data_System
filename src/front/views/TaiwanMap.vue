<template>
  <div class="container">
      <div class="taiwan-bar">
        <div class="bar-title">
        <h1>{{ h1 }}</h1>
        <h2>{{ h2 }}</h2>   
        </div>
        <div class="bar-data">

        </div>
      </div>
      <div class="taiwan-map" ref="map">
        <div id="map">
          <svg id="svg" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet"></svg>
        </div>
      </div>
    </div>
</template>
<script >
// import "../../../public/front_css/TaiwanMap.css"
export default {
    name: "taiwanmap",
    data(){
        return{
            h1:'台灣車',
            h2:'Taiwan sf asdf asf ',
            taiwanCountry: [],
            da: [
                {x:1, w:10, name:'大雅'},
                {x:2, w:20, name:'神岡'},
                {x:3, w:30, name:'東海'},
                {x:4, w:40, name:'沙鹿'},
                {x:5, w:50, name:'梧棲'},
                {x:6, w:10, name:'大雅'},
                {x:7, w:20, name:'神岡'},
                {x:8, w:30, name:'東海'},
                {x:9, w:40, name:'沙鹿'},
                {x:10, w:50, name:'梧棲'},
                ],
            Taiwan_city_data:{
                 Cyear: "110",
                Month: "ALL", 
                City: '', 
                Area: "ALL",
                Calculation: "CBI"
            },   
            January_Accident:'' ,
            February_Accident:'',
            March_Accident:'',
            Test_Accident:[
                {"編號":"1"  , "轄區分局":"第六分局"  , "路口名稱":"西屯區臺灣大道黎明路"  , "A1":"0"  , "A2件數":"100"  , "A2受傷":"15"  , "A3":"7"  , "總件數":"170"  , "發生時間":"18-20"  , "主要肇因":"違反號誌管制或指揮" },
                {"編號":"2"  , "轄區分局":"第六分局"  , "路口名稱":"西屯區臺灣大道惠中路"  , "A1":"0"  , "A2件數":"71"  , "A2受傷":"9"  , "A3":"8"  , "總件數":"55"  , "發生時間":"14-16"  , "主要肇因":"未注意車前狀態" },
                {"編號":"3"  , "轄區分局":"第六分局"  , "路口名稱":"西屯區臺灣大道文心路"  , "A1":"0"  , "A2件數":"9"  , "A2受傷":"11"  , "A3":"5"  , "總件數":"24"  , "發生時間":"14-16"  , "主要肇因":"未注意車前狀態" },
                {"編號":"4"  , "轄區分局":"第六分局"  , "路口名稱":"西屯區中清聯絡道環中路"  , "A1":"0"  , "A2件數":"50"  , "A2受傷":"0"  , "A3":"12"  , "總件數":"92"  , "發生時間":"18-20"  , "主要肇因":"未保持行車安全間隔" },
                {"編號":"5"  , "轄區分局":"第四分局"  , "路口名稱":"南屯區五權西路二段環中路"  , "A1":"0"  , "A2件數":"66"  , "A2受傷":"6"  , "A3":"6"  , "總件數":"12"  , "發生時間":"16-18"  , "主要肇因":"未注意車前狀態" },
                {"編號":"6"  , "轄區分局":"第五分局"  , "路口名稱":"北屯區文心路崇德路"  , "A1":"0"  , "A2件數":"210"  , "A2受傷":"12"  , "A3":"1"  , "總件數":"211"  , "發生時間":"8-10"  , "主要肇因":"違反特定標誌(線)禁制" },
                {"編號":"7"  , "轄區分局":"第三分局"  , "路口名稱":"南區忠明南路國光路"  , "A1":"0"  , "A2件數":"40"  , "A2受傷":"4"  , "A3":"7"  , "總件數":"71"  , "發生時間":"10-12"  , "主要肇因":"未依規定讓車" },
                {"編號":"8"  , "轄區分局":"第三分局"  , "路口名稱":"南區國光路復興路"  , "A1":"0"  , "A2件數":"48"  , "A2受傷":"10"  , "A3":"2"  , "總件數":"20"  , "發生時間":"8-10"  , "主要肇因":"違反特定標誌(線)禁制" },
                {"編號":"9"  , "轄區分局":"第一分局"  , "路口名稱":"西區自由路林森路"  , "A1":"0"  , "A2件數":"69"  , "A2受傷":"9"  , "A3":"1"  , "總件數":"60"  , "發生時間":"10-12"  , "主要肇因":"違反特定標誌(線)禁制" },
                {"編號":"10"  , "轄區分局":"第六分局"  , "路口名稱":"西屯區工業區一路臺灣大道"  , "A1":"0"  , "A2件數":"55"  , "A2受傷":"5"  , "A3":"4"  , "總件數":"9"  , "發生時間":"8-10"  , "主要肇因":"未注意車前狀態" },
            ]
        }

    },
    mounted(){
      //  this.testapi()
        this.getTaiwanMap();
        this.showbar();
        this.GetTaiwanApi();
        
    },
    methods:{
            GetTaiwanApi(){
                this.$axios.get("https://datacenter.taichung.gov.tw/swagger/OpenData/c5a1044e-e7f0-4227-9734-d9278cf62311")
                .then(respose=>{
                     if(respose.status == 200)
                    {

                         this.January_Accident = respose.data.slice(0,10)
                    }
                })
                .catch(err=>{
                    console.log(err)
                })
            },
            // testapi(){
            //     this.$axios.get("api/youbike")
            //     .then(res=>{
            //         console.log(res)
            //     })
            //     .catch(err=>{
            //         console.log(err)
            //     })
            // },
        async  testapi(datacity_in){
                this.$axios.post("outapi/api/AccLocCbiAjax",
                {
                Cyear: "110",
                Month: "ALL", 
                City: datacity_in, 
                Area: "ALL",
                Calculation: "CBI"
                })
                .then(res=>{
                    if(res.status == 200){
                        this.February_Accident = res.data
                        this._transition(this.February_Accident)    
                        console.log(this.February_Accident)
                    }
                    
                })
                .catch(err=>{
                    console.log(err+"錯誤")
                })
            },
            _transition(trans_data){  
            var Vue_this = this

            // 字串解析
            var arry_road = []
                trans_data.filter(ans=>{
                    arry_road.push(ans.rdname.split('、')[0]+"("+ans.crossRoadArea+")")
                })
                
            // 改變名子
            var s = d3.select('.bar-data')
            var text =  s.select('#name').selectAll('text')
            .data(arry_road)
            .text(function(d){
                return d
            })
          
            //改變bar
            s.selectAll('rect')
            .data(trans_data)
            .transition()
            .duration(1500)
            .attr({
                'width':function(d){
                return Number(d.caseQty)*8.6;
                }
            });
            //-------改變數值-----
            s.selectAll('text')
            .data(trans_data)
            .transition()
            .duration(1500)
            .attr({
                'fill':'#FFFF',
                'x':function(d){
                    
                return Number(d.caseQty)*8.6+250;
                }
            })
             .tween('number',function(d){
                var Node_this = this
                //console.log(Vue_this.da)
                var i = d3.interpolateRound(Vue_this.da[d.no-1].w, d.caseQty);
                 console.log(Vue_this.da[d.no-1].w)
               Vue_this.da[d.no-1].w = d.caseQty
                    return function(t) {
                   Node_this.textContent = i(t);
                };
                
            });
            
            },
        showbar(){
            var data=[
                {x:1, w:10},
                {x:2, w:20},
                {x:3, w:30},
                {x:4, w:40},
                {x:5, w:50},
                ];
            var s = d3.select('.bar-data')
            .append('svg')
            .attr({
            'width':700,
            'height':500
            });

            var rect = s.append('g')
            .attr({
              'id':'rect'
            });
            var num = s.append('g')
                        .attr({
                        'id':'num'
                        });
            var name = s.append('g')
                        .attr({
                        'id':'name'
                        }) 
            //-------chart bar長度-------
            rect.selectAll('rect')
            .data(this.da)
            .enter()
            .append('rect')
            .attr({
            'fill':'#FFA9AB',
            'width':0,
            'height':30,
            'x':250,
            'y':function(d){
                 console.log(d)
                return (d.x-1) * 50;
            }
            })
            .transition()
            .duration(1500)
            .attr({
            'width':function(d){
                return (d.w)*5;
            }
            });
            //----- 標簽上面的數值-------
            num.selectAll('text')
            .data(this.da)
            .enter()
            .append('text')
            .text(function(d){
            return d.w  ;
            })
            .attr({   
            'fill':'#FFFF',
            'x':250,
            'y':function(d){
                return d.x * 50-30 ;
            }
            })
            .transition()
            .duration(1500)
            .attr({
            'x':function(d){
                // console.log(d)
                return (d.w)*5 + 250;
            }
            })
            .tween('number',function(d){
                var i = d3.interpolateRound(0, d.w);
                return function(t) {
                this.textContent = i(t);
                };
            });
           // -----標籤上面的名子------
            name.selectAll('text')
            .data(this.da)
            .enter()
            .append('text')
           // .append("tspan")
            .text(function(d){
                return d.name
            })
            .attr({ 
                'fill':'#FFFFFF',
                'text-anchor': 'end',
                'x':240,
                'y':function(d){
                return d.x * 50-30 ;
            }
            })
            .style({
                'font-size':'20px'
            })
            
        },
        async getTaiwanMap(){
            const  width = (this.$refs.map.offsetWidth).toFixed(),
                   height = (this.$refs.map.offsetHeight).toFixed();
                   console.log(width)
                   console.log(height)
            // 判斷螢幕寬度，給不同放大值
                let mercatorScale, w = window.screen.width;
                console.log("-----------")
                console.log(w)
                if(w > 1366) {
                        mercatorScale = 12000;
                }
                else if(w <= 1366 && w > 480) {
                        mercatorScale = 9000;
                }
                else {
                        mercatorScale = 6000;
                }   
                console.log(mercatorScale)
            // d3：svg path 產生器
                var path = await d3.geo.path().projection(
            // !important 座標變換函式
                d3.geo
                .mercator()
                .center([123,25.3])
                .scale(mercatorScale)
                 .translate([width/2, height/2.5])
                );
            // 讓d3抓svg，並寫入寬高
                var svg = await d3.select('#svg')
                    .attr('width', width)
                    .attr('height', 900)
                    .attr('viewBox', `0 0 ${width} 900`);
            // 讓d3抓GeoJSON檔，並寫入path的路徑 data:geometry
                var url = 'front_assets/taiwan.geojson';
                await d3.json(url, (error, geometry) => {
                    if (error) throw error;

                    svg
                    .selectAll('path')
                    .data(geometry.features)
                    .enter().append('path')
                    .attr('d', path)
                    .attr({
                        // 設定id，為了click時加class用
                        id: (d) => 'city' + d.properties.COUNTYCODE
                    })
                    .attr({
                        class:'county-borders'
                    })
                    .on('click', n => {
                        console.log(n)
                        this.h1 = n.properties.COUNTYNAME; // 換中文名
                        this.h2 = n.properties.COUNTYENG; // 換英文名
                       // console.log(this.da)
                        //  for(var i=0; i<5; i++){
                        //    this.da[i].w = Math.floor(Math.random()*200);
                        //     }
                        var da = [
                            {x:1, w:100,name:'大安'},
                            {x:2, w:2,  name:'西門'},
                            {x:3, w:84, name:'松山'},
                            {x:4, w:43, name:'公館'},
                            {x:5, w:77, name:'淡水'},
                            ]
                             this.testapi(n.properties.COUNTYNAME)
                        // 有 .active 存在，就移除 .active
                        if(document.querySelector('.active')) {
                        document.querySelector('.active').classList.remove('active');
                        }
                        // 被點擊的縣市加上 .active
                        document.getElementById('city' + n.properties.COUNTYCODE).classList.add('active');
                    });
                });
                console.log(svg)
                return svg;         

        }
    }
}
</script>
<style>
    #svg {
        fill:#12213a
    }
   #svg :hover {
        fill: #ffa9ab;
        transition: 0.5s;
    }
    path{
        /* fill: none; */
        stroke:#ffa9ab;
        stroke-width:5.0px;
    }
    /* .county-borders {
        fill: none;
        stroke: #fff;
        stroke-width: 0.5px;
    }  */
    body{
        background-color: #12213a;
        
    }
    .taiwan-bar{
        position: absolute;
        right: 290px;
        top: 100px;
        
    }
    .bar-title{
        color: white;
        position:absolute;
        right: 200px;
        font-size:50px;
    }
    .bar-data{
        margin-top: 150px;
    }
</style>
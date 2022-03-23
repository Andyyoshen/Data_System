<template>
    <div>
        <input type="text" :value="score" >
        <div class="pannel" v-if="isVisible">
            content
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            isVisible:false
        }
    },
    props:{
        score:{
            type:Number,
            default:0
        }
    },
    computed:{
        formatData(){
          let {year,month,day} =   this.getYearMonthDay(this.value)
          return `${year}-${month}-${day}`
        }
    },
    methods:{
        getScore(){
            
            const x = this.score | 0 
            
            console.log(x)
        },
        getYearMonthDay(data){
            let year = data.getFullYear();
            let month = data.getMonth()+1;
            let day = data.getDate();
            return {year,month,day}
        },
        focus(){
            this.isVisible = true
        },
        blur(){
            this.isVisible = false
        }
    },
    mounted(){
        console.log("大家好")
        this.getScore()
    }
}
</script>

<template>
    <div>
        HAPPY~123
    </div>
</template>
<script>
export default {
    name:'app' ,
    created:function(){
        this.getdata()
    },   
    methods:{
        getdata(){
            console.log(process.env.NODE_ENV,'123')
        }
    }
}
</script>
<style>

</style>

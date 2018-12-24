<template>
    
</template>

<script>
    export default {
        name: "reload",
        beforeCreate:function () {
            let url = window.location.href
            // this.url=url
            let a = url.indexOf('=')
            // this.$cookies.set('wxtoken','OUPxgRObcfAdvoJn0aVB2MAWSuugrU8IgymoXM4MU6PbcrEHD254ZtJC6sD4Au9a')
            this.$cookies.set('wxtoken', url.substr(a + 1))
            this.$router.push('framework')




        }
    }
</script>

<style scoped>
    .active {

        color: #00aaee;
    }
</style>
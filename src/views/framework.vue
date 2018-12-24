<template>

    <div style="height: 100%">
        <router-view></router-view>

        <!--底部菜单-->
        <div class="bottMenu">
            <div @click="$router.push('/Home'),selected('主页')" :class="{active :active=='主页'}">
                <i style="font-size: 1.6rem;" class="iconfont icon-xiatubiao--copy"></i>
                <div>主页</div>
            </div>
            <div @click="$router.push('/ctiList'),selected('活动')" :class="{active :active=='活动'}">
                <i style="font-size: 1.6rem;"  class="iconfont icon-huodong"></i>
                <div>活动</div>
            </div>
            <div @click="$router.push('/MyctiList'),selected('我的')" :class="{active :active=='我的'}">
                <i style="font-size: 1.6rem"  class="iconfont icon-wode"></i>
                <div>我的</div>
            </div>

        </div>

    </div>

</template>

<script>
    export default {
        name: "framework",
        methods:{
            selected(active){
                this.active=active
                console.log(active)
            }
        },
        created:function () {
            this.active='主页' //设置主页默认高亮显示
        }
    }
</script>

<style scoped>
    .bottMenu {
        border-top: 1px solid #f8f8f8;
        width: 100%;
        height: 12%;
        position: fixed;
        margin: 0;
        padding: 0;
        bottom: 0;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        font-size: 0.8rem;
        background-color: #ffffff;
        z-index: 9999;
        text-align: center;


    }
    /*.bottMenu*/
    .bottMenu p{margin-top: -2%}
    .active {

        color: #00aaee;
    }
</style>
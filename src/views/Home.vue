<template>
    <div class="home">
        <!--首页轮播图-->
        <div style="width: 100%;background-color: #f8f8f8">
            <van-swipe
                    :autoplay="3000"
                    indicator-color="#f8f8f8"
                    :height="200"
                    >
                <van-swipe-item v-for="(item,index) in bannerImages" :key="index" >
                    <img style="width: 100%;height: 200px" :src="item">
                </van-swipe-item>
            </van-swipe>
        </div>


        <!--消息轮播-->
        <van-swipe
                vertical
                :autoplay="2000"
                indicator-color="white"
                style="width: 100%;height: 20px;font-size: 0.8rem"
                :show-indicators="false"
        >
            <van-swipe-item>恭喜xxx获得2元微信红包</van-swipe-item>
            <van-swipe-item>恭喜xxx获得2元微信红包</van-swipe-item>
            <van-swipe-item>恭喜xxx获得2元微信红包</van-swipe-item>
        </van-swipe>


        <!--首页菜单-->
        <div class="menuList">

            <div>
                <img src="../assets/img/index/evaluation.png">
                <div>每日签到</div>
            </div>
            <div>
                <img src="../assets/img/index/share.png">
                <div>晒图有礼</div>
            </div>
            <div>
                <img src="../assets/img/index/Basksingle.png">
                <div>评价有礼</div>
            </div>
            <div>
                <img src="../assets/img/index/collection.png">
                <div>分享有礼</div>
            </div>
        </div>


        <!--暂无活动配置-->
        <div class="No_gifts">
            <img src="../assets/img/index/No_gifts.png"/>
            <p>暂无礼品配置~</p>
            <!--<p>{{t}}</p>-->
        </div>
    </div>
</template>

<script>

    export default {
        name: 'home',
        data() {
            return {
                bannerImages: [],//首页轮播图
                t:'',
            }
        },
        created: function () {
            this.t=this.$cookies.get('wxtoken')
            //首页轮播图
            this.$axios.get(this.$store.state.bannerImages).then(res => {
                this.bannerImages = res.data.rs.bannerImages
            })
        },
        components: {}
    }
</script>
<style scoped>
    .home {
        background-color: #f8f8f8;
        height: 100%;
    }
    .menuList{
        background-color: #ffffff;
        display: flex;
        justify-content: space-around;
        padding: 2%;
        font-size: 0.8rem;
        text-align: center;
    }
    .menuList img{
        width: 60%;;
        height: auto;
    }
    .No_gifts{
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        height: 60vh;
    }

</style>
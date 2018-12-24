<template>
    <div style="width: 100%;height: 100vh;background-color: #f8f8f8">
        <div class="shop">
            <img :src="'http://'+cti.shopIcon">
            <span>{{cti.shop}}</span>
        </div>

        <div class="Ctidetails">
            <ul>
                <li>
                    <span>活动时间：</span>
                    <span class="information">{{cti.startTime}}-{{cti.endTime}}</span>
                </li>
                <li>
                    <span>活动店铺：</span>
                    <span class="information">{{cti.shop}}</span>
                </li>
                <li>
                    <span>面向粉丝：</span>
                    <span class="information">{{cti.participationCondition}}</span>
                </li>
                <li>
                    <span>参与条件：</span>
                    <span class="information">{{cti.participationCondition}}</span>
                </li>
                <li>
                    <span>活动奖励：</span>
                    <span class="information">{{cti.award}}</span>
                </li>
                <li>
                    <span style="font-size: 0.8rem">若领取奖励过程中遇到问题,请及时联系公众号客服</span>
                </li>
                <li>
                    <span style="font-size: 0.8rem">最终解释权归本公众号所有</span>
                </li>
            </ul>

            <van-cell style="padding: 0;margin:0" :to="{name:'award',params:{id:cti.id}}">
                <van-button type="primary"  style="width: 96%;margin: 2%">
                    去领取奖励
                </van-button>
            </van-cell>

        </div>

    </div>
</template>

<script>
    export default {
        name: "EventDetails",
        data(){
            return{
                cti: [],//单条活动信息
            }
        },
        created:function () {
            let ctiid=this.$route.params.id

            //根据id查询单条活动详情
            this.$axios.get(this.$store.state.activity, {
                params: {'id': ctiid}
            }).then(res => {
                this.cti = res.data.rs
                console.log(this.cti)
            })

        }
    }

</script>

<style scoped>


    .shop {
        width: 100%;
        background-color: #ffffff;
        display: flex;;
        justify-content: flex-start;
        align-items: center;
    }

    .shop img {
        width: 60px;
        height: 60px;
        margin: 2%;
        border-radius: 0%;

    }
    .Ctidetails{
        width: 100%;
        background-color: #ffffff;
        margin-top: 2%;
    }
    .Ctidetails ul {
        padding: 2%;
    }
    .information{
        text-indent: 1em;
        font-size: 0.8rem;
        display: block;
        line-height: 2em;

    }

</style>
<template>
    <div class="ParticipateDetails">
        <ul>
            <li>
                <span>活动名称：</span>
                <span>{{ctiData.activityName}}</span>
            </li>

            <li>
                <!--状态 01:待审核 02:审核通过 03:审核拒绝-->
                <span>活动状态：</span>
                <span>{{ctiData.state=='01'?'待审核':ctiData.state=='02'?'审核通过':'审核拒绝'}}</span>
            </li>

            <li>
                <span>评论信息：</span>
                <span>{{ctiData.comment}}</span>
            </li>
            <li>
                <span>参与时间：</span>
                <span>{{ctiData.createTime}}</span>
            </li>
            <li>
                <span>审核时间：</span>
                <span>{{ctiData.auditTime}}</span>
            </li>
            <li>
                <span>红包金额：</span>
                <span>{{ctiData.money/100}}元</span>
            </li>
            <li>
                <span>淘宝订单编号：</span>
                <span>{{ctiData.taobaoOrder}}</span>
            </li>
            <li>
                <span>好评图片：</span>
            </li>
            <li>
                <img style="width: 50%;height: 150px" :src="'http://'+ctiData.img" @click="bingImg(ctiData.img)"/>
            </li>
        </ul>

    </div>
</template>

<script>
    import {ImagePreview} from 'vant'

    export default {

        name: "ParticipateDetails",
        data() {
            return {
                ctiData: '',//活动详情
                ImagePreview: [],
            }
        },
        methods: {
            bingImg(img) {
                this.ImagePreview.length=0
                let Img = `http://${img}`
                this.ImagePreview.push(Img)
                ImagePreview(this.ImagePreview)
            }

        },
        created: function () {
            let id = this.$route.params.id //单条活动id
            this.$axios.get(this.$store.state.participate, {
                params: {id: id}
            }).then(res => {
                this.ctiData = res.data.rs
            })


        }
    }
</script>

<style scoped>
    .ParticipateDetails {
        width: 100%;
        height: 100vh;
        background-color: #f8f8f8;
    }

    .ParticipateDetails ul {
        width: 96%;
        background-color: #ffffff;
        padding: 2%;
        line-height: 2rem;
    }
</style>
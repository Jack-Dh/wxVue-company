<template>
    <div class="ctiListMian">
        <div class="user">
            <img :src="user.headimgurl">
            <span>{{user.nickname}}</span>
        </div>
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
            <div class="ctiList">

                <van-list
                        v-model="loading"
                        :finished="finished"
                        finished-text="没有更多了"
                        @load="onLoad"
                        :immediate-check="false"
                >
                    <van-cell
                            v-for="item in cliList"
                            :to="{name:'ctiDetails',params:{id:item.id}}"
                    >
                        <template slot="title">
                            <div style="display: flex;align-items: center;justify-content: space-between">
                                <img class="ctiListImg" :src="'http://'+item.shopIcon" v-lazy="'http://'+item.shopIcon">
                                <span style="margin-left: 2%">{{item.activityName}}</span>
                                <van-button size="small" round type="danger">立即参与</van-button>
                            </div>
                        </template>
                    </van-cell>
                </van-list>
            </div>
        </van-pull-refresh>
    </div>
</template>
<script>
    export default {
        name: "ctiList",
        data() {
            return {
                user: [],//用户信息
                cliList: [],//活动列表信息
                cti: [],//单条活动信息
                show: false,
                awardid: '',//单条活动id
                count: 0,//总条目数
                list: [],
                loading: false,   //是否处于加载状态
                finished: false,  //是否已加载完所有数据
                page: 0,//当前页码
                isLoading: false,
                a: 0,

            }
        },
        methods: {
            //下拉刷新
            onRefresh() {
                setTimeout(() => {


                    //活动列表
                    this.$axios.get(this.$store.state.ctiList, {
                        params: {size: 10}
                    }).then(res => {
                        console.log(res.data)
                        this.cliList = res.data.data
                        this.count = res.data.count
                        this.page = res.data.page
                        if (res.data.code==0){
                            this.$toast('刷新成功');
                            this.isLoading = false;
                        }


                    })




                }, 500);
            },
            //上滑加载
            onLoad() {

                if (this.cliList.length < this.count) {
                    //活动列表
                    this.$axios.get(this.$store.state.ctiList, {
                        params: {size: 10, page: ++this.page}
                    }).then(res => {
                        this.cliList = this.cliList.concat(res.data.data)
                        if (this.cliList.length >= this.count) {
                            this.finished = true
                            this.loading = false

                        }
                    })
                } else {
                    this.finished = true
                    this.loading = false
                }
            }
        },

        created: function () {
            //用户信息
            this.$axios.get(this.$store.state.user).then(res => {
                this.user = res.data.rs
                console.log(this.user)
            })


            //活动列表
            this.$axios.get(this.$store.state.ctiList,{params:{size:10}}).then(res => {
                console.log(res.data)
                this.cliList = res.data.data
                this.count = res.data.count
                this.page = res.data.page
            })

        }
    }
</script>

<style scoped>
    .Ctidetails {
        background-color: #ffffff;
        margin-top: 2%;
    }

    .Ctidetails ul {
        padding: 2%;
    }

    .information {
        text-indent: 1em;
        font-size: 0.8rem;
        display: block;
        line-height: 2em;

    }

    .ctiListMian {
        width: 100%;
        height: 100vh;
        background-color: #f8f8f8
    }

    .user {
        width: 100%;
        background-color: #ffffff;
        display: flex;;
        justify-content: flex-start;
        align-items: center;
    }

    .user img {
        width: 60px;
        height: 60px;
        margin: 2%;

    }

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

    .ctiList {
        width: 100%;
        background-color: #ffffff;
        margin-top: 3%;
        margin-bottom: 20%;
    }

    .ctiListImg {
        width: 60px;
        height: 60px;
        border-radius: 50%;
    }
</style>
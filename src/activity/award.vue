<template>

    <div>
        <div style="width: 100%;height: 100vh;background-color: #f8f8f8">
            <div>
                <van-cell-group>
                    <van-field
                            v-model="evaluation"
                            type="textarea"
                            required
                            clearable
                            placeholder="说说本次活动与不足的地方吧"

                    />


                    <van-field
                            v-model="taobaoNum"
                            type="number"
                            required
                            clearable
                            placeholder="淘宝订单编号"
                            :error-message="error"
                            @blur="Theinput"

                    />
                </van-cell-group>

                <van-uploader
                        :after-read="onRead"
                        ref="upImg"
                >
                    <img style="width: 100px;height: 100px;margin: 5%" src="../assets/img/hont.png" ref="showImg">
                </van-uploader>


                <van-button style="margin: 2%;width: 96%" size="large" type="primary" @click="submit">提交</van-button>
            </div>

            <van-dialog
                    v-model="alertData"
                    confirm-button-text="确定"
                    @confirm="cocalback"
            >
                <p style="text-align: center">{{Messag}}</p>

            </van-dialog>
        </div>
    </div>

</template>

<script>
    export default {
        name: "award",
        data() {
            return {
                evaluation: '',//用户评价
                taobaoNum: '',//淘宝订单编号
                error: '',//淘宝编号错误信息
                awardid: '',//单条活动id
                alertData: false,//消息弹框
                Messag: '',//提示消息
                ImgUrl: '1',//上传图片返回的地址
                ctiid: '',//单条活动id
            }
        },
        methods: {
            //弹框后的回调
            cocalback() {
                this.$router.push('/ctiList')
            },
            Theinput() {
                if (Number.isInteger(Number.parseInt(this.taobaoNum)) == false) {
                    this.error = '淘宝订单编号格式不正确'
                } else {
                    this.error = ''
                }
            },


            //上传图片
            onRead(file) {
                // console.log(file)
                this.$refs.showImg.src = file.content
                let fromDarta = new FormData()
                fromDarta.append('imgFile', file.file)
                this.$axios.post(this.$store.state.Upload, fromDarta).then(res => {
                    this.ImgUrl = res.data.url
                })
            },

            //用户提交活动
            submit() {
                if (this.evaluation == '' || this.taobaoNum == '' || this.error == '淘宝订单编号格式不正确') {
                    this.alertData = true
                    this.Messag = '所提交的信息不正确！'
                } else {
                    this.$axios.post(this.$store.state.upsert, {
                        activityId: this.ctiid,
                        comment: this.evaluation,
                        img: this.ImgUrl,
                        taobaoOrder: this.taobaoNum
                    }).then(res => {
                        this.alertData = true
                        if (res.data.code == 0) {
                            this.Messag = '参与成功！'
                        } else {
                            this.Messag = res.data.message
                        }
                    }).catch(err => {
                        console.log(err)
                    })
                }

            }
        },
        created: function () {
            this.ctiid = this.$route.params.id


        }
    }
</script>

<style scoped>

</style>
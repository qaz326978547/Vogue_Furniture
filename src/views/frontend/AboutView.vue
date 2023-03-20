<template>
    <div class="about-bg">
        <div class="d-flex justify-content-center align-items-center flex-column h-100">
            <h3>關於我們</h3>
            <h3>ABOUT US</h3>
        </div>
    </div>
    <div class="text-center lh-lg my-5 ">
        <h2 class="text-center">新的生活・新的想像</h2>
        <br>
        <p class="fs-5">每當需要家具時
            <br>
            總是會苦思著…空間風格該怎麼搭配
            <br>
            擔心品質、煩惱組裝、懷疑使用年限
            <br>
            最困難的是，搬家時如何處理它們？
            <br>
            於是，我們設計了羅根家具
        </p>
    </div>
    <img data-aos="fade-right" class="about-img d-md-block d-none" src="https://img.onl/ZgGMNG" alt="">
    <img data-aos="fade-right" class="about-img d-block d-md-none" src="https://img.onl/2SgKVd" alt="">
    <div class="text-center lh-lg my-5 ">
        <h2 class="text-center">陪你一起成就一個家</h2>
        <br>
        <p class="fs-5">
            我們每天的生活都在變化
            <br>
            轉變期的忐忑，我們都曾有過
            <br>
            總希望能有個安心的角落與夥伴
            <br>
            承接住所有的情緒
            <br>
            羅根家具與你一起，擁抱所有轉變
        </p>
    </div>
    <img data-aos="fade-right" class="about-img" src="https://img.onl/DafBn4" alt="" style="max-height: 500px;">
    <div class="container ">
        <div class="my-5  row g-2">
            <h3> 團隊成員 ABOUT TEAM</h3>
            <hr>
            <div data-aos="fade-up" class="card col-6 col-md-3" v-for="item in teams">
                <img :src="item.image" alt="...">
                <div class="card-body">
                    <p class=" text-center mb-1">
                        {{ item.title }}
                    </p>
                    <p class="fs-6 text-center">
                        {{ item.name }}
                    </p>
                </div>
            </div>
        </div>
        <hr>

        <h3 class="mb-3">聯絡我們 CONTENT US</h3>
    </div>
    <div class="content-us mb-5">
        <div class="container">
            <div class="row justify-content-center justify-content-md-end ">
                <Form v-slot="{ errors }" class="col-md-6 col-10 p-3 " style="background-color: rgb(0, 0, 0,50%);">
                    <div class="mb-3">
                        <label class="my-2 text-white" for="name"><span class="text-danger">*</span>姓名</label>
                        <Field id="name" name="姓名" rules="required" :class="{ 'is-invalid': errors['姓名'] }" type="text"
                            v-model="user.name" class="form-control" placeholder="請輸入姓名">
                        </Field>
                        <error-message name="姓名" class="invalid-feedback"></error-message>
                    </div>

                    <div class="mb-3">
                        <label class="my-2 text-white" for="email"><span class="text-danger">*</span>電子郵件</label>
                        <Field id="email" name="email" type="email" class="form-control" v-model="user.email"
                            :class="{ 'is-invalid': errors['email'] }" placeholder="請輸入 Email" rules="email|required">
                        </Field>
                        <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>
                    </div>
                    <div class="mb-3">
                        <label class="my-2 text-white" for="tel"><span class="text-danger">*</span>電話</label>
                        <Field id="tel" name="電話" v-model="user.tel" :rules="isPhone"
                            :class="{ 'is-invalid': errors['電話'] }" type="text" class="form-control"
                            placeholder="請輸入電話 ex:09xx-xxx-xxx">
                        </Field>
                        <ErrorMessage name="電話" class="invalid-feedback"></ErrorMessage>
                    </div>
                    <div class="mb-3">
                        <label class="my-2 text-white" for="message">備註</label>
                        <textarea class="form-control" name="message" id="message" rows="5"></textarea>
                    </div>
                    <button class="w-100 my-5 btn btn-outline-secondary" type="button" @click="onSubmit">送出表單</button>
                </Form>
            </div>
        </div>
    </div>
</template>


<script>
import alertStore from '../../stores/alertStore.js';
import { mapActions } from 'pinia';
export default {
    data() {
        return {
            teams: [
                {
                    title: '執行長&家具設計',
                    image: 'https://img.onl/K4ae4G',
                    name: '劉宜欣 Shi'
                },
                {
                    title: '產品經理',
                    image: 'https://img.onl/NZK3gr',
                    name: '陳欣 Sandy'
                },
                {
                    title: '設計師',
                    image: 'https://img.onl/kiWxIY',
                    name: '王又維 Rax'
                },
                {
                    title: '行銷企劃',
                    image: 'https://img.onl/q9Dzse',
                    name: '何星齊 Harry'
                },
            ],
            user: {
                name: '',
                email: '',
                tel: '',
            }
        }
    },
    methods: {
        ...mapActions(alertStore, ['getState']),
        onSubmit() {
            console.log(this.user);
            this.getState('已送出表單', true)
        },
        isPhone(value) {
            const phoneNumber = /^(09)[0-9]{8}$/
            return phoneNumber.test(value) ? true : '需要正確的電話號碼'
        }
    }
}


</script>
<style>
.card {
    border: none;
    border-radius: none;
}

.card img {
    border-radius: none;
}


.about-bg {
    background-image: url('https://img.onl/atXuM1');
    background-position: center;
    background-size: cover;
    height: 40vh;
}

.about-img {
    width: 100%;
    object-fit: cover;
}

.content-us {
    background-image: url('https://img.onl/bvss2A');
    background-position: center;
    background-size: cover;
}
</style>
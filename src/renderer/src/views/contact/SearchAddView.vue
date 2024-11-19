<template>
    <div>
        <Dialog 
            :show="dislogConfig.show"
            :title="dislogConfig.title"
            :buttons="dislogConfig.buttons"
            width="400px"
            :showCancel="false"
            @close="dislogConfig.show = false">
                <el-form :model="formData" :rules="rules" ref="formDataRef"  @submit.prevent>
                    <el-form-item label="" prop="">
                        <el-input 
                            type="textarea" 
                            :rows="5" 
                            clearable 
                            placeholder="输入申请信息，更容易被通过" 
                            v-model.trim="formData.applyInfo"
                            resize="none"
                            show-word-limit
                            maxlength="100"></el-input>
                    </el-form-item>
                </el-form>
        </Dialog>
    </div>
</template>

<script lang="ts" setup>
import { Service } from '@/backend';
import message from '@/plugin/message';
import { useContactStateStore } from '@/stores/ContactStateStore';
import { useUserInfoStore } from '@/stores/UserInfoStore';
import { nextTick, ref } from 'vue';

const userInfoStore = useUserInfoStore();
const contactStateStore = useContactStateStore();
const formData = ref({});
const formDataRef = ref();

const rules = {
    title: [{require: true, message: "请输入内容"}]
}

const dislogConfig = ref({
    show: false,
    title: "提交申请",
    buttons: [
        {
            type: "primary",
            text: "确定",
            click: (e: any) => {
                submitApply()
            }
        }
    ]
})

const emit = defineEmits(['reload']);
const submitApply = async () => {
    // @ts-ignore
    const { contactId, contactType, applyInfo } = formData.value;
    const res = await Service.addUsingPost({
        contactId: contactId,
        applyMessage: applyInfo
    });
    if(res.data === 0) {
        message.success("添加成功", null);
    } else if(res.data === 1) {
        message.success("申请成功，等待对方同意", null);
    } else {
        message.error(res.data.message, null);
    }
    dislogConfig.value.show = false;
    emit("reload");
    if(res.data === 0) {
        console.log('contactType: ', contactType);
        contactStateStore.setContactReload(contactType);
    }
}

const show = (data: any) => {
    dislogConfig.value.show = true;
    nextTick(() => {
        formDataRef.value.resetFields();
        console.log("data: ", data);
        
        formData.value = Object.assign({}, data);
        
        
        formData.value.applyInfo = "我是" + userInfoStore.getInfo().nickName;
    })
}

defineExpose({
    show,
})
</script>

<style lang="less" scoped>
</style>
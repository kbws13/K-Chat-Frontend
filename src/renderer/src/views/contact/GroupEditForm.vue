<template>
    <el-form :model="formData" :rules="rules" ref="formDataRef" label-width="80px" @submit.prevent>
        <el-form-item label="群名称" prop="groupName">
            <el-input
                maxlength="150"
                clearable
                placeholder="请输入群聊名称"
                v-model.trim="formData.groupName"
            ></el-input>
        </el-form-item>
        <el-form-item label="封面" prop="avatarFile">
            <AvatarUpload v-model="formData.avatarFile" ref="avatarUploadRef" @coverFile="saveCover"></AvatarUpload>
        </el-form-item>
        <el-from-item label="加入权限" prop="joinType">
            <el-radio-group v-model="formData.joinType">
                <el-radio label="1">管理员同意后加入</el-radio>
                <el-radio label="2">直接加入</el-radio>
            </el-radio-group>
        </el-from-item>
        <el-form-item label="公告" prop="groupNotice">
            <el-input
                clearable
                placeholder="请输入群公告"
                v-model.trim="formData.groupNotice"
                type="textarea"
                rows="5"
                maxlength="300"
                :show-word-limit="true"
                resize="none"
            ></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submit">
                {{ formData.groupId ? '修改群聊' : '创建群聊' }}
            </el-button>
        </el-form-item>
    </el-form>
</template>
<script lang="ts" setup>
import { Service } from '@/backend';
import message from '@/plugin/message';
import { useContactStateStore } from '@/stores/ContactStateStore';
import { ref } from 'vue';

const formData = ref({});
const formDataRef = ref();
const contactStateStore = useContactStateStore();
const rules = {
    groupName: [{require: true, message: '请输入群名称'}],
    joinType: [{require: true, message: '请选择加入权限'}],
    avatarFile: [{require: true, message: '请选择头像'}],
}

const emit = defineEmits(['editBack']);
const submit = async () => {
    formDataRef.value.validate(async (valid: any) => {
        if(!valid) {
            return;
        }
        // 准备请求参数
        let params = { ...formData.value };
        const { avatarCover, avatarFile, id, joinType, name, notice } = params;

        // 调用 API
        const res = await Service.addGroupUsingPost(
            avatarCover,        // Blob 数据
            avatarFile,         // Blob 数据
            id,                 // String 数据
            joinType,           // 数字类型
            name,               // String 类型
            notice              // String 类型
        );
        if(!res) {
            return;
        }
        if(params.groupId) {
            message.success("修改群组成功", null);
            emit('editBack');
        } else {
            message.success("创建群组成功", null);
        }
        formDataRef.value.resetFields();
        contactStateStore.setContactReload("MY");
    })
}
</script>

<style lang="scss" scoped>
</style>
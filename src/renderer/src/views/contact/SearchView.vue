<template>
    <ContentPanel>
        <div class="search-form">
            <el-input clearable placeholder="请输入用户ID或者群组ID" v-model="contactId" size="large" @keydown.enter="search"></el-input>
            <div class="search-btn iconfont icon-search" @click="search"></div>
        </div>
        <div v-if="searchResult && Object.keys(searchResult).length > 0" class="search-result-panel">
            <div class="search-result">
                <span class="contact-type">{{ contactTypeName }}</span>
                <UserBaseInfo :userInfo="searchResult" :showArea="searchResult.contactType == 'USER'"></UserBaseInfo>
            </div>
            <div class="op-btn" v-if="searchResult.contactId != userInfoStore.getInfo().userId">
                <el-button type="primary" v-if="
                    searchResult.status == null ||
                    searchResult.status == 0 ||
                    searchResult.status == 2 ||
                    searchResult.status == 3 ||
                    searchResult.status == 4
                "
                @click="applyContact">{{ searchResult.contactType == "USER" ? "添加联系人" : "申请加入群组" }}</el-button>
                <el-button type="primary" v-if="searchResult.status == 1" @click="sendMessage">发消息</el-button>
                <span v-if="searchResult.status == 5 || searchResult.status == 6">对方拉黑了你</span>
            </div>
        </div>
        <div v-if="!searchResult" class="no-data">没有搜索到任何结果</div>
    </ContentPanel>
    <SearchAddView ref="searchAddRef" @reload="resetForm"></SearchAddView>
</template>

<script lang="ts" setup>
import { Service, UserContactSearchResultVO } from '@/backend';
import UserBaseInfo from '@/componments/UserBaseInfo.vue';
import message from '@/plugin/message';
import { useUserInfoStore } from '@/stores/UserInfoStore';
import { computed, ref } from 'vue';
import SearchAddView from './SearchAddView.vue';

const contactId = ref();
const userInfoStore = useUserInfoStore();
const searchResult = ref<UserContactSearchResultVO>();
const search = async () => {
    if(!contactId.value) {
        message.warning("请输入用户ID或者群组ID", null);
    }
    const res = await Service.searchUsingPost(contactId.value);
    if (res.code === 0) {
        searchResult.value = res.data;
    } else {
        message.error(res.message, null)
    }
}

const contactTypeName = computed(() => {
    if(userInfoStore.getInfo().userId === searchResult.value?.contactId) {
        return "自己";
    }
    if(searchResult.value?.contactType === "USER") {
        return "用户";
    }
    if(searchResult.value?.contactType === "GROUP") {
        return "群组";
    }
})

const searchAddRef = ref();
const applyContact = () => {
    searchAddRef.value.show(searchResult.value)
}
</script>

<style lang="less" scoped>
.search-form {
    padding-top: 50px;
    display: flex;
    align-items: center;
    :deep(.el-input_wrapper) {
        border-radius: 4px 0px 0px 2px;
        border-right: none;
    }
    .search-btn {
        background: #07c160;
        color: #fff;
        line-height: 40px;
        width: 80px;
        text-align: center;
        border-radius: 0px 5px 5px 0px;
        cursor: pointer;
        &:hover {
            background: #0dd36c;
        }
    }
}
.no-data {
    padding: 30px 0px;
}
.search-result-panel {
    .search-result {
        padding: 30px 20px 20px 20px;
        background: #fff;
        border-radius: 5px;
        margin-top: 10px;
        position: relative;
        .contact-type {
            position: absolute;
            left: 0px;
            top: 0px;
            background: #2cb6fe;
            padding: 2px 5px;
            color: #fff;
            border-radius: 5px 0px 0px 0px;
            font-size: 12px;
        }
    }
    .op-btn {
        border-radius: 5px;
        margin-top: 10px;
        padding: 10px;
        background: #fff;
        text-align: center;
    }
}
</style>
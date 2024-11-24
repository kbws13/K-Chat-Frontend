<template>
    <ContentPanel>
        <div class="user-info">
            <UserBaseInfo :userInfo="userInfo"></UserBaseInfo>
            <div class="more-op">
                <el-dropdown placement="bottom-end" trigger="click">
                    <span class="el-dropdown-link">
                        <div class="iconfont icon-more"></div>
                    </span>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item @click="addContact2BlackList">加入黑名单</el-dropdown-item>
                            <el-dropdown-item @click="delContact">删除联系人</el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
            </div>
        </div>
        <div class="part-item">
            <div class="part-title">个性签名</div>
            <div class="part-content">{{ userInfo?.personalSignature || '-' }}</div>
        </div>
        <div class="send-message" @click="sendMessage">
            <div class="iconfont icon-chat2"></div>
            <div class="text">发消息</div>
        </div>
    </ContentPanel>
</template>

<script lang="ts" setup>
import { Service, UserVO } from '@/backend';
import ContentPanel from '@/componments/ContentPanel.vue';
import UserBaseInfo from '@/componments/UserBaseInfo.vue';
import { useContactStateStore } from '@/stores/ContactStateStore';
import util from '@/utils/util';
import { ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const contactStateStore = useContactStateStore();

const userInfo = ref<UserVO>();
const loadUserDetail = async(contactId: string) => {
    const res = await Service.getUserInfoUsingGet(contactId);
    if(!res) {
        return;
    }
    userInfo.value = res.data;
}

// 加入黑名单
const addContact2BlackList = () => {
    util.confirm({
        message: '确定要将该用户加入黑名单吗?',
        okFun: async () => {
            const res = await Service.blackContactUsingPost({
                id: userInfo.value?.userId
            });
            if(!res) {
                return;
            }
            delContactData();
        }
    })
}

// 删除联系人
const delContact = () => {
    util.confirm({
        message: '确定要删除联系人吗?',
        okFun: async () => {
            const res = await Service.deleteContactUsingPost({
                id: userInfo.value?.userId
            });
            if(!res) {
                return;
            }
            delContactData();
        }
    })
}

const delContactData = () => {
    contactStateStore.setContactReload("REMOVE_USER");
}

watch(
    () => route.query.contactId,
    (newVal, oldVal) => {
        if(newVal) {
            loadUserDetail(newVal as string);
        }
    },
    { immediate: true, deep: true }
)

</script>

<style lang="scss" scoped>
.user-info {
    position: relative;
    .more-op {
        position: absolute;
        right: 0px;
        top: 20px;
        .icon-more {
            color: #9e9e9e;
            &:hover {
                background: #dddddd;
            }
        }
    }
}

.part-item {
    display: flex;
    border-bottom: 1px solid #eaeaea;
    padding: 20px 0px;
    .part-title {
        width: 60px;
        color: #9e9e9e;
    }
    .part-content {
        flex: 1;
        margin-left: 15px;
        color: #161616;
    }
}

.send-message {
    width: 80px;
    margin: 0px auto;
    text-align: center;
    margin-top: 20px;
    color: #7d8cac;
    padding: 5px;
    .icon-chat2 {
        font-size: 23px;
    }
    .text {
        font-size: 12px;
        margin-top: 5px;
    }
    &:hover {
        background: #e9e9e9;
        cursor: pointer;
    }
}
</style>
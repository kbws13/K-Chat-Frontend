<template>
    <div>
        <BaseAvatar
            :userId="userId"
            :width="width"
            :borderRadius="borderRadius"
            :showDetail="false"
            v-if="userId == 'Urobot'"
        ></BaseAvatar>
        <el-popover
            v-else
            :width="300"
            placement="right-start"
            :show-arrow="false"
            trigger="click"
            transition="none"
            :hide-after="0"
            @show="getContactInfo"
            ref="popoverRef"
        >
            <template #reference>
                <BaseAvatar
                    :userId="userId"
                    :width="width"
                    :borderRadius="borderRadius"
                    :showDetail="false"
                ></BaseAvatar>
            </template>
            <template #default>
                <div class="popover-user-panel">
                    <UserBaseInfo :userInfo="userInfo"></UserBaseInfo>
                    <div class="op-btn" v-if="userId !== userInfoStore.getInfo().userId">
                        <el-button v-if="userInfo.contactStatus == 1" type="primary" @click="sendMessage">
                            发送消息
                        </el-button>
                        <el-button v-else type="primary" @click="addContact">
                            加为好友
                        </el-button>
                    </div>
                </div>
            </template>
        </el-popover>
    </div>
</template>

<script lang="ts" setup>
import { useUserInfoStore } from '@/stores/UserInfoStore';
import BaseAvatar from './BaseAvatar.vue';
import UserBaseInfo from './UserBaseInfo.vue';
import { ref } from 'vue';
import { Service, UserVO } from '@/backend';

const userInfoStore = useUserInfoStore();
const props = defineProps({
    userId: {
        type: String,
    },
    width: {
        type: Number,
        default: 40
    },
    borderRadius: {
        type: Number,
        default: 0
    },
    showDetail: {
        type: Boolean,
        default: false
    }
})

const userInfo = ref<UserVO>({});
const getContactInfo = async () => {
    console.log("props.userId: " + props.userId);
    
    userInfo.value.userId = props.userId;
    
    if(userInfoStore.getInfo().userId == props.userId) {
        userInfo.value = userInfoStore.getInfo();
    } else {
        const res = await Service.getContactInfoUsingGet(props.userId as string);
        if(!res) {
            return;
        }
        userInfo.value = Object.assign({}, res.data);
    }
}

const sendMessage = () => {

}

const addContact = () => {

}
</script>
<style lang="scss" scoped>
.op-btn {
    text-align: center;
    border-top: 1px solid #eaeaea;
    padding-top: 10px;
}
</style>
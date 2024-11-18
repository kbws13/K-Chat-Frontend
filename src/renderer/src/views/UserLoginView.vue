<template>
  <div class="login-panel">
    <div class="title drag">K-Chat</div>
    <div v-if="showLoading" class="loading-panel">
      <img src="../assets/img/loading.gif">
    </div>
    <div class="login-form" v-else>
      <div class="error-msg">{{ errorMsg }}</div>
      <el-form :model="formData" :rules="rules" ref="formDataRef" label-width="0px" @submit.prevent>
        <el-form-item prop="email">
          <el-input size="large" clearable placeholder="请输入邮箱" maxlength="30" @focus="cleanVerify"
                    v-model.trim="formData.email">
            <template #prefix>
              <span class="iconfont icon-email"></span>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="nickName" v-if="!isLogin">
          <el-input size="large" clearable placeholder="请输入昵称" maxlength="15" @focus="cleanVerify"
                    v-model.trim="formData.nickName">
            <template #prefix>
              <span class="iconfont icon-user-nick"></span>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input size="large" show-password clearable placeholder="请输入密码" @focus="cleanVerify"
                    v-model="formData.password">
            <template #prefix>
              <span class="iconfont icon-password"></span>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="checkCode">
          <div class="check-code-panel">
            <el-input size="large" clearable placeholder="请输入验证码" @focus="cleanVerify"
                      v-model="formData.checkCode">
              <template #prefix>
                <span class="iconfont icon-checkcode"></span>
              </template>
            </el-input>
            <img :src="checkCodeUrl" class="check-code" @click="changeCheckCode()">
          </div>
        </el-form-item>
        <el-form-item prop="email">
          <el-button type="primary" class="login-btn" @focus="cleanVerify" @click="submit">
            {{ isLogin ? "登录" : "注册" }}
          </el-button>
        </el-form-item>
        <div class="bottom-link">
          <span class="a-link" @click="changeOpType">{{ isLogin ? "没有账号?" : "已有账号?" }}</span>
        </div>
      </el-form>
    </div>
  </div>
  <WinOption :showSetTop="false" :showMin="false" :showMax="false" :closeType="0"></WinOption>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import util from "@/utils/util";
import { Service } from "@/backend";
import { md5 } from "js-md5";
import message from "@/plugin/message";
import { useUserInfoStore } from "@/stores/UserInfoStore";
import { useRouter } from "vue-router";


const useInfoStore = useUserInfoStore();
const formData = ref({
  email: '',
  password: '',
  checkCode: '',
  nickName: ''
});
const formDataRef = ref();
const router = useRouter();
const rules = {
  email: [{ require: true, message: "请输入邮箱" }],
  password: [{ require: true, message: "请输入密码" }],
  checkCode: [{ require: true, message: "请输入验证码" }]
};
const isLogin = ref(true);
const errorMsg = ref();
const checkCodeUrl = ref(null);
const showLoading = ref(false);

const changeOpType = () => {
  window.ipcRenderer.send("loginOrRegister", !isLogin.value);
  isLogin.value = !isLogin.value;
};

const submit = async () => {
  cleanVerify();
  if (!checkValue("checkEmail", formData.value.email, "请输入邮箱")) return;
  if (!checkValue("checkPassword", formData.value.password, "请输入密码")) return;
  if (!checkValue(null, formData.value.checkCode, "请输入验证码")) return;
  if (!isLogin.value && !checkValue(null, formData.value.nickName, "请输入昵称")) return;
  let res = null;
  if (isLogin.value) {
    showLoading.value = true;
    res = await Service.userLoginUsingPost({
      email: formData.value.email,
      password: md5(formData.value.password),
      checkCode: formData.value.checkCode,
      checkCodeKey: localStorage.getItem("checkCodeKey")!
    });
  } else {
    res = await Service.userRegisterUsingPost({
      email: formData.value.email,
      nickName: formData.value.nickName,
      password: formData.value.password,
      checkCode: formData.value.checkCode,
      checkCodeKey: localStorage.getItem("checkCodeKey")!
    });
  }
  if (res.code == 0) {
    console.log(res);
    useInfoStore.setInfo(res.data);
    localStorage.setItem("token", res.data.token);
    await router.push("/main");

    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;
    window.ipcRenderer.send("openChat", {
      email: formData.value.email,
      token: res.data.token,
      userId: res.data.userId,
      nickName: res.data.nickName,
      admin: res.data.role == 'admin',
      screenWidth: screenWidth,
      screenHeight: screenHeight
    })
  } else {
    message.error("登录失败, " + res.message, null);
    await changeCheckCode();
  }
};

// 获取验证码
const changeCheckCode = async () => {
  const res = await Service.checkCodeUsingGet();
  checkCodeUrl.value = res.data?.checkCode;
  localStorage.setItem("checkCodeKey", res.data?.checkCodeKey);
};
changeCheckCode();
const checkValue = (type: any, value: string, msg: string) => {
  if (util.isEmpty(value)) {
    errorMsg.value = msg;
    return false;
  }
  return true;
};

const cleanVerify = () => {
  errorMsg.value = null;
};
</script>
<style lang="less" scoped>
.email-select {
  width: 250px;
}

.loading-panel {
  height: calc(100vh - 32px);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  img {
    width: 300px;
  }
}

.login-panel {
  background: #fff;
  border-radius: 3px;
  border: 1px solid #ddd;

  .title {
    height: 30px;
    padding: 5px 0 0 10px;
  }

  .login-form {
    padding: 0 15px 29px 15px;

    :deep(.el-input_wrapper) {
      box-shadow: none;
      border-radius: 0;
    }

    .el-form-item {
      border-bottom: 1px solid #ddd;
    }

    .email-panel {
      align-items: center;
      width: 100%;
      display: flex;

      .input {
        flex: 1;
      }

      .icon-down {
        margin-left: 3px;
        width: 16px;
        cursor: pointer;
        border: none;
      }
    }

    .error-msg {
      line-height: 30px;
      height: 30px;
      color: #fb7373;
    }

    .check-code-panel {
      display: flex;

      .check-code {
        cursor: pointer;
        width: 120px;
        margin-left: 5px;
      }
    }

    .login-btn {
      margin-top: 20px;
      width: 100%;
      background: #07c160;
      height: 36px;
      font-size: 16px;
    }

    .bottom-link {
      text-align: right;
    }
  }
}
</style>

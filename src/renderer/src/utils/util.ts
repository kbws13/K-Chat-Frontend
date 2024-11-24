import { ElMessageBox } from "element-plus";

const isEmpty = (str: string) => {
  return str == null || str == "" || str == undefined;
}

const getAreaInfo = (data) => {
  if(isEmpty(data)) {
    return "-";
  }
  return data.replace(",", " ");
}

const confirm = ({message, okFun, showCancelBtn = true, okText = '确定'}) => {
  ElMessageBox.confirm(message, '提示', {
    "close-on-click-modal": false,
    confirmButtonText: okText,
    cancelButtonText: '取消',
    showCancelButton: showCancelBtn,
    type: 'info',
  }).then(async () => {
    if(okFun) {
      okFun();
    }
  }).catch(() => {});
}

export default {
  isEmpty,
  getAreaInfo,
  confirm,
}




/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseResponse } from '../models/BaseResponse';
import type { BaseResponse_CheckCodeVO_ } from '../models/BaseResponse_CheckCodeVO_';
import type { BaseResponse_GroupInfo_ } from '../models/BaseResponse_GroupInfo_';
import type { BaseResponse_GroupInfoVO_ } from '../models/BaseResponse_GroupInfoVO_';
import type { BaseResponse_int_ } from '../models/BaseResponse_int_';
import type { BaseResponse_List_GroupInfo_ } from '../models/BaseResponse_List_GroupInfo_';
import type { BaseResponse_List_UserContactVO_ } from '../models/BaseResponse_List_UserContactVO_';
import type { BaseResponse_MessageSendDTO_ } from '../models/BaseResponse_MessageSendDTO_';
import type { BaseResponse_Page_GroupInfo_ } from '../models/BaseResponse_Page_GroupInfo_';
import type { BaseResponse_Page_User_ } from '../models/BaseResponse_Page_User_';
import type { BaseResponse_Page_UserBeauty_ } from '../models/BaseResponse_Page_UserBeauty_';
import type { BaseResponse_Page_UserContactApplyVO_ } from '../models/BaseResponse_Page_UserContactApplyVO_';
import type { BaseResponse_string_ } from '../models/BaseResponse_string_';
import type { BaseResponse_SysSetting_ } from '../models/BaseResponse_SysSetting_';
import type { BaseResponse_UserContactSearchResultVO_ } from '../models/BaseResponse_UserContactSearchResultVO_';
import type { BaseResponse_UserVO_ } from '../models/BaseResponse_UserVO_';
import type { ChangeGroupUserDTO } from '../models/ChangeGroupUserDTO';
import type { ChatSendMessageDTO } from '../models/ChatSendMessageDTO';
import type { DeleteRequest } from '../models/DeleteRequest';
import type { DownloadFileDTO } from '../models/DownloadFileDTO';
import type { GroupInfoQueryDTO } from '../models/GroupInfoQueryDTO';
import type { PageRequest } from '../models/PageRequest';
import type { SysSetting } from '../models/SysSetting';
import type { UserBeautyAddDTO } from '../models/UserBeautyAddDTO';
import type { UserBeautyQuery } from '../models/UserBeautyQuery';
import type { UserContactAddRequest } from '../models/UserContactAddRequest';
import type { UserContactApplyDealWithRequest } from '../models/UserContactApplyDealWithRequest';
import type { UserLoginRequest } from '../models/UserLoginRequest';
import type { UserQueryRequest } from '../models/UserQueryRequest';
import type { UserRegisterRequest } from '../models/UserRegisterRequest';
import type { UserUpdateRequest } from '../models/UserUpdateRequest';
import type { UserUpdateStatusRequest } from '../models/UserUpdateStatusRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class Service {
    /**
     * 强制下线
     * @param deleteRequest deleteRequest
     * @returns BaseResponse_string_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static forceOffLineUsingPost(
        deleteRequest: DeleteRequest,
    ): CancelablePromise<BaseResponse_string_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/admin/forceOffLine',
            body: deleteRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * 加载用户列表
     * @param userQueryRequest userQueryRequest
     * @returns BaseResponse_Page_User_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static loadUserUsingPost(
        userQueryRequest: UserQueryRequest,
    ): CancelablePromise<BaseResponse_Page_User_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/admin/loadUser',
            body: userQueryRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * 更新用户状态
     * @param userUpdateStatusRequest userUpdateStatusRequest
     * @returns BaseResponse_string_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static updateUserStatusUsingPost(
        userUpdateStatusRequest: UserUpdateStatusRequest,
    ): CancelablePromise<BaseResponse_string_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/admin/updateUserStatus',
            body: userUpdateStatusRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * 下载文件
     * @param downloadFileDto downloadFileDTO
     * @returns any OK
     * @throws ApiError
     */
    public static downloadFileUsingPost(
        downloadFileDto: DownloadFileDTO,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/chat/downloadFile',
            body: downloadFileDto,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * 发送信息接口
     * @param chatSendMessageDto chatSendMessageDTO
     * @returns BaseResponse_MessageSendDTO_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static sendMessageUsingPost(
        chatSendMessageDto: ChatSendMessageDTO,
    ): CancelablePromise<BaseResponse_MessageSendDTO_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/chat/sendMessage',
            body: chatSendMessageDto,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * 上传文件
     * @param cover cover
     * @param file file
     * @param messageId messageId
     * @returns BaseResponse_string_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static uploadFileUsingPost(
        cover?: Blob,
        file?: Blob,
        messageId?: number,
    ): CancelablePromise<BaseResponse_string_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/chat/uploadFile',
            query: {
                'messageId': messageId,
            },
            formData: {
                'cover': cover,
                'file': file,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * 申请
     * @param userContactAddRequest userContactAddRequest
     * @returns BaseResponse_int_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static addUsingPost(
        userContactAddRequest: UserContactAddRequest,
    ): CancelablePromise<BaseResponse_int_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/contact/applyAdd',
            body: userContactAddRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * 拉黑联系人
     * @param blackRequest blackRequest
     * @returns BaseResponse_string_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static blackContactUsingPost(
        blackRequest: DeleteRequest,
    ): CancelablePromise<BaseResponse_string_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/contact/blackContact',
            body: blackRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * 处理申请
     * @param dealWithRequest dealWithRequest
     * @returns BaseResponse_string_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static dealWithApplyUsingPost(
        dealWithRequest: UserContactApplyDealWithRequest,
    ): CancelablePromise<BaseResponse_string_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/contact/dealWithApply',
            body: dealWithRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * 删除联系人
     * @param deleteRequest deleteRequest
     * @returns BaseResponse_string_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static deleteContactUsingPost(
        deleteRequest: DeleteRequest,
    ): CancelablePromise<BaseResponse_string_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/contact/deleteContact',
            body: deleteRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * 获取联系人信息
     * @param contactId contactId
     * @returns BaseResponse_UserVO_ OK
     * @throws ApiError
     */
    public static getContactInfoUsingGet(
        contactId: string,
    ): CancelablePromise<BaseResponse_UserVO_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/contact/getContactInfo/{contactId}',
            path: {
                'contactId': contactId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * 获取其他用户信息
     * @param contactId contactId
     * @returns BaseResponse_UserVO_ OK
     * @throws ApiError
     */
    public static getUserInfoUsingGet(
        contactId: string,
    ): CancelablePromise<BaseResponse_UserVO_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/contact/getUserInfo/{contactId}',
            path: {
                'contactId': contactId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * 加载申请列表
     * @param pageRequest pageRequest
     * @returns BaseResponse_Page_UserContactApplyVO_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static loadApplyUsingPost(
        pageRequest: PageRequest,
    ): CancelablePromise<BaseResponse_Page_UserContactApplyVO_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/contact/loadApply',
            body: pageRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * 获取联系人列表
     * @param contactType contactType
     * @returns BaseResponse_List_UserContactVO_ OK
     * @throws ApiError
     */
    public static myContactUsingGet(
        contactType: string,
    ): CancelablePromise<BaseResponse_List_UserContactVO_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/contact/myContact/{contactType}',
            path: {
                'contactType': contactType,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * 搜索联系人/群组
     * @param contactId contactId
     * @returns BaseResponse_UserContactSearchResultVO_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static searchUsingPost(
        contactId: string,
    ): CancelablePromise<BaseResponse_UserContactSearchResultVO_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/contact/search',
            query: {
                'contactId': contactId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * 上传文件
     * @param file file
     * @returns BaseResponse_string_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static uploadAudioUsingPost(
        file: Blob,
    ): CancelablePromise<BaseResponse_string_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/file/upload',
            formData: {
                'file': file,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * 添加群组
     * @param avatarCover avatarCover
     * @param avatarFile avatarFile
     * @param id id
     * @param joinType joinType
     * @param name name
     * @param notice notice
     * @returns BaseResponse_string_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static addGroupUsingPost(
        avatarCover?: Blob,
        avatarFile?: Blob,
        id?: string,
        joinType?: number,
        name?: string,
        notice?: string,
    ): CancelablePromise<BaseResponse_string_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/group/add',
            query: {
                'id': id,
                'notice': notice,
            },
            formData: {
                'avatarCover': avatarCover,
                'avatarFile': avatarFile,
            },
            body: name,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * 添加或移除群组人员
     * @param changeGroupUserDto changeGroupUserDTO
     * @returns BaseResponse OK
     * @returns any Created
     * @throws ApiError
     */
    public static addOrRemoveGroupUserUsingPost(
        changeGroupUserDto: ChangeGroupUserDTO,
    ): CancelablePromise<BaseResponse | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/group/addOrRemoveGroupUser',
            body: changeGroupUserDto,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * 解散群聊
     * @param deleteRequest deleteRequest
     * @returns BaseResponse_string_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static dissolutionGroupUsingPost(
        deleteRequest: DeleteRequest,
    ): CancelablePromise<BaseResponse_string_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/group/dissolutionGroup',
            body: deleteRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * 获取群组详情
     * @param groupId groupId
     * @returns BaseResponse_GroupInfo_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static getGroupInfoUsingPost(
        groupId?: string,
    ): CancelablePromise<BaseResponse_GroupInfo_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/group/getGroupInfo',
            body: groupId,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * 获取聊天会话群聊详情
     * @param groupId groupId
     * @returns BaseResponse_GroupInfoVO_ OK
     * @throws ApiError
     */
    public static getGroupInfo4ChatUsingGet(
        groupId: string,
    ): CancelablePromise<BaseResponse_GroupInfoVO_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/group/getGroupInfo4Chat/{groupId}',
            path: {
                'groupId': groupId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * 获取我创建的群组
     * @returns BaseResponse_List_GroupInfo_ OK
     * @throws ApiError
     */
    public static getMyGroupUsingGet(): CancelablePromise<BaseResponse_List_GroupInfo_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/group/getMyGroup',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * 退群
     * @param deleteRequest deleteRequest
     * @returns BaseResponse_string_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static leaveGroupUsingPost(
        deleteRequest: DeleteRequest,
    ): CancelablePromise<BaseResponse_string_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/group/leaveGroup',
            body: deleteRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * 加载群聊列表
     * @param groupInfoQueryDto groupInfoQueryDTO
     * @returns BaseResponse_Page_GroupInfo_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static loadGroupInfoUsingPost(
        groupInfoQueryDto: GroupInfoQueryDTO,
    ): CancelablePromise<BaseResponse_Page_GroupInfo_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/group/loadGroupInfo',
            body: groupInfoQueryDto,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * 获取系统设置
     * @returns BaseResponse_SysSetting_ OK
     * @throws ApiError
     */
    public static getSystemSettingUsingGet(): CancelablePromise<BaseResponse_SysSetting_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/system/get',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * 保存系统设置
     * @param sysSetting sysSetting
     * @returns BaseResponse_string_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static saveSystemSettingUsingPost(
        sysSetting: SysSetting,
    ): CancelablePromise<BaseResponse_string_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/system/save',
            body: sysSetting,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * 生成验证码
     * @returns BaseResponse_CheckCodeVO_ OK
     * @throws ApiError
     */
    public static checkCodeUsingGet(): CancelablePromise<BaseResponse_CheckCodeVO_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/user/checkCode',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * 获取当前登录用户
     * @returns BaseResponse_UserVO_ OK
     * @throws ApiError
     */
    public static getCurrentUserUsingGet(): CancelablePromise<BaseResponse_UserVO_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/user/getCurrentUser',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * 用户登录
     * @param userLoginRequest userLoginRequest
     * @returns BaseResponse_UserVO_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static userLoginUsingPost(
        userLoginRequest: UserLoginRequest,
    ): CancelablePromise<BaseResponse_UserVO_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/user/login',
            body: userLoginRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * 退出登录
     * @returns BaseResponse_string_ OK
     * @throws ApiError
     */
    public static logoutUsingGet(): CancelablePromise<BaseResponse_string_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/user/logout',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * 用户注册
     * @param userRegisterRequest userRegisterRequest
     * @returns BaseResponse_string_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static userRegisterUsingPost(
        userRegisterRequest: UserRegisterRequest,
    ): CancelablePromise<BaseResponse_string_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/user/register',
            body: userRegisterRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * 获取系统设置
     * @returns BaseResponse_SysSetting_ OK
     * @throws ApiError
     */
    public static getSysSettingUsingGet(): CancelablePromise<BaseResponse_SysSetting_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/user/sysSetting',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * 修改用户密码
     * @param password password
     * @returns BaseResponse_string_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static updatePasswordUsingPost(
        password: string,
    ): CancelablePromise<BaseResponse_string_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/user/updatePwd',
            query: {
                'password': password,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * 修改用户信息
     * @param userUpdateRequest userUpdateRequest
     * @returns BaseResponse_UserVO_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static updateUserInfoUsingPost(
        userUpdateRequest: UserUpdateRequest,
    ): CancelablePromise<BaseResponse_UserVO_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/user/updateUser',
            body: userUpdateRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * 保存靓号
     * @param userBeautyAddDto userBeautyAddDTO
     * @returns BaseResponse_string_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static addUserBeautyUsingPost(
        userBeautyAddDto: UserBeautyAddDTO,
    ): CancelablePromise<BaseResponse_string_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/userBeauty/add',
            body: userBeautyAddDto,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * 加载靓号列表
     * @param userBeautyQuery userBeautyQuery
     * @returns BaseResponse_Page_UserBeauty_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static loadBeautyAccountListUsingPost(
        userBeautyQuery: UserBeautyQuery,
    ): CancelablePromise<BaseResponse_Page_UserBeauty_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/userBeauty/loadBeautyAccountList',
            body: userBeautyQuery,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
}

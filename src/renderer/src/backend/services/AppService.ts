/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AppUpdateAddDTO } from '../models/AppUpdateAddDTO';
import type { AppUpdateCheckDTO } from '../models/AppUpdateCheckDTO';
import type { AppUpdatePostDTO } from '../models/AppUpdatePostDTO';
import type { AppUpdateQueryDTO } from '../models/AppUpdateQueryDTO';
import type { AppUpdateUpdateDTO } from '../models/AppUpdateUpdateDTO';
import type { BaseResponse_AppUpdateVO_ } from '../models/BaseResponse_AppUpdateVO_';
import type { BaseResponse_Page_AppUpdate_ } from '../models/BaseResponse_Page_AppUpdate_';
import type { BaseResponse_string_ } from '../models/BaseResponse_string_';
import type { DeleteRequest } from '../models/DeleteRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AppService {
    /**
     * 添加更新
     * @param appUpdateAddDto appUpdateAddDTO
     * @returns BaseResponse_string_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static addAppUpdateUsingPost(
        appUpdateAddDto: AppUpdateAddDTO,
    ): CancelablePromise<BaseResponse_string_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/appUpdate/add',
            body: appUpdateAddDto,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * 检测版本
     * @param appUpdateCheckDto appUpdateCheckDTO
     * @returns BaseResponse_AppUpdateVO_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static checkVersionUsingPost(
        appUpdateCheckDto: AppUpdateCheckDTO,
    ): CancelablePromise<BaseResponse_AppUpdateVO_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/appUpdate/check',
            body: appUpdateCheckDto,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * 删除更新
     * @param deleteRequest deleteRequest
     * @returns BaseResponse_string_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static deleteAppUpdateUsingPost(
        deleteRequest: DeleteRequest,
    ): CancelablePromise<BaseResponse_string_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/appUpdate/delete',
            body: deleteRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * 获取更新列表
     * @param appUpdateQueryDto appUpdateQueryDTO
     * @returns BaseResponse_Page_AppUpdate_ OK
     * @throws ApiError
     */
    public static loadUpdateListUsingGet(
        appUpdateQueryDto: AppUpdateQueryDTO,
    ): CancelablePromise<BaseResponse_Page_AppUpdate_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/appUpdate/loadUpdateList',
            body: appUpdateQueryDto,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * 发布更新
     * @param appUpdatePostDto appUpdatePostDTO
     * @returns BaseResponse_string_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static postAppUpdateUsingPost(
        appUpdatePostDto: AppUpdatePostDTO,
    ): CancelablePromise<BaseResponse_string_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/appUpdate/post',
            body: appUpdatePostDto,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * 修改更新
     * @param appUpdateUpdateDto appUpdateUpdateDTO
     * @returns BaseResponse_string_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static modifyAppUpdateUsingPost(
        appUpdateUpdateDto: AppUpdateUpdateDTO,
    ): CancelablePromise<BaseResponse_string_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/appUpdate/update',
            body: appUpdateUpdateDto,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
}

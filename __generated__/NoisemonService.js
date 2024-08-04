/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */
import axios from "axios";
export var ContentType;
(function (ContentType) {
    ContentType["Json"] = "application/json";
    ContentType["FormData"] = "multipart/form-data";
    ContentType["UrlEncoded"] = "application/x-www-form-urlencoded";
    ContentType["Text"] = "text/plain";
})(ContentType || (ContentType = {}));
export class HttpClient {
    constructor({ securityWorker, secure, format, ...axiosConfig } = {}) {
        this.securityData = null;
        this.setSecurityData = (data) => {
            this.securityData = data;
        };
        this.request = async ({ secure, path, type, query, format, body, ...params }) => {
            const secureParams = ((typeof secure === "boolean" ? secure : this.secure) &&
                this.securityWorker &&
                (await this.securityWorker(this.securityData))) ||
                {};
            const requestParams = this.mergeRequestParams(params, secureParams);
            const responseFormat = format || this.format || undefined;
            if (type === ContentType.FormData && body && body !== null && typeof body === "object") {
                body = this.createFormData(body);
            }
            if (type === ContentType.Text && body && body !== null && typeof body !== "string") {
                body = JSON.stringify(body);
            }
            return this.instance.request({
                ...requestParams,
                headers: {
                    ...(requestParams.headers || {}),
                    ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
                },
                params: query,
                responseType: responseFormat,
                data: body,
                url: path,
            });
        };
        this.instance = axios.create({ ...axiosConfig, baseURL: axiosConfig.baseURL || "" });
        this.secure = secure;
        this.format = format;
        this.securityWorker = securityWorker;
        this.setupInterceptors();
    }
    setupInterceptors() {
        this.instance.interceptors.request.use((config) => {
            config.headers["x-api-key"] = "aJLXR13c47yrc07yrc087cyawn08ryry";
            return config;
        }, (error) => Promise.reject(error));
    }
    mergeRequestParams(params1, params2) {
        const method = params1.method || (params2 && params2.method);
        return {
            ...this.instance.defaults,
            ...params1,
            ...(params2 || {}),
            headers: {
                ...((method && this.instance.defaults.headers[method.toLowerCase()]) || {}),
                ...(params1.headers || {}),
                ...((params2 && params2.headers) || {}),
            },
        };
    }
    stringifyFormItem(formItem) {
        if (typeof formItem === "object" && formItem !== null) {
            return JSON.stringify(formItem);
        }
        else {
            return `${formItem}`;
        }
    }
    createFormData(input) {
        if (input instanceof FormData) {
            return input;
        }
        return Object.keys(input || {}).reduce((formData, key) => {
            const property = input[key];
            const propertyContent = property instanceof Array ? property : [property];
            for (const formItem of propertyContent) {
                const isFileType = formItem instanceof Blob || formItem instanceof File;
                formData.append(key, isFileType ? formItem : this.stringifyFormItem(formItem));
            }
            return formData;
        }, new FormData());
    }
}
/**
 * @title FastAPI
 * @version 0.1.0
 */
export class NoisemonService_API extends HttpClient {
    constructor() {
        super(...arguments);
        this.health = {
            /**
             * No description
             *
             * @name GetHealthHealthGet
             * @summary Get Health
             * @request GET:/health/
             * @response `200` `GetHealthHealthGetData` Successful Response
             */
            getHealthHealthGet: (params = {}) => this.request({
                path: `/health/`,
                method: "GET",
                ...params,
            }),
        };
        this.jobtask = {
            /**
             * No description
             *
             * @name GetAvailableTasksJobtaskGet
             * @summary Get Available Tasks
             * @request GET:/jobtask/
             * @response `200` `GetAvailableTasksJobtaskGetData` Successful Response
             * @response `422` `HTTPValidationError` Validation Error
             */
            getAvailableTasksJobtaskGet: (params = {}) => this.request({
                path: `/jobtask/`,
                method: "GET",
                ...params,
            }),
            /**
             * No description
             *
             * @name CreateTaskJobtaskPost
             * @summary Create Task
             * @request POST:/jobtask/
             * @response `201` `CreateTaskJobtaskPostData` Successful Response
             * @response `422` `HTTPValidationError` Validation Error
             */
            createTaskJobtaskPost: (data, params = {}) => this.request({
                path: `/jobtask/`,
                method: "POST",
                body: data,
                type: ContentType.Json,
                ...params,
            }),
            /**
             * No description
             *
             * @name GetTaskJobtaskTaskIdGet
             * @summary Get Task
             * @request GET:/jobtask/{task_id}/
             * @response `200` `GetTaskJobtaskTaskIdGetData` Successful Response
             * @response `422` `HTTPValidationError` Validation Error
             */
            getTaskJobtaskTaskIdGet: (taskId, params = {}) => this.request({
                path: `/jobtask/${taskId}/`,
                method: "GET",
                ...params,
            }),
        };
        this.narrative = {
            /**
             * No description
             *
             * @name GetNarrativeNarrativeGet
             * @summary Get Narrative
             * @request GET:/narrative/
             * @response `200` `GetNarrativeNarrativeGetData` Successful Response
             * @response `422` `HTTPValidationError` Validation Error
             */
            getNarrativeNarrativeGet: (params = {}) => this.request({
                path: `/narrative/`,
                method: "GET",
                ...params,
            }),
        };
    }
}
export const NoisemonService = new NoisemonService_API({ baseURL: "https://noisemon.dev/api/narratives/" });

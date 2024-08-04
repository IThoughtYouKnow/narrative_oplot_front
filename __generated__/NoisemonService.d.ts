/** ContentAnalysisResult */
export interface ContentAnalysisResult {
    /** Internal Telegram Channel Id */
    internal_telegram_channel_id: string;
    /** Internal Telegram Message Id */
    internal_telegram_message_id: string;
    /** Telegram Message Timestamp */
    telegram_message_timestamp: string;
    /** Telegram Message Id */
    telegram_message_id: number;
    /** Telegram Message Fragment Content */
    telegram_message_fragment_content: string;
    /** Narrative Id */
    narrative_id: string;
}
/** HTTPValidationError */
export interface HTTPValidationError {
    /** Detail */
    detail?: ValidationError[];
}
/** HealthCheckOutput */
export interface HealthCheckOutput {
    /**
     * Status
     * @default "OK"
     */
    status?: string;
}
/** NarrativeInfo */
export interface NarrativeInfo {
    /** Narrative Id */
    narrative_id: string;
    /** Narrative Name */
    narrative_name: string;
    /** Narrative Context */
    narrative_context: string;
}
/** NetworkAnalysisResult */
export interface NetworkAnalysisResult {
    /** Internal Telegram Channel Id */
    internal_telegram_channel_id: string;
    /** Referenced Internal Telegram Channel Id */
    referenced_internal_telegram_channel_id: string;
    /** Internal Message Id */
    internal_message_id: string;
    /** Reference Type */
    reference_type: string;
    /** Reference Timestamp */
    reference_timestamp: string;
}
/** PartialTaskInfo */
export interface PartialTaskInfo {
    /** Task Id */
    task_id: string;
    /** Task Name */
    task_name: string;
    /** Is Public */
    is_public: boolean;
    /** Created At */
    created_at: string;
}
/** Payload */
export interface Payload {
    /** Analyzed Channels */
    analyzed_channels: TelegramChannelInfo[];
    /** Connected Channels */
    connected_channels: TelegramChannelInfo[];
    /** Content Analysis Result */
    content_analysis_result: ContentAnalysisResult[];
    /** Network */
    network: NetworkAnalysisResult[];
    /** Narratives */
    narratives: NarrativeInfo[];
}
/** Task */
export interface Task {
    /** Task Id */
    task_id: string;
    /** Task Name */
    task_name: string;
    /** Is Public */
    is_public: boolean;
    /** Created At */
    created_at: string;
    /** Request */
    request: string[];
    /**
     * Complete
     * @default false
     */
    complete?: boolean;
    payload?: Payload | null;
}
/** TaskCreationRequest */
export interface TaskCreationRequest {
    /** Request */
    request: string[];
    /** Task Name */
    task_name: string;
    /**
     * Is Public
     * @default false
     */
    is_public?: boolean;
}
/** TelegramChannelInfo */
export interface TelegramChannelInfo {
    /** Internal Telegram Channel Id */
    internal_telegram_channel_id: string;
    /** Telegram Channel Name */
    telegram_channel_name: string;
    /** Telegram Channel Description */
    telegram_channel_description: string;
    /** Telegram Channel Id */
    telegram_channel_id: number;
    /** Telegram Channel Link */
    telegram_channel_link: string;
    /** Telegram Channel Creation Timestamp */
    telegram_channel_creation_timestamp: string | null;
    /** Telegram Channel Resource Tags */
    telegram_channel_resource_tags: string[];
}
/** ValidationError */
export interface ValidationError {
    /** Location */
    loc: (string | number)[];
    /** Message */
    msg: string;
    /** Error Type */
    type: string;
}
export type GetHealthHealthGetData = HealthCheckOutput;
/** Response Get Available Tasks Jobtask  Get */
export type GetAvailableTasksJobtaskGetData = PartialTaskInfo[];
export type CreateTaskJobtaskPostData = PartialTaskInfo;
/** Response Get Task Jobtask  Task Id   Get */
export type GetTaskJobtaskTaskIdGetData = Task | string;
/** Response Get Narrative Narrative  Get */
export type GetNarrativeNarrativeGetData = NarrativeInfo[] | string;
export declare namespace Health {
    /**
     * No description
     * @name GetHealthHealthGet
     * @summary Get Health
     * @request GET:/health/
     * @response `200` `GetHealthHealthGetData` Successful Response
     */
    namespace GetHealthHealthGet {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = never;
        type RequestHeaders = {};
        type ResponseBody = GetHealthHealthGetData;
    }
}
export declare namespace Jobtask {
    /**
     * No description
     * @name GetAvailableTasksJobtaskGet
     * @summary Get Available Tasks
     * @request GET:/jobtask/
     * @response `200` `GetAvailableTasksJobtaskGetData` Successful Response
     * @response `422` `HTTPValidationError` Validation Error
     */
    namespace GetAvailableTasksJobtaskGet {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = never;
        type RequestHeaders = {
            /** X-Api-Key */
            "x-api-key": string;
        };
        type ResponseBody = GetAvailableTasksJobtaskGetData;
    }
    /**
     * No description
     * @name CreateTaskJobtaskPost
     * @summary Create Task
     * @request POST:/jobtask/
     * @response `201` `CreateTaskJobtaskPostData` Successful Response
     * @response `422` `HTTPValidationError` Validation Error
     */
    namespace CreateTaskJobtaskPost {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = TaskCreationRequest;
        type RequestHeaders = {
            /** X-Api-Key */
            "x-api-key": string;
        };
        type ResponseBody = CreateTaskJobtaskPostData;
    }
    /**
     * No description
     * @name GetTaskJobtaskTaskIdGet
     * @summary Get Task
     * @request GET:/jobtask/{task_id}/
     * @response `200` `GetTaskJobtaskTaskIdGetData` Successful Response
     * @response `422` `HTTPValidationError` Validation Error
     */
    namespace GetTaskJobtaskTaskIdGet {
        type RequestParams = {
            /**
             * String serialized UUID of the job
             * @format uuid
             */
            taskId: string;
        };
        type RequestQuery = {};
        type RequestBody = never;
        type RequestHeaders = {
            /** X-Api-Key */
            "x-api-key": string;
        };
        type ResponseBody = GetTaskJobtaskTaskIdGetData;
    }
}
export declare namespace Narrative {
    /**
     * No description
     * @name GetNarrativeNarrativeGet
     * @summary Get Narrative
     * @request GET:/narrative/
     * @response `200` `GetNarrativeNarrativeGetData` Successful Response
     * @response `422` `HTTPValidationError` Validation Error
     */
    namespace GetNarrativeNarrativeGet {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = never;
        type RequestHeaders = {
            /** X-Api-Key */
            "x-api-key": string;
        };
        type ResponseBody = GetNarrativeNarrativeGetData;
    }
}
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse, ResponseType } from "axios";
export type QueryParamsType = Record<string | number, any>;
export interface FullRequestParams extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
    /** set parameter to `true` for call `securityWorker` for this request */
    secure?: boolean;
    /** request path */
    path: string;
    /** content type of request body */
    type?: ContentType;
    /** query params */
    query?: QueryParamsType;
    /** format of response (i.e. response.json() -> format: "json") */
    format?: ResponseType;
    /** request body */
    body?: unknown;
}
export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;
export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
    securityWorker?: (securityData: SecurityDataType | null) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
    secure?: boolean;
    format?: ResponseType;
}
export declare enum ContentType {
    Json = "application/json",
    FormData = "multipart/form-data",
    UrlEncoded = "application/x-www-form-urlencoded",
    Text = "text/plain"
}
export declare class HttpClient<SecurityDataType = unknown> {
    instance: AxiosInstance;
    private securityData;
    private securityWorker?;
    private secure?;
    private format?;
    constructor({ securityWorker, secure, format, ...axiosConfig }?: ApiConfig<SecurityDataType>);
    private setupInterceptors;
    setSecurityData: (data: SecurityDataType | null) => void;
    protected mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig;
    protected stringifyFormItem(formItem: unknown): string;
    protected createFormData(input: Record<string, unknown>): FormData;
    request: <T = any, _E = any>({ secure, path, type, query, format, body, ...params }: FullRequestParams) => Promise<AxiosResponse<T>>;
}
/**
 * @title FastAPI
 * @version 0.1.0
 */
export declare class NoisemonService_API<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
    health: {
        /**
         * No description
         *
         * @name GetHealthHealthGet
         * @summary Get Health
         * @request GET:/health/
         * @response `200` `GetHealthHealthGetData` Successful Response
         */
        getHealthHealthGet: (params?: RequestParams) => Promise<AxiosResponse<T>>;
    };
    jobtask: {
        /**
         * No description
         *
         * @name GetAvailableTasksJobtaskGet
         * @summary Get Available Tasks
         * @request GET:/jobtask/
         * @response `200` `GetAvailableTasksJobtaskGetData` Successful Response
         * @response `422` `HTTPValidationError` Validation Error
         */
        getAvailableTasksJobtaskGet: (params?: RequestParams) => Promise<AxiosResponse<T>>;
        /**
         * No description
         *
         * @name CreateTaskJobtaskPost
         * @summary Create Task
         * @request POST:/jobtask/
         * @response `201` `CreateTaskJobtaskPostData` Successful Response
         * @response `422` `HTTPValidationError` Validation Error
         */
        createTaskJobtaskPost: (data: TaskCreationRequest, params?: RequestParams) => Promise<AxiosResponse<T>>;
        /**
         * No description
         *
         * @name GetTaskJobtaskTaskIdGet
         * @summary Get Task
         * @request GET:/jobtask/{task_id}/
         * @response `200` `GetTaskJobtaskTaskIdGetData` Successful Response
         * @response `422` `HTTPValidationError` Validation Error
         */
        getTaskJobtaskTaskIdGet: (taskId: string, params?: RequestParams) => Promise<AxiosResponse<T>>;
    };
    narrative: {
        /**
         * No description
         *
         * @name GetNarrativeNarrativeGet
         * @summary Get Narrative
         * @request GET:/narrative/
         * @response `200` `GetNarrativeNarrativeGetData` Successful Response
         * @response `422` `HTTPValidationError` Validation Error
         */
        getNarrativeNarrativeGet: (params?: RequestParams) => Promise<AxiosResponse<T>>;
    };
}
export declare const NoisemonService: NoisemonService_API<unknown>;

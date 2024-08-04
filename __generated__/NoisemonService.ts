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

export namespace Health {
  /**
   * No description
   * @name GetHealthHealthGet
   * @summary Get Health
   * @request GET:/health/
   * @response `200` `GetHealthHealthGetData` Successful Response
   */
  export namespace GetHealthHealthGet {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GetHealthHealthGetData;
  }
}

export namespace Jobtask {
  /**
   * No description
   * @name GetAvailableTasksJobtaskGet
   * @summary Get Available Tasks
   * @request GET:/jobtask/
   * @response `200` `GetAvailableTasksJobtaskGetData` Successful Response
   * @response `422` `HTTPValidationError` Validation Error
   */
  export namespace GetAvailableTasksJobtaskGet {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /** X-Api-Key */
      "x-api-key": string;
    };
    export type ResponseBody = GetAvailableTasksJobtaskGetData;
  }
  /**
   * No description
   * @name CreateTaskJobtaskPost
   * @summary Create Task
   * @request POST:/jobtask/
   * @response `201` `CreateTaskJobtaskPostData` Successful Response
   * @response `422` `HTTPValidationError` Validation Error
   */
  export namespace CreateTaskJobtaskPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = TaskCreationRequest;
    export type RequestHeaders = {
      /** X-Api-Key */
      "x-api-key": string;
    };
    export type ResponseBody = CreateTaskJobtaskPostData;
  }
  /**
   * No description
   * @name GetTaskJobtaskTaskIdGet
   * @summary Get Task
   * @request GET:/jobtask/{task_id}/
   * @response `200` `GetTaskJobtaskTaskIdGetData` Successful Response
   * @response `422` `HTTPValidationError` Validation Error
   */
  export namespace GetTaskJobtaskTaskIdGet {
    export type RequestParams = {
      /**
       * String serialized UUID of the job
       * @format uuid
       */
      taskId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /** X-Api-Key */
      "x-api-key": string;
    };
    export type ResponseBody = GetTaskJobtaskTaskIdGetData;
  }
}

export namespace Narrative {
  /**
   * No description
   * @name GetNarrativeNarrativeGet
   * @summary Get Narrative
   * @request GET:/narrative/
   * @response `200` `GetNarrativeNarrativeGetData` Successful Response
   * @response `422` `HTTPValidationError` Validation Error
   */
  export namespace GetNarrativeNarrativeGet {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /** X-Api-Key */
      "x-api-key": string;
    };
    export type ResponseBody = GetNarrativeNarrativeGetData;
  }
}

import type { AxiosInstance, AxiosRequestConfig, AxiosResponse, HeadersDefaults, ResponseType } from "axios";
import axios from "axios";

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
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({ securityWorker, secure, format, ...axiosConfig }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({ ...axiosConfig, baseURL: axiosConfig.baseURL || "" });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
    this.setupInterceptors();
  }

  private setupInterceptors() {
    this.instance.interceptors.request.use(
      (config) => {
        config.headers["x-api-key"] = "aJLXR13c47yrc07yrc087cyawn08ryry";
        return config;
      },
      (error) => Promise.reject(error),
    );
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig {
    const method = params1.method || (params2 && params2.method);

    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...((method && this.instance.defaults.headers[method.toLowerCase() as keyof HeadersDefaults]) || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected stringifyFormItem(formItem: unknown) {
    if (typeof formItem === "object" && formItem !== null) {
      return JSON.stringify(formItem);
    } else {
      return `${formItem}`;
    }
  }

  protected createFormData(input: Record<string, unknown>): FormData {
    if (input instanceof FormData) {
      return input;
    }
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      const propertyContent: any[] = property instanceof Array ? property : [property];

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof Blob || formItem instanceof File;
        formData.append(key, isFileType ? formItem : this.stringifyFormItem(formItem));
      }

      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = format || this.format || undefined;

    if (type === ContentType.FormData && body && body !== null && typeof body === "object") {
      body = this.createFormData(body as Record<string, unknown>);
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
}

/**
 * @title FastAPI
 * @version 0.1.0
 */
export class NoisemonService_API<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  health = {
    /**
     * No description
     *
     * @name GetHealthHealthGet
     * @summary Get Health
     * @request GET:/health/
     * @response `200` `GetHealthHealthGetData` Successful Response
     */
    getHealthHealthGet: (params: RequestParams = {}) =>
      this.request<GetHealthHealthGetData, any>({
        path: `/health/`,
        method: "GET",
        ...params,
      }),
  };
  jobtask = {
    /**
     * No description
     *
     * @name GetAvailableTasksJobtaskGet
     * @summary Get Available Tasks
     * @request GET:/jobtask/
     * @response `200` `GetAvailableTasksJobtaskGetData` Successful Response
     * @response `422` `HTTPValidationError` Validation Error
     */
    getAvailableTasksJobtaskGet: (params: RequestParams = {}) =>
      this.request<GetAvailableTasksJobtaskGetData, HTTPValidationError>({
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
    createTaskJobtaskPost: (data: TaskCreationRequest, params: RequestParams = {}) =>
      this.request<CreateTaskJobtaskPostData, HTTPValidationError>({
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
    getTaskJobtaskTaskIdGet: (taskId: string, params: RequestParams = {}) =>
      this.request<GetTaskJobtaskTaskIdGetData, HTTPValidationError>({
        path: `/jobtask/${taskId}/`,
        method: "GET",
        ...params,
      }),
  };
  narrative = {
    /**
     * No description
     *
     * @name GetNarrativeNarrativeGet
     * @summary Get Narrative
     * @request GET:/narrative/
     * @response `200` `GetNarrativeNarrativeGetData` Successful Response
     * @response `422` `HTTPValidationError` Validation Error
     */
    getNarrativeNarrativeGet: (params: RequestParams = {}) =>
      this.request<GetNarrativeNarrativeGetData, HTTPValidationError>({
        path: `/narrative/`,
        method: "GET",
        ...params,
      }),
  };
}

export const NoisemonService = new NoisemonService_API({ baseURL: "https://noisemon.dev/api/narratives/" });

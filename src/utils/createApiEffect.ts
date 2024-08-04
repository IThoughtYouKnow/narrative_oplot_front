import { AxiosError, AxiosPromise, isAxiosError } from "axios";
import { createEffect } from "effector";

type ApiMethod<Params, Result> = (params: Params) => AxiosPromise<Result>;

export const createApiEffect = <Params, Result>(
  apiMethod: ApiMethod<Params, Result>
) =>
  createEffect<Params, Result, AxiosError<Record<string, string>>["response"]>(
    async (params) => {
      try {
        const { data } = await apiMethod(params);
        return data;
      } catch (error) {
        if (isAxiosError(error)) {
          console.log(
            "%c An unexpected error occurred:",
            "color: #FF0000",
            error.response
          );
          // eslint-disable-next-line @typescript-eslint/no-throw-literal
          throw error.response;
        }
        throw new Error("Non-Axios error occurred");
      }
    }
  );

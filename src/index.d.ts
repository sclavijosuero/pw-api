import { APIRequestContext, Page, APIResponse, Request } from '@playwright/test';

export declare function apiFetch({ request, page }: { request: APIRequestContext; page: Page }, urlOrRequest: string | Request, options?: object): Promise<APIResponse>;
export declare function apiGet({ request, page }: { request: APIRequestContext; page: Page }, url: string, options?: object): Promise<APIResponse>;
export declare function apiPost({ request, page }: { request: APIRequestContext; page: Page }, url: string, options?: object): Promise<APIResponse>;
export declare function apiPut({ request, page }: { request: APIRequestContext; page: Page }, url: string, options?: object): Promise<APIResponse>;
export declare function apiDelete({ request, page }: { request: APIRequestContext; page: Page }, url: string, options?: object): Promise<APIResponse>;
export declare function apiPatch({ request, page }: { request: APIRequestContext; page: Page }, url: string, options?: object): Promise<APIResponse>;
export declare function apiHead({ request, page }: { request: APIRequestContext; page: Page }, url: string, options?: object): Promise<APIResponse>;
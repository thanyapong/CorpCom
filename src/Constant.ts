import { UserManagerSettings } from 'oidc-client'

const {
    VITE_APP_NAME,
    VITE_APP_VERSION,
    VITE_APP_DESCRIPTION,
    VITE_BASE_URL,
    VITE_API_URL,
    VITE_APIGW_BASEURL,
    VITE_SSO_ISSUER,
    VITE_SSO_CLIENT_ID,
    VITE_SSO_SCOPE,
    VITE_API_BANNER_URL
} = import.meta.env

export const APP_INFO = {
    name: VITE_APP_NAME,
    version: VITE_APP_VERSION,
    since: 2023,
    description: VITE_APP_DESCRIPTION,
    contactUrl: "https://www.siamsmile.co.th"
}

export const VERSION_CHECKER = {
  ENABLE_VERSION_CHECKER: true,
  CONFIRM_BEFORE_REFRESH: true,
  CHECK_VERSION_EVERY_MINUTE: 1,
};

export const SSO_CONFIG : UserManagerSettings = {
  authority: VITE_SSO_ISSUER,
  client_id: VITE_SSO_CLIENT_ID,
  redirect_uri: `${VITE_BASE_URL}/signin-callback`,
  silent_redirect_uri: `${VITE_BASE_URL}/silent-callback`,
  response_type: `code`,
  scope: VITE_SSO_SCOPE,
  automaticSilentRenew: true,
  monitorSession: true,
};

export const API_URL = VITE_API_URL;
export const APIGW_URL = VITE_APIGW_BASEURL;
export const AUTH_LOGOUT_REDIRECT = VITE_SSO_ISSUER + "/Account/Logout";

/*
 * สำหรับใช้ในการเรียกใช้งาน API ให้ใช้งานในรูปแบบ
 * const { data } = await axios.get(API_URL + "/api/...", 
 * 
 * สำหรับใช้ในการเรียกใช้งาน API Gateway ให้ใช้งานในรูปแบบ
 * const { data } = await axios.get(APIGW_URL + "/api/...",
 * 
 * กรณีต้องการเพิ่ม Api ใหม่ ให้เพิ่ม URL ในไฟล์ .env ทั้งหมดและในไฟล์นี้ด้วย
 * เช่น PRMORDER_URL = VITE_PRMORDER_URL;
 **/

export const PERMISSIONS = {
  employee_read: "employee:read",
  employee_write: "employee:write",
  employee_delete: "employee:delete",
};

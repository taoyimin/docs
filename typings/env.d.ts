/// <reference types="vite/client" />

import { readonly } from 'vue'

interface ImportMetaEnv {
  readonly VITE_APP_NAME: string
  readonly VITE_APP_AUTHORITY: string
  readonly VITE_PUBLIC_KEY: string
  readonly VITE_AES_KEY: string
  readonly VITE_ORIGIN_COORDINATE: string
  readonly VITE_TARGET_COORDINATE: string
  readonly VITE_AMAP_SECURITY_CODE: string
  readonly VITE_AMAP_KEY: string

  readonly VITE_BASE_URL: string
  readonly VITE_FILE_URL: string
  readonly VITE_USE_MINIO: string
  readonly VITE_OLD_BASE_URL: string
  readonly VITE_OLD_PLATFORM_SSO: string
  readonly VITE_THEME_CHALK: 'green' | 'blue' | 'dayun'

  readonly VITE_MAP_CENTER_LONGITUDE: string
  readonly VITE_MAP_CENTER_LATITUDE: string
  readonly VITE_MAP_ZOOM: string

  readonly VITE_MP_TRIAL_BASE_URL: string
  readonly VITE_MP_DEVELOP_BASE_URL: string
  readonly VITE_MP_THEME_CHALK: 'green' | 'lime'
  readonly VITE_MP_EVENT_UPLOAD_PHONE: string

  readonly VITE_USER_NAME: string
  readonly VITE_PASS_WORD: string

  readonly VITE_LARGE_SCREEN_NAME: string
  readonly VITE_LARGE_SCREEN_URL: string
  readonly VITE_EXCREMENT_RESOURCE_NAME: string
  readonly VITE_EXCREMENT_RESOURCE_URL: string
  readonly VITE_SEWAGE_VISUALIZATION_NAME: string
  readonly VITE_SEWAGE_VISUALIZATION_URL: string
  readonly VITE_SYSTEM_BACKGROUND_NAME: string
  readonly VITE_SYSTEM_BACKGROUND_URL: string
  readonly VITE_STANDARD_FARMLAND_NAME: string
  readonly VITE_STANDARD_FARMLAND_URL: string
  readonly VITE_SITUATION_PERCEPTION_NAME: string
  readonly VITE_SITUATION_PERCEPTION_URL: string
  readonly VITE_VILLAGE_ARCHIVE_NAME: string
  readonly VITE_VILLAGE_ARCHIVE_URL: string
  readonly VITE_PROVINCE_PLATFORM_NAME: string
  readonly VITE_PROVINCE_PLATFORM_URL: string
  readonly VITE_OPEN_PLATFORM_NAME: string
  readonly VITE_OPEN_PLATFORM_URL: string
}

declare module '*.svg'
declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.gif'
declare module '*.bmp'
declare module '*.tiff'
declare module '*.mjs'
declare module '*.mts'
declare module 'postcss-plugin-px2rem'

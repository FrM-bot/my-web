/// <reference types="astro/client" />
/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly URL_CONTACT: string
}

export interface ImportMeta {
  readonly env: ImportMetaEnv
}

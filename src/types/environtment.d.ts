declare namespace NodeJS {
    export interface ProcessEnv {
        readonly NEXT_PUBLIC_BASE_URL: string;
        readonly NEXT_PUBLIC_MAIL_HOST: string;
        readonly NEXT_PUBLIC_MAIL_PORT: string;
        readonly NEXT_PUBLIC_MAIL_USER: string;
        readonly NEXT_PUBLIC_MAIL_PASS: string;
        readonly NEXT_PUBLIC_MAIL_FROM: string;
    }
}

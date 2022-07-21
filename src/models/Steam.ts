export interface items{
    name:string;
    email: string;
    nickname: string;
    createdAt: Date;
    librariesCount: number;
    country: {
        urlFlag: string;
    }
}
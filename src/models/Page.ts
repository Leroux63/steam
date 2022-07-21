export interface PageSteam<T>{
    page:number;
    itemsPerPage: number;
    total: number;
    totalPages:number;
    items:Array<T>
}
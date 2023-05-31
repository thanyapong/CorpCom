// Example ResponseResult
// {
//     "data": [
//       {
//         "productGroupId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
//         "productGroupName": "string",
//         "isActive": true,
//         "position": 0,
//         "createdByUserId": 0,
//         "createdDate": "2023-05-26T06:48:11.757Z",
//         "updatedByUserId": 0,
//         "updatedDate": "2023-05-26T06:48:11.758Z"
//       }
//     ],
//     "isSuccess": true,
//     "message": "string",
//     "code": 0,
//     "exceptionMessage": "string",
//     "serverDateTime": "2023-05-26T06:48:11.758Z",
//     "totalAmountRecords": 0,
//     "totalAmountPages": 0,
//     "currentPage": 0,
//     "recordsPerPage": 0,
//     "pageIndex": 0
//   }

export interface ResponseResult<T> {
    data: T;
    isSuccess: boolean;
    message: string;
    code: number;
    exceptionMessage?: string;
    serverDateTime: string;
    totalAmountRecords?: number;
    totalAmountPages?: number;
    currentPage?: number;
    recordsPerPage?: number;
    pageIndex?: number;
}



/*
{
    page: 1,
    recordsPerPage: 10,
    orderingField: "",
    ascendingOrder: true,
  }
  
*/
export interface Paginated {
    page: number;
    recordsPerPage: number;
    orderingField: string;
    ascendingOrder: boolean;
}

export interface SearchParams {
    FilterColumn: string;
    Value: string;
}
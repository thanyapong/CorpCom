import { PositionsResponseDtoListServiceResponse, PositionsResponseDto } from "./corpComBannerApi.d";
import axios from "axios";
import * as CONST from "../../../Constant";
import { useQuery } from "react-query";
import * as swal from "../_common/components/SweetAlert";

const apiUrl = `${CONST.API_URL}/Position`;

const allQueryName = "ProductGroups";

export const getPosition = async () => {
    try {
        const { data } = await axios.get<PositionsResponseDtoListServiceResponse>(
          apiUrl
        );
    
        if (!data.isSuccess) throw new Error(data.message);
    
        return data.data;

    } catch (error) {
        throw error;
    }
}

export const useGetPosition = async (
    onSuccessCallback?: (res: PositionsResponseDto[] | undefined) => void,
    onErrorCallback?: (error: Error) => void
  ) => {
    return useQuery<PositionsResponseDto[] | undefined , Error>(
      allQueryName,
      () => getPosition(),
      {
        onSuccess: (data) => onSuccessCallback && onSuccessCallback(data),
        onError: (err) =>
          onErrorCallback &&
          swal.swalError("Error", err.message).then(() => onErrorCallback),
      }
    );
};
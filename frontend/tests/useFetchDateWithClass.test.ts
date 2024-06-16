import {renderHook, waitFor} from '@testing-library/react'
import {useFetchDateWithClass} from '../src/hooks/useFetchDateWithClass'
import axios from "axios";

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;
mockedAxios.get.mockName("axios.getDate")

describe('useFetchDate', () => {
    it('should fetch data and append "!!!"', async () => {

        // レスポンスをモックする
        const mockData = {data: '2021-01-01'};

        //fetch関数をモックし、毎回同じ解決値を返す。fetchが複数回呼ばれても、常に同じ値を返す。
        mockedAxios.get.mockResolvedValue({data: mockData});

        const {result} = renderHook(() => useFetchDateWithClass());

        console.log("mockName", mockedAxios.get.getMockName())
        await waitFor(() => {
            expect(mockedAxios.get).toHaveBeenCalledTimes(1);
            expect(result.current.data).toBe('2021-01-01!!!');
            expect(result.current.loading).toBe(false);
        });
    });
    it('should handle fetch error', async () => {
        const errorMessage = 'Network Error';
        mockedAxios.get.mockRejectedValue(new Error(errorMessage));

        const {result} = renderHook(() => useFetchDateWithClass());

        await waitFor(() => {
            expect(result.current.data).toBe(null);
            expect(result.current.loading).toBe(false);
        });
    });
});

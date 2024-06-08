import {renderHook, waitFor} from '@testing-library/react'
import {useFetchDate} from '../src/hooks/useFetchDate'

global.fetch = jest.fn();

describe('useFetchDate', () => {
    it('should fetch data and append "!!!"', async () => {

        // レスポンスをモックする
        const mockData = {data: '2021-01-01'};

        //fetch関数をモックし、毎回同じ解決値を返す。fetchが複数回呼ばれても、常に同じ値を返す。
        (fetch as jest.Mock).mockResolvedValue({
            json: async () => mockData,
        });

        const {result} = renderHook(() => useFetchDate());

        await waitFor(() => {
            expect(result.current.data).toBe('2021-01-01!!!');
            expect(result.current.loading).toBe(false);
        });
    });
    it('should handle fetch error', async () => {
        const errorMessage = 'Network Error';
        (fetch as jest.Mock).mockRejectedValueOnce(new Error(errorMessage));

        const {result} = renderHook(() => useFetchDate());

        await waitFor(() => {
            expect(result.current.data).toBe(null);
            expect(result.current.loading).toBe(false);
        });
    });
});

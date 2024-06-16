import {useUser} from "../../src/hooks/useUser";
import {UserProvider} from "../../src/hooks/useMultiLevelDropdown";
import React, {act} from "react";
import {renderHook} from "@testing-library/react";

const useTestUserHook = () => {
    return useUser()
}

describe('useUser', () => {
    const wrapper = ({children}: { children: React.ReactNode }) => (
        <UserProvider>{children}</UserProvider>
    )

    it('UserProviderが無いとエラーをスローすること', () => {
        try {
            renderHook(() => useTestUserHook());
        } catch (e) {
            expect(e).toEqual(new Error('useUser must be used within a UserProvider'));
        }
    });
    it('初期ユーザーの情報を提供すること', () => {

        const {result} = renderHook(() => useTestUserHook(), {wrapper});
        expect(result.current.user).toEqual({name: 'alice', age: 20});
    })
    it('ユーザー情報を更新すること', () => {
        const {result} = renderHook(() => useTestUserHook(), {wrapper});

        act(() => {
            result.current.setUser({name: 'bob', age: 30});
        })
        expect(result.current.user).toEqual({name: 'bob', age: 30});
    })
})
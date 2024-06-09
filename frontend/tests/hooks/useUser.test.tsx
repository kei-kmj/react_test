import {useUser} from "../../src/hooks/useUser";

const useTestUserHook = () => {
    return useUser()
}

describe('useUser', () => {
    it('should throw an error if used outside of UserProvider', () => {
        expect(() => useTestUserHook()).toThrowError('Cannot read properties of null (reading \'useContext\')');
    });
})
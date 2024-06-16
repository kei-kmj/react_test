import {useCallback, useState} from "react";

export const useLikeCount = () => {
    const [likeCount, setLikeCount] = useState(0);

    const increment = useCallback(() => {
        setLikeCount((prev) => prev + 1);
    },[]);

    const decrement = useCallback(() => {
        setLikeCount((prev) => prev - 1);
    },[]);

    return { likeCount, increment, decrement };
}
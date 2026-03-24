import { useState } from 'react';

export const useLoadMore = (initialCount = 3, loadCount = 3, dataLength = 0) => {
    const [visibleCount, setVisibleCount] = useState(initialCount);

    const handleLoadMore = () => {
        setVisibleCount((prev) => Math.min(prev + loadCount, dataLength));
    };

    const hasMore = visibleCount < dataLength;

    return { visibleCount, handleLoadMore, hasMore };
};

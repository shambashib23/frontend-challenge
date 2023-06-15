import { useEffect, useRef } from 'react';
import { atom, useAtom } from 'jotai';
const intersectingAtom = atom(false);

const useIntersectionObserver = (options) => {
    const [intersecting, setIntersecting] = useAtom(intersectingAtom);
    const targetRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIntersecting(entry.isIntersecting);
            },
            options
        );
        if (targetRef.current) {
            observer.observe(targetRef.current);
        }

        return () => {
            if (targetRef.current) {
                observer.unobserve(targetRef.current);
            }
        };
    }, [options]);

    return [targetRef, intersecting];
}

export default useIntersectionObserver;
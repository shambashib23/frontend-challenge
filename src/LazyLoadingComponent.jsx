import useIntersectionObserver from "./utils/useIntersectionObsever";
const LazyLoadComponent = () => {
    const [targetRef, intersecting] = useIntersectionObserver({
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
    });

    const loadContent = () => {
        // Perform the lazy loading logic here
        console.log('Content loaded!');
    };

    // Whenever the targetRef is visible in the viewport, `intersecting` will be true
    // You can trigger the lazy loading logic based on this value
    if (intersecting) {
        loadContent();
    }

    return <div ref={targetRef}>Lazy Load Component</div>;
};

export default LazyLoadComponent;
import React, { useState, useEffect } from 'react';

const Carousel = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const carouselRef = React.createRef();

    const updateArrowVisibility = () => {
        const carouselWidth = carouselRef.current.scrollWidth;
        const remainingScrollWidth =
            carouselWidth - scrollPosition - carouselRef.current.clientWidth;
        const tolerance = 5;

        document.querySelector('.carousel-control-next').style.display =
            remainingScrollWidth <= tolerance ? 'none' : 'block';
        document.querySelector('.carousel-control-prev').style.display =
            scrollPosition <= tolerance ? 'none' : 'block';

        // Adjust scroll position if it goes out of bounds
        if (scrollPosition > carouselWidth - carouselRef.current.clientWidth) {
            setScrollPosition(carouselWidth - carouselRef.current.clientWidth);
            $(carouselRef.current).animate({ scrollLeft: scrollPosition }, 200);
        }
    };

    useEffect(() => {
        updateArrowVisibility();
        document
            .getElementById('carouselExampleControls')
            .addEventListener('slide.bs.carousel', function () {
                setTimeout(updateArrowVisibility, 500);
            });
    }, [scrollPosition]);

    const handleNextClick = () => {
        if (
            scrollPosition <
            carouselRef.current.scrollWidth - carouselRef.current.clientWidth
        ) {
            // Get the width of the next carousel item dynamically
            const cardWidth = $('.carousel-item.active', carouselRef.current)
                .next()
                .width();
            setScrollPosition((prev) => prev + cardWidth);
            $(carouselRef.current).animate(
                { scrollLeft: scrollPosition + cardWidth },
                600
            );
        }
    };

    const handlePrevClick = () => {
        if (scrollPosition > 0) {
            // Get the width of the previous carousel item dynamically
            const cardWidth = $('.carousel-item.active', carouselRef.current)
                .prev()
                .width();
            setScrollPosition((prev) => prev - cardWidth);
            $(carouselRef.current).animate(
                { scrollLeft: scrollPosition - cardWidth },
                600
            );
        }
    };

    return (
        <div>
            {/* Your Carousel HTML code goes here */}
            <div
                id="carouselExampleControls"
                className="carousel slide"
                data-bs-ride="carousel"
                ref={carouselRef}
            >
                {/* ... carousel items and controls ... */}
            </div>

            {/* Your Arrow Button HTML code goes here */}
            <button
                id="arrow-btn"
                onClick={handleNextClick}
            >
                {/* ... arrow button content ... */}
            </button>
        </div>
    );
};

export default Carousel;

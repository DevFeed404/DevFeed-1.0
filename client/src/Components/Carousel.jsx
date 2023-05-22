import React, { useState } from "react";
import '../CSS/Carousel.css'
import { TiChevronLeftOutline, TiChevronRightOutline } from 'react-icons/ti';

const MAX_VISIBILITY = 3;

const Carousel = ({ children }) => {
    const [active, setActive] = useState(2);
    const count = React.Children.count(children);

    return (
        <div className='carousel'>
            <button className='nav left' onClick={() => active > 0 ? setActive(i => i - 1) : setActive(count-1)}><TiChevronLeftOutline className="text-black"/></button>
            {React.Children.map(children, (child, i) => (
                <div className='card-container' style={{
                    '--active': i === active ? 1 : 0,
                    '--offset': (active - i) / 3,
                    '--direction': Math.sign(active - i),
                    '--abs-offset': Math.abs(active - i) / 3,
                    'pointer-events': active === i ? 'auto' : 'none',
                    'opacity': Math.abs(active - i) >= MAX_VISIBILITY ? '0' : '1',
                    'display': Math.abs(active - i) > MAX_VISIBILITY ? 'none' : 'block',
                }}>
                    {child}
                </div>
            ))}
            <button className='nav right' onClick={() => active < count - 1 ? setActive(i => i + 1) : setActive(0)}><TiChevronRightOutline className="text-black"/></button>
        </div>
    );
};

export default Carousel;

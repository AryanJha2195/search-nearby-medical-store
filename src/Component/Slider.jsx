import React from 'react';
import { Carousel } from 'react-bootstrap';

const Slider = () => {
    return (
        <Carousel interval={1000}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://mercury.akamaized.net/i/0772e2a3784c6b8e29c3cd436f868a80_207782_0.jpg"
                    alt="Slide 1"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://mercury.akamaized.net/i/8888c916299ab7d5ff8fb36ba1d99f21_200696_0.jpeg"
                    alt="Slide 2"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://mercury.akamaized.net/i/d78035fa19bc4a287eb0fb619731b3d1_201596_0.jpg"
                    alt="Slide 3"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://mercury.akamaized.net/i/7174f1ba83d50b2848964a148b7a260c_201158_0.jpg"
                    alt="Slide 4"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://mercury.akamaized.net/i/1e961d351472f0e6652e2ee4bc738b94_201602_0.jpg"
                    alt="Slide 5"
                />
            </Carousel.Item>
        </Carousel>
    )
}

export default Slider
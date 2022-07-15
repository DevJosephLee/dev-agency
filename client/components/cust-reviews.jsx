import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function CustReviews() {
  function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined
    });
    useEffect(() => {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight
        });
      }
      // Add event listener
      window.addEventListener('resize', handleResize);
      // Call handler right away so state gets updated with initial window size
      handleResize();
      // Remove event listener on cleanup
      return () => window.removeEventListener('resize', handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
  }

  const viewportWidth = useWindowSize().width;

  return (
    <div>
      <div className="container text-center w-50 pt-5">
        <h2>Trusted by our of Happy Customers</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy.</p>
      </div>
      <div className={viewportWidth > 991 ? 'd-block' : 'd-none'}>
        <Carousel variant="dark">
          <Carousel.Item>
            <div className="container d-flex p-5">
              <div className="review-cards p-3">
                <div className="d-flex align-items-center">
                  <div className="w-25 m-3">
                    <img src="../../images/test-face-image.jpeg" className="review-face-photo"></img>
                  </div>
                  <div className="w-50">
                    <h5>Vlezh Robert</h5>
                    <p>Warsaw, Poland</p>
                  </div>
                  <div className="w-25 d-flex">
                    <p className="me-2">4.5</p>
                    <i className="bi bi-star-fill star"></i>
                  </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quas earum quos deleniti id, quaerat autem voluptatibus nesciunt similique a! Deserunt repudiandae doloribus eaque reprehenderit magni. Officia, saepe. Amet, delectus!</p>
              </div>
              <div className="review-cards p-3 ms-5">
                <div className="d-flex align-items-center">
                  <div className="w-25 m-3">
                    <img src="../../images/test-face-image.jpeg" className="review-face-photo"></img>
                  </div>
                  <div className="w-50">
                    <h5>Vlezh Robert</h5>
                    <p>Warsaw, Poland</p>
                  </div>
                  <div className="w-25 d-flex">
                    <p className="me-2">4.5</p>
                    <i className="bi bi-star-fill star"></i>
                  </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quas earum quos deleniti id, quaerat autem voluptatibus nesciunt similique a! Deserunt repudiandae doloribus eaque reprehenderit magni. Officia, saepe. Amet, delectus!</p>
              </div>
              <div className="review-cards p-3 ms-5">
                <div className="d-flex align-items-center">
                  <div className="w-25 m-3">
                    <img src="../../images/test-face-image.jpeg" className="review-face-photo"></img>
                  </div>
                  <div className="w-50">
                    <h5>Vlezh Robert</h5>
                    <p>Warsaw, Poland</p>
                  </div>
                  <div className="w-25 d-flex">
                    <p className="me-2">4.5</p>
                    <i className="bi bi-star-fill star"></i>
                  </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quas earum quos deleniti id, quaerat autem voluptatibus nesciunt similique a! Deserunt repudiandae doloribus eaque reprehenderit magni. Officia, saepe. Amet, delectus!</p>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="container d-flex p-5">
              <div className="review-cards p-3">
                <div className="d-flex align-items-center">
                  <div className="w-25 m-3">
                    <img src="../../images/test-face-image.jpeg" className="review-face-photo"></img>
                  </div>
                  <div className="w-50">
                    <h5>Joseph Lee</h5>
                    <p>Irvine, California</p>
                  </div>
                  <div className="w-25 d-flex">
                    <p className="me-2">4.5</p>
                    <i className="bi bi-star-fill star"></i>
                  </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quas earum quos deleniti id, quaerat autem voluptatibus nesciunt similique a! Deserunt repudiandae doloribus eaque reprehenderit magni. Officia, saepe. Amet, delectus!</p>
              </div>
              <div className="review-cards p-3 ms-5">
                <div className="d-flex align-items-center">
                  <div className="w-25 m-3">
                    <img src="../../images/test-face-image.jpeg" className="review-face-photo"></img>
                  </div>
                  <div className="w-50">
                    <h5>Joseph Lee</h5>
                    <p>Irvine, California</p>
                  </div>
                  <div className="w-25 d-flex">
                    <p className="me-2">4.5</p>
                    <i className="bi bi-star-fill star"></i>
                  </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quas earum quos deleniti id, quaerat autem voluptatibus nesciunt similique a! Deserunt repudiandae doloribus eaque reprehenderit magni. Officia, saepe. Amet, delectus!</p>
              </div>
              <div className="review-cards p-3 ms-5">
                <div className="d-flex align-items-center">
                  <div className="w-25 m-3">
                    <img src="../../images/test-face-image.jpeg" className="review-face-photo"></img>
                  </div>
                  <div className="w-50">
                    <h5>Joseph Lee</h5>
                    <p>Irvine, California</p>
                  </div>
                  <div className="w-25 d-flex">
                    <p className="me-2">4.5</p>
                    <i className="bi bi-star-fill star"></i>
                  </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quas earum quos deleniti id, quaerat autem voluptatibus nesciunt similique a! Deserunt repudiandae doloribus eaque reprehenderit magni. Officia, saepe. Amet, delectus!</p>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className={viewportWidth > 991 ? 'd-none' : viewportWidth > 768 ? 'd-block' : 'd-none'}>
        <Carousel variant="dark">
          <Carousel.Item>
            <div className="container d-flex p-5">
              <div className="review-cards-mobile p-3">
                <div className="d-flex align-items-center">
                  <div className="w-25 m-3">
                    <img src="../../images/test-face-image.jpeg" className="review-face-photo"></img>
                  </div>
                  <div className="w-50">
                    <h5>Vlezh Robert</h5>
                    <p>Warsaw, Poland</p>
                  </div>
                  <div className="w-25 d-flex">
                    <p className="me-2">4.5</p>
                    <i className="bi bi-star-fill star"></i>
                  </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quas earum quos deleniti id, quaerat autem voluptatibus nesciunt similique a! Deserunt repudiandae doloribus eaque reprehenderit magni. Officia, saepe. Amet, delectus!</p>
              </div>
              <div className="review-cards-mobile p-3 ms-5">
                <div className="d-flex align-items-center">
                  <div className="w-25 m-3">
                    <img src="../../images/test-face-image.jpeg" className="review-face-photo"></img>
                  </div>
                  <div className="w-50">
                    <h5>Vlezh Robert</h5>
                    <p>Warsaw, Poland</p>
                  </div>
                  <div className="w-25 d-flex">
                    <p className="me-2">4.5</p>
                    <i className="bi bi-star-fill star"></i>
                  </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quas earum quos deleniti id, quaerat autem voluptatibus nesciunt similique a! Deserunt repudiandae doloribus eaque reprehenderit magni. Officia, saepe. Amet, delectus!</p>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="container d-flex p-5">
              <div className="review-cards-mobile p-3">
                <div className="d-flex align-items-center">
                  <div className="w-25 m-3">
                    <img src="../../images/test-face-image.jpeg" className="review-face-photo"></img>
                  </div>
                  <div className="w-50">
                    <h5>Vlezh Robert</h5>
                    <p>Warsaw, Poland</p>
                  </div>
                  <div className="w-25 d-flex">
                    <p className="me-2">4.5</p>
                    <i className="bi bi-star-fill star"></i>
                  </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quas earum quos deleniti id, quaerat autem voluptatibus nesciunt similique a! Deserunt repudiandae doloribus eaque reprehenderit magni. Officia, saepe. Amet, delectus!</p>
              </div>
              <div className="review-cards-mobile p-3 ms-5">
                <div className="d-flex align-items-center">
                  <div className="w-25 m-3">
                    <img src="../../images/test-face-image.jpeg" className="review-face-photo"></img>
                  </div>
                  <div className="w-50">
                    <h5>Vlezh Robert</h5>
                    <p>Warsaw, Poland</p>
                  </div>
                  <div className="w-25 d-flex">
                    <p className="me-2">4.5</p>
                    <i className="bi bi-star-fill star"></i>
                  </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quas earum quos deleniti id, quaerat autem voluptatibus nesciunt similique a! Deserunt repudiandae doloribus eaque reprehenderit magni. Officia, saepe. Amet, delectus!</p>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="container d-flex p-5">
              <div className="review-cards-mobile p-3">
                <div className="d-flex align-items-center">
                  <div className="w-25 m-3">
                    <img src="../../images/test-face-image.jpeg" className="review-face-photo"></img>
                  </div>
                  <div className="w-50">
                    <h5>Vlezh Robert</h5>
                    <p>Warsaw, Poland</p>
                  </div>
                  <div className="w-25 d-flex">
                    <p className="me-2">4.5</p>
                    <i className="bi bi-star-fill star"></i>
                  </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quas earum quos deleniti id, quaerat autem voluptatibus nesciunt similique a! Deserunt repudiandae doloribus eaque reprehenderit magni. Officia, saepe. Amet, delectus!</p>
              </div>
              <div className="review-cards-mobile p-3 ms-5">
                <div className="d-flex align-items-center">
                  <div className="w-25 m-3">
                    <img src="../../images/test-face-image.jpeg" className="review-face-photo"></img>
                  </div>
                  <div className="w-50">
                    <h5>Vlezh Robert</h5>
                    <p>Warsaw, Poland</p>
                  </div>
                  <div className="w-25 d-flex">
                    <p className="me-2">4.5</p>
                    <i className="bi bi-star-fill star"></i>
                  </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quas earum quos deleniti id, quaerat autem voluptatibus nesciunt similique a! Deserunt repudiandae doloribus eaque reprehenderit magni. Officia, saepe. Amet, delectus!</p>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className={useWindowSize().width > 768 ? 'd-none' : 'd-block'}>
        <Carousel variant="dark">
          <Carousel.Item>
            <div className="d-flex justify-content-center">
              <div className="review-cards-mobile p-3 mb-5">
                <div className="d-flex align-items-center">
                  <div className="w-25 m-3">
                    <img src="../../images/test-face-image.jpeg" className="review-face-photo"></img>
                  </div>
                  <div className="w-50">
                    <h5>Vlezh Robert</h5>
                    <p>Warsaw, Poland</p>
                  </div>
                  <div className="w-25 d-flex">
                    <p className="me-2">4.5</p>
                    <i className="bi bi-star-fill star"></i>
                  </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quas earum quos deleniti id, quaerat autem voluptatibus nesciunt similique a! Deserunt repudiandae doloribus eaque reprehenderit magni. Officia, saepe. Amet, delectus!</p>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-flex justify-content-center">
              <div className="review-cards-mobile p-3 mb-5">
                <div className="d-flex align-items-center">
                  <div className="w-25 m-3">
                    <img src="../../images/test-face-image.jpeg" className="review-face-photo"></img>
                  </div>
                  <div className="w-50">
                    <h5>Vlezh Robert</h5>
                    <p>Warsaw, Poland</p>
                  </div>
                  <div className="w-25 d-flex">
                    <p className="me-2">4.5</p>
                    <i className="bi bi-star-fill star"></i>
                  </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quas earum quos deleniti id, quaerat autem voluptatibus nesciunt similique a! Deserunt repudiandae doloribus eaque reprehenderit magni. Officia, saepe. Amet, delectus!</p>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-flex justify-content-center">
              <div className="review-cards-mobile p-3 mb-5">
                <div className="d-flex align-items-center">
                  <div className="w-25 m-3">
                    <img src="../../images/test-face-image.jpeg" className="review-face-photo"></img>
                  </div>
                  <div className="w-50">
                    <h5>Vlezh Robert</h5>
                    <p>Warsaw, Poland</p>
                  </div>
                  <div className="w-25 d-flex">
                    <p className="me-2">4.5</p>
                    <i className="bi bi-star-fill star"></i>
                  </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quas earum quos deleniti id, quaerat autem voluptatibus nesciunt similique a! Deserunt repudiandae doloribus eaque reprehenderit magni. Officia, saepe. Amet, delectus!</p>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

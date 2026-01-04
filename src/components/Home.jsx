import React from 'react';
import './Home.css'
function Home() {
  return (
    <div>
      <div
        id="carouselId"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        data-bs-interval="3000"
        data-bs-pause="hover"
      >
        {/* Indicators */}
        <div className="carousel-indicators">
          {[...Array(7)].map((_, i) => (
            <button
              key={i}
              type="button"
              data-bs-target="#carouselId"
              data-bs-slide-to={i}
              className={i === 0 ? 'active' : ''}
            ></button>
          ))}
        </div>

        {/* Slides */}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://media.telanganatoday.com/wp-content/uploads/2022/08/On-handloom-day-visit-this-village-in-Telangana-to-witness-art-of-weaving.jpg"
              alt="First slide"
              style={{ width: '100%', height: '60vh', objectFit: 'cover' }}
            />
            <div className="carousel-caption d-none d-md-block">
              <h5 className='heading5'>Handloom Village</h5>
              <p className='para'>Experience the art of weaving in Telangana.</p>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src="https://i.ytimg.com/vi/9cj5rBIx4rE/maxresdefault.jpg"
              alt="Second slide"
              style={{ width: '100%', height: '60vh', objectFit: 'cover' }}
            />
            <div className="carousel-caption d-none d-md-block">
              <h5  className='heading5'>Traditional Crafts</h5>
              <p className='para'>Explore vibrant local art and crafts.</p>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src="https://www.qalara.com/blog/wp-content/uploads/2022/10/Featured-Image-resized.jpg"
              alt="Third slide"
              style={{ width: '100%', height: '60vh', objectFit: 'cover' }}
            />
            <div className="carousel-caption d-none d-md-block">
              <h5  className='heading5'>Handmade Textiles</h5>
              <p className='para'>Beautiful fabrics made with care.</p>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src="https://i.ytimg.com/vi/SVGjIIqNIYY/maxresdefault.jpg"
              alt="Fourth slide"
              style={{ width: '100%', height: '60vh', objectFit: 'cover' }}
            />
            <div className="carousel-caption d-none d-md-block">
              <h5  className='heading5'>Skilled Artisans</h5>
              <p className='para'>Witness master craftsmanship up close.</p>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src="https://i.ytimg.com/vi/_dmQI6SWi58/maxresdefault.jpg"
              alt="Fifth slide"
              style={{ width: '100%', height: '60vh', objectFit: 'cover' }}
            />
            <div className="carousel-caption d-none d-md-block">
              <h5  className='heading5'>Traditional Weaving</h5>
              <p className='para'>Timeless techniques preserved through generations.</p>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src="https://images.indianexpress.com/2018/08/handloom-textiles_getty-images_759.jpg?w=759"
              alt="Sixth slide"
              style={{ width: '100%', height: '60vh', objectFit: 'cover' }}
            />
            <div className="carousel-caption d-none d-md-block">
              <h5  className='heading5'>Colorful Textiles</h5>
              <p className='para'>Bright and intricate designs that tell a story.</p>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src="https://esaras.in/media/wysiwyg/product-banner.jpg"
              alt="Seventh slide"
              style={{ width: '100%', height: '60vh', objectFit: 'cover' }}
            />
            <div className="carousel-caption d-none d-md-block">
              <h5  className='heading5'>Shop Exclusive</h5>
              <p className='para'>Get your favorite handloom pieces online.</p>
            </div>
          </div>
        </div>

        {/* Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselId"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselId"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* CTA Buttons */}
      <div className="text-center my-4">
        <a href="/shop" className="btn btn-primary mx-2">
          Shop Now
        </a>
        <a href="/about" className="btn btn-outline-secondary mx-2">
          Learn More
        </a>
      </div>
    </div>
  );
}

export default Home;

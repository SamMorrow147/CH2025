import Slider from '../components/NetflixSlider'

export default function PortfolioSlider() {

    const movies = [
        {
          id: 1,
          image: '/images/PortfolioSlider/slide1.jpg',
          imageBg: '/images/PortfolioSlider/slide1b.webp',
          title: '1983'
        },
        {
          id: 2,
          image: '/images/PortfolioSlider/slide2.jpg',
          imageBg: '/images/PortfolioSlider/slide2b.webp',
          title: 'Russian doll'
        },
        {
          id: 3,
          image: '/images/PortfolioSlider/slide3.jpg',
          imageBg: '/images/PortfolioSlider/slide3b.webp',
          title: 'The rain',
        },
        {
          id: 4,
          image: '/images/PortfolioSlider/slide4.jpg',
          imageBg: '/images/PortfolioSlider/slide4b.webp',
          title: 'Sex education'
        },
        {
          id: 5,
          image: '/images/PortfolioSlider/slide5.jpg',
          imageBg: '/images/PortfolioSlider/slide5b.webp',
          title: 'Elite'
        },
        {
          id: 6,
          image: '/images/PortfolioSlider/slide6.jpg',
          imageBg: '/images/PortfolioSlider/slide6b.webp',
          title: 'Black mirror'
        }
      ];

    return (
      <div className="services_section">
        <Slider>
            {
                movies.map(movie => (
                    <Slider.Item movie={movie} key={movie.id}>item1</Slider.Item>
                ))
            }
        </Slider>
        </div>
        
    )
}
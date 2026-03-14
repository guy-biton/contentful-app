import heroImg from './assets/hero.svg'


const Hero = () => {
  return (
    <section className='hero'>
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful Cms</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur illum tempore voluptatem vel perferendis, aliquam accusamus minus consequuntur ab, consectetur ex enim quos iure pariatur voluptatibus. Facere porro nostrum explicabo.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt='woman and the browser' className='image' />
        </div>
      </div>
    </section>
  )
}
export default Hero

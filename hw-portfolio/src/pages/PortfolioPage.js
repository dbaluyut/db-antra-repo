import Card from '../components/Card/Card'
import Button from '../components/Button/Button'
import './PortfolioPage.scss'

import bg1 from '../assets/images/luvtalklogo.png'
import bg2 from '../assets/images/logo.svg'
import bg3 from '../assets/images/mlbproject.png'

function PortfolioPage() {
  return (
    <section className='PortfolioPage'>
      <h1>Projects and Portfolio</h1>
      <h3>
        <em>Sharing my endeavors and passions...</em>
      </h3>
      <div className='CardsContainer'>
        <Card
          background={`linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${bg1})`}
          title='LUV TALK Website'
          desc='Website, created during my first internship, which utilized HTML, CSS, PHP, Ajax, Javascript/jQuery, and Wordpress.
          '
        />
        <Card
          title='Personal Website'
          desc='Enjoyable side project that was created to experiment with more HTML and CSS, but also provided an outlet to showcase my abilities and interests.'
          background={`linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${bg2})`}
        />
        <Card
          title='Strike Zone Analysis'
          desc='Data analytics project completed during my time at the Illinois Math and Science Academy which studied the baseball strike zone based on the state of the game.'
          background={`linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${bg3})`}
        />
      </div>
      <Button>More Projects</Button>
    </section>
  )
}

export default PortfolioPage

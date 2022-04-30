import AboutMe from '../features/AboutMe/AboutMe'
import Banner from '../components/Banner/Banner'
import Button from '../components/Button/Button'
import Section from '../components/Section/Section'
import Article from '../components/Article/Article'

import devSvg from '../assets/images/developerdesign.svg'
import resSvg from '../assets/images/responsivedesign.svg'
import innSvg from '../assets/images/innovativesolutions.svg'
import passSvg from '../assets/images/passion.svg'
import infoBg from '../assets/images/architecture-2178604_1920-main1.jpg'

import PortfolioPage from './PortfolioPage'
import ContactPage from './ContactPage'

function HomePage() {
  return (
    <div>
      <Banner>
        {' '}
        <h2>Hello, I'm</h2>
        <h1>Derrique B.</h1>
        <h2>UI Developer. UX Designer. Problem Solver.</h2>
        <div>
          <Button style={{ marginRight: '2rem' }} type='light' size='large'>
            Info
          </Button>
          <Button type='light' size='large' color='primary'>
            Portfolio
          </Button>
        </div>
      </Banner>
      <AboutMe />
      <Section
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          background: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)), url(${infoBg})`,
          color: 'white',
          padding: '60px 10rem',
          height: 'min-content',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
        }}
      >
        <Article
          title='Development and Design'
          desc=' I aim to put my creativity to the test, designing and building
              unique, meaningful products for clients or merely for my own
              interests.'
          logo={devSvg}
        />
        <Article
          title='Responsive Layouts'
          desc="Development and design isn't merely putting information on the site or preferred media outlet. I organize content and present information in an engaging fashion, driving new and unique layouts in tandem with novel solutions and cool animations."
          logo={resSvg}
        />
        <Article
          title='Ideas and Solutions'
          desc="There are still many problems that exist in today's society, including laziness. Luckily, I hope to combat these issues by innovating, developing easy-to-use programs, solutions, or products."
          logo={innSvg}
        />
        <Article
          title='Passion and Dedication'
          desc='With my profound interest and commitment to my field of study, my projects rarely go unfinished and my problems are never left unresolved.'
          logo={passSvg}
        />
      </Section>
      <PortfolioPage />
      <ContactPage />
    </div>
  )
}

export default HomePage

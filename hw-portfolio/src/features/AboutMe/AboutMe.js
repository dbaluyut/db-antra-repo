import Section from '../../components/Section/Section'
import Button from '../../components/Button/Button'

import bg from '../../assets/images/aboutbackground.jpg'

import './AboutMe.scss'
function AboutMe() {
  return (
    <Section
      className='AboutMe'
      style={{
        background: `linear-gradient( rgba(225, 225, 225, 0.94), rgba(225, 225, 225, 0.94) ), url(${bg})`,
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
      }}
    >
      <div className='heading-group'>
        <h1>About Me</h1>
        <h3>
          <em>Sharing a little bit of my story...</em>
        </h3>
      </div>
      <article>
        <h2>General Overview</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </p>
        <h2>Statistics</h2>
        <p>
          <strong>And for those that don't fancy reading:</strong>
        </p>
        <ul>
          <li>Male, 200 years old.</li>
          <li>Five feet 110 inches</li>
          <li>Favorite fonts:Roboto</li>
          <li>Loves to learn new things</li>
        </ul>
      </article>
      <Button color='secondary' size='large'>
        Contact
      </Button>
    </Section>
  )
}

export default AboutMe

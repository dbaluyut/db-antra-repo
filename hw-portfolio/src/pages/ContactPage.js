import Button from '../components/Button/Button'

import './ContactPage.scss'

function ContactPage() {
  return (
    <div className='ContactPage'>
      <h1>Contact</h1>
      <h2>"xxxxx"</h2>
      <h3>-xxx</h3>
      <div className='ContactPage_container'>
        <div>
          <h2>Reaching out to me</h2>
          <p>
            Don't be afraid to contact me! I'm happy to answer any questions,
            provide more information, or just have a nice conversation! Fill out
            the form below to being reaching out to me. If you prefer another
            email client other than your default, which will appear after
            clicking the button and have all of the information you just
            entered, you can email me at XXXXX.
          </p>
          <h2>Contact Information</h2>
          <ul>
            <li>xxx</li>
            <li>xxx</li>
            <li>xxx-xxx-xxxx</li>
            <li>email</li>
          </ul>
        </div>
        <form>
          <div className='ContactPage_input-2'>
            {' '}
            <div>
              <label htmlFor='first-name'>First Name</label>
              <input />
            </div>
            <div>
              <label htmlFor='first-name'>First Name</label>
              <input />
            </div>
          </div>
          <div>
            <label htmlFor='first-name'>Email</label>
            <input />
          </div>
          <div>
            <label htmlFor='first-name'>Message</label>
            <textarea />
          </div>
          <Button>Submit</Button>
        </form>
      </div>
    </div>
  )
}

export default ContactPage

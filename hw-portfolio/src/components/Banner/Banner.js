import './Banner.scss'
import bannerBg from '../../assets/images/apple-1838564_1920-main.jpg'

function Banner(props) {
  return (
    <div
      style={{
        background: `linear-gradient(rgba(20, 20, 20, 0.7), rgba(20, 20, 20, 0.7)), url(${bannerBg})`,
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
      }}
      className='Banner'
    >
      {props.children}
    </div>
  )
}

export default Banner

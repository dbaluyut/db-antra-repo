import Button from '../Button/Button'

import './Card.scss'
function Card(props) {
  const style = {
    background: props.background ? props.background : '',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    color: 'white',
    padding: '1rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    height: '30rem',
  }
  return (
    <div style={style} className='Card'>
      <h3>{props.title}</h3>
      <p>{props.desc}</p>
      {props.children}
      <Button style={{ width: 'min-content' }}>More</Button>
    </div>
  )
}

export default Card

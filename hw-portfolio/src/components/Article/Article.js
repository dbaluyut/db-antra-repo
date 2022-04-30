import './Article.scss'

function Article(props) {
  return (
    <article className='Article'>
      <img src={props.logo} alt='' />
      <div>
        <h3>{props.title}</h3>
        <p>{props.desc}</p>
      </div>
    </article>
  )
}

export default Article

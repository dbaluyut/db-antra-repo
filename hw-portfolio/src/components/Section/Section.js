import './Section.scss'

function Section(props) {
  //   const style = {
  //     backgroundImage: `url(${props.background})`,
  //     ...props.style,
  //   }
  //   console.log(style)

  return (
    <section className='Section' {...props}>
      {props.children}
    </section>
  )
}

export default Section

import PropTypes  from "prop-types";

export const FirstApp = ( { title, subtitle, name } ) => {
  return (
    <>
      
      <h1>{ title }</h1>
      
      <h2>{ subtitle }</h2>
      
      {/*<p>Ctrl + shift + c</p>*/}
      <p>{ name }</p>
    </>
  )
}


FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string
}

FirstApp.defaultProps = {
  title: "No usar titlulo",
  subtitle: "No usar subtitulo",
  name: "No usar name"
}
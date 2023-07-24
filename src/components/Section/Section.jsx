import PropTypes from "prop-types"


const Section = ({title}) => {
    return (
        <h2 className="title">{title}</h2>
    )
}




export default Section;





Section.propTypes = {
  title: PropTypes.string.isRequired,
}
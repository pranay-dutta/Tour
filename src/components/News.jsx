import PropTypes from 'prop-types'
const styles = {
  container: "w-9/12 sm:w-10/12 lg:w-7/12",
  image: "w-full h-30 lg:h-44 xl:h-60 object-cover rounded cursor-pointer hover:opacity-80",
  newsHeading: "mt-4 text-center font-semibold cursor-pointer hover:underline underline-offset-4",
}

const News = (props) => {
  return (
    <div className={styles.container}>
      <img
        src={props.imgsrc}
        alt={props.altname}
        className={styles.image}
      />
      <h2 className={styles.newsHeading}>
        {props.title}
      </h2>
    </div>
  )
}
News.propTypes = {
  imgsrc: PropTypes.string.isRequired,
  altname: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default News

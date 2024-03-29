import PropTypes from 'prop-types'

const Blog = (props) => {

  return (
    <div className="w-9/12 sm:w-10/12 lg:w-7/12">
      <img
        src={props.imgsrc}
        alt={props.altname}
        className='w-full h-30 lg:h-44 xl:h-60 object-cover rounded cursor-pointer' />
      <h2
        className='mt-4 text-center font-semibold cursor-pointer'>
        {props.title}
      </h2>
    </div>
  )
}
Blog.propTypes = {
  imgsrc: PropTypes.string.isRequired,
  altname: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default Blog

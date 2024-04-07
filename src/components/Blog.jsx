import PropTypes from 'prop-types'

// custom styles using tailwind
const blogStyles = {
  link: {
    textDecoration: 'none',
    padding: '10px 15px',
    fontSize: '1em',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s'
  },
  edit: "edit text-white bg-sky-400 hover:bg-sky-700 mr-2",
  delete: "delete text-white bg-red-400 hover:bg-red-700",
  listItems: "pt-5 pb-12 drop-shadow-none px-0 border-b border-solid border-slate-200",
  blogHeading: "text-2xl leading-none mb-2 font-semibold",
  smallDetails: "block mb-5 text-slate-500",
}

const Blog = (props) => {
  /*Delete functionality*/
  const handleClick = () => {
    props.onDelete(props.id)
  }
  return (
    <ul className='list-none'>
      {/* Blog details */}
      <li className={blogStyles.listItems}>
        <h2 className={blogStyles.blogHeading}>{props.title}</h2>
        <small className={blogStyles.smallDetails}>{props.created_at}</small>
        <p className='mb-5'>{props.content}</p>
        <small className={blogStyles.smallDetails}>By: {props.author}</small>

        {/* Blog edit and delete handler */}
        <a style={blogStyles.link} className={blogStyles.edit} href={`/edit/${props.id}`}>Edit</a>
        <a style={blogStyles.link} className={blogStyles.delete} onClick={handleClick}>Delete</a>
      </li>
    </ul>
  )
}

Blog.propTypes = {
  id: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  created_at: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
}

export default Blog
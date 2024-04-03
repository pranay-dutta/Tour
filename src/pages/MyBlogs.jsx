import { Navbar, Blog } from '../components/ComponentExport';
import { useState, useEffect } from 'react'
import Snackbar from '@mui/material/Snackbar';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import supabase from '../config/supabaseClient'

const customStyles = {
  link: {
    textDecoration: 'none',
    padding: '10px 15px',
    fontSize: '1em',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s'
  },
  container: "max-w-4xl drop-shadow-md mx-auto py-5 px-10 rounded-lg",
  heading: "text-3xl text-center font-normal my-5",
  line: "w-1/2 drop-shadow-2xl mx-auto bg-black h-[1px] mb-7 opacity-[40%]",
  newBlog: "text-center text-white bg-green-400 hover:bg-green-700 -translate-x-1/2 ml-[50%] inline-block mb-4 -mt-4"
}


function MyBlogs() {
  const [error, setError] = useState(null);
  const [posts, setPosts] = useState(null);
  const [open, setOpen] = useState(false);


  const handleDelete = async (id) => {

    //deleting single post
    console.log(id);
    try {
      setPosts(posts.filter(post => post.id !== id));
      await supabase.from('posts').delete().eq("id", id);
      setOpen(true);
    } catch (error) {
      console.log(error.message);
    }
  }
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  const action = (
    <>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );

  useEffect(() => {
    /* Fetching all values from supabase posts table */
    const fetchPosts = async () => {
      const { data, error } = await supabase
        .from("posts")
        .select('*')
        .order('id', { ascending: true });

      if (error) {
        setError("No posts found")
        setPosts(null)
      }
      if (data) {
        setError(null)
        setPosts(data);
      }

    }

    fetchPosts()
  }, [])
  return (
    <>
      <Navbar />
      <div name='blog-container' className={customStyles.container}>
        <h1 name='my-blogs' className={customStyles.heading}>BLOGS</h1>
        <div name='line' className={customStyles.line} > </div>
        <a
          name='new-post'
          style={customStyles.link}
          className={customStyles.newBlog}
          href='/new'
        >
          Crate New Blog
        </a>

        {
          posts && posts.map((post, idx) => {
            return (
              <Blog
                key={idx}
                id={post.id}
                title={post.title}
                author={post.author}
                content={post.content}
                created_at={post.created_at}
                onDelete={(id) => handleDelete(id)}
              />
            )
          })
        }
        <p>{error && error}</p>
      </div>

      {
        open &&
        <Snackbar
          open={open}
          autoHideDuration={2000}
          onClose={handleClose}
          message={`Post deleted`}
          action={action}
        />
      }
    </>
  )
}

export default MyBlogs

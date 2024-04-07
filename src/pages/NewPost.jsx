import Navbar from "../components/Navbar"
import supabase from "../config/supabaseClient"
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from "react"
const styles = {
  input: "w-full mb-5 p-2 border border-[#ddd] border-solid text-base outline-none duration-300 rounded focus:border-blue-400",
  link: "no-underline py-2 px-10 text-xl border-none rounded transition duration-300 bg-blue-700 hover:bg-blue-500 text-white block mx-auto mb-5",
  form: "gap-3 items-center justify-center mx-5",
  formContainer: "container mx-auto bg-slate-100 shadow-md rounded p-5 mt-12",
}

const NewPost = () => {
  const [newPost, setNewPost] = useState(null);
  const [id, setId] = useState(0);
  const navigate = useNavigate();
  const date = new Date();
  const dateString = date.toISOString().slice(0, 19) + "+00:00"
  /* The part "+00:00" represents the UTC (Coordinated Universal Time) offset */
  
  //fetching the if of the last post 
  useEffect(() => {
    const getLength = async () => {
      try {
        const { data, error } = await supabase
          .from('posts')
          .select('id')
          .order('id', { ascending: false })
          .limit(1)
        console.log(data);
        setId(data[0].id)
        if (error) {
          throw error;
        }
      } catch (error) {
        console.log(error.message);
      }
    }
    getLength();
  }, [])

  //Setting a new blog entry
  const handelUpdate = async () => {
    try {
      const { error, status } = await supabase.from('posts').insert([
        {
          id: id + 1,
          title: newPost.title,
          content: newPost.content,
          author: newPost.author,
          created_at: dateString,
        }
      ]);
      if (error) {
        console.log(error);
        throw error;
      }
      console.log('Post created successfully:', status);
      navigate('/my-blogs?message=Post created successfully');

    } catch (error) {
      console.log(error.message);
      console.log("Error creating post");
    }

  }

  //handling state of inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(value);
    setNewPost(prevPost => ({
      ...prevPost,
      [name]: value     //change according to name 
    }));

  }


  return (
    <div className="w-full h-screen">
      <Navbar />
      <div className={styles.formContainer}>

        <form
          id="createForm"
          onSubmit={(e) => {
            e.preventDefault();
            handelUpdate(e);
          }}
          className={styles.form}
        >
          <input
            className={styles.input}
            type="text"
            name="title"
            placeholder="Enter a title"
            onChange={(e) => { handleChange(e) }}
            required
          />
          <textarea
            className={styles.input}
            name="content"
            onChange={(e) => { handleChange(e) }}
            placeholder="Enter content"
            rows="10"
            required
          >
          </textarea>
          <input
            className={styles.input}
            type="text"
            name="author"
            placeholder="Author"
            onChange={(e) => { handleChange(e) }}
            required
          />
          <button className={styles.link} type="submit">Update</button>
        </form>
      </div>
    </div>
  )
}

export default NewPost
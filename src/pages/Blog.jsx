import supabase from '../config/supabaseClient'
import { useState, useEffect } from 'react'

function Blog() {
  const [error, setError] = useState(null);
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data, error } = await supabase
      .from("posts")
      .select('*')

      if (error) {
        console.log(error);
        setError("No posts found")
        setPosts(null)
      }
      if (data) {
        setError(null)
        console.log(data);
        setPosts(data);
      }

    }

    fetchPosts()
  }, [])

  return (
    <>
      <div>
        {error && (<p>{error}</p>)}
        {posts && (
          <div>
            {posts.map(x => {
              return (
                <p key={x.id}>
                  {x.tittle}
                </p>
              )
            })}
          </div>
        )}
      </div>

    </>
  )
}

export default Blog

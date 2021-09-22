import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../redux/actions/postActions";

function Posts() {
  const dispatch = useDispatch();
  const postData = useSelector((state) => state);
  const error=useSelector((state)=>state.error);


  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  const renderPost = () => {
    if (postData.loading) {
      return <h2>Loading...</h2>;
    } else if (postData.loading === false) {
      return (
        <>
         
          { postData.error === null ? (
            postData.postItems.map((post,index) => {
              return (
                <div key={index}>
                  <h3>Post Title: {post.title}</h3>
                  <p>Body : {post.body}</p>
                </div>
              );
            })
          ) : (
            <div>{error}</div>
          )}
        </>
      );
    }
  };

  return <div>{renderPost()}</div>;
}

export default Posts;

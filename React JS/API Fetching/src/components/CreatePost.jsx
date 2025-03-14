import { useContext, useRef } from "react";
import  { PostList } from "../store/post-list-store";

const CreatePost = () => {
  const {addPost} =  useContext(PostList)
  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) =>{
    event.preventDefault();
    const userId = userIdElement.current.value ; 
    const postTitle = postTitleElement.current.value ;
    const postBody = postBodyElement.current.value  ;
    const reactions = reactionsElement.current.value ; 
    const tags = tagsElement.current.value.split(' '); 

    userIdElement.current.value = "" ;
    postTitleElement.current.value = ""; 
    postBodyElement.current.value = "" ; 
    reactionsElement.current.value = "" ; 
    tagsElement.current.value = "" ; 
    
    addPost(userId , postTitle, postBody , reactions, tags); 
  }
  return (
    <>
      <form className="create-post" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="userId" className="form-label">
            User Id :
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            aria-describedby="emailHelp"
            ref={userIdElement}
            placeholder="Enter your user id "
          />
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title :
          </label>
          <input
            type="text"
            ref={postTitleElement}
            className="form-control"
            id="title"
            aria-describedby="emailHelp"
            placeholder="How are you feeling today"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            Body :
          </label>
          <textarea
            ref={postBodyElement}
            rows="4"
            type="text"
            className="form-control"
            id="body"
            aria-describedby="emailHelp"
            placeholder="tell about you "
          />
        </div>
        <div className="mb-3">
          <label htmlFor="reactions" className="form-label">
            reactions :
          </label>
          <input
            type="text"
            ref={reactionsElement}
            className="form-control"
            id="title"
            aria-describedby="emailHelp"
            placeholder="people reacted "
          />
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Tags :
          </label>
          <input
            ref={tagsElement}
            type="text"
            className="form-control"
            id="title"
            aria-describedby="emailHelp"
            placeholder="Enter your hashtags"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Post
        </button>
      </form>
    </>
  );
};

export default CreatePost;

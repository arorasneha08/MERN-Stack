import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
    let newPostList = currPostList ; 
    if (action.type == "DELETE_POST") {
        newPostList= currPostList.filter(
        (post) => post.id != action.payload.postId
    )
  }
  else if(action.type == "ADD_POST"){
    newPostList = [action.payload , ...DEFAULT_POST_LIST];
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  const addPost = (userId , postTitle, postBody , reactions, tags) => {
    console.log(`${userId} ${postTitle} ${postBody} ${reactions} ${tags}`)
    dispatchPostList({
        type : "ADD_POST" ,
        payload : {
            id : Date.now() ,
            title : postTitle , 
            body : postBody , 
            reactions : reactions,
            userId : userId ,
            tags  : tags 
        }
    })
  };
  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: { postId },
    });
  };

  return (
    <PostList.Provider
      value={{
        postList: postList,
        addPost: addPost,
        deletePost: deletePost,
      }}
    >
      {children}
    </PostList.Provider>
  );
};
const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "go mumbai",
    body: "hii friends .... going to vacation",
    reactions: 2,
    userId: "user-9",
    tags: ["vacation", "mumbai"],
  },
  {
    id: "2",
    title: "passs ho gaye",
    body: "4 saal ki masti ke baad bhi pass ho gaye ",
    reactions: 15,
    userId: "user-12",
    tags: ["graduating", "unbelievable"],
  },
];
export default PostListProvider;

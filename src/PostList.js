import React from "react";

/**
 * Diplays a list of either text or image posts.
 *
 */
function PostList({posts,postsSettingMethod}) {
  
  // TODO: Diplay the list of posts.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each post must have className="post" for the tests to work.
  // TODO: Each post must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked

  const handleDelete=(event)=>{
    const postContent = event.target.parentNode
    //console.log(postContent.id)
    //console.log(listOfPosts)
    const filteredPosts = posts.filter((post,index)=>{
      //console.log(index)
      return index!=postContent.id})
    postsSettingMethod(filteredPosts)
    //event.target.parentElement.remove()
    
   }

  const listOfPosts = posts.map(({type,content},index)=>{
    if(type==="Text"){
      return (<div className="post" style={{display:"flex",flexDirection:"column"}} key={index} id={index}>
        <p>{content}</p>
        <button name="delete" onClick={handleDelete} style={{width:"25%"}}>delete</button>
        </div>)
    }
    return (<div className="post" style={{display:"flex",flexDirection:"column"}} key={index} id={index}><img src={content}/><button name="delete" onClick={handleDelete} style={{width:"25%"}}>delete</button></div>)
  })
  
  
  //
  
  return <div className="post-list">
    {listOfPosts}
  </div>;
}

export default PostList;

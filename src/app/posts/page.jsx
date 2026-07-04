//way-1
// const getPosts = async () => {

//     const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//      return res.json();
// }


//way-4

//    const getPosts = async () => {

//      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//        if(!res.ok){
//            throw new Error('Failed to fetch posts');
//        }
//    }
// way-3

//  const getPosts = async () => {
       
//     try{
//             const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//      return res.json();
//     }

//     catch(err){
//           throw new Error('Failed to fetch posts');
//     }

  
// }

//way-2
const PostsPage =async () => {
    //   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    //   const posts = await res.json();

    //    console.log(posts);
    // const posts = await getPosts();
    // console.log(posts);
    return (
        <div>
              {/* <h2>Post are comming soon : {posts.length}</h2> */}
              <h2>Post are comming soon: </h2>
        </div>
    );
};

export default PostsPage;
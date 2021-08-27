import axios from 'axios';
import react,{useEffect,useState} from 'react';
import PostTop from './PostTop';
import PostMid from './PostMid';
import PostBottom from './PostBottom';

const Post = ({post}) => {
    // console.log(post)
    const [user, setuser] = useState({})
    useEffect(() => {

        const fetchUser = async() => {
            const currUser = await axios.get(`user/${post.userId}`)
            setuser(currUser.data)
        } 
        fetchUser()
    }, [])

    // console.log(user)
    return (
        <>
            <div className="post">
                <PostTop user = {user} />
                <PostMid post = {post} />
                <PostBottom post = {post} />
            </div>



{
            //     <div className="rows">
            //         <div className="col">
            //             <div className="cards">
            //                 <img className="card_img" src="https://images.unsplash.com/photo-1622698639855-fda2a55e0cbe?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8Ym84alFLVGFFMFl8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"></img>
            //                 <div  className="facility_div">
            //                     <div style = {{marginLeft:"1.1vw"}}>
            //                     <i className="far fa-heart facility_icon fa-lg"></i>
            //                     <i className="far fa-comments facility_icon fa-lg"></i>
            //                     <i className="far fa-share facility_icon fa-lg"></i>
            //                     </div>
            //                     <i style = {{marginRight:"1.5vw"}} className="far fa-bookmark facility_icon fa-lg" ></i>
            //                 </div>
            //             </div>
            //         </div>
            //     </div>
}


        </>

    );
}

export default Post;
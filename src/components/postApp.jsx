

import { pending, success, failure } from "../redux/actions/actionTypes";
import axios from "axios";
import { use, useEffect } from "react";
import {useSelector ,useDispatch } from "react-redux";



const PostApp = () => {
    const{loading,successMsg,err} = useSelector(state => state)
    const dispatch = useDispatch()
   
    
    useEffect(() => {
        dispatch(pending())
        setTimeout(()=>{
        axios.get("https://gauravgitacc.github.io/postAppData/posts.json")
            .then(res => dispatch(success(res.data)))
                .catch(err => dispatch(failure(err.message)))
        }, 5000)
    }, [])
    if (loading) {
        return <h1>Loading...</h1>
    } 




    return (
        <div>
            {successMsg && successMsg.map(msg => (
                <div key={msg.id}>
                    <p>User Id :{msg.userId}</p>
                    <p>Msg id  :{msg.id}</p>
                    <h1>Title  :{msg.title}</h1>
                    <p>Body    : {msg.body}</p>

                </div>
            ))}
            {!successMsg && <h1>Error Occured {err}</h1>}

            

        </div>
    )
}
export default PostApp
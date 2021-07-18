import React, {useState, useEffect} from 'react'
import { Link } from "react-router-dom"
import axios from 'axios'


// Implement data table for UI pagination.
function DataFetching() {

    const [posts, setPosts] = useState([])
    const [post, setPost] = useState({})
    const [id, setId] = useState(1)
    const [idFromButtoClick, setIdFromButtonClick] = useState(1)

    const handleClick = () => {
        setIdFromButtonClick(id)
    }

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            console.log(res)
            setPosts(res.data)
        }).catch(err => {
            console.log(err)
        })
    }, [])

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtoClick}`)
        .then(res => {
            console.log(res)
            setPost(res.data)
        }).catch(err => {
            console.log(err)
        })
    }, [idFromButtoClick])

    return (
        <div>
            <Link to="/">Go Back</Link >
            <input type='number' value={id} onChange={e => setId(e.target.value)}></input>
            <button onClick={handleClick}>Fetch Post</button>
            <p>{post.body}</p>
            <hr />
            <ul>               
                {posts.map(post =>
                    <li key={post.id}>{post.title}</li>
                )}
            </ul>

        </div>
    )
}

export default DataFetching

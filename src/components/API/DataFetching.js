import React, {useState, useEffect} from 'react'
import axios from 'axios'


// Implement data table for UI pagination.
function DataFetching() {

    const [posts, setPosts] = useState([])
    const [post, setPost] = useState({})
    const [id, setId] = useState(1)
    const [idFromButtoClick, setIdFromButtonClick] = useState(1)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    const handleClick = () => {
        setIdFromButtonClick(id)
    }

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            console.log(res)
            setLoading(false)
            setPosts(res.data)
            setError('')
        }).catch(err => {
            console.log(err)
            setLoading(false)
            setError('Something went wrong')
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
            <input type='number' value={id} onChange={e => setId(e.target.value)}></input>
            <button onClick={handleClick}>Fetch Post</button>
            <p>{post.body}</p>
            <hr />
            {error ? error : ''}
            {loading ? 'Loading' : <ul>               
                {posts.map(post =>
                    <li key={post.id}>{post.title}</li>
                )}
            </ul>}

        </div>
    )
}

export default DataFetching

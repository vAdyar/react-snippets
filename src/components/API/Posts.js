import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { DataGrid } from '@material-ui/data-grid';

function Posts() {

    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    const columns = [
        { field: 'id', headerName: 'ID', width: 130 },
        { field: 'title', headerName: 'Title', width: 130 },
        { field: 'body', headerName: 'Body', width: 530 },
      ];

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

    return (
        <div style={{ height: 400, width: '100%' }}>
            {loading 
            ? 'Loading' 
            : 
            // <ul>               
            //     {posts.map(post =>
            //         <li key={post.id}>{post.title}</li>
            //     )}
            // </ul>
            <DataGrid rows={posts} columns={columns} pageSize={5} checkboxSelection/>
            }
        </div>
    )
}

export default Posts

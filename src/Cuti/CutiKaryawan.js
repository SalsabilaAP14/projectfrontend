import axios from 'axios'
import { React, useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faTrash,
    faPencil,

} from "@fortawesome/free-solid-svg-icons"

const CutiKaryawan = () => {
    const [posts, setPosts] = useState([]);


    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {
        const response = await axios.get('http://localhost:3001/cutikaryawan');
        //get response data
        setPosts(response.data);

    }

    const deletePost = async (id) => {

        //sending
        await axios.delete(`http://localhost:3001/cutikaryawan/${id}`);
    
        //panggil function "fetchData"
        getData();
    }

 

    return (
        <div className='container mt-5'>
            <table className="table table-striped table-bordered" style={{ width: '100%' }}>
                <thead>
                    <tr>
                        <th>Nama Karyawan</th>
                        <th>Tanggal Cuti</th>
                        <th>Keterangan</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map((post, index) => (
                        <tr key={post.id}>
                            <td>{index + 1}</td>
                            <td>{post.nama_karyawan}</td>
                            <td>{post.tanggal}</td>
                            <td>{post.keterangan}</td>
                            <button onClick={() => deletePost(post.id)} variant="danger" size="sm">DELETE</button>
                        </tr>
                    ))}
                  
                </tbody>
            </table>
            <Link to='/addcutikaryawan' className='btn btn-primary float-end mt-2'>
                Tambah Data
            </Link>
        </div>
    )
}

export default CutiKaryawan

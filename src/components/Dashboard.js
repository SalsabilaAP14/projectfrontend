import axios from 'axios'
import { React, useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faTrash,
    faPencil,

} from "@fortawesome/free-solid-svg-icons"
  


const Dashboard = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {
        await axios.get('http://localhost:3001/karyawan').then((res) => {
            setData(res.data);
            console.log(res.data)
        });
    }


    return (
        <div>
            <table id="example" class="display" style={{ width: '100%' }}>
                <thead>
                    <tr>
                        <th>Nama Lengkap</th>
                        <th>Divisi</th>
                        <th>Tanggal Masuk</th>
                        <th>Status Karyawan</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(result => {
                        return (
                            <tr>
                                <td>{result.fullname}</td>
                                <td>{result.divisi}</td>
                                <td>{result.tanggalmasuk}</td>
                                <td>{result.statuskaryawan}</td>
                                <td><button><FontAwesomeIcon icon={faPencil} size="sm" /></button>
                                <button><FontAwesomeIcon icon={faTrash} size="sm" /></button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Dashboard

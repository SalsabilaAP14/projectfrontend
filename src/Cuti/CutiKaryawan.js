import axios from 'axios'
import { React, useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faTrash,
    faPencil,

} from "@fortawesome/free-solid-svg-icons"
 
 const CutiKaryawan = () => {
  const [data, setData] = useState([])

  useEffect(() => {
      getData();
  }, [])

  const getData = async () => {
      await axios.get('http://localhost:3001/cutikaryawan').then((res) => {
          setData(res.data);
          console.log(res.data)
      });
  }

   return (
     <div className='container mt-5'>
       <table  className="table table-striped table-bordered" style={{ width: '100%' }}>
                <thead>
                    <tr>
                        <th>Nama Karyawan</th>
                        <th>Tanggal Cuti</th>
                        <th>Keterangan</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                {data.map(result => {
                        return (
                            <tr>
                                <td>{result.nama_karyawan}</td>
                                <td>{result.tanggal}</td>
                                <td>{result.keterangan}</td>
                                <td><button><FontAwesomeIcon icon={faPencil} size="sm" /></button>
                                <button><FontAwesomeIcon icon={faTrash} size="sm" /></button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <Link to='/addcutikaryawan' className='btn btn-primary float-end mt-2'>
              Tambah Data
            </Link>
     </div>
   )
 }
 
 export default CutiKaryawan
 
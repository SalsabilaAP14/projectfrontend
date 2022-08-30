import axios from 'axios'
import { React, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faCalendarTimes

} from "@fortawesome/free-solid-svg-icons"

const CutiKaryawan = () => {
    const [nama_karyawan, setNamaKaryawan] = useState('');
    const [tanggal, setTanggal] = useState('');
    const [keterangan, setKeterangan] = useState('');
    const [alert, setAlert] = useState('');
    const [error, setError] = useState('');
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

    const changeNamaKaryawan = (e) => {
        const value = e.target.value
        setNamaKaryawan(value)
        console.log(value)
    }

    const changeTanggal = (e) => {
        const value = e.target.value
        setTanggal(value)
        console.log(value)
    }

    const changeKeterangan = (e) => {
        const value = e.target.value
        setKeterangan(value)
        console.log(value)
    }

    const submit = () => {
        const data = {
            nama_karyawan: nama_karyawan,
            tanggal: tanggal,
            keterangan: keterangan
        }
        axios.post('http://localhost:3001/cutikaryawan', data)
            .then(result => {
                if (result) {
                    if (result.data) {
                        setNamaKaryawan();
                        setTanggal('');
                        setKeterangan('');
                        setAlert(result.data.message);
                        this.props.history.push('/cutikaryawan')
                        setTimeout(() => {
                            setAlert('')
                        }, 3000)
                    }
                }
            })
            .catch(e => {
                setError(e.response.data.message)
            })
    }


    return (
        <div className='container mt-5'>
            <p className='fw-bold'>Karyawan Cuti</p>
            {
                error && (
                    <div className="alert alert-danger">
                        <p>{error}</p>
                    </div>
                )
            }
            {
                alert && (
                    <div className="alert alert-primary">
                        <p>{alert}</p>
                    </div>
                )
            }
            <div className="mb-3">
                <select class="form-select" aria-label="Default select example" onChange={changeNamaKaryawan}>
                    <option selected>Nama Karyawan</option>
                    {data.map(result => {
                        return (

                            <option value={result.fullname} >{result.fullname}</option>


                        )
                    })}
                </select>
            </div>
            <div className="mb-3">
                <label for="tanggal" className="form-label">Tanggal</label>
                <div className='d-flex align-items-center'>
                    <FontAwesomeIcon icon={faCalendarTimes} size="md" /><input type="date" className="form-control" id="tanggal" value={tanggal} onChange={changeTanggal} style={{ marginLeft: 10 }} />
                </div>
            </div>
            <div className="mb-3">
                <label for="keterangan" className="form-label">Keterangan</label>
                <input type="text" className="form-control" id="keterangan" value={keterangan} onChange={changeKeterangan} />
            </div>
            <button onClick={submit} className="btn btn-primary">Submit</button>
        </div>

    )
}

export default CutiKaryawan

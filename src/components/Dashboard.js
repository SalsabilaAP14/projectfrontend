import React, { useState, useEffect} from "react";
import { ReactTableDefaults } from 'react-table-6';
import Axios from "axios";
import { Navigate } from 'react-router-dom';

export const Dashboard = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        debugger;
        Axios
            .get("http://localhost:3001/karyawan")
            .then(result => setData(result.data));
    })
    const token = localStorage.getItem('token')

    if(!token) {
        return <Navigate to="/" />
    }

    return (
        <body>
                <table id="example" class="display" style={{width:'100%'}}>
                    <thead>
                        <tr>
                            <th>User ID</th>
                            <th>Full Name</th>
                            <th>Status Pernikahan</th>
                            <th>NIK</th>
                            <th>Identitas</th>
                            <th>Divisi</th>
                            <th>Tanggal Masuk</th>
                            <th>Status Karyawan</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                            <th>Alamat</th>
                            <th>Posisi</th>
                            <th>Site</th>
                            <th>Telegram</th>
                            <th>Pendidikan</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>ari.puh</td>
                            <td>Ari Puh</td>
                            <td>Menikah</td>
                            <td>"3"</td>
                            <td>KTP</td>
                            <td>PMO</td>
                            <td>2005-03-01</td>
                            <td>Tetap</td>
                            <td>ari.puh@solusi247.com</td>
                            <td>082122984634</td>
                            <td>Komp. Deppen Blok P No. 01 RT/Rw: 003/010</td>
                            <td>Project Manager</td>
                            <td>Jakarta</td>
                            <td>AriPurwatiningsih</td>
                            <td>S1 Universitas Indonesia</td>
                        </tr>
                        <tr>
                            <td>arei.nara</td>
                            <td>Arie Nara</td>
                            <td>Menikah</td>
                            <td>"5"</td>
                            <td>KTP</td>
                            <td>PMO</td>
                            <td>2008-03-17</td>
                            <td>Tetap</td>
                            <td>arie.nara@solusi247.com</td>
                            <td>0812-9123-2930</td>
                            <td>Perum Bukit Rajeg Blok A1/9 RT/RW: 003/011</td>
                            <td>System Analyst</td>
                            <td>Jakarta</td>
                            <td>arrayszone</td>
                            <td>D3 Amikom</td>
                        </tr>
                        <tr>
                            <td>arief.ds</td>
                            <td>Arief Ds</td>
                            <td>Menikah</td>
                            <td>"8"</td>
                            <td>KTP</td>
                            <td>PMO</td>
                            <td>2011-09-27</td>
                            <td>Tetap</td>
                            <td>arief.ds@solusi247.com</td>
                            <td>0813-1759-5876</td>
                            <td>Dawung, Jetak RT 02 RW 01</td>
                            <td>Project Manager</td>
                            <td>Yogyakarta</td>
                            <td>dolants</td>
                            <td>S1 (Ongoing) STMIK Akakom Yogyakarta</td>
                        </tr>
                        <tr>
                            <td>arief.aman</td>
                            <td>Arief Man</td>
                            <td>Menikah</td>
                            <td>"1"</td>
                            <td>KTP</td>
                            <td>PMO</td>
                            <td>2013-12-02</td>
                            <td>Tetap</td>
                            <td>arief.aman@solusi247.com</td>
                            <td>0856-3208-677</td>
                            <td>Bluru Permai AA - 18 RT 05 RW 14</td>
                            <td>Developer Analyst</td>
                            <td>Yogyakarta</td>
                            <td>eariefrahman</td>
                            <td>S1 Universitas DR. Soetomo Surabaya</td>
                        </tr>
                        <tr>
                            <td>arif.pama</td>
                            <td>Arif Pama</td>
                            <td>Lajang</td>
                            <td>"4"</td>
                            <td>KTP</td>
                            <td>SDO</td>
                            <td>2018-08-31</td>
                            <td>Kontrak</td>
                            <td>arif.pama@solusi247.com</td>
                            <td>0896-8610-4702</td>
                            <td>DK XIII Nengahan RT 85 RW 00</td>
                            <td>Developer</td>
                            <td>Yogyakarta</td>
                            <td>arifpratama398</td>
                            <td>SMK</td>
                        </tr>
                        <tr>
                            <td>aris.sadi</td>
                            <td>Aris Wadi</td>
                            <td>Menikah</td>
                            <td>"3""</td>
                            <td>KTP</td>
                            <td>BO</td>
                            <td>2014-08-01</td>
                            <td>Kontrak</td>
                            <td>-</td>
                            <td>0811-2644-247</td>
                            <td>Salam Kulon RT 01 RW 04</td>
                            <td>Office Assistant</td>
                            <td>Jogjakarta</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>arizona.syah</td>
                            <td>Arizona Syah</td>
                            <td>Menikah</td>
                            <td>"73"</td>
                            <td>KTP</td>
                            <td>RESIGN</td>
                            <td>2017-01-09</td>
                            <td>Resign</td>
                            <td>arizona.syah@solusi247.com</td>
                            <td>0878-6129-0734</td>
                            <td>Jl. Mojo Np. 42 Yogyakarta RT 55 RW 15</td>
                            <td>Linguistik</td>
                            <td>Yogyakarta</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>Tiger Nixon</td>
                            <td>System Architect</td>
                            <td>Edinburgh</td>
                            <td>61</td>
                            <td>2011-04-25</td>
                            <td>$320,800</td>
                            <td></td>
                            <td>abcdefgh</td>
                            <td>abcdefgh</td>
                            <td>abcdefgh</td>
                            <td>abcdefgh</td>
                            <td>abcdefgh</td>
                            <td>abcdefgh</td>
                            <td>abcdefgh</td>
                            <td>abcdefgh</td>
                        </tr>
                        <tr>
                            <td>Tiger Nixon</td>
                            <td>System Architect</td>
                            <td>Edinburgh</td>
                            <td>61</td>
                            <td>2011-04-25</td>
                            <td>$320,800</td>
                            <td></td>
                            <td>abcdefgh</td>
                            <td>abcdefgh</td>
                            <td>abcdefgh</td>
                            <td>abcdefgh</td>
                            <td>abcdefgh</td>
                            <td>abcdefgh</td>
                            <td>abcdefgh</td>
                            <td>abcdefgh</td>
                        </tr>
                        <tr>
                            <td>Tiger Nixon</td>
                            <td>System Architect</td>
                            <td>Edinburgh</td>
                            <td>61</td>
                            <td>2011-04-25</td>
                            <td>$320,800</td>
                            <td></td>
                            <td>abcdefgh</td>
                            <td>abcdefgh</td>
                            <td>abcdefgh</td>
                            <td>abcdefgh</td>
                            <td>abcdefgh</td>
                            <td>abcdefgh</td>
                            <td>abcdefgh</td>
                            <td>abcdefgh</td>
                        </tr>
                        <tr>
                            <td>Tiger Nixon</td>
                            <td>System Architect</td>
                            <td>Edinburgh</td>
                            <td>61</td>
                            <td>2011-04-25</td>
                            <td>$320,800</td>
                            <td></td>
                            <td>abcdefgh</td>
                            <td>abcdefgh</td>
                            <td>abcdefgh</td>
                            <td>abcdefgh</td>
                            <td>abcdefgh</td>
                            <td>abcdefgh</td>
                            <td>abcdefgh</td>
                            <td>abcdefgh</td>
                        </tr>
                        <tr>
                            <td>Tiger Nixon</td>
                            <td>System Architect</td>
                            <td>Edinburgh</td>
                            <td>61</td>
                            <td>2011-04-25</td>
                            <td>$320,800</td>
                            <td></td>
                            <td>abcdefgh</td>
                            <td>abcdefgh</td>
                            <td>abcdefgh</td>
                            <td>abcdefgh</td>
                            <td>abcdefgh</td>
                            <td>abcdefgh</td>
                            <td>abcdefgh</td>
                            <td>abcdefgh</td>
                        </tr>
                        <tr>
                            <td>Tiger Nixon</td>
                            <td>System Architect</td>
                            <td>Edinburgh</td>
                            <td>61</td>
                            <td>2011-04-25</td>
                            <td>$320,800</td>
                            <td></td>
                            <td>abcdefgh</td>
                            <td>abcdefgh</td>
                            <td>abcdefgh</td>
                            <td>abcdefgh</td>
                            <td>abcdefgh</td>
                            <td>abcdefgh</td>
                            <td>abcdefgh</td>
                            <td>abcdefgh</td>
                        </tr>
                        <tr>
                            <td>Tiger Nixon</td>
                            <td>System Architect</td>
                            <td>Edinburgh</td>
                            <td>61</td>
                            <td>2011-04-25</td>
                            <td>$320,800</td>
                            <td></td>
                            <td>abcdefgh</td>
                            <td>abcdefgh</td>
                            <td>abcdefgh</td>
                            <td>abcdefgh</td>
                            <td>abcdefgh</td>
                            <td>abcdefgh</td>
                            <td>abcdefgh</td>
                            <td>abcdefgh</td>
                        </tr>
                        <tr>
                            <td>Tiger Nixon</td>
                            <td>System Architect</td>
                            <td>Edinburgh</td>
                            <td>61</td>
                            <td>2011-04-25</td>
                            <td>$320,800</td>
                            <td></td>
                            <td>abcdefgh</td>
                            <td>abcdefgh</td>
                            <td>abcdefgh</td>
                            <td>abcdefgh</td>
                            <td>abcdefgh</td>
                            <td>abcdefgh</td>
                            <td>abcdefgh</td>
                            <td>abcdefgh</td>
                        </tr>
                        <tr>
                            <td>Tiger Nixon</td>
                            <td>System Architect</td>
                            <td>Edinburgh</td>
                            <td>61</td>
                            <td>2011-04-25</td>
                            <td>$320,800</td>
                            <td></td>
                            <td>abcdefgh</td>
                            <td>abcdefgh</td>
                            <td>abcdefgh</td>
                            <td>abcdefgh</td>
                            <td>abcdefgh</td>
                            <td>abcdefgh</td>
                            <td>abcdefgh</td>
                            <td>abcdefgh</td>
                        </tr>
                        
                    </tbody>
                </table>

            </body>
        )
}

export default Dashboard
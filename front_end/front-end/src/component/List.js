import React, { useEffect, useState } from 'react';
import "../list.css"
import { useNavigate, useParams } from 'react-router-dom';
import { getPageSearch, getSeatSearch } from '../service/SeatService';
import Swal from 'sweetalert2';
function List() {

    const params = useParams()
    const [listId, setListId] = useState([])
    const [seats1_1, setSeats1_1] = useState([])
    const [seats1_2, setSeats1_2] = useState([])
    const [seats2_1, setSeats2_1] = useState([])
    const [seats2_2, setSeats2_2] = useState([])
    const [seats3_1, setSeats3_1] = useState([])
    const [seats3_2, setSeats3_2] = useState([])
    const navigate = useNavigate()

    const getListSearchType1_1 = async () => {
        const data = await getPageSearch(0, params.idSchedule, 1);
        setSeats1_1(data)
    }

    const getListSearchType1_2 = async () => {
        const data = await getPageSearch(1, params.idSchedule, 1);
        setSeats1_2(data)
    }

    const getListSearchType2_1 = async () => {
        const data = await getPageSearch(0, params.idSchedule, 2);
        setSeats2_1(data)
    }

    const getListSearchType2_2 = async () => {
        const data = await getPageSearch(1, params.idSchedule, 2);
        setSeats2_2(data)
    }

    const getListSearchType3_1 = async () => {
        const data = await getPageSearch(0, params.idSchedule, 3);
        setSeats3_1(data)
    }

    const getListSearchType3_2 = async () => {
        const data = await getPageSearch(1, params.idSchedule, 3);
        setSeats3_2(data)
    }

    useEffect(() => {
        getListSearchType1_1()
        getListSearchType1_2()
        getListSearchType2_1()
        getListSearchType2_2()
        getListSearchType3_1()
        getListSearchType3_2()
    }, [params.idSchedule])

    const addToList = async (id) => {
        let light = document.getElementById(id)
        if (light.className == "yellow-button") {
            light.className = "eco-button";
            listId.unshift(id);
            setListId(listId);

        } else if (light.className == "eco-button") {
            light.className = "yellow-button";
            const index = listId.indexOf(id)
            listId.splice(index, 1);
            setListId(listId)
        }
    };

    const getListId = () => {
        Swal.fire({
            icon:"warning",
            title:"Xác nhận thông tin đặt vé",
            text:"Bạn có muốn tiếp tục đến thanh toán không?",
            showCancelButton:true,
            confirmButtonText:"Xác nhận",
            cancelButtonText:"Hủy"
        }).then(async(res)=>{
            if (res.isConfirmed){
                if(listId.length<1){
                    Swal.fire({
                        icon:"error",
                        title:"Bạn chưa chọn ghế!",
                        timer:2000,
                        showConfirmButton:false
                    })
                }else{
                navigate(`/detail/${listId}`)
                }
                          
            }else if(res.dismiss === Swal.DismissReason.cancel){

            }
        })
    }

    return (
        <>
            {seats1_1.length > 0 && seats1_2.length > 0 && seats2_1.length > 0 && seats2_2.length > 0 && seats3_1.length > 0 &&
                seats3_2.length > 0 &&
                <div className="container-fluid list">
                    <div className="row" style={{ marginTop: '50px' }}>
                        <div className="col-2" />
                        <div className="col-8">
                            <div className="row">
                                <div className="col-4">
                                    <h6>Ghế Hạng Nhất</h6>
                                    {seats1_1.map((i, index) => {
                                        return (
                                            <>
                                                {i.flagPayment == false ? <button key={index} id={i.idSeat} className="yellow-button"
                                                    onClick={() => addToList(i.idSeat)} >{i.nameSeat}</button>
                                                    : <button key={index} className="gray-button">{i.nameSeat}</button>}
                                            </>
                                        )
                                    })}

                                </div>
                                <div className="col-4">
                                    <h6>Ghế Thương Gia</h6>
                                    {seats2_1.map((i, index) => {
                                        return (
                                            <>
                                                {i.flagPayment == false ? <button key={index} id={i.idSeat} className="yellow-button"
                                                    onClick={() => addToList(i.idSeat)} >{i.nameSeat}</button>
                                                    : <button key={index} className="gray-button">{i.nameSeat}</button>}
                                            </>
                                        )
                                    })}
                                </div>
                                <div className="col-4">
                                    <h6>Ghế Phổ Thông</h6>
                                    {seats3_1.map((i, index) => {
                                        return (
                                            <>
                                                {i.flagPayment == false ? <button key={index} id={i.idSeat} className="yellow-button"
                                                    onClick={() => addToList(i.idSeat)} >{i.nameSeat}</button>
                                                    : <button key={index} className="gray-button">{i.nameSeat}</button>}
                                            </>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className="col-8" />
                    </div>
                    <div className="row" style={{ marginBottom: '100px' }}>
                        <h6>Lối đi</h6>
                    </div>
                    <div className="row">
                        <div className="col-2 transform" style={{ transform: 'rotate(-90deg)' }}><h2 className="phandau">Đầu Tàu</h2> </div>
                        <div className="col-8" />
                        <div className="col-2 transform" style={{ transform: 'rotate(-90deg)' }}><h2 className="phandau">Đuôi Tàu</h2></div>
                    </div>
                    <div className="row">
                        <h6>Lối đi</h6>
                    </div>
                    <div className="row" style={{ marginTop: '50px' }}>
                        <div className="col-2">
                        </div>
                        <div className="col-8">
                            <div className="row">
                                <div className="col-4">
                                    {seats1_2.map((i, index) => {
                                        return (
                                            <>
                                                {i.flagPayment == false ? <button key={index} id={i.idSeat} className="yellow-button"
                                                    onClick={() => addToList(i.idSeat)} >{i.nameSeat}</button>
                                                    : <button key={index} className="gray-button">{i.nameSeat}</button>}
                                            </>
                                        )
                                    })}
                                    <h6>Ghế Hạng Nhất</h6>
                                </div>
                                <div className="col-4">
                                    {seats2_2.map((i, index) => {
                                        return (
                                            <>
                                                {i.flagPayment == false ? <button key={index} id={i.idSeat} className="yellow-button"
                                                    onClick={() => addToList(i.idSeat)} >{i.nameSeat}</button>
                                                    : <button key={index} className="gray-button">{i.nameSeat}</button>}
                                            </>
                                        )
                                    })}
                                    <h6>Ghế Thương Gia</h6>
                                </div>
                                <div className="col-4">
                                    {seats3_2.map((i, index) => {
                                        return (
                                            <>
                                                {i.flagPayment == false ? <button key={index} id={i.idSeat} className="yellow-button"
                                                    onClick={() => addToList(i.idSeat)} >{i.nameSeat}</button>
                                                    : <button key={index} className="gray-button">{i.nameSeat}</button>}
                                            </>
                                        )
                                    })}
                                    <h6>Ghế Phổ Thông</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-8" />
                    </div>
                    <div className="row">
                        <div className="col-2">
                            <button className="ghetrong" />
                            <span>Ghế Trống</span>
                        </div>
                        <div className="col-2">
                            <button className="ghedachon" />
                            <span>Ghế Đang Chọn </span>
                        </div>
                        <div className="col-2">
                            <button className="ghedadat" />
                            <span>Ghế Đã Đặt</span>
                        </div>
                        <div className="col-2"></div>
                        <div className="col-2"></div>
                        <div className="col-2">
                            <button onClick={()=>{getListId()}}>Xác nhận</button>
                        </div>
                    </div>
                </div>
            }
        </>
    );
}
export default List;
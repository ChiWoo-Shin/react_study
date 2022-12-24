import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Nav } from 'react-bootstrap';
import styled from 'styled-components'

function Detail_page(props) {

    let { id } = useParams(); // url 뒤의 id 값을 받아옴
    let temp = props.shoes.find(a => a.id == id) // find 함수 사용 방법
    let[tab, setTab] = useState(0); // 탭에 대한 정보를 가질 useState

    return (
        <div className="container">
            <Hide_page />
            <div className="row">
                <div className="col-md-6">
                    {/* {temp.id == 2 ? <img src={process.env.PUBLIC_URL + '/minjung' + (temp.id + 1) + '.gif'} /> : <img src={process.env.PUBLIC_URL + '/minjung' + (temp.id + 1) + '.jpg'} />} */}
                    {temp.id < 2 ? <img src={process.env.PUBLIC_URL + '/minjung' + (temp.id + 1) + ".jpg"} />
                        : temp.id == 2 ? <img src={process.env.PUBLIC_URL + '/minjung' + (temp.id + 1) + ".gif"} />
                            : <img src={"https://codingapple1.github.io/shop/shoes" + (temp.id + 1) + ".jpg"} />}
                </div>
                <div className="col-md-6">
                    <Input_check />
                    <h4 className="pt-5">{temp.title}</h4>
                    <p>{temp.content}</p>
                    <p>{temp.price}</p>
                    <button className="btn btn-danger">주문하기</button>
                </div>
            </div>
            <Nav variant="tabs" defaultActiveKey="link0">
                <Nav.Item>
                    <Nav.Link eventKey="link0" onClick={()=>{setTab(0)}}> 버튼0 </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link1" onClick={()=>{setTab(1)}}> 버튼1 </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link2" onClick={()=>{setTab(2)}}> 버튼2 </Nav.Link>
                </Nav.Item>
            </Nav>
            {/* {
                tab == 0 ?  <div>내용0</div>:
                tab == 1 ?  <div>내용1</div>:
                <div>내용2</div>
            } */}
            <TabControl tab ={tab} />
        </div>
    );
}

function TabControl({tab}){
    if (tab == 0 ){
        return <div>내용0</div>
    } else if (tab == 1){
        return <div>내용1</div>
    } else if (tab == 2){
        return <div>내용2</div>
    }
}



function Hide_page() {
    let [show, setShow] = useState(true);

    useEffect(() => {
        let timer = setTimeout(() => { setShow(false) }, 2000);
        return () => {
            clearTimeout(timer);
        }
    }, []);

    return (
        <>
            {show == true ? <div className="alert alert-warning"> 2초 이내 구매시 할인 </div> : null}
        </>
    );
}

function Input_check() {
    let [text_check, checkText] = useState('');

    useEffect(() => {
        if (isNaN(text_check) == true) {
            alert("숫자만 입력해주세요.")
        }
    }, [text_check])

    return (
        <input onChange={(e) => { checkText(e.target.value) }} />
    )
}

export default Detail_page;
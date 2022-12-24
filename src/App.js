import logo from './logo.svg';
import './App.css';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { useState } from 'react';
import data from './page_info/data.js';
import Main_page from './page_info/main_page';
import Detail_page from './page_info/detail_page';
import Event_page from './page_info/event_page';
import { Routes, Route, useNavigate, } from "react-router-dom";
import axios from 'axios';



function App() {
  let [shoes, shoes_sort] = useState(data)
  let [comeData, setComeData] = useState(0);
  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand onClick={() => { navigate('/') }}>React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={() => { navigate('/') }}> Home </Nav.Link>
              <Nav.Link onClick={() => { navigate('/detail') }}> detail </Nav.Link>
              <Nav.Link onClick={() => { navigate('/event') }}> event </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Main_page shoes={shoes} shoes_sort={shoes_sort} comeData={comeData} setComeData={setComeData} />} />
        <Route path="/detail/:id" element={<Detail_page shoes={shoes} />} />
        <Route path="/event" element={<Event_page />}>
          <Route path='one' element={<div> 첫 주문시 양배추즙 서비스</div>}></Route>
          <Route path='two' element={<div> 생일 기념 쿠폰 받기</div>}></Route>
        </Route>

        <Route path="*" element={<div> 404 Not found</div>} />

      </Routes>
      {comeData < 3 ?
        <button onClick={() => {
          setComeData(comeData += 1)
          console.log(comeData)
          if (comeData == 1) {
            axios.get('https://codingapple1.github.io/shop/data2.json')
              .then((result) => {
                let copy;
                copy = shoes.concat(...result.data) // copy = shoes_sort([...shoes, ...result.data])
                console.log(copy)
                shoes_sort(copy)
              })
              .catch(() => {
                console.log("실패했음")
              })
          }
          else if (comeData == 2) {
            axios.get('https://codingapple1.github.io/shop/data3.json')
              .then((result) => {
                let copy;
                copy = shoes.concat(...result.data) // copy = shoes_sort([...shoes, ...result.data])
                console.log(copy)
                shoes_sort(copy)
              })
              .catch(() => {
                console.log("실패했음")
              })
          }

        }}>더 보기</button>
        : <div>더 보기 상품이 더 이상 존재하지 않습니다.</div>}
      <div>



      </div>
      <Button variant="secondary" className='sort-button' onClick={() => {
        let copy = [...shoes];
        copy.sort(function (a, b) {
          if (a.title < b.title) {
            return -1
          } else if (a.title > b.title) {
            return 1
          } else {
            return 0
          }

        });
        console.log(copy);
        shoes_sort(copy)
      }}>가나다 정렬</Button>

    </div >
  );
}
//test를 진행합니다.

export default App;

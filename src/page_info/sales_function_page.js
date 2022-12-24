import React from "react";
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";


function Sales(props) {
    let navigate = useNavigate();
    return (
        <>
            <Nav.Link onClick={() => { navigate('/detail/'+props.shoes.id) }}>
                {/* {props.shoes.id == 2 ? <img src={process.env.PUBLIC_URL + '/minjung' + (props.shoes.id + 1) + ".gif"} className="detail-img" /> : <img src={process.env.PUBLIC_URL + '/minjung' + (props.shoes.id + 1) + ".jpg"} className="detail-img" />} */}
                {props.shoes.id < 2 ? <img src={process.env.PUBLIC_URL + '/minjung' + (props.shoes.id + 1) + ".jpg"} className="detail-img" />
                : props.shoes.id == 2 ? <img src={process.env.PUBLIC_URL + '/minjung' + (props.shoes.id + 1) + ".gif"} className="detail-img"/>
                : <img src= {"https://codingapple1.github.io/shop/shoes" + (props.i + 1) + ".jpg"} className="detail-img" />}
                <h4>{props.shoes.title}</h4>
                <p>{props.shoes.content}</p>
            </Nav.Link>
        </>
    );
}

export default Sales;
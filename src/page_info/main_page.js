import React from "react";
import Sales from "./sales_function_page";
import { Navbar, Nav, Container, Button, Row, Col } from 'react-bootstrap';

function Main_page(props) {
    return (
        <div>
            <div className='main-bg'></div>
            <div>
                <Container>
                    <Row>
                        {
                            props.shoes.map(function (a, i) {
                                return (
                                    <Col key={i}>
                                        <Sales shoes={props.shoes[i]} i={i}/>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Main_page;
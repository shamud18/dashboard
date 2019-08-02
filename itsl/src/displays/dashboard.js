import React from 'react';
import { Row, Col, Card, CardBody, CardHeader, Container, Nav, NavItem, Navbar, NavLink } from 'reactstrap';

import FigureOne from '../graphs/chart1';
//import { Container } from '@material-ui/core';


let DashBoard = ({ graphs }) => {
    return (
        <>
            <Container color="light">
                <Row>


                    {/* <Col className="sidebar" xs="auto">
                        <Row>
                            side bar
                        </Row>
                    </Col> */}



                    <Col>
                        <Row>
                            <Col className="col-content">
                                Row 1
                            </Col>
                        </Row>

                        <Row>
                            <Col className="col-content" xs="4">
                                Row 2.1
                            </Col>

                            <Col className="col-content">
                                <FigureOne />
                            </Col>
                        </Row>

                        <Row>
                            <Col className="col-content" xs="3">
                                Row 3
                            </Col>

                            <Col className="col-content">
                                <FigureOne />
                            </Col>

                            <Col className="col-content" xs="3">
                                Row 3
                            </Col>
                        </Row>
                    </Col>


                </Row>
            </Container>
        </>
    );
}

export default DashBoard;
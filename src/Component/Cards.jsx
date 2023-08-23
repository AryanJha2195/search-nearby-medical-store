import React from 'react'
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Cards = () => {
    return (
        <>
            <div className='d-flex my-2 justify-content-center'>
                <Card className='mx-3' style={{ width: '30rem', height: '10rem', cursor: "pointer" }}>
                    <Card.Img style={{ height: "5rem", width: "5rem" }} variant="top" src="https://www.netmeds.com/assets/gloryweb/images/icons/Wellnessnew.svg" />
                    <Card.Body>
                        <Card.Title>Order Medicine</Card.Title>
                        <Card.Text style={{ color: "green" }}>
                            Save upto 25% off
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card className='mx-3' style={{ width: '30rem', height: '10rem', cursor: "pointer" }}>
                    <Card.Img style={{ height: "5rem", width: "5rem" }} variant="top" src="https://www.netmeds.com/assets/gloryweb/images/icons/Beautynew.svg" />
                    <Card.Body>
                        <Card.Title>Beauty</Card.Title>
                        <Card.Text style={{ color: "green" }}>
                            Save upto 40% off
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card className='mx-3' style={{ width: '30rem', height: '10rem', cursor: "pointer" }}>
                    <Card.Img style={{ height: "5rem", width: "5rem" }} variant="top" src="https://www.netmeds.com/assets/gloryweb/images/icons/ordermedicinnew.svg" />
                    <Card.Body>
                        <Card.Title>Wellness</Card.Title>
                        <Card.Text style={{ color: "green" }}>
                            Save upto 50% off
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}

export default Cards
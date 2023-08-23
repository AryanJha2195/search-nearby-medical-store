import React from 'react'
import Card from 'react-bootstrap/Card';

const Cards = () => {
    return (
        <>
            <div className='d-flex my-2 justify-content-center mx-2'>
                <Card className='mx-3' style={{ width: '25rem', height: '15rem', cursor: "pointer" }}>
                    <Card.Img style={{ height: "15rem", width: "25rem" }} variant="top" src="https://mercury.akamaized.net/i/2a97338ecfa3892c079227d6cf704126_210626_0.jpg" />                    
                </Card>

                <Card className='mx-3' style={{ width: '25rem', height: '15rem', cursor: "pointer" }}>
                    <Card.Img style={{ height: "15rem", width: "25rem" }} variant="top" src="https://mercury.akamaized.net/i/a2467278923d242cae4be590b4366b8f_49733_0.jpg" />                    
                </Card>

                <Card className='mx-3' style={{ width: '25rem', height: '15rem', cursor: "pointer" }}>
                    <Card.Img style={{ height: "15rem", width: "25rem" }} variant="top" src="https://mercury.akamaized.net/i/8610437b838eb510792acafcdfa383c7_60164_0.jpg" />                    
                </Card>
            </div>
        </>
    )
}

export default Cards
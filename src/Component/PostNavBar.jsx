import React from 'react';
import { Nav } from 'react-bootstrap';

const PostNavBar = () => {
  return (
    <Nav className="justify-content-center gap-5" activeKey="/home">
      <Nav.Item>
        <Nav.Link style={{color: "black"}} href="/medicine">Medicine</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link style={{color: "black"}} href="/wellness">Wellness</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link style={{color: "black"}} href="/beauty">Beauty</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link style={{color: "black"}} href="/health-corner">Health Corner</Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default PostNavBar;

import React from 'react';
import { useQuery } from 'react-query';
import { Container, Row, Col, Badge } from 'react-bootstrap';

const fetchData = async () => {
  // Your logic to fetch data goes here
  // For now, let's just return some dummy data
  return {
    bookings: 10,
    employees: 5,
    nonEmployees: 3,
    buffet: 2,
  };
};

const Sidebar = () => {
  const { data, isLoading } = useQuery('sidebarData', fetchData);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <Container className="mt-4">
      <div style={{ backgroundColor: '#f8f9fa', padding: '20px', borderRadius: '10px' }}>
        <Row>
          <Col>
            <div className="text-center">
              <h5>{/* Week Name */}</h5>
              <p>
                {new Date().toLocaleDateString('en-US', {
                  weekday: 'long',
                })}
              </p>
              <p>
                {new Date().toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
            </div>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <div className="text-center">
              <h6>Bookings</h6>
              <Badge variant="primary">{data.bookings}</Badge>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="text-center">
              <h6>Employees</h6>
              <Badge variant="success">{data.employees}</Badge>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="text-center">
              <h6>Non-Employees</h6>
              <Badge variant="danger">{data.nonEmployees}</Badge>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="text-center">
              <h6>Buffet</h6>
              <Badge variant="warning">{data.buffet}</Badge>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Sidebar;

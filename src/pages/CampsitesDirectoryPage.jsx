import { Container, Row, Col, Button } from 'reactstrap';
import { useState } from 'react';
import CampsiteDetail from '../features/campsites/CampsiteDetail';
import CampsitesList from '../features/campsites/ CampsitesList';
import { selectCampsiteById } from '../features/campsites/campsitesSlice';

const CampsitesDirectoryPage = () => {
  const [campsiteId, setCampsiteId] = useState(0);
  const selectedCampsite = selectCampsiteById(campsiteId);

  return (
    <Container>
      <Row className='mx-sm-0 w-100'>
        <Col sm='10' md='12' lg='8'>
          <CampsitesList setCampsiteId={setCampsiteId} />
        </Col>
        <Col sm='11' lg='4' className='ps-4 mx-sm-0'>
          <CampsiteDetail campsite={selectedCampsite} />
        </Col>
      </Row>
    </Container>
  );
};

export default CampsitesDirectoryPage;

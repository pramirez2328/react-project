import { CAMPSITES as sites } from '../../app/shared/CAMPSITES';
import { Col, Row } from 'reactstrap';
import CampsiteCard from './CampsiteCard';

const CampsitesList = () => {
  return (
    <Row className='w-100 m-0 d-flex justify-content-around'>
      {sites.map((site) => {
        return (
          <Col className='mb-2 m-md-4' key={site.id} md='5'>
            <CampsiteCard campsite={site} />
          </Col>
        );
      })}
    </Row>
  );
};

export default CampsitesList;

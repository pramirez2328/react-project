import { CAMPSITES as sites } from '../../app/shared/CAMPSITES';
import { Col, Row } from 'reactstrap';
import CampsiteCard from './CampsiteCard';

const CampsitesList = () => {
  return (
    <Row className='ms-auto'>
      {sites.map((site) => {
        return (
          <Col className='m-4' key={site.id} md='5'>
            <CampsiteCard campsite={site} />
          </Col>
        );
      })}
    </Row>
  );
};

export default CampsitesList;

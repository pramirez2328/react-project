import { Container, Row } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { selectCampsiteById } from '../features/campsites/campsitesSlice';
import CampsiteDetail from '../features/campsites/CampsiteDetail';

const CampsiteDetailPage = () => {
  const { campsiteId } = useParams();
  console.log('id', campsiteId);
  const campsite = selectCampsiteById(campsiteId);
  console.log(campsite);

  return (
    <Container>
      <Row>
        <CampsiteDetail campsite={campsite} />
      </Row>
    </Container>
  );
};

export default CampsiteDetailPage;

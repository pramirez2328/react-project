import { Col, Row } from 'reactstrap';
import Partner from '../../components/Partner.jsx';
import { selectAllPartners } from './partnersSlice';
import { useSelector } from 'react-redux';
import Error from '../../components/Error.jsx';
import Loading from '../../components/Loading.jsx';

const PartnersList = () => {
  const partners = useSelector(selectAllPartners);
  const isLoading = useSelector((state) => state.partners.isLoading);
  const errMsg = useSelector((state) => state.partners.errMsg);

  return isLoading ? (
    <Loading />
  ) : errMsg ? (
    <Error errMsg={errMsg} />
  ) : (
    <Col className='mt-4'>
      <Row>
        {partners.map((partner) => {
          return (
            <div className='d-flex mb-5' key={partner.id}>
              <Partner partner={partner} />
            </div>
          );
        })}
      </Row>
    </Col>
  );
};

export default PartnersList;

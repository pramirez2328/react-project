import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

const CampsiteCard = ({ campsite }) => {
  return (
    <Card >
      <CardImg width='100%' src={campsite.image} alt={campsite.name} />
      <CardImgOverlay>
        <CardTitle>{campsite.name}</CardTitle>
      </CardImgOverlay>
    </Card>
  );
};

export default CampsiteCard;

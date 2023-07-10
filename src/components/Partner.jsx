const Partner = ({ partner }) => {
  if (partner) {
    const { image, name, description } = partner;
    return (
      <>
        <img className='me-2 me-sm-0' src={image} alt={name} style={{ width: '150px' }} />
        <div className='m-sm-4'>
          <h5 className='fw-bold'>{name}</h5>
          {description}
        </div>
      </>
    );
  }
  return null;
};
export default Partner;

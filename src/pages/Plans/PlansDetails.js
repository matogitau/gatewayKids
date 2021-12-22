import React from 'react';
import { useParams } from 'react-router-dom';

const PlansDetails = () => {
  const param = useParams()
  
  return (
    <div>
      <p>Here we give  plans details as {param.PlanId}</p>
    </div>
  );
};

export default PlansDetails;
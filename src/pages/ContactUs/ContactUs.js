import React from 'react';

import { useParams } from 'react-router-dom';


const ContactUs = () => {
  const param = useParams()
  console.log(param)
  return (
    <div>
     <p>Here we talk about us and receive Comments</p> 
     
    </div>
  );
};

export default ContactUs;
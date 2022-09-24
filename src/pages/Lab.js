import React from 'react';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import '../styles/Lab.css';

import LabBody from '../components/LabBody';

export default function Lab(props) {
  return (
    <div className='lab'>
        <LabBody />
    </div>
  );
}

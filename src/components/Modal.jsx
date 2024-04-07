import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Modal = ({ message }) => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prevCountdown) => {
        if (prevCountdown === 1) {
          clearInterval(interval);
          navigate('/');
          return 0;
        } else {
          return prevCountdown - 1;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [navigate]);

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded shadow">
        <h2 className="text-xl font-bold mb-4 text-green-400">{message}</h2>
        <p className=' text-gray-400'>Redirecting to home page in {countdown} seconds...</p>
      </div>
    </div>
  );
};

export default Modal;

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function CheckinForm() {
  const { id } = useParams();
  const [checkinData, setCheckinData] = useState({ weight: '', date: '' });

  useEffect(() => {
    if (id) {
      setCheckinData({ weight: '70', date: '2024-08-31' }); // Mock data
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', checkinData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="date"
        value={checkinData.date}
        onChange={(e) => setCheckinData({ ...checkinData, date: e.target.value })}
        required
      />
      <input
        type="number"
        value={checkinData.weight}
        onChange={(e) => setCheckinData({ ...checkinData, weight: e.target.value })}
        required
      />
      <button type="submit">{id ? 'Update' : 'Create'}</button>
    </form>
  );
}

export default CheckinForm;

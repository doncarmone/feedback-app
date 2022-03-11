import { FaTimes, FaEdit } from 'react-icons/fa';
import React from 'react';
import Card from './shared/Card';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import FeedBackContext from '../context/FeedbackContext';
function FeedbackItem({ item }) {
  const { deleteFeedback, editFeedback } = useContext(FeedBackContext);
  return (
    <Card reverse={false}>
      <div className='num-display'> {item.rating} </div>
      <button onClick={() => deleteFeedback(item.id)} className='close'>
        <FaTimes color='purple' />
      </button>

      <button onClick={() => editFeedback(item)} className='edit'>
        <FaEdit color='purple' />
      </button>
      <div className='text-display'> {item.text} </div>
    </Card>
  );
}

FeedbackItem.protoTypes = {
  item: PropTypes.object.isRequired,
};

export default FeedbackItem;

import React, { useState } from 'react';

const Card = ({ word, color, withWord = false }) => {

  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  const styles = () => {
    if (clicked || !withWord) {
      return {backgroundColor: color, color: color === '#fafaed' && 'black'}
    }
    return {};
  };


  return (
      <div
          style={styles()}
          onClick={handleClick}
          className="card">

        {withWord && word}
      </div>
  )

};

export default Card;

import React, { useState, useMemo } from 'react';
import { generateSchema } from '../../service/generateSchema';
import Field from '../field/Field';

const NewGame = ({setNewGame}) => {

  const [withWord, setWithWord] = useState(false);

  const schema = useMemo(() => {
    return generateSchema();
  }, []);

  console.log('NewGame', schema);

  return (
      <div className="new-game-container">
        {!withWord
            ? (<div className="new-game-info nav-button" onClick={()=>setWithWord(true)}>Показати стіл зі словами</div>)
            : (<div className="new-game-info nav-button" onClick={()=>setNewGame(false)}>Нова гра</div>)}
        {!withWord && (<div className="new-game-subinfo">Перший хід - {schema.first === 'red' ? 'червоні' : 'сині'}</div>)}
        <Field schema={schema} withWord={withWord} />
      </div>
  )
};

export default NewGame;

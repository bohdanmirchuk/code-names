import React from 'react';
import Card from "../card/Card";

const colors = {
  r: '#a31e03',
  b: '#073591',
  w: '#fafaed',
  d: '#211f1e'
};


const Field = ({ schema, withWord }) => {

  console.log('Field', schema, 'withWord', withWord);

  if (withWord){
    return (
      <div className="field">
        {schema.words.map((a) => ({sort: Math.random(), value: a}))
            .sort((a, b) => a.sort - b.sort)
            .map((a) => a.value).slice(0, 25).map((el, index) => {
              return (
                <Card withWord key={el} word={el} color={colors[schema.codes[index]]}/>
              )
            })}
      </div>
  )}

  return (
    <div className="field no-words">
      {schema.codes.map((el, index) => {
          return (
            <Card key={el+index} color={colors[el]} />
          )
        })}
    </div>
  )
};

export default Field;

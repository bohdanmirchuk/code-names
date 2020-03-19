import allWords from './words';

const generateCodes = () => {
  let codes = ['r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'd', 'w', 'w', 'w', 'w', 'w', 'w', 'w', ];
  Math.random() > 0.5 ? codes.push('r') : codes.push('b');
  return codes;
};

const randomize = array => {
  return array.map((a) => ({sort: Math.random(), value: a}))
      .sort((a, b) => a.sort - b.sort)
      .map((a) => a.value).slice(0, 25)
};

const generateSchema = () => {
  const codes = generateCodes();
  const first = codes[24] === 'r' ? 'red' : 'blue';
  const words = randomize(allWords);
  return {
    words,
    first,
    codes: randomize(codes)
  }

};

export { generateSchema };

import React from 'react';

const Defination = ({ word, meanings }) => {
  return (
    <div className="definition-container">
      {meanings[0] && word && meanings[0].phonetics[0]?.audio && (
        <audio controls src={meanings[0].phonetics[0].audio}>
          Your browser does not support the audio element.
        </audio>
      )}

      {word === "" ? (
        <span className="subtitle">Start by typing a word in search</span>
      ) : (
        meanings.map((mean, idx) =>
          mean.meanings.map((item) =>
            item.definitions.map((def, index) => (
              <div className="singleMean" key={`${idx}-${index}`}>
                <b>{def.definition}</b>
                {def.example && <p><i>Example: {def.example}</i></p>}
              </div>
            ))
          )
        )
      )}
    </div>
  );
};

export default Defination;

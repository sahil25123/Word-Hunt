import React from 'react'
import './Defination.css'

const Defination = ({word, meanings}) => {
  return (
    <div className="definition-container">
      {word === "" ? (
        <span className='subtitle'>
          Start by typing a word in search
        </span>
      ) : meanings.length > 0 ? (
        meanings.map((meaning, index) => (
          <div key={index} className="meaning-section">
            <div className="part-of-speech">
              {meaning.meanings[0].partOfSpeech}
            </div>
            <ul className="definition-list">
              {meaning.meanings[0].definitions.map((def, idx) => (
                <li key={idx} className="definition-item">
                  {def.definition}
                  {def.example && (
                    <div className="example">
                      Example: {def.example}
                    </div>
                  )}
                </li>
              ))}
            </ul>
            {meaning.meanings[0].synonyms.length > 0 && (
              <div className="synonyms">
                <span>Synonyms: </span>
                {meaning.meanings[0].synonyms.map((synonym, idx) => (
                  <span key={idx} className="synonym-tag">
                    {synonym}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))
      ) : (
        <div className="error-message">
          No definitions found for this word
        </div>
      )}
    </div>
  )
}

export default Defination

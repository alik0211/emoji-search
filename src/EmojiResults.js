import React from 'react';
import PropTypes from 'prop-types';
import EmojiResultRow from './EmojiResultRow';
import './EmojiResults.css';

function EmojiResults(props) {
  return (
    <div className="component-emoji-results">
      {props.emojiData.map(emoji => {
          return (
            <EmojiResultRow
              key={emoji.symbol}
              symbol={emoji.symbol}
              title={emoji.title}
            />
          );
        })
      }
    </div>
  );
}

EmojiResults.propTypes = {
  emojiData: PropTypes.array,
};

export default EmojiResults;

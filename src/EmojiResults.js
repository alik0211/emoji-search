import React from 'react';
import EmojiResultRow from './EmojiResultRow';
import './EmojiResults.css';

const EmojiResults = ({ emojiData }) => (
  <div className="emoji-results">
    {emojiData.map((emoji, index) => {
        return (
          <EmojiResultRow
            key={index}
            symbol={emoji.symbol}
            title={emoji.title}
          />
        );
      })
    }
  </div>
);

export default EmojiResults;

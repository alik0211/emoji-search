import React from 'react';
import EmojiResultRow from './EmojiResultRow';
import './EmojiResults.css';

const EmojiResults = ({ emojiData }) => (
  <div className="component-emoji-results">
    {emojiData.map(emoji => {
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

export default EmojiResults;

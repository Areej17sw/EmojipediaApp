import React from "react";
function Entry(props) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label="Tense Biceps">
          {props.emoji}
        </span>
        <span>{props.emojitext}</span>
      </dt>
      <dd>{props.emojides}</dd>
    </div>
  );

  //    return<dt>
  //    <span className="emoji" role="img" aria-label="Tense Biceps">
  //      {props.emoji}
  //    </span>
  //    <span>{props.emojitext}</span>
  //  </dt>
  //  <dd>
  //    {props.emojides}
  //  </dd>

  //  }
}
export default Entry;

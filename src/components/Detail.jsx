import React from "react";

function Detail(props) {
  return (
    <div>
      <dl className="dictionary">
        <div className="term">
          <dt>
            {/* // this is the emoji */}
            <span className="emoji" role="img" aria-label="Tense Biceps">
              {props.emoji}
            </span>
            {/* // this is the name  */}
            <span>{props.name}</span>
          </dt>
          {/* // this is the meaning  */}
          <dd>{props.meaning}</dd>
        </div>
      </dl>
    </div>
  );
}
export default Detail;

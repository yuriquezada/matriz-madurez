import React from "react";
import "../style/TextArea.css";

function TextArea(props) {
  return (
    <div class="form__group">
      <textarea
        id="message"
        class="form__field"
        placeholder="Your Message"
        rows="6"
      ></textarea>
      <label for="message" class="form__label">
        {props.label}
      </label>
    </div>
  );
}

export default TextArea;

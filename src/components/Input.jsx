import React from "react";
import "../style/Input.css";

function Input(props) {
  return (
    <div class="form__group">
      <input
        type="email"
        id="email"
        class="form__field"
        placeholder="Your Email"
      />
      <label for="email" class="form__label">
        {props.label}
      </label>
    </div>
  );
}

export default Input;

import { useState } from "react";

export default function Checkbox(props) {
  const [status, setStatus] = useState({ isChecked: false });

  function handleChange() {
    setStatus({ isChecked: !status.isChecked });
  }

  return (
    <div>
      <label>
        {status.isChecked ? props.labelActive : props.labelInactive}
      </label>
      <input
        type="checkbox"
        checked={status.isChecked}
        onChange={handleChange}
      ></input>
    </div>
  );
}

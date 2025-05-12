import * as React from "react";
import Switch from "@mui/material/Switch";

export default function ControlledSwitches({ handleToggle, lang }) {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
    if (lang) {
      if (lang == "en") {
        handleToggle("ar");
      } else {
        handleToggle("en");
      }
    } else {
      handleToggle();
    }
  };

  return <Switch color="error" checked={checked} onChange={handleChange} />;
}

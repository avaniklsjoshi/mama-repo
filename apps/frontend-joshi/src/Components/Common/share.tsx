import "./common.scss";
import { Tooltip } from "@mui/material";
import { useState } from "react";
import { Share } from "../../Assets/SVG/Share";

export default function BackLink() {
  const [open, setOpen] = useState(false);

  const handleShare = (e: React.SyntheticEvent) => {
    e.stopPropagation();

    navigator.clipboard.writeText(window.location.href);
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
    }, 3000);
  };
  return (
    <Tooltip
      PopperProps={{
        disablePortal: true
      }}
      open={open}
      disableFocusListener
      disableHoverListener
      disableTouchListener
      title="🎉 Link Copied!"
    >
      <button onClick={handleShare} className="share-button">
        <Share />
      </button>
    </Tooltip>
  );
}

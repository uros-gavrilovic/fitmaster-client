import React from "react";
import SvgIcon from "@mui/material/SvgIcon";

const borderedSectionStyle = {
  display: "flex",
  flexDirection: "column",
  maxWidth: "100%",
  borderLeft: "1px solid #b2b2b2",
  borderBottom: "1px solid #b2b2b2",
  borderRight: "1px solid #b2b2b2",
  borderRadius: "5px",
  margin: "1em",
};

const headerStyle = {
  display: "flex",
  flexDirection: "row",
  width: "100%",
};

const headerBorderBeforeStyle = {
  borderTop: "1px solid #b2b2b2",
  width: "1em",
  borderTopLeftRadius: "5px",
};

const headerTitleStyle = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "nowrap",
  alignItems: "center",
  gap: "0.25em",
  width: "fit-content",
  height: "2em",
  margin: "-1em 0.5em 0em 0.5em",
  overflow: "hidden",
  textOverflow: "ellipsis",
  fontSize: "1em",
  fontWeight: "600",
};

const headerBorderAfterStyle = {
  borderTop: "1px solid #b2b2b2",
  width: "1em",
  flexGrow: "2",
  borderTopRightRadius: "5px",
  margin: "-1em 0.5em 0em",
};

function BorderedSection({ icon, title, children, childrenStyle }) {
  return (
    <div style={borderedSectionStyle}>
      {title && (
        <div style={headerStyle}>
          <div style={headerBorderBeforeStyle}></div>
          {icon && <SvgIcon component={icon} />}
          <div style={headerTitleStyle}>{title}</div>
          <div style={headerBorderAfterStyle}></div>
        </div>
      )}
      <div style={childrenStyle}>{children}</div>
    </div>
  );
}

export default BorderedSection;

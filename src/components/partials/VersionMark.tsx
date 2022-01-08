import React from "react";
import appConfig from "../../assets/configs/app.config.json";

export const VersionMark: React.FC = () => {
  return (
    <aside className="labelMark t-paragraph5Normal">
      {appConfig?.version?.phase} {appConfig?.version?.number}
    </aside>
  );
};

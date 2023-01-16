import React from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";


function RouteSkill() {
  const { t } = useTranslation();

  return (
    <>
      <NavLink className="routeSkill" to="/skills/fron">
        {t("frontend")}
      </NavLink>
      <NavLink className="routeSkill" to="/skills/back">
      {t("backend")}
      </NavLink>
      <NavLink className="routeSkill" to="/skills/tools">
      {t("tools")}
      </NavLink>
      <NavLink className="routeSkill" to="/skills/soft">
      {t("softskills")}
      </NavLink>
    </>
  );
}

export default RouteSkill;

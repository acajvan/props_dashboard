import React from "react";
import { useRouterContext, TitleProps } from "@pankod/refine-core";
import { Button } from "@pankod/refine-mui";
import { sinologym, sinologys } from "assets";

export const Title: React.FC<TitleProps> = ({ collapsed }) => {
  const { Link } = useRouterContext();

  return (
    <Button fullWidth variant="text" disableRipple>
      <Link to="/">
        {collapsed ? (
          <img src={sinologys} alt="Logo" width="34px" />
        ) : (
          <img src={sinologym} alt="Sinology" width="140px" />
        )}
      </Link>
    </Button>
  );
};

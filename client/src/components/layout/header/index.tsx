import React from "react";

import {
  AppBar,
  Stack,
  Toolbar,
  Typography,
} from "@pankod/refine-mui";

import { AccountCircle } from "@mui/icons-material";

export const Header: React.FC = () => {

  const shouldRenderHeader = true; 

  return shouldRenderHeader ? (
    <AppBar color="default" position="sticky" elevation={0} sx={{ background: '#FCFCFC'}}>
      <Toolbar>
        <Stack
          direction="row"
          width="100%"
          justifyContent="flex-end"
          alignItems="center"
        >
          <Stack
            direction="row"
            gap="16px"
            alignItems="center"
            justifyContent="center"
          >
              <Typography variant="subtitle2">Admin</Typography>
              <AccountCircle fontSize="large" color="info" />
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  ) : null;
};

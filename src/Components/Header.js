import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Popover from "@material-ui/core/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  InputAdornment,
} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

import { actions } from "../redux/user";

const useStyles = makeStyles((theme) => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
    },
    li: {
      listStyle: "none",
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: "wrap",
    minHeight: "0px",
    margin: "1px 0px",
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  refreshBtnMargin: {
    marginRight: 10,
  },
}));

export default function Header({ isLoggedIn }) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const loggedInUser = useSelector((state) => {
    return state.user.profileName;
  });
  const [open, setOpen] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setPassword("");
    setConfirmPassword("");
    setPasswordError("");
    setConfirmPasswordError("");
  };

  const handleChangePassword = () => {
    if (password === confirmPassword) {
      // Call backend API to change password
      console.log("Password changed successfully");
      handleClose();
    } else {
      setPasswordError("Passwords do not match");
      setConfirmPasswordError("Passwords do not match");
    }
  };

  const loginStatus = () => {
    return isLoggedIn ? (
      <>
        <Button
          variant="contained"
          color="default"
          className={classes.refreshBtnMargin}
          onClick={() => dispatch(actions.setRefreshStatus(true))}
        >
          {"Refresh"}
        </Button>
        <Button
          to="/ViewOrders"
          component={RouterLink}
          color="primary"
          variant="outlined"
          className={classes.link}
        >
          View Orders
        </Button>
        <PopupState variant="popover" popupId="demo-popup-popover">
          {(popupState) => (
            <div>
              <Button
                variant="contained"
                color="primary"
                {...bindTrigger(popupState)}
              >
                {loggedInUser}
              </Button>
              <Popover
                {...bindPopover(popupState)}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
              >
                <Button
                  component={RouterLink}
                  to="/"
                  onClick={() => dispatch(actions.logOut())}
                  color="primary"
                  variant="outlined"
                  className={classes.link}
                >
                  Logout
                </Button>
                <Button
                  color="primary"
                  variant="outlined"
                  className={classes.link}
                  onClick={handleClickOpen}
                >
                  Open Dialogue
                </Button>
                <Dialog open={open} onClose={handleClose}>
                  <DialogTitle>Change Password</DialogTitle>
                  <DialogContent>
                    {passwordError && (
                      <Typography color="error" variant="body2">
                        {passwordError}
                      </Typography>
                    )}
                    <TextField
                      autoFocus
                      margin="dense"
                      id="password"
                      label="New Password"
                      type={showPassword ? "text" : "password"}
                      fullWidth
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                        setPasswordError("");
                        setConfirmPasswordError("");
                      }}
                      error={!!passwordError}
                      helperText={passwordError}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={() => setShowPassword(!showPassword)}
                              onMouseDown={(e) => e.preventDefault()}
                            >
                              {showPassword ? (
                                <Visibility />
                              ) : (
                                <VisibilityOff />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                    <TextField
                      margin="dense"
                      id="confirmPassword"
                      label="Confirm Password"
                      type={showConfirmPassword ? "text" : "password"}
                      fullWidth
                      value={confirmPassword}
                      onChange={(e) => {
                        setConfirmPassword(e.target.value);
                        setPasswordError("");
                        setConfirmPasswordError("");
                      }}
                      error={!!confirmPasswordError}
                      helperText={confirmPasswordError}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle confirm password visibility"
                              onClick={() =>
                                setShowConfirmPassword(!showConfirmPassword)
                              }
                              onMouseDown={(e) => e.preventDefault()}
                            >
                              {showConfirmPassword ? (
                                <Visibility />
                              ) : (
                                <VisibilityOff />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose} color="primary">
                      Cancel
                    </Button>
                    <Button onClick={handleChangePassword} color="primary">
                      Change Password
                    </Button>
                  </DialogActions>
                </Dialog>
              </Popover>
            </div>
          )}
        </PopupState>
      </>
    ) : (
      <Button
        component={RouterLink}
        to="/"
        color="primary"
        variant="outlined"
        className={classes.link}
      >
        Login
      </Button>
    );
  };

  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      className={classes.appBar}
    >
      <Toolbar className={classes.toolbar}>
        <Typography
          variant="h6"
          color="inherit"
          noWrap
          className={classes.toolbarTitle}
        >
          <Link component={RouterLink} to="/">
            NISA SULTAN
          </Link>
        </Typography>
        <nav>
          {/* <Link
            component={RouterLink}
            to='/Home'
            variant='button'
            color='textPrimary'
            href='#'
            className={classes.link}
          >
            Home
          </Link> */}
        </nav>
        {loginStatus()}
      </Toolbar>
    </AppBar>
  );
}

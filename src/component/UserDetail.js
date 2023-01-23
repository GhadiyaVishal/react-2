import React, { useState } from "react";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import AddIcCallOutlinedIcon from "@mui/icons-material/AddIcCallOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import Navbar from "./Navbar";
import { Dialog, DialogActions, DialogContent, TextField } from "@mui/material";
// import { FileDownloadSharp } from "@mui/icons-material";
import { Button } from "@mui/material";
const fields = ["name", "email", "phone", "website"];

const UserDetail = ({ user, handleDelete, editUser, index }) => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState(user);

  const onChangeField = (field, value) => {
    setData(state => ({
      ...state,
      [field]: value,
    }));
  };

  const saveUser = () => {
    editUser({ user: data, index, callback: closeModal });
  };

  const openModal = () => {
    setOpen(true);
  };
  const closeModal = () => {
    setOpen(false);
  };

  return (
    <div className="container">
      <div className="column">
        <div className="overflow">
          <img
            className="image"
            src={`https://avatars.dicebear.com/v2/avataaars/${user.username}.svg?options[mood][]=happy`}
            alt="avatar"
          />
        </div>
        <div className="body-info">
          <h1>{user.name}</h1>
          <p>
            <MailOutlineIcon />
            {user.email}
          </p>
          <p>
            <AddIcCallOutlinedIcon />
            {user.phone}
          </p>
          <p>
            <LanguageOutlinedIcon />
            {user.website}
          </p>
        </div>
        <Navbar
          openModal={openModal}
          id={user.id}
          handleDelete={handleDelete}
        />
      </div>

      <Dialog fullWidth open={open} onClose={closeModal}>
        <DialogContent>
          {fields.map(item => {
            const err = !user[item] || !data[item]?.length;
            return (
              <div className="input-container">
                <div className="input-label">{item}</div>
                <TextField
                  style={{
                    margin: "-10px",
                  }}
                  fullWidth
                  onChange={e => onChangeField(item, e.target.value)}
                  size="large"
                  error={err}
                  id="outlined-error-helper-text"
                  defaultValue={user[item]}
                  helperText={err ? "This is Required field" : " "}
                ></TextField>
              </div>
            );
          })}
        </DialogContent>

        <DialogActions>
          <Button onClick={closeModal} varient="outlined">
            cancel
          </Button>
          <Button onClick={saveUser} varient="contained">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default UserDetail;

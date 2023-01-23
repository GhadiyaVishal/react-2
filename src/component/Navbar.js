import React, { useState } from "react";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
const Navbar = props => {
  const [isLike, setIsLike] = useState(true);
  function toggleLike() {
    setIsLike(prev => !prev);
  }
  return (
    <>
      <div className="navbar">
        <ul>
          <li className="list">
            <button onClick={toggleLike}>
              {isLike ? (
                <span className="like">
                  <FavoriteBorderOutlinedIcon />
                </span>
              ) : (
                <span className="like">
                  <FavoriteOutlinedIcon />
                </span>
              )}
            </button>
          </li>
          <li className="list">
            <button onClick={props.openModal}>
              <span className="pencil">
                <EditIcon />
              </span>
            </button>
          </li>
          <li className="list">
            <button onClick={() => props.handleDelete(props.id)}>
              <span className="trash">
                <DeleteForeverIcon />
              </span>
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;

import React, { Fragment } from "react";
import ImagenAvatar from "../../static/img/lorena.jpg";



import ListOptions from "./ListOptions";


const Sidebar = () => {



  return (
    <Fragment>
      <aside className="menu-principal  z-depth-2">
        <div className="background-menu">
          <div className="content-menu-header">
            <div className="avatar">
              <img className="avatar-menu" src={ImagenAvatar} alt="avatar" />
            </div>
            <span className="name-menu">Sebastian Rodriguez</span>

            <span>sebas1231998@gmail.com</span>
          </div>
        </div>

        <ListOptions
         />
     
      </aside>
    </Fragment>
  );
};

export default Sidebar;

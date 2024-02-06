import { Image } from "react-bootstrap";
import { MaterialText } from "./MaterialText";
import Icon from "@mdi/react";
import { mdiAccount } from "@mdi/js";

export const Sidebar = () => {
  return (
    <div className="sidebar" style={{height: "100vh"}}>
      <div className="header">
        <MaterialText
          text="Reclami"
          textStyle="m-2 display-5"
          style={{ color: "purple" }}
          iconJsx={
           
              <Image
                width={70}
                height={70}
                alt="s+"
                src="assets/s+.png"
              />
    
          }
        />
        <MaterialText
          text="Overview"
          textStyle="m-2"
          iconJsx={<Icon path={mdiAccount} size={1}></Icon>}
        />

        <MaterialText
          text="Overview"
          textStyle="m-2"
          iconJsx={<Icon path={mdiAccount} size={1}></Icon>}
        />
      </div>
      <div className="user-profile">
        <img className="user-avatar" src="./assets/ellipse-16-bg.png" />
        <div className="user-details">
          <div className="name-and-handle">
            <p className="user-name">Lamjed Ben slama</p>
            <p className="user-handle">@shakshi123</p>
          </div>
        </div>
        <img className="logout-icon" src="./assets/logout.png" />
      </div>
    </div>
  );
};

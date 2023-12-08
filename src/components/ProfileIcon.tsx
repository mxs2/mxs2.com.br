import React from "react";

const ProfileIcon = () => {
    const image =
        "https://avatars.githubusercontent.com/u/51239552";

    return (
        <img
            className="ProfileIcon"
            src={image}
            alt="Profile"
            style={{
                width: "200px",
                height: "200px",
                borderRadius: "50%",
                margin: "auto",
                display: "block",
            }}
        />
    );
}

export default ProfileIcon;

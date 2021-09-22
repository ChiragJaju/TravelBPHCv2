import React from "react";
import Popup from "./Popup";
import { useState, useContext, useEffect } from "react";
import AuthContext from "../context/AuthContext";
import axios from "axios";

const PopupPage = (props) => {
  const { userID, notes } = useContext(AuthContext);
  const [userDetails, setUserDetails] = useState();
  const [isLoaded, setIsLoaded] = useState(false);

  const handleOkay = () => {
    props.onHidePopup();
  };
  useEffect(() => {
    async function getEmailAndFilterPosts() {
      const loggedInRes = await axios.get("/api/userInfo/" + userID);
      const data = loggedInRes.data;
      setUserDetails(data);
      setIsLoaded(true);
    }
    getEmailAndFilterPosts();
  }, [userID]);

  return (
    <>
      {isLoaded && userDetails.postToShow.length !== 0 && (
        <Popup
          allPosts={userDetails.postToShow}
          notes={notes}
          handleOkay={handleOkay}
        ></Popup>
      )}
      )
    </>
  );
};
export default PopupPage;

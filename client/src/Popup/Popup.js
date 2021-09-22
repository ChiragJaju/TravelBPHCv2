import Modal from "../UI/Modal";
import classes from "./Popup.module.css";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";
import axios from "axios";
import { Button, Typography } from "@material-ui/core";

export default function Popup(props) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [requeststoShow, setRequestsToShow] = useState(props.allPosts);
  const [requestedPost, setRequestedPost] = useState([]);
  const currentDate = new Date();
  let postsWithDetails = [];
  let is = false;

  props.allPosts.map((Apost) => {
    let requiredPost = props.notes.filter((post) => {
      if (post._id === Apost.postId) {
        postsWithDetails.push({
          posts: post,
          status: Apost.requestStatus,
        });
        return true;
      } else return false;
    });

    // console.log(postsWithDetails);
    // if (requiredPost[0] !== undefined)
    //   setRequestedPost((prev) => {
    //     return [...prev, requiredPost[0]];
    //   });
    // const postsToShow = postsWithDetails.filter((post) => {
    //   const postDate = new Date(post.posts.PdateAndTime.data);
    //   if (postDate.getTime() - currentDate.getTime() >= 0) return true;
    //   else return false;
    // });
    // setRequestedPost(postsWithDetails);
    // console.log(requestedPost);
  });
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <Modal onHidePopup={props.onHidePopup}>
      {isLoaded && ///If set to true, page crashes initially but works fine after refreshing
        postsWithDetails.map((post) => {
          {
            /* console.log(requestedPost); */
          }
          if (post.posts !== undefined) {
            const postDate = new Date(post.posts.PdateAndTime.data); //To not show old posts

            if (postDate.getTime() - currentDate.getTime() >= 0)
              return (
                <>
                  <Typography>
                    Your Request to travel with {post.posts.Pname} {"on "}
                    {post.posts.PdateAndTime.date}/
                    {post.posts.PdateAndTime.month}/
                    {post.posts.PdateAndTime.year}
                    {" has been"}
                    {post.status === "true" && " Accepted."}{" "}
                    {post.status === "false" && " Rejected."}
                  </Typography>
                </>
              );
          }
        })}
      <Button
        variant="contained"
        style={{
          backgroundColor: "#FF1268",
          color: "#FFFFFF",
          marginTop: "20px",
        }}
        onClick={props.handleOkay}
      >
        Okay
      </Button>
    </Modal>
  );
}

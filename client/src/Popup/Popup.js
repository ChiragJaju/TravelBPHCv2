/* eslint-disable array-callback-return */
import Modal from "../UI/Modal";

import { useEffect, useState } from "react";

import { Button, Typography } from "@material-ui/core";

export default function Popup(props) {
  const [isLoaded, setIsLoaded] = useState(false);
  const currentDate = new Date();
  let postsWithDetails = [];

  props.allPosts.map((Apost) => {
    props.notes.filter((post) => {
      if (post._id === Apost.postId) {
        postsWithDetails.push({
          posts: post,
          status: Apost.requestStatus,
        });
        return true;
      } else return false;
    });
  });
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <Modal onHidePopup={props.onHidePopup}>
      {isLoaded && ///If set to true, page crashes initially but works fine after refreshing
        postsWithDetails.map((post) => {
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

import React, { useContext, useEffect } from "react";
import axios from "axios";
import AuthContext from "../context/AuthContext";
import YourCustomCard from "../components/YourCustomCard";
import Typography from "@material-ui/core/Typography";

export default function YourPosts() {
  const { userID, notes, setNotes } = useContext(AuthContext);
  const currentDate = new Date();
  const pastPosts = [];
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("/api/posts");
      setNotes(response.data);
    };
    fetchData();
  }, [setNotes, notes]);
  const yourPosts = notes.filter((post) => {
    if (post.Pid === userID) {
      const postDate = new Date(post.PdateAndTime.data);
      if (postDate.getTime() - currentDate.getTime() >= 0) return true;
      else {
        pastPosts.push(post);
        return false;
      }
    } else return false;
  });

  return (
    <>
      {yourPosts.length === 0 && pastPosts.length === 0 && (
        <Typography variant="h4" style={{ margin: "1vw 1vw" }}>
          No posts to Display.
        </Typography>
      )}
      {yourPosts.map((post) => {
        return (
          <>
            <YourCustomCard post={post}></YourCustomCard>
          </>
        );
      })}
      {pastPosts.length !== 0 && (
        <>
          <hr color="red" />
          <Typography variant="h4" style={{ margin: "1vw 2.5vw 0" }}>
            Request History:
          </Typography>
        </>
      )}
      {pastPosts.map((post) => {
        return (
          <>
            <YourCustomCard post={post}></YourCustomCard>
          </>
        );
      })}
    </>
  );
}

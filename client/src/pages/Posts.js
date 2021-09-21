import React, { useContext, useEffect } from "react";
import CustomCard from "../components/CustomCard";
import Copyright from "../components/Copyright";
import AuthContext from "../context/AuthContext";
import axios from "axios";
import Grid from "@material-ui/core/Grid";

function Posts() {
  const { notes, setNotes } = useContext(AuthContext);
  const currentDate = new Date();
  const postsToShow = notes.filter((post) => {
    const postDate = new Date(post.PdateAndTime.data);
    if (postDate.getTime() - currentDate.getTime() >= 0) return true;
    else return false;
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("/api/posts");
      setNotes(response.data);
    };
    fetchData();
  }, [setNotes, notes]);

  return (
    <>
      <div style={{ padding: "0 2.5vw 50px" }}>
        {/* responsive */}
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          {postsToShow.map((post) => {
            return <CustomCard post={post}></CustomCard>;
          })}
        </Grid>
      </div>
      <Copyright />
    </>
  );
}

export default Posts;

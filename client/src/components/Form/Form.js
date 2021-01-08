import React, { useEffect, useState } from "react";
import { Paper, TextField, Typography, Button } from "@material-ui/core";
import FileBase from "react-file-base64";

import useStyles from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { createMemory, updateMemory } from "../../actions/memories";

export const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });
  const classes = useStyles();
  const dispatch = useDispatch();
  const memory = useSelector((state) =>
    currentId ? state.memories.find((m) => m._id === currentId) : null
  );

  useEffect(() => {
    if (memory) setPostData(memory);
  }, [memory]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentId) {
      dispatch(updateMemory(currentId, postData));
    } else {
      dispatch(createMemory(postData));
    }

    clear();
  };
  const clear = () => {
    setCurrentId(null);
    setPostData({
      creator: "",
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    });
  };

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        className={`${classes.root} ${classes.form}`}
        noValidate
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">
          {" "}
          {currentId ? "Editing" : "Creating"} a Memory
        </Typography>
        <TextField
          name="Creator"
          label="Creator"
          fullWidth
          variant="outlined"
          value={postData.creator}
          onChange={(e) =>
            setPostData({ ...postData, creator: e.target.value })
          }
        />
        <TextField
          name="title"
          label="Title"
          fullWidth
          variant="outlined"
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <TextField
          name="tags"
          label="Tags"
          fullWidth
          variant="outlined"
          value={postData.tags}
          onChange={(e) =>
            setPostData({ ...postData, tags: e.target.value.split(",") })
          }
        />
        <TextField
          name="message"
          label="Message"
          fullWidth
          variant="outlined"
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
        />
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            mutiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>

        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

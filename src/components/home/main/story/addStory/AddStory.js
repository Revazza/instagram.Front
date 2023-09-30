import React, { useRef, useState } from "react";
import styles from "./AddStory.module.scss";
import StoryItem from "../storyItem/StoryItem";
import PopUp from "../../../../UI/popup/PopUp";
import Button from "../../../../UI/button/Button";
import { api } from "../../../../../Api";

function AddStory() {
  const [openViewStory, setOpenViewStory] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [errorMsg, setErrorMsg] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef(null);

  const handleAddStory = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (!selectedFile) {
      return;
    }
    setOpenViewStory(true);
    setSelectedFile(selectedFile);
  };

  const handleCloseViewStory = () => {
    setOpenViewStory(false);
    setSelectedFile(null);
    setErrorMsg(undefined);
    fileInputRef.current.value = null;
  };

  const handleStoryUpload = () => {
    const formData = new FormData();
    formData.append("file", selectedFile);
    setIsLoading(true);
    api
      .post("/Story/AddStory", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        const result = res.data;
        console.log(result);
        if (result.status === 1) {
          setErrorMsg(result.errors[0]);
          return;
        }
        setIsLoading(false)
        handleCloseViewStory();

      })
      .catch((err)=>{
        setIsLoading(false)
      });
  };

  return (
    <div className={styles.container}>
      <StoryItem userName="Me" />
      <div className={styles.add_story_icon} onClick={handleAddStory}>
        <img src="/images/add.png" alt="add story" />
      </div>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
      {selectedFile != null && (
        <PopUp
          text="Add Story"
          open={openViewStory}
          onPopUpCloseClick={handleCloseViewStory}
          bodyClassName={styles.pop_up_body}
        >
          <img
            id={styles.selectedStory}
            src={URL.createObjectURL(selectedFile)}
            alt="Selected Story"
          />
          <div className={styles.add_story_btn_wrapper}>
            <Button
              type="button"
              onClick={handleStoryUpload}
              text="Add Story"
            />
          </div>
          {errorMsg && <p id={styles.errorMsg}>{errorMsg}</p>}
        </PopUp>
      )}
    </div>
  );
}

export default AddStory;

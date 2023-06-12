import React, { useState, useEffect } from "react";
import style from "./Activity.module.css";
import { BiInfoCircle } from "react-icons/bi";
import { TbShare3 } from "react-icons/tb";
import { RiMenu2Line, RiFontSize, RiGalleryFill } from "react-icons/ri";
import { MdKeyboardArrowDown, MdFormatBold } from "react-icons/md";
import MoreHorizSharpIcon from "@mui/icons-material/MoreHorizSharp";
import ListSharpIcon from "@mui/icons-material/ListSharp";
import { BsLink45Deg, BsQuestionLg } from "react-icons/bs";
import { RxFontItalic } from "react-icons/rx";
import { HiOutlinePlusSm } from "react-icons/hi";
import { GrAttachment } from "react-icons/gr";
import { VscMarkdown } from "react-icons/vsc";

export default function Activity() {
  const [show, setShow] = useState(false);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    const storedComments = JSON.parse(localStorage.getItem("comments"));
    if (storedComments && storedComments.length > 0) {
      setComments(storedComments);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

  const handleInputChange = (event) => {
    setNewComment(event.target.value);
  };

  const saveComment = () => {
    if (newComment.trim() !== "") {
      const updatedComments = [...comments];
      updatedComments.push(newComment);
      setComments(updatedComments);
      setNewComment("");
      setShow(false);
    } else {
      alert("You cannot set an empty comment!");
    }
  };

  const editComment = (index) => {
    setNewComment(comments[index]);
    setShow(true);
  };

  const deleteComment = (index) => {
    const updatedComments = [...comments];
    updatedComments.splice(index, 1);
    setComments(updatedComments);
  };

  return (
    <div className={style.wrapper}>
      {show ? (
        <>
          <div className={style.inside_container}>
            <div className={style.top_icons}>
              <div className={style.left_sideicons}>
                <RiFontSize />
                <MdKeyboardArrowDown className={style.down_arrow} />
                |
                <MdFormatBold />
                <RxFontItalic />
                <MoreHorizSharpIcon />
                |
                <ListSharpIcon />
                <MdKeyboardArrowDown className={style.down_arrow} />
                |
                <BsLink45Deg />
                <RiGalleryFill />
                <HiOutlinePlusSm />
                <MdKeyboardArrowDown className={style.down_arrow} />
              </div>
              <div className={style.right_icons}>
                <GrAttachment className={style.attachment} />
                <BsQuestionLg className={style.question_mark} />
              </div>
            </div>
            <textarea
              name=""
              id=""
              cols="59"
              rows="2"
              placeholder="Write a comment..."
              value={newComment}
              onChange={handleInputChange}
            ></textarea>
          </div>
          <div className={style.btns}>
            <button className={style.save_btn} onClick={saveComment}>
              Save
            </button>
          </div>
        </>
      ) : (
        <>
          <div className={style.activity_box} onClick={() => setShow(true)}>
            <p>Write a comment...</p>
          </div>
        </>
      )}
      <div>
        {comments.map((comment, index) => (
          <div className={style.comment} key={index}>
            {comment}
            <span className={style.edit} onClick={() => editComment(index)}>
              Edit
            </span>
            <span className={style.delete} onClick={() => deleteComment(index)}>
              Delete
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

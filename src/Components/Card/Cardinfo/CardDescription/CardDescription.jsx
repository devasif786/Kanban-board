import React, { useState } from "react";
import style from "./CardDescription.module.css";
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
import DescriptionInitialBox from "./DescriptionInitialBox";
export default function CardDescription() {
  const [show, setShow] = useState(false);

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
                <VscMarkdown className={style.mark_down} />
                <BsQuestionLg className={style.question_mark} />
              </div>
            </div>
            <textarea
              name=""
              id=""
              cols="50"
              rows="13"
              placeholder="Need formatting help? type /help."
            ></textarea>
          </div>
          <div className={style.btns}> 
          <button className={style.save_btn} onClick={() => setShow(false)}>
            Save
          </button>
          <button className={style.cancel_btn} onClick={() => setShow(false)}>
            Cancel
          </button>
          <span className={style.feedback}>
            <TbShare3 className={style.share_icon} />
            Share feedback
          </span>
          </div>
        </>
      ) : (
        <DescriptionInitialBox onclick={() => setShow(true)} />
      )}
    </div>
  );
}

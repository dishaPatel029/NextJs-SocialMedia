import React from "react";
import { Video } from "../types";
import { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import { HiVolumeUp, HiVolumeOff } from "react-icons/hi";
import { BsFillPlayFill, BsFillPauseFill, BsPlay } from "react-icons/bs";
import { GoVerified } from "react-icons/go";

interface IProps {
  post: Video;
}

const VideoCard: NextPage<IProps> = ({ post }) => {
  console.log("--   post", post.caption);
  return (
    <div className="flex flex-col border-b-2 border-gray-200 pb-6">
      VideoCard
    </div>
  );
};

export default VideoCard;

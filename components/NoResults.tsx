import React, { useState, useEffect, useRef } from "react";

interface IProps {
  text: string;
}

const NoResults = ({ text }: IProps) => {
  return <div>NoResults</div>;
};

export default NoResults;

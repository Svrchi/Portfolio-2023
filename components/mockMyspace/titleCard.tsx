import React from "react";
import Image from "next/image";
import Link from "next/link";
import moment from "moment";

type Props = {};
// const firstDateOfMonth = moment().startOf("month").format("MM-DD-YYYY");
const currentDate = moment().subtract(10, "days").calendar();
const titleCard = (props: Props) => {
  return (
    <div className="flex flex-row text-black">
      <div id="left-col">
        <p className="font-bold">Kevin Sarchi</p>
        <Image
          className="relative mx-auto object-cover"
          src="/Tom.jpeg"
          width={150}
          height={0}
          alt="selfie"
        />
        <div className="flex">
          <p> View My: </p>
          <Link href="https://www.flickr.com/photos/100852839@N04/">Pics</Link>
          <p>|</p>
          <Link href="https://www.flickr.com/photos/100852839@N04/">
            Videos
          </Link>
        </div>
      </div>
      <div id="right-col">
        <p> &quot; :-{`)`} &quot; </p>
        <p>29 years old</p>
        <p> New York,</p>
        <p>NEW YORK</p>
        <p>United States</p>
        <img
        className="h-7"
          alt="Online Icon"
          src="https://archive.org/download/myspaceon/myspaceon.gif"
        />
        <p>Last Login:</p>
        <p>{currentDate}</p>
      </div>
    </div>
  );
};

export default titleCard;

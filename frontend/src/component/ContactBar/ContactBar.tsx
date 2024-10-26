import { faPenToSquare, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Messages from "../Messages";
import Contact from "./Contact";

export default function ContactBar() {
  let date: Date = new Date();
  date.setHours(date.getHours() - 3);
  return (
    <div className="absolute left-[9vh]">
      <section className="h-[100vh] w-[24.8rem] border flex flex-col">
        <UpperContactBar userName="username" />
        <div className="overflow-y-scroll grow">
          <ProfileContactBar />
          <div>
            <Contact username="username" lastConnected={new Date(date)} />
            <Contact username="username" lastConnected={new Date(date)} />
            <Contact username="username" lastConnected={new Date(date)} />
            <Contact username="username" lastConnected={new Date(date)} />
            <Contact username="username" lastConnected={new Date(date)} />
          </div>
        </div>
      </section>
    </div>
  );
}

function UpperContactBar({ userName }: { userName: string }) {
  return (
    <div className="flex flex-row justify-between items-center pt-[36px] pb-[12px]  px-[24px] mb-0 h-[4.6rem] min-h-[4.6rem] w-[100%]">
      <span className="font-bold text-[20px] overflow-hidden">{userName}</span>
      <div className="p-[8px]">
        <FontAwesomeIcon icon={faPenToSquare} className="size-[24px]" />
      </div>
    </div>
  );
}

function ProfileContactBar() {
  return (
    <div className="h-[140px] mb-[8px]">
      <div className="size-[100%] h-[96px] mt-[44px]">
        <div className=" rounded-full overflow-hidden mx-[1.35rem] size-[74px]  border">
          <FontAwesomeIcon icon={faUser} className=" size-[4.625rem] " />
        </div>
      </div>
    </div>
  );
}

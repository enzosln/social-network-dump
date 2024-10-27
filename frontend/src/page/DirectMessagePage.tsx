import React from "react";
import ContactBar from "../component/ContactBar";
import Messages from "../component/Messages";

export default function DirectMessagePage() {
  const exchanges: Object = {
    message: "bonjour",
  };

  return (
    <>
      <ContactBar />
      <Messages exchanges={exchanges} />
    </>
  );
}

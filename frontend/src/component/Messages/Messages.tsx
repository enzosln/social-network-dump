import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Messages({ exchanges }: { exchanges: Object }) {
  return (
    <>
      <div>
        {" "}
        oui
        <FontAwesomeIcon icon={"facebook-messenger"} />
      </div>
    </>
  );
}

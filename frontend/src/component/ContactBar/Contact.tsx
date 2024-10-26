import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Contact({
  username,
  lastConnected,
}: {
  username: string;
  lastConnected: Date;
}) {
  const date = new Date();
  return (
    <div className="flex justify-start gap-3 px-6 py-2 hover:bg-gray-100 transition duration-75">
      <div className=" rounded-full overflow-hidden size-[3.5rem]  border">
        <FontAwesomeIcon icon={faUser} className=" size-[3.5rem] " />
      </div>
      <div className="grow flex flex-col justify-evenly">
        <div className="text-sm text-black">{username}</div>
        <div className="text-xs text-[#737373] h-[1.125rem]">
          En ligne il y a {date.getHours() - lastConnected.getHours()}h
        </div>
      </div>
    </div>
  );
}

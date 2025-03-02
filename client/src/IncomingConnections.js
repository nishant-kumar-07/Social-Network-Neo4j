import { useEffect, useState } from "react";
import { IncomingConnectionCard } from "./components/IncomingConnectionCard";
import { getIncomingConnections } from "./API/ServerConnection";

export const IncomingConnections = (props) => {
  const [incomingConnection, setIncomingConnection] = useState();

  useEffect(() => {
    getIncomingConnections().then((response) => {
      setIncomingConnection(response.data);
    });
  }, []);

  return (
    <>
      {incomingConnection?.map((userData) => (
        <IncomingConnectionCard
          userData={userData}
          handleProfileOnClick={props.handleProfileOnClick}
        />
      ))}
    </>
  );
};

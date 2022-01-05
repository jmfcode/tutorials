import { useState } from "react";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

async function getAccount() {
  const accounts = await window.ethereum.request({
    method: "eth_requestAccounts",
  });
  const account = accounts[0];

  return account;
}

export default function ConnectButton() {
  const [accountAddress, setAccountAddress] = useState("");

  const connectButtonOnClick = () => {
    console.log(window);
    if (
      typeof window !== "undefined" &&
      typeof window.ethereum !== "undefined"
    ) {
      getAccount().then((response) => {
        setAccountAddress(response);
      });
    } else {
      console.log("error");
    }
  };

  return (
    <Button variant="contained" onClick={connectButtonOnClick}>
      {!!accountAddress ? accountAddress : "Connect Button"}
    </Button>
  );
}

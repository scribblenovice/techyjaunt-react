import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import CheckMark from "./CheckMark";
 
const EmailLoading=()=> {
  return (
    <>
      <Dialog open={true}  className="bg-transparent grid place-items-center shadow-none max-w-fit max-h-fit">
        <div className="text-white">please wait...</div>
        <CheckMark isOpen={false}/>
      </Dialog>
    </>
  );
}
export default EmailLoading;
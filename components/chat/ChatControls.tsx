import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const ChatControls = () => {
  return (
    <>
      <div className="flex items-center mt-2 justify-between">
        <h3 className="body-medium">Chat History</h3>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="body-medium">
            <Image
              src="/assets/icons/checkpoint.svg"
              width={18}
              height={18}
              alt="checkpoint"
            />{" "}
            Checkpoints
          </Button>
          <Button variant="outline" className="body-medium">
            <Image
              src="/assets/icons/save.svg"
              width={18}
              height={18}
              alt="save"
            />{" "}
            Save
          </Button>
          <Button variant="outline" className="body-medium">
            <Image
              src="/assets/icons/reset.svg"
              width={14}
              height={14}
              alt="reset"
            />{" "}
            Reset
          </Button>
        </div>
      </div>
    </>
  );
};

export default ChatControls;

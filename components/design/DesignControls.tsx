import React from "react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

import DesignInputForm from "./DesignInputForm";

const DesignControls = () => {
  return (
    <div className="p-4 rounded-md border ">
      <h2 className="base-semibold">Design Controls</h2>
      <div className="flex my-4 pl-1 body-medium  items-center gap-4">
        <Switch id="edit-mode" className="scale-125" />
        <Label htmlFor="edit-mode">Enable editing mode</Label>
      </div>

      <DesignInputForm />
    </div>
  );
};

export default DesignControls;

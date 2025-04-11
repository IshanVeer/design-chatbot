import React from "react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const DesignControls = () => {
  return (
    <div className="p-4 rounded-md border ">
      <h2 className="base-semibold">Design Controls</h2>
      <div className="flex my-4 pl-1 body-medium  items-center gap-4">
        <Switch id="edit-mode" className="scale-125" />
        <Label htmlFor="edit-mode">Enable editing mode</Label>
      </div>

      {/* style container */}
      <div>
        <h3 className="body-regular my-2">Background Style</h3>

        <RadioGroup defaultValue="color" className="flex body-medium">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="color" id="option-one" />
            <Label htmlFor="option-one">Color</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="image-background" id="option-two" />
            <Label htmlFor="option-two">Image Background</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="centered-image" id="option-three" />
            <Label htmlFor="option-three">Centered Image</Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  );
};

export default DesignControls;

import { Radio } from "@material-tailwind/react";

export function RadioDefault() {
  return (
    <div className="flex gap-10">
      <Radio name="type" label="Yes" />
      <Radio name="type" label="No" />
    </div>
  );
}

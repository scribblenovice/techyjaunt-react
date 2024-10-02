import { Radio } from "@material-tailwind/react";

export function GlobalRadio({
  options,
  className,
  inputName,
  handleChange,
  errorTxt,
  isChecked,
  data
}) {
  return (
    <>
      <div className={className}>
        {options.map((el, index) => {
          return (
            <>
              <Radio
                key={index}
                name={inputName}
                label={el.label}
                onChange={handleChange}
                value={el.label}
                checked={data==el.label? true: false }
              />
            </>
          );
        })}
      </div>
      {errorTxt && <p className="text-xs text-red-500">{errorTxt}</p>}
    </>
  );
}

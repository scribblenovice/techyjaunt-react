import React from "react";
import { useCountries } from "use-react-countries";
import {
  Input,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";

export function PhoneNumber({ id, inputName, handleChange, inputVal, errorTxt }) {
  const { countries } = useCountries();
  const [country, setCountry] = React.useState(0);
  const { name, flags, countryCallingCode } = countries[country];

  return (
    <div>
      <div className="relative flex w-full" id={id}>
        <Menu placement="bottom-start">
          <MenuHandler>
            <Button
              ripple={false}
              variant="text"
              color="blue-gray"
              className="flex h-10 items-center gap-2 rounded-r-none border border-r-0 border-blue-gray-200 bg-blue-gray-500/10 pl-3"
            >
              <img
                src={flags.svg}
                alt={name}
                className="h-4 w-4 rounded-full object-cover"
              />
              {countryCallingCode}
            </Button>
          </MenuHandler>
          <MenuList className="max-h-[20rem] max-w-[18rem]">
            {countries.map(({ name, flags, countryCallingCode }, index) => {
              return (
                <MenuItem
                  key={name}
                  value={name}
                  className="flex items-center gap-2"
                  onClick={() => {
                    sessionStorage.setItem("countryCode", countryCallingCode);
                    setCountry(index);
                  }}
                >
                  <img
                    src={flags.svg}
                    alt={name}
                    className="h-5 w-5 rounded-full object-cover"
                  />
                  {name} <span className="ml-auto">{countryCallingCode}</span>
                </MenuItem>
              );
            })}
          </MenuList>
        </Menu>
        <Input
          name={inputName}
          onChange={handleChange}
          type="tel"
          inputMode="numeric"
          placeholder="Mobile Number"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          className={`rounded-l-none ${
            errorTxt ? "!border-red-500" : "!border-blue-gray-200"
          } focus:!border-black`}
          labelProps={{
            className: "hidden",
          }}
          containerProps={{
            className: "min-w-0",
          }}
          required
        />
      </div>
      {errorTxt && <p className="text-xs text-red-500">{errorTxt}</p>}
    </div>
  );
}
export default PhoneNumber;

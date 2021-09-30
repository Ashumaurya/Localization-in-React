import React, { useState } from "react";
import { createPopper } from "@popperjs/core";
import { useCurrentLanguage, useSetLanguage } from "@tolgee/react";
export const Dropdown = ({ color }) => {
  // dropdown props
  const [currentLanguage, setCurrentLanguage] = useState("En");
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const getLang = useCurrentLanguage();
  const setLang = useSetLanguage();
  const currentLang = getLang();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full sm:w-6/12 md:w-4/12 px-4">
          <div className="relative inline-flex align-middle w-full">
            <button
              className={
                " font-bold uppercase text-md px-2 py-1 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 "
              }
              type="button"
              ref={btnDropdownRef}
              onClick={() => {
                dropdownPopoverShow
                  ? closeDropdownPopover()
                  : openDropdownPopover();
              }}
            >
              {getLang()}
            </button>
            <div
              ref={popoverDropdownRef}
              className={
                (dropdownPopoverShow ? "block " : "hidden ") +
                // (color === "white" ? "bg-white " : bgColor + " ") +
                "text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1"
              }
              style={{ minWidth: "12rem" }}
            >
              <a
                href="#pablo"
                className={
                  "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent " +
                  (color === "white" ? " text-blueGray-700" : "text-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setDropdownPopoverShow(!dropdownPopoverShow);
                  setLang("en");
                }}
              >
                En
              </a>
              <a
                href="#pablo"
                className={
                  "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent " +
                  (color === "white" ? " text-blueGray-700" : "text-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setDropdownPopoverShow(!dropdownPopoverShow);
                  setLang("hi");
                }}
              >
                Hi
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

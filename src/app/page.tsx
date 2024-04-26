"use client";

import { ComponentProps, ReactNode, useState } from "react";
import { Switch as AriaSwitch } from "react-aria-components";

export default function Demo() {
  let [scale, setScale] = useState(1.5);

  return (
    <div>
      <div className="absolute right-0 top-0 inline-flex space-x-3 p-4">
        {[1, 1.5, 2].map((factor) => (
          <button
            key={factor}
            onClick={() => setScale(factor)}
            className={`${
              factor === scale ? "text-white" : "text-white/50 hover:text-white"
            } inline-flex h-8 w-8 items-center justify-center rounded text-sm font-semibold transition`}
          >
            {factor}x
          </button>
        ))}
      </div>

      <div
        style={{
          transform: `scale(${scale})`,
        }}
        className=" transition-all duration-[400ms]"
      >
        <Switch>Airplane Mode</Switch>
      </div>
    </div>
  );
}

function Switch({
  children,
  ...props
}: { children: ReactNode } & ComponentProps<typeof AriaSwitch>) {
  return (
    <AriaSwitch
      {...props}
      className="group inline-flex touch-none items-center"
      style={{ WebkitTapHighlightColor: "transparent" }}
    >
      <span className="mr-4 h-6 w-9 cursor-pointer rounded-full border-2 border-transparent bg-gray-600 ring-offset-2 ring-offset-gray-900 transition duration-200 group-data-[selected]:bg-green-500 group-data-[focus-visible]:ring-2">
        <span className="block h-5 w-5 origin-right rounded-full bg-white shadow transition-all duration-200 group-data-[selected]:group-data-[pressed]:ml-2 group-data-[selected]:ml-3 group-data-[pressed]:w-6" />
      </span>
      <span>{children}</span>
    </AriaSwitch>
  );
}

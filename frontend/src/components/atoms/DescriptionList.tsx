import React from "react";
import classNames from "classnames";

interface Item {
  name: string;
  value: string;
}

interface Props {
  items: Item[];
  classNames?: {
    dt?: string;
    dd?: string;
  };
  className?: string;
  inline?: boolean;
}

export function DescriptionList({
  items,
  className,
  classNames: { dd, dt } = { dt: "", dd: "" },
  inline = true,
}: Props) {
  return (
    <dl className={className}>
      {items.map((item) => (
        <>
          <div>
            <dt className={classNames(dt, inline && "inline")}>{item.name}:</dt>{" "}
            <dd className={classNames(dd, inline && "inline")}>{item.value}</dd>
          </div>
        </>
      ))}
    </dl>
  );
}

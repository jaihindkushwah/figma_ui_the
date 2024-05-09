import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";

function Accordion({ heading, children, isOpen }) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (isOpen) setOpen(true);
  }, [isOpen]);
  return (
    <span className="w-full flex flex-col pb-3 gap-4 border-b border-slate-400">
      <span className="flex justify-between p-1 text-center">
        <span onClick={() => setOpen(!open)} className="text-xl font-semibold">
          {heading}
        </span>
        <span className="cursor-pointer" onClick={() => setOpen(!open)}>
          {!open ? <PlusOutlined /> : <MinusOutlined />}
        </span>
      </span>
      {open && <p className="p-2 text-[#617275]">{children}</p>}
    </span>
  );
}

export default Accordion;

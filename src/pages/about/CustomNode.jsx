import React, { memo } from "react";
import { Handle, Position } from "@xyflow/react";
import { a } from "framer-motion/client";

function CustomNode({ data }) {
  const positions = data.positions ?? [Position.Top];

  return (
    <a href={data.href} target="_blank">
      <div className="p-4 shadow-md rounded-full bg-white border-2 border-stone-400 cursor-pointer hover:scale-110  transition hover:ease-in-out min-w-48">
        <div className="flex items-center flex-col">
          <div className="rounded-full flex justify-center items-center bg-white ">
            <img
              src={data.logo}
              alt={data.label}
              className="w-30 h-20 object-contain "
            />
            <div className="">
              <div className="text-xs font-medium text-center">
                {data.label}
              </div>
            </div>
          </div>
        </div>

        {positions.map((position) => (
          <div key={position}>
            {/* Target handle (incoming) */}
            <Handle
              type="target"
              position={position}
              id={`${position}-target`} // ← Unique ID
              className="w-3 h-3 !bg-teal-500"
              style={{ [getOpposite(position)]: -2 }} // Optional: position it slightly outside
            />

            {/* Source handle (outgoing) */}
            <Handle
              type="source"
              position={position}
              id={`${position}-source`} // ← Unique ID
              className="w-3 h-3 !bg-blue-500"
              style={{ [getOpposite(position)]: -2 }}
            />
          </div>
        ))}
      </div>
    </a>
  );
}

// Helper to push handles slightly outside the node
function getOpposite(position) {
  switch (position) {
    case Position.Top:
      return "top";
    case Position.Bottom:
      return "bottom";
    case Position.Left:
      return "left";
    case Position.Right:
      return "right";
  }
}

export default memo(CustomNode);

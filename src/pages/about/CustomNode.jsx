import React, { memo } from "react";
import { Handle, Position } from "@xyflow/react";

function CustomNode({ data }) {
  const positions = data.positions ?? [Position.Top];

  return (
    <div className="px-4 py-2 shadow-md rounded-md bg-white border-2 border-stone-400">
      <div className="flex items-center">
        <div className="rounded-full w-12 h-12 flex justify-center items-center bg-gray-100 overflow-hidden">
          <img
            src={data.logo}
            alt={data.label}
            className="w-10 h-10 object-contain"
          />
        </div>
        <div className="ml-3">
          <div className="text-lg font-bold">{data.label}</div>
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

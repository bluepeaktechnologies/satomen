import { useState, useCallback } from "react";
import {
  ReactFlow,
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
  Position,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import CustomNode from "./CustomNode";

const nodeTypes = {
  custom: CustomNode,
};

export const initialNodes = [
  {
    id: "sisa",
    type: "custom",
    data: {
      label: "SISA",
      logo: "/logos/sisa.png",
      positions: [Position.Bottom, Position.Right],
    },

    position: { x: 100, y: 80 },
  },
  {
    id: "sinl",
    type: "custom",
    data: {
      label: "SINL",
      logo: "/logos/sinal.png",

      positions: [Position.Top, Position.Bottom, Position.Right],
    },
    position: { x: 80, y: 220 },
  },
  {
    id: "nnpc",
    type: "custom",
    data: {
      label: "NNPCL",
      logo: "/logos/nnpc.png",
      positions: [Position.Top, Position.Bottom, Position.Left, Position.Right],
    },
    position: { x: 420, y: 200 },
  },
  {
    id: "aarano",
    type: "custom",
    data: {
      label: "AA Rano",
      logo: "/logos/aarano.png",
      positions: [Position.Bottom, Position.Left, Position.Right],
    },
    position: { x: 420, y: 50 },
  },
  {
    id: "dangote",
    type: "custom",
    data: {
      label: "Dangote",
      logo: "/logos/dangote.png",

      positions: [Position.Top, Position.Bottom],
    },
    position: { x: 720, y: 120 },
  },
  {
    id: "gaszone",
    type: "custom",
    data: {
      label: "Gas Zone Intl",
      logo: "/logos/gaszone.png",
      positions: [Position.Top, Position.Left, Position.Right],
    },
    position: { x: 200, y: 330 },
  },
  {
    id: "isfan",
    type: "custom",
    data: {
      label: "Isfan Resources Ltd",
      logo: "/logos/isfan.png",

      positions: [Position.Top, Position.Left, Position.Right],
    },
    position: { x: 540, y: 330 },
  },
];

export const initialEdges = [
  // SISA ↔ AA Rano
  {
    id: "sisa-aarano",
    source: "sisa",
    target: "aarano",
    markerEnd: { type: "arrowclosed" },
    markerStart: { type: "arrowclosed" },
  },
  // {
  //   id: "aarano-sisa",
  //   source: "aarano",
  //   target: "sisa",
  //   markerEnd: { type: "arrowclosed" },
  // },

  // SINAL ↔ NNPCL
  {
    id: "sinal-nnpc",
    source: "sinal",
    target: "nnpc",
    markerEnd: { type: "arrowclosed" },
    markerStart: { type: "arrowclosed" },
  },
  {
    id: "nnpc-sinal",
    source: "nnpc",
    target: "sinal",
    markerEnd: { type: "arrowclosed" },
    markerStart: { type: "arrowclosed" },
  },

  // NNPCL ↔ AA Rano
  {
    id: "nnpc-aarano",
    source: "nnpc",
    target: "aarano",
    markerEnd: { type: "arrowclosed" },
    markerStart: { type: "arrowclosed" },
  },
  {
    id: "aarano-nnpc",
    source: "aarano",
    target: "nnpc",
    markerEnd: { type: "arrowclosed" },
    markerStart: { type: "arrowclosed" },
  },

  // AA Rano ↔ Dangote
  {
    id: "aarano-dangote",
    source: "aarano",
    target: "dangote",
    markerEnd: { type: "arrowclosed" },
    markerStart: { type: "arrowclosed" },
  },
  {
    id: "dangote-aarano",
    source: "dangote",
    target: "aarano",
    markerEnd: { type: "arrowclosed" },
    markerStart: { type: "arrowclosed" },
  },
  // Isfan → NNPC
  {
    id: "isfan-nnpc",
    source: "isfan",
    target: "nnpc",
    markerEnd: { type: "arrowclosed" },
    markerStart: { type: "arrowclosed" },
  },

  // Isfan → DANGOTE
  {
    id: "isfan-dangote",
    source: "isfan",
    target: "dangote",
    markerEnd: { type: "arrowclosed" },
    markerStart: { type: "arrowclosed" },
  },

  // Gas Zone → Isfan
  {
    id: "gaszone-isfan",
    source: "gaszone",
    target: "isfan",
    markerEnd: { type: "arrowclosed" },
    markerStart: { type: "arrowclosed" },
  },

  // Gas Zone → NNPC
  {
    id: "gaszone-nnpc",
    source: "gaszone",
    target: "nnpc",
    markerEnd: { type: "arrowclosed" },
    markerStart: { type: "arrowclosed" },
  },

  // Gas Zone → SNL
  {
    id: "gaszone-sinl",
    source: "gaszone",
    target: "sinl",
    markerEnd: { type: "arrowclosed" },
    markerStart: { type: "arrowclosed" },
  },

  // SNL  → NNPC
  {
    id: "sinl-nnpc",
    source: "sinl",
    target: "nnpc",
    markerEnd: { type: "arrowclosed" },
    markerStart: { type: "arrowclosed" },
  },
  // SNL  → NNPC
  {
    id: "sinl-sisa",
    source: "sinl",
    target: "sisa",
    markerEnd: { type: "arrowclosed" },
    markerStart: { type: "arrowclosed" },
  },
];

export default function Partners() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        fitView
        contentEditable={"false"}
      />
    </div>
  );
}

import { useState, useCallback } from "react";
import {
  ReactFlow,
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
  Position,
  StraightEdge,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import CustomNode from "./CustomNode";
import PageHeader from "../../layout/PageHeader";
import servicesBg from "/src/assets/vessel.jpg";
import { href } from "react-router-dom";

const nodeTypes = {
  custom: CustomNode,
};

export default function Partners() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  console.log("nodes", nodes);
  console.log("edges", edges);

  const onNodesChange = useCallback(
    (changes) =>
      setNodes((nodesSnapshot) => applyNodeChanges(changes, nodesSnapshot)),
    []
  );
  const onEdgesChange = useCallback(
    (changes) =>
      setEdges((edgesSnapshot) => applyEdgeChanges(changes, edgesSnapshot)),
    []
  );
  const onConnect = useCallback(
    (params) => setEdges((edgesSnapshot) => addEdge(params, edgesSnapshot)),
    []
  );

  return (
    <div>
      <PageHeader
        title="Partners"
        subtitle="Our Partners"
        background={servicesBg}
      />
      <div
        // style={{ width: "100vw", height: "90vh" }}
        className="h-[50vh] md:h-[90vh] w-[100vw]"
      >
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          fitView
          // onNodesChange={onNodesChange}
          // onEdgesChange={onEdgesChange}
          // onConnect={onConnect}
          contentEditable={"false"}
          zoomOnScroll={false}
          preventScrolling={false}
          draggable={false}
          zoomOnPinch={false}
          panOnDrag={false}
          panOnScroll={false}
        />
      </div>
    </div>
  );
}

export const initialNodes = [
  {
    id: "sisa",
    type: "custom",
    data: {
      logo: "https://github.com/bluepeaktechnologies/assets/blob/main/satomen.JPG?raw=true",
      positions: ["bottom", "right"],
    },
    position: {
      x: 159.90305343511446,
      y: 41.093893129771004,
    },
    measured: {
      width: 192,
      height: 116,
    },
    selected: false,
    dragging: false,
  },
  {
    id: "sinl",
    type: "custom",
    data: {
      logo: "https://github.com/bluepeaktechnologies/assets/blob/main/satomen.JPG?raw=true",
      label: "SINL",
      positions: ["top", "bottom", "right"],
    },
    position: {
      x: 100.17103199114268,
      y: 195.57802750422468,
    },
    measured: {
      width: 192,
      height: 116,
    },
    selected: false,
    dragging: false,
  },
  {
    id: "nnpc",
    type: "custom",
    data: {
      logo: "https://github.com/bluepeaktechnologies/assets/blob/main/nnpc.JPG?raw=true",
      href: "https://nnpcgroup.com/",
      positions: ["top", "bottom", "left", "right"],
    },
    position: {
      x: 421.23511450381676,
      y: 183.9435114503817,
    },
    measured: {
      width: 192,
      height: 116,
    },
    selected: false,
    dragging: false,
  },
  {
    id: "aarano",
    type: "custom",
    data: {
      logo: "https://github.com/bluepeaktechnologies/assets/blob/main/aarano.png?raw=true",
      href: "https://aaranonigeria.com/",
      positions: ["bottom", "left", "right"],
    },
    position: {
      x: 418.7648854961832,
      y: 36.41374045801527,
    },
    measured: {
      width: 192,
      height: 116,
    },
    selected: false,
    dragging: false,
  },
  {
    id: "dangote",
    type: "custom",
    data: {
      logo: "https://github.com/bluepeaktechnologies/assets/blob/main/dangote.JPG?raw=true",
      href: "https://www.dangote.com/",
      positions: ["top", "bottom"],
    },
    position: {
      x: 686.0032037760038,
      y: 143.46395373229998,
    },
    measured: {
      width: 192,
      height: 116,
    },
    selected: true,
    dragging: false,
  },
  {
    id: "gaszone",
    type: "custom",
    data: {
      label: "Gas Zone Intl",
      logo: "https://github.com/bluepeaktechnologies/assets/blob/main/gas-zone.png?raw=true",
      href: "https://gas-zone.com",
      positions: ["top", "left", "right"],
    },
    position: {
      x: 275.3129881708526,
      y: 339.12158906823606,
    },
    measured: {
      width: 232,
      height: 116,
    },
    selected: false,
    dragging: false,
  },
  {
    id: "isfan",
    type: "custom",
    data: {
      logo: "https://github.com/bluepeaktechnologies/assets/blob/main/isfan.JPG?raw=true",
      positions: ["top", "left", "right"],
    },
    position: {
      x: 567.2917359128256,
      y: 325.25501194569085,
    },
    measured: {
      width: 192,
      height: 116,
    },
    selected: false,
    dragging: false,
  },
];

export const initialEdges = [
  {
    source: "nnpc",
    sourceHandle: "top-source",
    target: "aarano",
    targetHandle: "bottom-target",
    id: "xy-edge__nnpctop-source-aaranobottom-target",
  },
  {
    source: "nnpc",
    sourceHandle: "left-source",
    target: "sinl",
    targetHandle: "right-target",
    id: "xy-edge__nnpcleft-source-sinlright-target",
  },
  {
    source: "gaszone",
    sourceHandle: "left-source",
    target: "sinl",
    targetHandle: "bottom-target",
    id: "xy-edge__gaszoneleft-source-sinlbottom-target",
  },
  {
    source: "gaszone",
    sourceHandle: "top-source",
    target: "nnpc",
    targetHandle: "bottom-target",
    id: "xy-edge__gaszonetop-source-nnpcbottom-target",
  },
  {
    source: "gaszone",
    sourceHandle: "right-source",
    target: "isfan",
    targetHandle: "left-target",
    id: "xy-edge__gaszoneright-source-isfanleft-target",
  },
  {
    source: "aarano",
    sourceHandle: "right-source",
    target: "dangote",
    targetHandle: "top-target",
    id: "xy-edge__aaranoright-source-dangotetop-target",
  },
  {
    source: "aarano",
    sourceHandle: "left-source",
    target: "sisa",
    targetHandle: "right-target",
    id: "xy-edge__aaranoleft-source-sisaright-target",
  },
  {
    source: "sisa",
    sourceHandle: "bottom-source",
    target: "sinl",
    targetHandle: "top-target",
    id: "xy-edge__sisabottom-source-sinltop-target",
  },
  {
    source: "dangote",
    sourceHandle: "bottom-source",
    target: "isfan",
    targetHandle: "right-target",
    id: "xy-edge__dangotebottom-source-isfanright-target",
    selected: false,
  },
  {
    source: "nnpc",
    sourceHandle: "right-source",
    target: "isfan",
    targetHandle: "top-target",
    id: "xy-edge__nnpcright-source-isfantop-target",
  },
];

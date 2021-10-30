import { ForceGraph2D } from "react-force-graph";
import buildColoredTree from "../funcs/buildColoredTree";
import onNodeClick from "../funcs/onNodeClick";

const ColoredGraph = (props: any) => {
    return <ForceGraph2D 
        graphData={buildColoredTree()}
        onNodeClick={onNodeClick}
  />
}

export default ColoredGraph;
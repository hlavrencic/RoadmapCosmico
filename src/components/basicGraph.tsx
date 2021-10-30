import { ForceGraph2D } from "react-force-graph";
import buildRandomTree from "../funcs/buildRandomTree";

const BasicGraph = (props: any) => {
    return <ForceGraph2D 
        graphData={buildRandomTree(props.length)}
        nodeAutoColorBy="group"
        linkDirectionalArrowLength={3.5}
        linkDirectionalArrowRelPos={1}
        linkCurvature={0.25}
  />
}

export default BasicGraph;
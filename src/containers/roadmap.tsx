import { useEffect, useState } from "react"
import { ForceGraph2D } from "react-force-graph"
import NodeModal from "../components/nodeModal";

const Roadmap = (props: any) => {

    const [nodes, setNodes] = useState([] as any);
    const [links, setLinks] = useState([] as any);
    const [isNodeModalOpen, setIsNodeModalOpen] = useState(false);
    const [selectedNode, setSelectedNode] = useState({} as any);
    const [formHasError, setFormHasError] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    //OnInit
    useEffect(() => {
        getData();
    }, []);

    //API calls
    const getData = async () => {
        console.log("Obteniendo gData");
        setNodes([ 
            { 
              id: "id1",
              name: "name1",
              val: 1,
              likes: 0,
              color: '#0f0'
            },
            { 
              id: "id2",
              name: "name2",
              val: 1,
              likes: 0,
              color: '#0f0'
            }
        ]);
        setLinks([
            {
                source: "id1",
                target: "id2"
            }
        ]);
    };

    const updateData = async () => {
        const newNodes =  nodes.map((n: any) => n.id === selectedNode.id ? selectedNode : n);
        console.log(JSON.stringify(newNodes));
        setNodes(newNodes);
    };

    //Handlers
    const onNodeClick = (node: any, event: MouseEvent) => {
        console.log("Nodo clickeado");
        event.preventDefault();
        openNodeModal(node);
    };
    const onLinkClick = () => {
        console.log("Link clickeado");
    };

    //Modal
    const openNodeModal = (node: any) => {
        setSelectedNode(node);
        setIsNodeModalOpen(true);
    };
    const closeNodeModal = () => {
        setIsNodeModalOpen(false);
        setFormHasError(false);
        setSelectedNode({});
        setErrorMsg('');
    };
    const submitNodeModal = (event: any, form: any) => {
        event.preventDefault();
        setFormHasError(true);

        if(form.checkValidity()) {

            console.log(JSON.stringify(selectedNode));
            updateData();
            closeNodeModal();
        }
    };
    const changeInputNodeModal = (prop: any, value: any) => {
        value === '' ? setFormHasError(true) : setFormHasError(false);

        setSelectedNode({...selectedNode, [prop]: value});
    };

    return (
        <>
            <ForceGraph2D 
                graphData={{nodes, links}}
                onNodeClick={onNodeClick}
                onLinkClick={onLinkClick}
            />
            <NodeModal 
                show={isNodeModalOpen}    
                onHide={closeNodeModal}
                onChange={changeInputNodeModal}
                onSubmit={submitNodeModal}
                node={selectedNode}
                validated={formHasError}
                errorMsg={errorMsg}
            />
        </>
    );
}

export default Roadmap; 
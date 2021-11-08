import { useEffect, useState } from "react"
import { ForceGraph2D } from "react-force-graph"
import NodeModal from "../components/nodeModal";
import { GLink } from "../entities/link";
import { GNode } from "../entities/node";
import setNodeColorByLikes from "../funcs/setNodeColorByLikes";

const initialData = {
    nodes: [] as GNode[],
    links: [] as GLink[]
};

const Roadmap = (props: any) => {

    const [data, setData] = useState(initialData);
    const [isNodeModalOpen, setIsNodeModalOpen] = useState(false);
    const [selectedNode, setSelectedNode] = useState({} as GNode);
    const [formHasError, setFormHasError] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    //OnInit
    useEffect(() => {
        getData();
    }, []);

    //API calls
    const getData = async () => {
        console.log("Obteniendo gData");
        setData({
            nodes: [ 
                { 
                  id: "id1",
                  name: "name1",
                  likes: 0,
                  color: '#0f0'
                },
                { 
                  id: "id2",
                  name: "name2",
                  likes: 0,
                  color: '#0f0'
                }
            ],
            links: [
                {
                    source: "id1",
                    target: "id2"
                }
            ]
        });
    };
    const updateData = async () => {
        const newNodes = 
            data.nodes
            .map((n: GNode) => n.id === selectedNode.id ? selectedNode : n)
            .map((n: GNode) => { return { ...n }; });
            
        newNodes.forEach(n => setNodeColorByLikes(n));

        setData({
            nodes: newNodes, 
            links: [
                {
                    source: "id1",
                    target: "id2"
                }
            ]
        });
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
    const openNodeModal = (node: GNode) => {
        setSelectedNode(node);
        setIsNodeModalOpen(true);
    };
    const closeNodeModal = () => {
        setIsNodeModalOpen(false);
        setFormHasError(false);
        setSelectedNode({} as GNode);
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

        const node: GNode = {
            ...selectedNode,
            [prop]: value
        };

        setSelectedNode(node);
    };

    return (
        <>
            <ForceGraph2D 
                graphData={data}
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
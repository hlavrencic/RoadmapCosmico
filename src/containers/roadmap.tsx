import { useEffect, useRef, useState } from "react"
import { ForceGraph2D } from "react-force-graph"
import LinkModal from "../components/linkModal";
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

    const [isLinkModalOpen, setIsLinkModalOpen] = useState(false);
    const [selectedLink, setSelectedLink] = useState({} as any);

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
                    id: "e9be25d6-1066-4902-bba3-4e58adcaac29",
                    name: "Trainee",
                    likes: 0,
                    color: '#0f0',
                    val: 30
                },
                {
                    id: "c37b7cc8-be40-48e4-9473-599732e8816f",
                    name: "Mandatory",
                    likes: 0,
                    color: '#0f0',
                    val: 15
                },
                {
                    id: "b22ddebb-f15d-4e12-aac0-e0e52f3ca4b8",
                    name: "Intro C# Visual Studio",
                    likes: 0,
                    color: '#0f0',
                    val: 5
                },
                {
                    id: "780fd14f-44c4-471e-b3a1-c1be9a036079",
                    name: "TFS - PEI Fullstack Developer",
                    likes: 0,
                    color: '#0f0',
                    val: 5
                },
                {
                    id: "2bf5212c-86db-4f36-a942-70eab7705d75",
                    name: ".NET Tutorial - Hello World",
                    likes: 0,
                    color: '#0f0',
                    val: 5
                },
                {
                    id: "90b141c2-ca14-4638-8411-95d28430c809",
                    name: "Take you first steps with C#",
                    likes: 0,
                    color: '#0f0',
                    val: 5
                },
                {
                    id: "622b89de-e924-4a20-a871-415a9a202664",
                    name: "Install Visual Studio",
                    likes: 0,
                    color: '#0f0',
                    val: 5
                },
                {
                    id: "b847e497-47e9-4c04-a86b-9a1271103d73",
                    name: "ASP.NET Core Basics",
                    likes: 0,
                    color: '#0f0',
                    val: 5
                },
                {
                    id: "b847e497-47e9-4c04-a86b-9a1271103d74",
                    name: "Web Api REST",
                    likes: 0,
                    color: '#0f0',
                    val: 5
                },
                {
                    id: "b847e497-47e9-4c04-a86b-9a1271103d75",
                    name: "Routing",
                    likes: 0,
                    color: '#0f0',
                    val: 5
                },
                {
                    id: "b847e497-47e9-4c04-a86b-9a1271103d76",
                    name: "Routing in ASP.NET Core",
                    likes: 0,
                    color: '#0f0',
                    val: 5
                },
                {
                    id: "b847e497-47e9-4c04-a86b-9a1271103d77",
                    name: "Web API Routing",
                    likes: 0,
                    color: '#0f0',
                    val: 5
                },
                {
                    id: "b847e497-47e9-4c04-a86b-9a1271103d78",
                    name: "GET/POST/PUT/DELETE",
                    likes: 0,
                    color: '#0f0',
                    val: 5
                },
                {
                    id: "b847e497-47e9-4c04-a86b-9a1271103d79",
                    name: "MVC",
                    likes: 0,
                    color: '#0f0',
                    val: 5
                },
                {
                    id: "b847e497-47e9-4c04-a86b-9a1271103d80",
                    name: "RazorPages",
                    likes: 0,
                    color: '#0f0',
                    val: 5
                },
                {
                    id: "8b21f8d4-159c-4971-8a8e-bc57da64bdae",
                    name: "ORM",
                    likes: 0,
                    color: '#0f0',
                    val: 5
                },
                {
                    id: "8b21f8d4-159c-4971-8a8e-bc57da64bda1",
                    name: "Linq",
                    likes: 0,
                    color: '#0f0',
                    val: 5
                },
                {
                    id: "8b21f8d4-159c-4971-8a8e-bc57da64bda2",
                    name: "Work with LINQ",
                    likes: 0,
                    color: '#0f0',
                    val: 5
                },
                {
                    id: "8b21f8d4-159c-4971-8a8e-bc57da64bda3",
                    name: "Intoduccion rápida a LINQ con C#",
                    likes: 0,
                    color: '#0f0',
                    val: 5
                },
                {
                    id: "8b21f8d4-159c-4971-8a8e-bc57da64bda4",
                    name: "EF Core",
                    likes: 0,
                    color: '#0f0',
                    val: 5
                },
                {
                    id: "8b21f8d4-159c-4971-8a8e-bc57da64bda5",
                    name: "docs.microsoft.com",
                    likes: 0,
                    color: '#0f0',
                    val: 5
                },
                {
                    id: "8b21f8d4-159c-4971-8a8e-bc57da64bda6",
                    name: "entityframeworktutorial.net",
                    likes: 0,
                    color: '#0f0',
                    val: 5
                },
                {
                    id: "d09d95fd-b859-482c-b91e-cf2cad9bf4d9",
                    name: "Testing",
                    likes: 0,
                    color: '#0f0',
                    val: 5
                },
                {
                    id: "d09d95fd-b859-482c-b91e-cf2cad9bf4d0",
                    name: "Udemy - Unit Testing",
                    likes: 0,
                    color: '#0f0',
                    val: 5
                },
                {
                    id: "d09d95fd-b859-482c-b91e-cf2cad9bf4d1",
                    name: "UnitTesting",
                    likes: 0,
                    color: '#0f0',
                    val: 5
                },
                {
                    id: "d09d95fd-b859-482c-b91e-cf2cad9bf4d2",
                    name: "Testing in .NET",
                    likes: 0,
                    color: '#0f0',
                    val: 5
                },
                {
                    id: "d09d95fd-b859-482c-b91e-cf2cad9bf4d3",
                    name: "Unit Testing in ASP.NET Core",
                    likes: 0,
                    color: '#0f0',
                    val: 5
                },
                {
                    id: "d09d95fd-b859-482c-b91e-cf2cad9bf4d4",
                    name: "Unit Testing C# with MSTest",
                    likes: 0,
                    color: '#0f0',
                    val: 5
                },
                {
                    id: "d09d95fd-b859-482c-b91e-cf2cad9bf4d5",
                    name: "Mocking",
                    likes: 0,
                    color: '#0f0',
                    val: 5
                },
                {
                    id: "d09d95fd-b859-482c-b91e-cf2cad9bf4d6",
                    name: "Moq quickstart",
                    likes: 0,
                    color: '#0f0',
                    val: 5
                },
                {
                    id: "d09d95fd-b859-482c-b91e-cf2cad9bf4d7",
                    name: "Moq documentation",
                    likes: 0,
                    color: '#0f0',
                    val: 5
                },
                {
                    id: "3a67029d-4b31-440c-ab68-e0ab3429303d",
                    name: "Recommended",
                    likes: 0,
                    color: '#0f0',
                    val: 15
                },
                {
                    id: "3a67029d-4b31-440c-ab68-e0ab34293030",
                    name: "General Development Skils",
                    likes: 0,
                    color: '#0f0',
                    val: 5
                },
                {
                    id: "3a67029d-4b31-440c-ab68-e0ab34293031",
                    name: "GIT - Version Control",
                    likes: 0,
                    color: '#0f0',
                    val: 5
                },
                {
                    id: "3a67029d-4b31-440c-ab68-e0ab34293032",
                    name: "Data Structures and Algorithms",
                    likes: 0,
                    color: '#0f0',
                    val: 5
                },
                {
                    id: "3a67029d-4b31-440c-ab68-e0ab34293033",
                    name: "Udemy",
                    likes: 0,
                    color: '#0f0',
                    val: 5
                },
                {
                    id: "3a67029d-4b31-440c-ab68-e0ab34293034",
                    name: "HTTP/HTTPS protocols",
                    likes: 0,
                    color: '#0f0',
                    val: 5
                },
                {
                    id: "3a67029d-4b31-440c-ab68-e0ab34293035",
                    name: "SQL Fundamentals",
                    likes: 0,
                    color: '#0f0',
                    val: 5
                },
                {
                    id: "3a67029d-4b31-440c-ab68-e0ab34293036",
                    name: "SQL Syntax",
                    likes: 0,
                    color: '#0f0',
                    val: 5
                },
                {
                    id: "3a67029d-4b31-440c-ab68-e0ab34293037",
                    name: "StoredProcedures",
                    likes: 0,
                    color: '#0f0',
                    val: 5
                },
                {
                    id: "3a67029d-4b31-440c-ab68-e0ab34293038",
                    name: "Triggers/Contraints",
                    likes: 0,
                    color: '#0f0',
                    val: 5
                },
            ],
            links: [
                {source: "c37b7cc8-be40-48e4-9473-599732e8816f", target:"e9be25d6-1066-4902-bba3-4e58adcaac29", feedbacks:[]},
                {source: "b22ddebb-f15d-4e12-aac0-e0e52f3ca4b8", target:"c37b7cc8-be40-48e4-9473-599732e8816f", feedbacks:[]},
                {source: "780fd14f-44c4-471e-b3a1-c1be9a036079", target:"b22ddebb-f15d-4e12-aac0-e0e52f3ca4b8", feedbacks:[]},
                {source: "2bf5212c-86db-4f36-a942-70eab7705d75", target:"b22ddebb-f15d-4e12-aac0-e0e52f3ca4b8", feedbacks:[]},
                {source: "90b141c2-ca14-4638-8411-95d28430c809", target:"b22ddebb-f15d-4e12-aac0-e0e52f3ca4b8", feedbacks:[]},
                {source: "622b89de-e924-4a20-a871-415a9a202664", target:"b22ddebb-f15d-4e12-aac0-e0e52f3ca4b8", feedbacks:[]},
                {source: "b847e497-47e9-4c04-a86b-9a1271103d73", target:"c37b7cc8-be40-48e4-9473-599732e8816f", feedbacks:[]},
                {source: "b847e497-47e9-4c04-a86b-9a1271103d74", target:"b847e497-47e9-4c04-a86b-9a1271103d73", feedbacks:[]},
                {source: "b847e497-47e9-4c04-a86b-9a1271103d75", target:"b847e497-47e9-4c04-a86b-9a1271103d74", feedbacks:[]},
                {source: "b847e497-47e9-4c04-a86b-9a1271103d76", target:"b847e497-47e9-4c04-a86b-9a1271103d75", feedbacks:[]},
                {source: "b847e497-47e9-4c04-a86b-9a1271103d77", target:"b847e497-47e9-4c04-a86b-9a1271103d75", feedbacks:[]},
                {source: "b847e497-47e9-4c04-a86b-9a1271103d78", target:"b847e497-47e9-4c04-a86b-9a1271103d74", feedbacks:[]},
                {source: "b847e497-47e9-4c04-a86b-9a1271103d79", target:"b847e497-47e9-4c04-a86b-9a1271103d74", feedbacks:[]},
                {source: "b847e497-47e9-4c04-a86b-9a1271103d80", target:"b847e497-47e9-4c04-a86b-9a1271103d79", feedbacks:[]},
                {source: "8b21f8d4-159c-4971-8a8e-bc57da64bdae", target:"c37b7cc8-be40-48e4-9473-599732e8816f", feedbacks:[]},
                {source: "8b21f8d4-159c-4971-8a8e-bc57da64bda1", target:"8b21f8d4-159c-4971-8a8e-bc57da64bdae", feedbacks:[]},
                {source: "8b21f8d4-159c-4971-8a8e-bc57da64bda2", target:"8b21f8d4-159c-4971-8a8e-bc57da64bda1", feedbacks:[]},
                {source: "8b21f8d4-159c-4971-8a8e-bc57da64bda3", target:"8b21f8d4-159c-4971-8a8e-bc57da64bda1", feedbacks:[]},
                {source: "8b21f8d4-159c-4971-8a8e-bc57da64bda4", target:"8b21f8d4-159c-4971-8a8e-bc57da64bdae", feedbacks:[]},
                {source: "8b21f8d4-159c-4971-8a8e-bc57da64bda5", target:"8b21f8d4-159c-4971-8a8e-bc57da64bda4", feedbacks:[]},
                {source: "8b21f8d4-159c-4971-8a8e-bc57da64bda6", target:"8b21f8d4-159c-4971-8a8e-bc57da64bda4", feedbacks:[]},
                {source: "d09d95fd-b859-482c-b91e-cf2cad9bf4d9", target:"c37b7cc8-be40-48e4-9473-599732e8816f", feedbacks:[]},
                {source: "d09d95fd-b859-482c-b91e-cf2cad9bf4d0", target:"d09d95fd-b859-482c-b91e-cf2cad9bf4d9", feedbacks:[]},
                {source: "d09d95fd-b859-482c-b91e-cf2cad9bf4d1", target:"d09d95fd-b859-482c-b91e-cf2cad9bf4d9", feedbacks:[]},
                {source: "d09d95fd-b859-482c-b91e-cf2cad9bf4d2", target:"d09d95fd-b859-482c-b91e-cf2cad9bf4d1", feedbacks:[]},
                {source: "d09d95fd-b859-482c-b91e-cf2cad9bf4d3", target:"d09d95fd-b859-482c-b91e-cf2cad9bf4d1", feedbacks:[]},
                {source: "d09d95fd-b859-482c-b91e-cf2cad9bf4d4", target:"d09d95fd-b859-482c-b91e-cf2cad9bf4d1", feedbacks:[]},
                {source: "d09d95fd-b859-482c-b91e-cf2cad9bf4d5", target:"d09d95fd-b859-482c-b91e-cf2cad9bf4d9", feedbacks:[]},
                {source: "d09d95fd-b859-482c-b91e-cf2cad9bf4d6", target:"d09d95fd-b859-482c-b91e-cf2cad9bf4d5", feedbacks:[]},
                {source: "d09d95fd-b859-482c-b91e-cf2cad9bf4d7", target:"d09d95fd-b859-482c-b91e-cf2cad9bf4d5", feedbacks:[]},
                {source: "3a67029d-4b31-440c-ab68-e0ab3429303d", target:"e9be25d6-1066-4902-bba3-4e58adcaac29", feedbacks:[]},
                {source: "3a67029d-4b31-440c-ab68-e0ab34293030", target:"3a67029d-4b31-440c-ab68-e0ab3429303d", feedbacks:[]},
                {source: "3a67029d-4b31-440c-ab68-e0ab34293031", target:"3a67029d-4b31-440c-ab68-e0ab34293030", feedbacks:[]},
                {source: "3a67029d-4b31-440c-ab68-e0ab34293032", target:"3a67029d-4b31-440c-ab68-e0ab34293030", feedbacks:[]},
                {source: "3a67029d-4b31-440c-ab68-e0ab34293033", target:"3a67029d-4b31-440c-ab68-e0ab34293032", feedbacks:[]},
                {source: "3a67029d-4b31-440c-ab68-e0ab34293034", target:"3a67029d-4b31-440c-ab68-e0ab34293030", feedbacks:[]},
                {source: "3a67029d-4b31-440c-ab68-e0ab34293035", target:"3a67029d-4b31-440c-ab68-e0ab3429303d", feedbacks:[]},
                {source: "3a67029d-4b31-440c-ab68-e0ab34293036", target:"3a67029d-4b31-440c-ab68-e0ab34293035", feedbacks:[]},
                {source: "3a67029d-4b31-440c-ab68-e0ab34293037", target:"3a67029d-4b31-440c-ab68-e0ab34293035", feedbacks:[]},
                {source: "3a67029d-4b31-440c-ab68-e0ab34293038", target:"3a67029d-4b31-440c-ab68-e0ab34293035", feedbacks:[]},
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
            links: getLinks()
        });
    };

    const getLinks = () => {
        let rta = data.links.map((link: any) => {
            if(selectedLink.source.id === link.source.id && selectedLink.target.id === link.target.id){
                return {source: link.source.id, target: link.target.id, feedbacks: link.feedbacks, likes: selectedLink.likes};
            }

            return {source: link.source.id, target: link.target.id, feedbacks: link.feedbacks, likes: link.likes};
        });
        return rta;
    }

    //Handlers
    const onNodeClick = (node: any, event: MouseEvent) => {
        console.log("Nodo clickeado");
        event.preventDefault();
        openNodeModal(node);
    };
    const onLinkClick = (link: any, event: MouseEvent) => {
        console.log("Link clickeado");
        event.preventDefault();
        openLinkModal(link);
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

    // Link
    const openLinkModal = (link: GLink) => {
        setSelectedLink(link);
        setIsLinkModalOpen(true);
    };
    const closeLinkModal = () => {
        setIsLinkModalOpen(false);
        setFormHasError(false);
        setSelectedLink({} as GLink);
        setErrorMsg('');
    };
    const submitLinkModal = (event: any, form: any) => {
        event.preventDefault();
        setFormHasError(true);

        if(form.checkValidity()) {
            console.log(JSON.stringify(selectedLink));
            updateData();
            closeLinkModal();
        }
    };
    const changeInputLinkModal = (prop: any, value: any) => {
        value === '' ? setFormHasError(true) : setFormHasError(false);

        const link: GLink = {
            ...selectedLink,
            [prop]: value
        };

        setSelectedLink(link);
    };

    const fgRef = useRef({} as any);

    setInterval(() => {
        if(!fgRef || !fgRef.current) return;

        data.links.forEach(link => {
            if(link.likes && link.likes >= 0){
                fgRef.current.emitParticle(link)
            }
        });
        
    }, 1000);

    return (
        <>
            <ForceGraph2D 
                ref={fgRef}
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

            <LinkModal 
                show={isLinkModalOpen}    
                onHide={closeLinkModal}
                onChange={changeInputLinkModal}
                onSubmit={submitLinkModal}
                link={selectedLink}
                validated={formHasError}
                errorMsg={errorMsg}
            />
        </>
    );
}

export default Roadmap; 
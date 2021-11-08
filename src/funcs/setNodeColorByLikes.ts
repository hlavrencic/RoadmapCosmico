import { GNode } from "../entities/node";

const setNodeColorByLikes = (node: GNode) => {
    if(node.likes <= 3)
        node.color = '#0f0';
    if(node.likes > 3 && 5 >= node.likes) 
        node.color = '#00f';
    else if (node.likes > 5 && 7 >= node.likes) 
        node.color = '#ff0';
    else if (node.likes > 7) 
        node.color = '#f00';
}

export default setNodeColorByLikes;
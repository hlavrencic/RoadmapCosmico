
const onNodeClick = (node: any, event: MouseEvent) => { 

    node.likes++;

    setNodeColorByLikes(node);
}

const setNodeColorByLikes = (node: any) => {
    if(node.likes > 3 && 5 >= node.likes) 
        node.color = '#00f';
    else if (node.likes > 5 && 7 >= node.likes) 
        node.color = '#ff0';
    else if (node.likes > 7) 
        node.color = '#f00';
}

export default onNodeClick;
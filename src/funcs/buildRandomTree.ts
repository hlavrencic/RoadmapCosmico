const buildRandomTree = (length: number) => {
    return {
        nodes: [...Array(length).keys()].map(i => ({ id: i, name: 'Nodo ' + i })),
        links: [...Array(length).keys()]
        .filter(id => id)
        .map(id => ({
        source: id,
        target: Math.round(Math.random() * (id-1))
        }))
    };
}

export default buildRandomTree;
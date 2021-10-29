const buildRandomTree = (n) => {
    return {
        nodes: [...Array(n).keys()].map(i => ({ id: i, name: 'Nodo ' + i })),
        links: [...Array(n).keys()]
        .filter(id => id)
        .map(id => ({
        source: id,
        target: Math.round(Math.random() * (id-1))
        }))
    };
}
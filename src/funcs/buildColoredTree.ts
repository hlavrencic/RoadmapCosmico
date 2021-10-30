
const data = {
    "nodes": [ 
        { 
          "id": "id1",
          "name": "name1",
          "val": 1,
          "likes": 0,
          "color": '#0f0'
        },
        { 
          "id": "id2",
          "name": "name2",
          "val": 1,
          "likes": 0,
          "color": '#0f0'
        }
    ],
    "links": [
        {
            "source": "id1",
            "target": "id2",
            "particles": 2
        }
    ]
}

const buildColoredTree = () => {
    return data;
}

export default buildColoredTree;
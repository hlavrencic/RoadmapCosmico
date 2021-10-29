
const rename = (element, type) => {
    let value = prompt('Name this ' + type + ':', element.name);
    if (!value) {
      return;
    }
    element.name = value;
    // updateGraphData();
}
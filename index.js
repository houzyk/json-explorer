import Data from "./data.json" assert { type: "json" };

console.log("Raw Data", Data);

const handleObjectType = (object, callback) => {
  if (object === null) {
    console.log(object, "Null");
  } else if (Array.isArray(object)) {
    console.log(object, "Array");
  } else {
    console.log(object, "Object");
    callback(object);
  }
}

const exploreJson = (json) => {
  const jsonKeys = Object.keys(json);

  jsonKeys.forEach((key) => {
    const jsonKeyValue = json[key];
    switch (typeof jsonKeyValue) {
      case 'string':
        console.log(jsonKeyValue, "String");
        break;

      case 'number':
        console.log(jsonKeyValue, "Number");
        break;

      case 'boolean':
        console.log(jsonKeyValue, "Boolean");
        break;

      case 'object':
        handleObjectType(jsonKeyValue, exploreJson);
        break;

      default:
        console.log("Invalid JSON Type");
        break;
    }
  });
}

exploreJson(Data);

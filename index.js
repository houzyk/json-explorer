import Data from "./data.json" assert { type: "json" };

console.log("Raw Data", Data);

const handleObjectType = (object) => {
  if (object === null) {
    console.log(object, "Null");
    return false;
  } else if (Array.isArray(object)) {
    console.log(object, "Array");
    return false;
  } else {
    console.log(object, "Object");
    return true;
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
        const isObject = handleObjectType(jsonKeyValue);
        if (isObject) exploreJson(jsonKeyValue); // !
        break;

      default:
        console.log("Invalid JSON Type");
        break;
    }
  });
}

exploreJson(Data);

import sparkArJson from './type-spark-ar-json';
import enumDefinition from './type-spark-ar-json/enum-definition';
import classDefinition from './type-spark-ar-json/class-defintion';

function getEnums(data: sparkArJson): enumDefinition[] {
  return data.enums;
}

function getClasses(data: sparkArJson): classDefinition[] {
  return data.classes;
}

export {
  getEnums,
  getClasses,
};

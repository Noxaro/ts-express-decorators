/**
 *
 * @param name
 * @param expression
 * @constructor
 */
export const BAD_REQUEST_REQUIRED = (name, expression) => `Bad request, parameter request.${name.toLowerCase().replace("parse","")}.${expression} is required.`;
/**
 *
 * @param name
 * @constructor
 */
export const DUPLICATED_CONTROLLER_DECORATOR = (name) => `Cannot apply @Controller decorator multiple times (${name}).`;
/**
 *
 * @param name
 * @constructor
 */
export const UNKNOW_CONTROLLER =  (name) => `Controller ${name} not found.`;
/**
 *
 * @param name
 * @constructor
 */
export const UNKNOW_SERVICE =  (name) => `Service ${name} not found.`;
/**
 *
 * @param ctrl1
 * @param ctrl2
 * @constructor
 */
export const CYCLIC_REF = (ctrl1, ctrl2) => `Cyclic reference between ${ctrl1} and ${ctrl2}.`;
/**
 *
 * @param name
 * @param value
 * @constructor
 */
export const CONVERTER_DESERIALIZE = (name, value) => `Convertion failed for class "${name}" with object => ${JSON.stringify(value)}.`;
/**
 *
 * @param name
 * @param value
 * @constructor
 */
export const CONVERTER_SERIALIZE = (name, value) => `Convertion failed for class "${name}" with object => ${JSON.stringify(value)}.`;


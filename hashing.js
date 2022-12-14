/**
 * generateHash it's a function
 * Input Object {data,algorithm,digest} algorithm,digest has a default value
 * Output string represents hased value of the given data
 */
const crypto = require("crypto");
exports.generateHash = ({ data, algorithm = "sha3-512", digest = "hex" }) => {
  if (typeof data !== "string") {
    data = JSON.stringify(data);
  }
  return crypto.createHash(algorithm).update(data).digest(digest);
};

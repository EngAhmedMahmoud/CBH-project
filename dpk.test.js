const { deterministicPartitionKey } = require("./dpk");
const { generateHash } = require("./hashing");
describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });
  it("Returns the hashed key when input is given", () => {
    const data = "Mouse";
    const trivialKey = deterministicPartitionKey(data);
    const hashedKey = generateHash({ data });
    expect(trivialKey).toBe(hashedKey);
  });
  it("Returns the  candidate hashed key when given event has a partitionKey & greater than 256 is given", () => {
    const partitionKey = `Lorem Ipsum is simply dummy text of 
    the printiddddddddsdsdsdsdsdsdsdsdsdsdsdsdsdsdsng and typesetting 
    industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
     when an unknown printer took a galley of type and scrambled it to make a type specimen book.`;
    const data = {
      partitionKey,
    };
    const trivialKey = deterministicPartitionKey(data);
    const hashedKey = generateHash({
      data: partitionKey,
    });
    expect(trivialKey).toBe(hashedKey);
  });
  it("Returns the  candidate value (partitionKey)  when given event has a partitionKey & less than 256 is given", () => {
    const partitionKey = `Lorem Ipsum is simply dummy text of 
    the printiddddddddsdsdsdsdsdsdsdsdsdsdsdsdsdsdsng and `;
    const data = {
      partitionKey,
    };
    const trivialKey = deterministicPartitionKey(data);
    expect(trivialKey).toBe(partitionKey);
  });
});

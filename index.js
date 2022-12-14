const { deterministicPartitionKey } = require("./dpk");

console.log(deterministicPartitionKey());
console.log(deterministicPartitionKey("Mouse"));
console.log(deterministicPartitionKey({ partitionKey: "Mouse" }));
console.log(
  deterministicPartitionKey({
    partitionKey:
      "Lorem Ipsum is simply dummy text of the printiddddddddsdsdsdsdsdsdsdsdsdsdsdsdsdsdsng and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  })
);

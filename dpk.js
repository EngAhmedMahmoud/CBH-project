/**
 * generateHash() applying single source of truth & single place of change & the DRY concept (do not repeat yourself)
 * Isolating this function into a seperate module will help us to apply:
 * 1- Testability
 * 2- Maintainability
 * 3- Reducing the amount of code which helps in (review,test,cost of maintainance)
 * 4- Code will be more readable
 */
const { generateHash } = require("./hashing");

exports.deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;
  //fail first technique
  if (!event) {
    return TRIVIAL_PARTITION_KEY;
  }
  let candidate;
  if (event) {
    candidate = event.partitionKey
      ? event.partitionKey
      : generateHash({ data: event });
  }
  if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
    candidate = generateHash({ data: candidate });
  }
  return candidate;
};

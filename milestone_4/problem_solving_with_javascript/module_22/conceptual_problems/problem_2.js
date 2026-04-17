function validContact(contact) {
  // edge case
  if (typeof contact !== "string") return "Invalid";
  if (contact.length !== 11 || !contact.startsWith("01")) return false;

  return true;
}

const input = "01819234567";
const output = validContact(input);
console.log(output);

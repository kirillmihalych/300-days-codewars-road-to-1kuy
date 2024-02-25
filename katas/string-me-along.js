const space = ' '

const createMessage = (str_acc) => (next_str) =>
  next_str ? createMessage(str_acc + space + next_str) : str_acc

console.log(createMessage('Hello')('World!')('how')('are')('you?')())

export default function guardrail(mathFunction) {
  const queue = [];
  let mathFunc;

  try {
    mathFunc = mathFunction();
  } catch (error) {
    mathFunc = error.toString();
  }
  queue.push(mathFunc);
  queue.push('Guardrail was processed');
  return queue;
}

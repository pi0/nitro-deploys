export default eventHandler(() => {
  return JSON.stringify({
    'process.env': safeObj(process.env),
    'process.env.TEST': process.env.TEST,
    runtimeConfig: safeObj(useRuntimeConfig()),
  }, undefined, 2);
});

const tokenRe = /password|token|key|secret/i;

function safeObj(env: Record<string, string> = {}) {
  return Object.fromEntries(
    Object.entries(env).filter(([key]) => !tokenRe.test(key)),
  );
}

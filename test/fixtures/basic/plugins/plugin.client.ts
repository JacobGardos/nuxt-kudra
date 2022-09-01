export default definePlugin((ctx) => {
  if (!ctx) throw new Error("No context was provided");

  return {
    provide: {
      clientTest: () => "success",
    },
  };
});

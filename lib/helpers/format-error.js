module.exports = function formatError(attribute, error) {
  return {
    errors: [{
      source: {
        pointer: `data/attributes/${attribute}`
      },
      detail: error.message
    }]
  };
};

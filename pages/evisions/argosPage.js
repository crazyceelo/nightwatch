"use strict";

module.exports = {
  argosPageLoads: async client => {
    await client.assert.title(
      "Enterprise Reporting for Higher Education | Evisions"
    );
  }
};

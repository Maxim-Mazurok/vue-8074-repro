import "@testing-library/jest-dom";

if (!global.CSS?.supports) {
  global.CSS = { ...global.CSS, supports: () => false };
}

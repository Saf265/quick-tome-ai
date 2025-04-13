const { create } = require("zustand");

export const useMarkdownStore = create((set) => ({
  markdown: "",
  setMarkdown: (markdown) => set({ markdown }),
}));

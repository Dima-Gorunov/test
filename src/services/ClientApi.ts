import { instance } from "./Instance";

const defApi = {
  getDocuments() {
    return instance.get("documents?_limit=2500");
  },
};

export { defApi };

import { get, post } from "./request.mjs";

function main() {
  let filterK = process.argv[2];
  const filterV = process.argv[3];
  if (!/--(name|id)/.test(filterK)) {
    throw new Error("Invalid filter key");
  }
  filterK = filterK.slice(2);
  console.log(filterK, filterV);
  get("/v1/gpu/instances").then((data) => {
    const instance = data.instances.find((item) => {
      if (filterK === "endpoint") {
        return (
          item.portMappings.length > 0 &&
          item.portMappings[0].endpoint === filterV
        );
      } else {
        return item[filterK] === filterV;
      }
    });
    console.log("instance", instance);
    post("/v1/gpu/instance/stop", { instanceId: instance.id }).then(console.log);
  });
}

main();

import { get } from './request.mjs'

function main() {
  // 西北 22, 西北二区 26
  // get('/v1/clusters').then(({ data }) => console.log(JSON.stringify(data, null, 2)));
  get('/v1/products?clusterId=26&productName')
    .then((result) => {
      const data = result.data.filter((item) => item.availableDeploy);
      // console.log(JSON.stringify(data, null, 2));
      console.log(data);
    });
  // get('/v1/images?type=private');
  // get('/v1/networkstorages/list');
}

main();

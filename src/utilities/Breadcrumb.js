// This class is generating nav items in breadcrumb up to two items.
export default class Breadcrumb {
  constructor(location, data) {
    this.location = location;
    this.data = data;
  }
  createItems() {
    const urlParamsArray = this.location.pathname.split("/");
    const arr = urlParamsArray.slice(1, urlParamsArray.length);
    const result = arr.map((item, i) => {
      return `/${item}`;
    });
    const final = [];
    for (let i = 0; i < result.length; i++) {
      if (i === 0) {
        final.push(result[0]);
      } else {
        final.push(result[i - 1] + result[i]);
      }
    }

    const filteredItems = this.data.filter((item) => {
      if (item.link !== "/") {
        return final.includes(item.link);
      } else return null;
    });

    return filteredItems;
  }
}

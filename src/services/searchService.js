import * as httpRequest from "~/utils/httpRequest";

export const search = async (keyword, count, cursor = 0) => {
  try {
    const res = await httpRequest.get("search-users", {
      params: {
        keyword,
        count,
        cursor,
      },
    });
    let data = [];
    res.user_list.map((item) => data.push(item.user_info));
    return data;
  } catch (error) {
    console.log(error);
  }
};

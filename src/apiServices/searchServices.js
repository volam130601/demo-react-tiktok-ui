import * as request from "~/utils/request";

export const search = async (keyword, count, cursor = 0) => {
  try {
    const res = await request.get("search-users", {
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

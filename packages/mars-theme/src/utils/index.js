// disable the url in the browser
// however it will also stop our get & fetch('/about-us') working, which we need
export const aboutUsHandler = {
  priority: 10,
  pattern: "/about-us/",
  func: async ({ route, params, state, libraries }) => {

    Object.assign(state.source.data[route], {
      is404: true,
      type: "page",
      errorStatus: 404
    });
  }
};
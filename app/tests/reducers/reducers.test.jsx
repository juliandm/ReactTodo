var expect =  require("expect");
var reducers = require("reducers");
var df = require("deep-freeze-strict");

describe("Reducers", () => {
  describe("searchTextReducer", () => {
    it("should set Search Text", () => {
      var action = {
        type: "SET_SEARCH_TEXT",
        searchText: "thing to do"
      };
      var res = reducers.searchTextReducer(df(""), df(action));

      expect(res).toEqual(action.searchText)
    })
  });
  describe("showCompletedReducer", () => {
    it("should toggle showCompleted", () => {
      var action = {
        type: "SHOW_COMPLETED"
      };

      var res = reducers.showCompletedReducer(df(false), df(action));

      expect(res).toEqual(true);
    })
  })
});
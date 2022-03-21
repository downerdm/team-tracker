const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    describe("getName", () => {
     it("should return employee name", () => {
      const name = "Jon Snow";
      const id = "1";
      const email = "JSnow@wic.com";
      const github = "jsnow";

      const result = new Engineer (name, id, email, github).getName();

      expect(result).toEqual("Jon Snow");
    });
  });
  
  describe("getID", () => {
    it("should return employee id", () => {
     const name = "Jon Snow";
     const id = "1";
     const email = "JSnow@wic.com";
     const github = "jsnow";

     const result = new Engineer(name, id, email, github).getId();

     expect(result).toEqual("1");
   });
 });

 describe("getEmail", () => {
    it("should return employee email", () => {
     const name = "Jon Snow";
     const id = "1";
     const email = "JSnow@wic.com";
     const github = "jsnow";

     const result = new Engineer(name, id, email, github).getEmail();

     expect(result).toEqual("JSnow@wic.com");
   });
 });

 describe("getRole", () => {
    it("should return employee role", () => {
     const name = "Jon Snow";
     const id = "1";
     const email = "JSnow@wic.com"
     const github = "jsnow";

     const result = new Engineer(name, id, email, github).getRole();

     expect(result).toEqual('Engineer');
   });
 });

 describe("getGitHub", () => {
    it("should return employee GitHub", () => {
     const name = "Jon Snow";
     const id = "1";
     const email = "JSnow@wic.com"
     const github = "jsnow";

     const result = new Engineer(name, id, email, github).getGithub();

     expect(result).toEqual("jsnow");
   });
 });
});
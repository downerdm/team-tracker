const Intern = require("../lib/Intern");

describe("Intern", () => {
    describe("getName", () => {
     it("should return employee name", () => {
      const name = "Jon Snow";
      const id = "1";
      const email = "JSnow@wic.com";
      const school="Harvard";

      const result = new Intern(name, id, email, school).getName();

      expect(result).toEqual("Jon Snow");
    });
  });
  
  describe("getID", () => {
    it("should return employee id", () => {
     const name = "Jon Snow";
     const id = "1";
     const email = "JSnow@wic.com"
     const school="Harvard";

     const result = new Intern(name, id, email, school).getId();

     expect(result).toEqual("1");
   });
 });

 describe("getEmail", () => {
    it("should return employee email", () => {
     const name = "Jon Snow";
     const id = "1";
     const email = "JSnow@wic.com"
     const school="Harvard";

     const result = new Intern(name, id, email, school).getEmail();

     expect(result).toEqual("JSnow@wic.com");
   });
 });

 describe("getRole", () => {
    it("should return employee role", () => {
     const name = "Jon Snow";
     const id = "1";
     const email = "JSnow@wic.com"
     const school="Harvard";

     const result = new Intern(name, id, email, school).getRole();

     expect(result).toEqual('Intern');
   });
 });

 describe("getSchool", () => {
  it("should return employee school", () => {
   const name = "Jon Snow";
   const id = "1";
   const email = "JSnow@wic.com"
   const school="Harvard";

   const result = new Intern(name, id, email, school).getSchool();

   expect(result).toEqual('Harvard');
 });
});
});
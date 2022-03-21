const Manager = require("../lib/Employee");

describe("Manager", () => {
    describe("getName", () => {
     it("should return manager name", () => {
      const name = "Jon Snow";
      const id = "1";
      const email = "JSnow@wic.com";
      const officeNumber = "3";

      const result = new Employee (name, id, email, officeNumber).getName();

      expect(result).toEqual("Jon Snow");
    });
  });
  
  describe("getID", () => {
    it("should return manager id", () => {
     const name = "Jon Snow";
     const id = "1";
     const email = "JSnow@wic.com";
     const officeNumber = "3";

     const result = new Employee(name, id, email, officeNumber).getId();

     expect(result).toEqual("1");
   });
 });

 describe("getEmail", () => {
    it("should return manager email", () => {
     const name = "Jon Snow";
     const id = "1";
     const email = "JSnow@wic.com";
     const officeNumber = "3";

     const result = new Employee(name, id, email, officeNumber).getEmail();

     expect(result).toEqual("JSnow@wic.com");
   });
 });

 describe("getRole", () => {
    it("should return manager role", () => {
     const name = "Jon Snow";
     const id = "1";
     const email = "JSnow@wic.com";
     const officeNumber = "3";

     const result = new Employee(name, id, email, officeNumber).getRole();

     expect(result).toEqual('Employee');
   });
 });
});
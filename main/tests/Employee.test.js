const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe("getName", () => {
     it("should return employee name", () => {
      const name = "Jon Snow";
      const id = "1";
      const email = "JSnow@wic.com"

      const result = new Employee(name, id, email).getName();

      expect(result).toEqual("Jon Snow");
    });
  });
  
  describe("getID", () => {
    it("should return employee id", () => {
     const name = "Jon Snow";
     const id = "1";
     const email = "JSnow@wic.com"

     const result = new Employee(name, id, email).getId();

     expect(result).toEqual("1");
   });
 });

 describe("getEmail", () => {
    it("should return employee email", () => {
     const name = "Jon Snow";
     const id = "1";
     const email = "JSnow@wic.com"

     const result = new Employee(name, id, email).getEmail();

     expect(result).toEqual("JSnow@wic.com");
   });
 });

 describe("getRole", () => {
    it("should return employee role", () => {
     const name = "Jon Snow";
     const id = "1";
     const email = "JSnow@wic.com"

     const result = new Employee(name, id, email).getRole();

     expect(result).toEqual('Employee');
   });
 });
});
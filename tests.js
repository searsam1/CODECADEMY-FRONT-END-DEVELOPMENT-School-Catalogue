
// generated with chatGPT 3

// Test suite for School class
describe("School class", () => {
  // Test School class constructor
  describe("constructor", () => {
    it("should set the name, level, and numberOfStudents properties", () => {
      const school = new School("Example School", "primary", 100);
      expect(school.name).toBe("Example School");
      expect(school.level).toBe("primary");
      expect(school.numberOfStudents).toBe(100);
    });
  });

  // Test quickfacts() method
  describe("quickfacts method", () => {
    it("should log the school's name, level, and number of students", () => {
      const school = new School("Example School", "primary", 100);
      const spy = jest.spyOn(console, "log").mockImplementation(() => {});
      school.quickfacts();
      expect(spy).toHaveBeenCalledWith("Example School educates 100 students at the primary school level.");
      spy.mockRestore();
    });
  });

  // Test pickSubstituteTeacher() static method
  describe("pickSubstituteTeacher static method", () => {
    it("should return a substitute teacher from the array of teachers passed in", () => {
      const substituteTeachers = ["Teacher 1", "Teacher 2", "Teacher 3"];
      const substituteTeacher = School.pickSubstituteTeacher(substituteTeachers);
      expect(substituteTeachers).toContain(substituteTeacher);
    });
  });

  // Test set numberOfStudents() method
  describe("set numberOfStudents method", () => {
    it("should set the numberOfStudents property to the new value", () => {
      const school = new School("Example School", "primary", 100);
      school.numberOfStudents = 200;
      expect(school.numberOfStudents).toBe(200);
    });
    it("should log an error message if the new value is not a number", () => {
      const school = new School("Example School", "primary", 100);
      const spy = jest.spyOn(console, "log").mockImplementation(() => {});
      school.numberOfStudents = "not a number";
      expect(spy).toHaveBeenCalledWith("Invalid input: numberOfStudents must be set to a Number.");
      spy.mockRestore();
    });
  });
});

// Test suite for PrimarySchool class
describe("PrimarySchool class", () => {
  // Test PrimarySchool class constructor
  describe("constructor", () => {
    it("should set the name, numberOfStudents, and pickupPolicy properties", () => {
      const primarySchool = new PrimarySchool("Example Primary School", 100, "Pickup at the front gate.");
      expect(primarySchool.name).toBe("Example Primary School");
      expect(primarySchool.numberOfStudents).toBe(100);
      expect(primarySchool.pickupPolicy).toBe("Pickup at the front gate.");
      expect(primarySchool.level).toBe("primary");
    });
  });
});

// Test suite for HighSchool class
describe("HighSchool class", () => {
  // Test HighSchool class constructor
  describe("constructor", () => {
    it("should set the name, sportsTeams, and numberOfStudents properties", () => {
      const highSchool = new HighSchool("Example High School", ["Football", "Basketball", "Baseball"], 500);
      expect(highSchool.name).toBe("Example High School");
      expect(highSchool.sportsTeams).toEqual(["Football", "Basketball", "Baseball"]);
      expect(highSchool.numberOfStudents).toBe(500);
      expect(highSchool.level).toBe("highSchool");
    });
  });
});

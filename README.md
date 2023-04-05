# CODECADEMY-FRONT-END-DEVELOPMENT-School-Catalogue
Digital School Catalog PROJECT

app.js
----
```javascript
class School {
  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }

  get name() {
    return this._name;
  }

  get level() {
    return this._level;
  }

  get numberOfStudents() {
    return this._numberOfStudents;
  }

  quickfacts() {
    console.log(
      `${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`
    );
  }

  static pickSubstituteTeacher(substituteTeachers) {
    const randomNumber = Math.floor(Math.random() * (substituteTeachers.length - 1));
    return substituteTeachers[randomNumber]
  }

  set numberOfStudents(newNumberOfStudents) {
    if (typeof newNumberOfStudents === "number") {
      this._numberOfStudents = newNumberOfStudents;
      return 0;
    }
    console.log("Invalid input: numberOfStudents must be set to a Number.");
  }
}

class PrimarySchool extends School {
  constructor(name, numberOfStudents, pickupPolicy) {
    super(name, "primary", numberOfStudents);
    this._pickupPolicy = pickupPolicy;
  }
  get pickupPolicy() {
    return this._pickupPolicy;
  }
}

class HighSchool extends School {
  constructor(name, sportsTeams, numberOfStudents) {
    super(name, "highSchool", numberOfStudents);
    this._sportsTeams = sportsTeams;
  }
  get sportsTeams() {
    return this._sportsTeams;
  }
}

let lorraineHansbury = new PrimarySchool(
  "Lorraine Hansbury",
  514,
  "Students must be picked up by a parent, guardian, or a family member over the age of 13."
);

// lorraineHansbury.quickfacts();

// console.log(School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']));

const alSmith = new HighSchool(
  'Al E. Smith',
  ['Baseball', 'Basketball', 'Volleyball', 'Track and Field'],
  415
)

console.log(
  alSmith
)

```

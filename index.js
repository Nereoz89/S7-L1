class User {
  constructor(name, lastName, age, location) {
    this.firstName = name;
    this.lastName = lastName;
    this.age = age;
    this.location = location;

    this.isOlderThan = function (newUser) {
      if (this.age > newUser.age) {
        return `${this.firstName}(${this.age}) is older than ${newUser.firstName}:(${newUser.age})`;
      } else if (this.age === newUser.age) {
        return `${this.firstName}:(${this.age}) is the same age of ${newUser.firstName}:(${newUser.age})`;
      } else if (this.age < newUser.age) {
        return `${this.firstName}:(${this.age}) is younger than ${newUser.firstName}:(${newUser.age})`;
      }
    };
  }
}

const x = new User("Andrea", "Zimbardo", 35, "Sambuca di Sicilia");
const y = new User("Aldo", "Baglio", 60, "Palermo");
const z = new User("Giovanni", "Storti", 50, "Palermo");

console.log(x.isOlderThan(y));
console.log(y.isOlderThan(x));
console.log(y.isOlderThan(z));

/* Esercizio 2 */

class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;

    this.hasSameOwner = function (newPet) {
      return this.ownerName === newPet.ownerName;
    };
  }
}

const pets = [];

document.getElementById("btn").addEventListener("click", function (e) {
  e.preventDefault();

  const petName = document.getElementById("petName").value;
  const ownerName = document.getElementById("ownerName").value;
  const species = document.getElementById("species").value;
  const breed = document.getElementById("breed").value;

  const newPet = new Pet(petName, ownerName, species, breed);
  pets.push(newPet);
  console.log(newPet);

  const petList = document.getElementById("petList");
  let newLi = document.createElement("li");
  newLi.textContent = `${newPet.petName}, ${newPet.ownerName}, ${newPet.species}, ${newPet.breed}`;
  petList.appendChild(newLi);

  for (let i = 0; i < pets.length - 1; i++) {
    if (pets[i].hasSameOwner(pets[i + 1])) {
      console.log("Hanno lo stesso proprietario");
    }
  }
});

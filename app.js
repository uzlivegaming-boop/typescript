"use strict";
// interface DATA {
//   data: {
//     offices: {
//       id: number,
//       name: string
//     }[],
//     categories: {
//       id: number,
//       name: string
//     }[],
//     courses: {
//       id: number,
//       name: string
//     }[],
//     contacts: [],
//     id: number,
//     firstName: string,
//     rating: number,
//     genderType: number,
//     isActive: boolean,
//     createdAt: string,
//     login: string,
//     role: {
//       id: number,
//       name: string,
//       type: string
//     },
//     userId: number,
//     userType: number,
//     photo: string,
//     lastName: string,
//     phone: string,
//     staffStatusId: number,
//     workingSince: string,
//     staffStatusName: string,
//     type: string
//   },
//   error: null,
//   success: boolean
// }
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    name;
    color;
    type;
    sound;
    constructor(name, color, type, sound) {
        this.name = name;
        this.color = color;
        this.type = type;
        this.sound = sound;
    }
    getInfo() {
        console.log(`Nomi: ${this.name} Rangi: ${this.color} Turi: ${this.type} Ovozi: ${this.sound}`);
        console.log("------------------");
    }
}
const animals = [
    new Animal("Mushuk", "Oq", "British Fold", "Miyov miyov"),
    new Animal("Zebra", "Qora-oq", "Zebra", "Ovoz chiqaradi"),
    new Animal("Xameleon", "Yashil", "Xameleon", "Shiqillash"),
    new Animal("Sher", "Sariq", "Afrika sheri", "O‘kirish"),
    new Animal("Buqalamun", "Yashil", "Buqalamun", "Shiqillash"),
    new Animal("It", "Qora", "Labrador", "Vov vov")
];
animals.forEach(animal => animal.getInfo());
//# sourceMappingURL=app.js.map
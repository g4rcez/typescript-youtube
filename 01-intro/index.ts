type Primitives =
  | string
  | number
  | bigint
  | boolean
  | undefined
  | symbol
  | null;

type User = {
  name: string;
  birthDay: Date | string;
  programmingLanguages: string[];
};

type Admin = User & {
  role: string;
};

const getUserLanguages = (user: User): string[] => {
  return user.programmingLanguages;
};

const createAdmin = (user: User): Admin => {
  return { ...user, role: "admin" };
};

const user: User = {
  name: "Usuário",
  birthDay: new Date(),
  programmingLanguages: ["Javascript", "Typescript"],
};

const admin = createAdmin(user);

const l = getUserLanguages(user);
l.map((language) => language.toUpperCase());

const partial = (user: User): Partial<User> => {
  return user;
};

const partialUser = partial(user);
const nameLowerCase = user.name.toLocaleLowerCase();

// Partial - Utility Types - https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype
// ?. -> https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html
const unsafe = partialUser.name.toUpperCase();
if (partialUser.name) {
  const safe = partialUser.name.toUpperCase();
}

type TestRequired = {
  test?: string;
};

// Required - https://www.typescriptlang.org/docs/handbook/utility-types.html#requiredtype
const testRequired: Required<TestRequired> = {
  test: "VALOR STRING",
};

// Readonly = https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype
type Immutable = Readonly<{
  name: string;
  languages: ReadonlyArray<string[]>;
  map: Readonly;
}>;

const set: ReadonlySet<string> = new Set([]);
set.add();
const map: ReadonlyMap<string, string> = new Map([]);
map.set();

const immutable: Immutable = { name: "Imutável" };
immutable.name = "ALGUMA COISA";
const newImmutable: Immutable = { ...immutable, name: "NOVO VALOR" };

immutable.languages.push();

// Classes

class Person {
  constructor(public name: string) {}

  public walk(): void {}
}

const person = new Person("Fulano");
person.name;

type Upper = Uppercase<"é">
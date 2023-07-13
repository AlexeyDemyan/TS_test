document.title = `${new Date().toISOString()} TypeScript compiled`;

const checkList = `
npm i -D typescript to install TypeScript compiler
npx tsc -v to check compiler version
npx tsc --init to create tsconfig.json
include and compilerOptions.rootDir parameters to reflect location of source files with TS code
compilerOptions.outDir parameter to reflect where compiler will be placing final JS code files
specify other compiler parameters where needed
npx tsc to compile`;

// Cheatsheet

// Inferring Types

type Role = {
    title: string;
    isAdmin: boolean;
}

type User = {
    name: string;
    roles: Role[]
}

type inferrredType1 = User['roles'];

const propertyName = 'roles'; // has to be const to make it type literal
type inferrredType2 = User[typeof propertyName];

type inferrredType3 = User['roles'][number];

const fruit = ['apple', 'egg', 'cucumber'] as const; // creating Union based on array
type Fruit = typeof fruit[number];

const someFruit: Fruit = 'egg';

// Type Guards:

type User = {
    name: string;
    role: 'user'
}

type Admin = {
    name: string;
    role: 'admin';
    secret: 'hidden pass'
}

function isAdmin(data: User | Admin): data is Admin {
    return data.role === 'admin';
}

function isAdmin2(data: User | Admin): data is Admin {
    return (data as Admin).secret !== undefined;
}

const example: User = {
    name: 'dude',
    role: 'user'
}

const example2: Admin = {
    name: 'boss',
    role: 'admin',
    secret: 'hidden pass'
}

console.log(isAdmin2(example2))

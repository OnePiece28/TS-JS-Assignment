# TypeScript & JavaScript Assignment

Part 1 covers TypeScript (Library Management theme). Part 2 covers JavaScript fundamentals, modules, and a Node.js + MySQL CRUD application.

## 📂 Structure

```
typescript/    A–D  (TypeScript)
javascript/    Q1–Q13 (JavaScript / Node.js)
screenshots/   output screenshots
```

### Part 1 – TypeScript (`typescript/`)

| Q | Topic | File |
|---|-------|------|
| A | Class and Objects (`Book`) | `A_class_objects.ts` |
| B | Access Modifiers (`LibraryMember`) | `B_access_modifiers.ts`, `B_private_access_error.ts` |
| C | Inheritance and Method Overriding | `C_inheritance_overriding.ts` |
| D | Generic Function `searchItem<T>()` | `D_generic_search.ts` |

### Part 2 – JavaScript (`javascript/`)

| Q | Topic | File / Folder |
|---|-------|---------------|
| 1 | Array Destructuring | `q01_array_destructuring.js` |
| 2 | Object Destructuring | `q02_object_destructuring.js` |
| 3 | map, filter, reduce | `q03_map_filter_reduce.js` |
| 4 | Practical map, filter, reduce | `q04_practical_map_filter_reduce.js` |
| 5 | Classes (`BankAccount`) | `q05_bank_account_class.js` |
| 6 | Class Inheritance | `q06_class_inheritance.js` |
| 7 | User-Defined Error | `q07_user_defined_error.js` |
| 8 | Multiple User-Defined Errors | `q08_multiple_errors.js` |
| 9 | Promise with `setTimeout()` | `q09_promise_settimeout.js` |
| 10 | Promise with `resolve()` / `reject()` | `q10_promise_resolve_reject.js` |
| 11 | `require()` and `module.exports` | `q11_node_require/` |
| 12 | ES Modules `import` / `export` | `q12_node_es_modules/` |
| 13 | Node.js + MySQL Student Management System | `q13_mysql_student_management/` |

## 🛠️ Requirements

- [Node.js](https://nodejs.org/) v18 or above
- TypeScript: `npm install -g typescript`
- MySQL Server 8.0 (only for Q13)

## ▶️ How to Run

**TypeScript** (inside `typescript/`):

```bash
tsc
node dist/A_class_objects.js
node dist/B_access_modifiers.js
node dist/C_inheritance_overriding.js
node dist/D_generic_search.js
```

`B_private_access_error.ts` is meant to fail, to show the access-modifier errors:

```bash
tsc --ignoreConfig B_private_access_error.ts
```

**JavaScript Q1–Q10** (inside `javascript/`):

```bash
node q01_array_destructuring.js
```

**Q11 and Q12** (inside each folder):

```bash
cd q11_node_require
node app.js
```

```bash
cd q12_node_es_modules
node app.js
```

## 🗄️ Q13 – Student Management System (Node.js + MySQL)

Performs CRUD operations and student search using parameterized queries.

1. Run `javascript/q13_mysql_student_management/schema.sql` in MySQL to create the `college` database and `students` table.
2. Set your MySQL password in `db.js`.
3. Install and run:

```bash
cd javascript/q13_mysql_student_management
npm install
node demo.js     # automated test of all operations
node index.js    # interactive menu
```

## 📸 Output Screenshots

Screenshots of the outputs are in the [`screenshots/`](./screenshots) folder.

## 👤 Author

**Rohit Gupta**
GitHub: [@OnePiece28](https://github.com/OnePiece28)

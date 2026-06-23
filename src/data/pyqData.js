export const modules = [
  {
    id: 1,
    name: "Module 1",
    title: "Basics of C",
    priority: "CRITICAL",
    color: "#ef4444",
    topics: [
      {
        topic: "Basic Structure of C Program",
        frequency: 8,
        marks: 10,
        years: ["Dec2023","Sep2024","Jul2024","Jul2025","Sep2025","Jan2026","Feb2025","Mar2025"],
        questions: [
          { q: "Explain the basic structure of C program with example.", marks: 10 },
          { q: "Write the basic structure of C program and explain briefly each section. Also write a C program to find area and circumference of a circle given radius.", marks: 8 },
        ]
      },
      {
        topic: "Formatted & Unformatted I/O (printf/scanf)",
        frequency: 6,
        marks: 10,
        years: ["Dec2023","Sep2024supp","Jul2024","Jul2024supp","Mar2025","Jan2026"],
        questions: [
          { q: "Explain formatted and unformatted input and output functions.", marks: 10 },
          { q: "Explain printf() and scanf() statement with an example.", marks: 6 },
          { q: "Explain formatted output statement. Also write the output of the following printf statements: i) printf(\"%10d\\n\", 98765); ii) printf(\"%08d\\n\", 98765); iii) printf(\"%10.2f\\n\", 45.987654);", marks: 8 },
          { q: "Explain formatted output statement with examples to print integer, float and character type data.", marks: 8 },
        ]
      },
      {
        topic: "Data Types",
        frequency: 6,
        marks: 8,
        years: ["Jan2026","Jul2024","Jul2024supp","Sep2024","Sep2024supp","Sep2025","Jul2025"],
        questions: [
          { q: "Explain the basic data types supported by C language and write the significance of each data type with an example.", marks: 8 },
          { q: "List all the basic datatypes used in C language. Explain any four datatypes with its sizes and range.", marks: 6 },
          { q: "Explain data types in C. Give examples.", marks: 7 },
          { q: "Explain the basic data types with size and range of values.", marks: 4 },
          { q: "List and explain basic data types in C.", marks: 6 },
        ]
      },
      {
        topic: "Operators (Arithmetic, Relational, Logical, Unary)",
        frequency: 5,
        marks: 8,
        years: ["Jul2024","Jul2024supp","Sep2024","Sep2024supp","Mar2025","Sep2025","Jan2026"],
        questions: [
          { q: "Explain with an example: i) Relational operators ii) Logical operators", marks: 8 },
          { q: "Explain the following operators in C language and solve the given expressions: i) Unary operators ii) Arithmetic operators. Expressions: i) (5+2)*(3/2)-6 ii) (6*2)/(2+1*2/3+6)+8*(8/4)", marks: 8 },
          { q: "List arithmetic and relational operators in C. Write the precedence and associativity among them.", marks: 7 },
          { q: "Explain Relational and logical operators with examples also write the precedence among them.", marks: 7 },
        ]
      },
      {
        topic: "Expression Evaluation",
        frequency: 5,
        marks: 6,
        years: ["Jul2024","Jul2024supp","Feb2025","Jan2026","Mar2025","Sep2025"],
        questions: [
          { q: "Evaluate the following expression: 3*(6%4*6+(9/2*4+6*3%5-7*2)-6)", marks: 6 },
          { q: "Evaluate the following expressions: i) int x; x=(int)6.4; ii) float f; int a=20,b=3; f=(float)a/b; iii) int a=10,b=5; big=(a>b)?a:b; iv) int m=5; y=m++; v) int p=10; q=--p;", marks: 5 },
          { q: "Evaluate: i) x=a-b/3-c*2-1 when a=10,b=12,c=3 ii) 10!=10 || 5<4 && 8", marks: 6 },
        ]
      },
      {
        topic: "Type Conversion",
        frequency: 3,
        marks: 8,
        years: ["Jul2024","Jul2024supp","Sep2024","Sep2024supp"],
        questions: [
          { q: "Define type conversion? List the different types of conversions? Explain with an example for each category.", marks: 8 },
          { q: "What is type conversion? Explain with an example.", marks: 5 },
        ]
      },
      {
        topic: "Tokens, Keywords, Identifiers, Constants",
        frequency: 4,
        marks: 10,
        years: ["Feb2025","Jul2025","Mar2025","Sep2025"],
        questions: [
          { q: "Define token? List and explain different types of tokens available in C.", marks: 10 },
          { q: "Explain the following with examples: i) Keyword ii) Identifier iii) Constants", marks: 6 },
          { q: "Explain the terms keywords, identifiers and constants. Also identify them in a given program.", marks: 8 },
        ]
      },
      {
        topic: "Variables — Declaration & Rules",
        frequency: 4,
        marks: 7,
        years: ["Jan2026","Feb2025","Mar2025","Jul2025"],
        questions: [
          { q: "Define variable. With example show how to declare and initialize variables? Classify the following as valid/invalid: i) _PPC_Lab ii) ForEver iii) auto iv) cust-name", marks: 7 },
          { q: "Write the rules to frame variable names. Classify as valid/invalid: i) doubles ii) sum iii) 12_total iv) total marks", marks: 6 },
        ]
      },
    ]
  },
  {
    id: 2,
    name: "Module 2",
    title: "Decision Making & Loops",
    priority: "CRITICAL",
    color: "#f97316",
    topics: [
      {
        topic: "Roots of Quadratic Equation (EVERY EXAM)",
        frequency: 7,
        marks: 10,
        years: ["Dec2023","Sep2024supp","Jul2024","Jul2024supp","Jul2025","Sep2025","Jan2026"],
        questions: [
          { q: "Develop a C program for finding roots of quadratic equation.", marks: 10 },
          { q: "Develop a C program to find the roots of a quadratic equation using else-if statement.", marks: 8 },
          { q: "Write a C program to find the roots of a quadratic equation using nested if else statement.", marks: 7 },
        ]
      },
      {
        topic: "if / if-else / nested if / else-if ladder",
        frequency: 5,
        marks: 10,
        years: ["Dec2023","Sep2024supp","Feb2025","Jul2025","Mar2025","Sep2024"],
        questions: [
          { q: "Explain if, if-else, nested if else, if-else ladder with syntax, flowchart and example.", marks: 10 },
          { q: "Define branching. List and explain branching statement with example and syntax.", marks: 10 },
          { q: "With syntax and flowchart explain the working of if else statement. Give example.", marks: 5 },
          { q: "Explain the following with syntax, example and flowchart: i) else-if-ladder ii) Nested if", marks: 10 },
        ]
      },
      {
        topic: "Switch Statement",
        frequency: 3,
        marks: 8,
        years: ["Jan2026","Jul2024","Jul2024supp","Sep2025"],
        questions: [
          { q: "Explain the working of switch statement with syntax and flowchart.", marks: 8 },
          { q: "Explain the syntax of switch statement.", marks: 6 },
          { q: "Write a C program to read average marks and assign grade using switch statement.", marks: 7 },
        ]
      },
      {
        topic: "Loops (while, for, do-while)",
        frequency: 5,
        marks: 10,
        years: ["Dec2023","Sep2024supp","Sep2024","Mar2025","Jul2025","Feb2025"],
        questions: [
          { q: "Explain different types of loops in C program language with syntax.", marks: 10 },
          { q: "Explain different types of loops with syntax and flowchart.", marks: 8 },
          { q: "With syntax and flowchart explain working of while loop. Give example.", marks: 5 },
          { q: "Explain do-while statement with an example program.", marks: 6 },
        ]
      },
      {
        topic: "while vs do-while / break vs continue",
        frequency: 4,
        marks: 8,
        years: ["Jul2024","Jul2024supp","Sep2024","Sep2024supp","Feb2025"],
        questions: [
          { q: "List any four differences between: i) while and do-while loop ii) break and continue", marks: 8 },
          { q: "Differentiate: i) While loop and do-while loop ii) Break and continue", marks: 8 },
          { q: "List out the differences between while and do-while.", marks: 5 },
        ]
      },
      {
        topic: "Palindrome Check",
        frequency: 4,
        marks: 8,
        years: ["Mar2025","Jul2025","Sep2024","Sep2024supp"],
        questions: [
          { q: "Develop a C program to check whether a given number is palindrome or not.", marks: 8 },
          { q: "Develop a C program to check the given 4 digit number is a palindrome or not.", marks: 8 },
        ]
      },
      {
        topic: "Sine Series",
        frequency: 3,
        marks: 7,
        years: ["Feb2025","Sep2025","Jan2026"],
        questions: [
          { q: "Write a C program to find sine value for a given angle (sin x = x - x³/3! + x⁵/5! ...). Also verify using built-in function.", marks: 7 },
        ]
      },
      {
        topic: "Grade / Marks Programs",
        frequency: 3,
        marks: 8,
        years: ["Jan2026","Sep2025","Feb2025"],
        questions: [
          { q: "Write a C program that takes a student's percentage and prints grade using else-if ladder: ≥90→A, ≥80→B, ≥70→C, ≥60→D, <60→F.", marks: 8 },
          { q: "Write a C program to read average marks and assign grade using switch statement.", marks: 7 },
        ]
      },
    ]
  },
  {
    id: 3,
    name: "Module 3",
    title: "Arrays & Strings",
    priority: "HIGH",
    color: "#eab308",
    topics: [
      {
        topic: "String Handling Functions",
        frequency: 6,
        marks: 10,
        years: ["Dec2023","Sep2024supp","Jul2024","Sep2024","Jul2025","Sep2025","Mar2025","Feb2025"],
        questions: [
          { q: "Explain the following string handling functions: i) strcat ii) strcmp iii) strcpy iv) strlen v) strrev", marks: 10 },
          { q: "Explain with an example any five string handling functions.", marks: 10 },
          { q: "List the string handling functions in C. Explain any 3 string functions with an example.", marks: 8 },
          { q: "Explain following string functions: i) strlen() ii) strcpy() iii) strcmp() iv) strcat()", marks: 7 },
        ]
      },
      {
        topic: "1D & 2D Array Declaration and Initialization",
        frequency: 5,
        marks: 10,
        years: ["Dec2023","Sep2024supp","Jul2024","Jul2024supp","Feb2025","Jul2025","Mar2025","Sep2025"],
        questions: [
          { q: "Illustrate initialization and declaration of 1-dimensional and 2-dimensional arrays with example.", marks: 10 },
          { q: "Define array? How to declare 1D array? How to initialize 1D array? Explain with an example the different ways of initializing 1D array.", marks: 10 },
          { q: "Define array. Explain how one-dimension and two-dimension arrays are declared and initialized.", marks: 8 },
        ]
      },
      {
        topic: "Matrix Multiplication",
        frequency: 5,
        marks: 10,
        years: ["Jul2024","Jul2024supp","Sep2024","Mar2025","Jul2025","Feb2025"],
        questions: [
          { q: "Develop a C program to find the product of two matrices.", marks: 10 },
          { q: "Write a C program to read two matrices, check whether multipliable, find the product matrix.", marks: 10 },
          { q: "Develop a C program to compute the product of two given matrix.", marks: 8 },
        ]
      },
      {
        topic: "Bubble Sort",
        frequency: 3,
        marks: 7,
        years: ["Mar2025","Feb2025","Jul2025"],
        questions: [
          { q: "Develop a C program to sort the given array in ascending order using bubble sort technique.", marks: 7 },
          { q: "Write a C program to read n numbers using array. Sort them using bubble sort technique.", marks: 6 },
        ]
      },
      {
        topic: "Count Vowels & Consonants",
        frequency: 3,
        marks: 10,
        years: ["Sep2024supp","Feb2025","Sep2025"],
        questions: [
          { q: "Write a C program to accept a string and count the vowels, consonants and digits in it.", marks: 10 },
          { q: "Write a C program to read a string, find number of vowels and consonants in it.", marks: 7 },
        ]
      },
      {
        topic: "Matrix Transpose",
        frequency: 2,
        marks: 7,
        years: ["Sep2025","Sep2024supp"],
        questions: [
          { q: "Write a C program to find the transpose of a matrix. Print both the given and transposed matrix.", marks: 7 },
        ]
      },
    ]
  },
  {
    id: 4,
    name: "Module 4",
    title: "Functions, Structures & Pointers",
    priority: "HIGH",
    color: "#22c55e",
    topics: [
      {
        topic: "Structure of Functions / Categories of Functions",
        frequency: 5,
        marks: 10,
        years: ["Dec2023","Sep2024supp","Mar2025","Jul2024","Sep2024","Sep2025"],
        questions: [
          { q: "Explain the structure of function and elements of user defined functions.", marks: 10 },
          { q: "List the categories of functions? Explain with an example the categories of functions.", marks: 10 },
          { q: "Describe the elements of user defined function.", marks: 8 },
          { q: "With example program explain: i) Functions with arguments and no return value ii) Functions with arguments and one return value", marks: 8 },
        ]
      },
      {
        topic: "Call by Value vs Call by Reference",
        frequency: 5,
        marks: 10,
        years: ["Dec2023","Sep2024supp","Feb2025","Jul2024","Sep2024","Sep2024supp"],
        questions: [
          { q: "Differentiate call by value and call by reference with suitable example.", marks: 10 },
          { q: "Discuss the various ways of passing parameter to function.", marks: 10 },
          { q: "Explain with an example: i) pass by value ii) pass by reference", marks: 10 },
        ]
      },
      {
        topic: "Structures — Definition, Declaration, Initialization",
        frequency: 5,
        marks: 10,
        years: ["Dec2023","Sep2024supp","Jul2024","Sep2024","Feb2025","Mar2025","Sep2025"],
        questions: [
          { q: "Define structure? How to declare structure? How to initialize structure members? List any five major differences between structure and union.", marks: 10 },
          { q: "Develop a C program to read and print N student records (Name, roll number, marks) using structures.", marks: 10 },
          { q: "Define a structure data type called student containing members: name, usn, marks of CIE1, CIE2, CIE3, activity1 and activity2. Write a C program.", marks: 8 },
          { q: "Define a structure called employee. Using employee, read information of 50 employees whose salary is above 50,000.", marks: 10 },
        ]
      },
      {
        topic: "Pointers — Declaration, Initialization, Arithmetic",
        frequency: 4,
        marks: 6,
        years: ["Feb2025","Mar2025","Jul2025","Sep2024supp"],
        questions: [
          { q: "What is a pointer? How are pointers declared and initialized?", marks: 6 },
          { q: "Explain pointer variable, declaration, initialization and arithmetic operations with example.", marks: 6 },
          { q: "Develop a C function to swap two numbers using pointers.", marks: 10 },
        ]
      },
      {
        topic: "Factorial Function + nCr",
        frequency: 3,
        marks: 8,
        years: ["Feb2025","Mar2025"],
        questions: [
          { q: "Write a user defined function to find the factorial of a number. Using above function write a main function to find the binomial coefficient: nCr = n! / (r!(n-r)!)", marks: 8 },
        ]
      },
      {
        topic: "File Handling",
        frequency: 2,
        marks: 10,
        years: ["Jul2024","Sep2024","Dec2023","Sep2024supp"],
        questions: [
          { q: "Define file? Explain how to read and write data to files, with a simple example program. List all file handling functions.", marks: 10 },
          { q: "Develop a C program that takes a number from the user and stores in the file num.txt.", marks: 10 },
        ]
      },
    ]
  }
];

export const allQuestions = modules.flatMap(m =>
  m.topics.flatMap(t =>
    t.questions.map(q => ({
      ...q,
      module: m.name,
      moduleTitle: m.title,
      topic: t.topic,
      years: t.years,
      priority: m.priority,
      color: m.color,
    }))
  )
);

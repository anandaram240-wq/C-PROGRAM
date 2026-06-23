/* ============================================================
   ALL PYQ QUESTIONS WITH COMPLETE EXAM-READY ANSWERS
   Organized by Priority: 1=CRITICAL, 2=HIGH, 3=MEDIUM
   ============================================================ */

export const allQA = [

  /* ══════════════════════════════════════════════
     MODULE 1 — BASICS OF C
  ══════════════════════════════════════════════ */

  {
    id: 'M1-1',
    module: 'Module 1',
    topic: 'Basic Structure of C Program',
    priority: 1,
    marks: 10,
    years: ['Dec2023','Sep2024','Jul2024','Jul2025','Sep2025','Jan2026','Feb2025','Mar2025'],
    questions: [
      'Explain the basic structure of C program with example. (10M)',
      'Write the basic structure of C program and explain briefly each section. Also write a C program to find area and circumference of a circle given radius. (8M)',
    ],
    answer: [
      { type:'text', heading:'Definition',
        text:'A C program is divided into 6 well-defined sections. Each section serves a specific purpose. Writing a C program without knowing its structure will lead to errors.' },
      { type:'list', heading:'6 Sections of a C Program',
        items:[
          '1. Documentation Section — Comments describing program name, author, date. Written using /* */ or //',
          '2. Link Section — Header files included with #include. Example: #include<stdio.h>, #include<math.h>',
          '3. Definition Section — Symbolic constants defined using #define. Example: #define PI 3.14',
          '4. Global Declaration Section — Global variables declared outside main(), accessible to all functions',
          '5. Main Function Section — void main() containing local variable declarations and executable statements',
          '6. Subprogram Section — User-defined functions written after main()',
        ]},
      { type:'code', heading:'Example Program — Area and Circumference of Circle',
        code:`/* Documentation Section: Area and Circumference of Circle
   Author: Student, Date: 2026 */
#include<stdio.h>           /* Link Section */
#define PI 3.14159          /* Definition Section */

int count = 0;              /* Global Declaration Section */

void main()                 /* Main Function Section */
{
    float r, area, circum;  /* Local Variable Declaration */
    printf("Enter radius: ");
    scanf("%f", &r);
    area   = PI * r * r;
    circum = 2 * PI * r;
    printf("Area          = %.2f\\n", area);
    printf("Circumference = %.2f\\n", circum);
}
/* Subprogram Section: No user-defined functions in this program */`},
      { type:'output', text:'Input: 7\nArea          = 153.94\nCircumference = 43.98' },
    ]
  },

  {
    id: 'M1-2',
    module: 'Module 1',
    topic: 'Formatted & Unformatted I/O',
    priority: 1,
    marks: 10,
    years: ['Dec2023','Sep2024supp','Jul2024','Jul2024supp','Mar2025','Jan2026'],
    questions: [
      'Explain formatted and unformatted input and output functions. (10M)',
      'Explain printf() and scanf() statement with an example. (6M)',
      'Explain formatted output statement. Also write the output of: i) printf("%10d\\n", 98765); ii) printf("%08d\\n", 98765); iii) printf("%10.2f\\n", 45.987654); (8M)',
      'Explain formatted output statement with examples to print integer, float and character type data. (8M)',
    ],
    answer: [
      { type:'list', heading:'Types of I/O Functions',
        items:[
          'Formatted I/O — printf() and scanf() — allow format specifiers (%d, %f, %c, %s) to control display',
          'Unformatted I/O — getchar(), putchar(), gets(), puts() — no format specifiers, simple character/string I/O',
        ]},
      { type:'list', heading:'printf() — Formatted Output',
        items:[
          'Syntax: printf("format string", variable_list);',
          '%d — integer,  %f — float,  %c — character,  %s — string,  %lf — double',
          '%10d — right-aligned in field width 10',
          '%08d — zero-padded to width 8',
          '%10.2f — field width 10, 2 decimal places',
        ]},
      { type:'list', heading:'scanf() — Formatted Input',
        items:[
          'Syntax: scanf("format string", &variable_list);',
          '& (address-of) operator is required for all variables except strings (char arrays)',
          'Example: scanf("%d %f", &a, &b); — reads int a and float b',
        ]},
      { type:'code', heading:'Example — printf() and scanf()',
        code:`#include<stdio.h>
void main()
{
    int   a;
    float f;
    char  c;

    printf("Enter integer, float, char: ");
    scanf("%d %f %c", &a, &f, &c);

    printf("Integer = %d\\n",   a);
    printf("Float   = %f\\n",   f);
    printf("Char    = %c\\n",   c);

    /* Format specifier examples */
    printf("%10d\\n",    98765);   /* Output:      98765  (right-aligned, width 10) */
    printf("%08d\\n",    98765);   /* Output: 00098765   (zero-padded, width 8) */
    printf("%10.2f\\n",  45.9876); /* Output:      45.99  (width 10, 2 decimal places) */
}`},
      { type:'list', heading:'Unformatted I/O Functions',
        items:[
          'getchar() — reads a single character from keyboard. Example: char c = getchar();',
          'putchar(c) — prints a single character. Example: putchar(c);',
          'gets(str) — reads a whole line including spaces into string. Example: gets(str);',
          'puts(str) — prints a string followed by newline. Example: puts(str);',
        ]},
    ]
  },

  {
    id: 'M1-3',
    module: 'Module 1',
    topic: 'Data Types',
    priority: 1,
    marks: 8,
    years: ['Jan2026','Jul2024','Jul2024supp','Sep2024','Sep2024supp','Sep2025','Jul2025'],
    questions: [
      'Explain the basic data types supported by C language and write the significance of each data type with an example. (8M)',
      'List all the basic datatypes used in C language. Explain any four datatypes with its sizes and range. (6M)',
      'Explain data types in C. Give examples. (7M)',
      'Explain the basic data types with size and range of values. (4M)',
      'List and explain basic data types in C. (6M)',
    ],
    answer: [
      { type:'text', heading:'Definition',
        text:'A data type specifies the type of data a variable can store and the amount of memory it occupies. C has Basic (primary), Derived, and User-defined data types.' },
      { type:'table', heading:'Basic Data Types — Size, Range, Example',
        headers:['Data Type','Size','Range','Example'],
        rows:[
          ['int',    '2 or 4 bytes','-32768 to 32767  (2B)\nor  -2147483648 to 2147483647  (4B)','int a = 10;'],
          ['float',  '4 bytes',    '3.4×10⁻³⁸ to 3.4×10⁺³⁸  (6 decimal digits)','float f = 3.14;'],
          ['double', '8 bytes',    '1.7×10⁻³⁰⁸ to 1.7×10⁺³⁰⁸  (15 decimal digits)','double d = 3.14159;'],
          ['char',   '1 byte',     '-128 to 127  (signed)  or  0 to 255  (unsigned)',"char c = 'A';"],
          ['void',   '0 bytes',    'No value — used for functions with no return','void main()'],
        ]},
      { type:'code', heading:'Example Program',
        code:`#include<stdio.h>
void main()
{
    int    a = 100;
    float  f = 3.14;
    double d = 3.14159265;
    char   c = 'A';

    printf("int    = %d  (size = %lu bytes)\\n", a, sizeof(a));
    printf("float  = %f  (size = %lu bytes)\\n", f, sizeof(f));
    printf("double = %lf (size = %lu bytes)\\n", d, sizeof(d));
    printf("char   = %c  (size = %lu bytes)\\n", c, sizeof(c));
}`},
    ]
  },

  {
    id: 'M1-4',
    module: 'Module 1',
    topic: 'Operators',
    priority: 1,
    marks: 8,
    years: ['Jul2024','Jul2024supp','Sep2024','Sep2024supp','Mar2025','Sep2025','Jan2026'],
    questions: [
      'Explain with an example: i) Relational operators  ii) Logical operators (8M)',
      'Explain the following operators in C language and solve: i) Unary operators  ii) Arithmetic operators. Solve: i) (5+2)*(3/2)-6  ii) (6*2)/(2+1*2/3+6)+8*(8/4) (8M)',
      'List arithmetic and relational operators in C. Write the precedence and associativity among them. (7M)',
      'Explain Relational and logical operators with examples also write the precedence among them. (7M)',
      'Convert the following mathematical expressions into C expressions: i) x=n+1/(n-1)+2/(n-2)  ii) a=sqrt(x²+y²)  iii) A=pi*r²  iv) x=(-b+sqrt(b²-4ac))/2a (7M)',
    ],
    answer: [
      { type:'table', heading:'Arithmetic Operators',
        headers:['Operator','Meaning','Example','Result'],
        rows:[
          ['+','Addition','a+b','Sum'],
          ['-','Subtraction','a-b','Difference'],
          ['*','Multiplication','a*b','Product'],
          ['/','Division (quotient)','a/b','Quotient'],
          ['%','Modulo (remainder)','a%b','Remainder'],
        ]},
      { type:'table', heading:'Relational Operators',
        headers:['Operator','Meaning','Example','Result'],
        rows:[
          ['==','Equal to','a==b','1 if equal, 0 if not'],
          ['!=','Not equal to','a!=b','1 if not equal'],
          ['>','Greater than','a>b','1 if a>b'],
          ['<','Less than','a<b','1 if a<b'],
          ['>=','Greater or equal','a>=b','1 if a≥b'],
          ['<=','Less or equal','a<=b','1 if a≤b'],
        ]},
      { type:'table', heading:'Logical Operators',
        headers:['Operator','Meaning','Example','Result'],
        rows:[
          ['&&','Logical AND','a>0 && b>0','TRUE only if BOTH are true'],
          ['||','Logical OR','a>0 || b>0','TRUE if at least ONE is true'],
          ['!','Logical NOT','!(a>0)','Reverses the condition'],
        ]},
      { type:'list', heading:'Unary Operators',
        items:[
          '++ (Increment): increases value by 1. Pre: ++a (increment first, use later). Post: a++ (use first, increment later)',
          '-- (Decrement): decreases value by 1. Pre: --a. Post: a--',
          '- (Unary minus): negates the value. Example: -a',
          '! (Logical NOT): reverses boolean value',
          'sizeof(): returns size in bytes. sizeof(int) = 4',
        ]},
      { type:'list', heading:'Expression Evaluation',
        items:[
          '(5+2)*(3/2)-6 → 7*(1)-6 → 7-6 = 1   (3/2=1 because both int, integer division)',
          '(6*2)/(2+1*2/3+6)+8*(8/4) → 12/(2+0+6)+8*2 → 12/8+16 → 1+16 = 17',
        ]},
      { type:'list', heading:'C Expression Conversions',
        items:[
          'x = n + 1/(n-1) + 2/(n-2)  →  x = n + 1.0/(n-1) + 2.0/(n-2)',
          'a = sqrt(x²+y²)  →  a = sqrt(x*x + y*y)',
          'A = π×r²  →  A = 3.14159 * r * r',
          'x = (-b + sqrt(b²-4ac)) / 2a  →  x = (-b + sqrt(b*b - 4*a*c)) / (2*a)',
        ]},
    ]
  },

  {
    id: 'M1-5',
    module: 'Module 1',
    topic: 'Expression Evaluation (Output Questions)',
    priority: 2,
    marks: 6,
    years: ['Jul2024','Jul2024supp','Feb2025','Jan2026','Mar2025','Sep2025'],
    questions: [
      'Evaluate the following expression and write the output: 3*(6%4*6+(9/2*4+6*3%5-7*2)-6) (6M)',
      'Evaluate: i) int x; x=(int)6.4; printf("%d",x);  ii) float f; int a=20,b=3; f=(float)a/b; printf("%f",f);  iii) int a=10,b=5; big=(a>b)?a:b;  iv) int m=5; y=m++; printf("%d",y);  v) int p=10; q=--p; printf("%d",q); (5M)',
      'Evaluate: i) x=a-b/3-c*2-1 when a=10,b=12,c=3  ii) 10!=10 || 5<4 &&8 (6M)',
    ],
    answer: [
      { type:'list', heading:'Step-by-step: 3*(6%4*6+(9/2*4+6*3%5-7*2)-6)',
        items:[
          'Step 1: 6%4 = 2',
          'Step 2: 2*6 = 12',
          'Step 3: 9/2 = 4 (integer division)',
          'Step 4: 4*4 = 16',
          'Step 5: 6*3 = 18',
          'Step 6: 18%5 = 3',
          'Step 7: 7*2 = 14',
          'Step 8: (16+3-14) = 5',
          'Step 9: (12+5-6) = 11',
          'Step 10: 3*11 = 33   →   Final Answer = 33',
        ]},
      { type:'list', heading:'Individual Expression Outputs',
        items:[
          'i) x=(int)6.4 → x=6   Output: 6   (explicit cast truncates decimal)',
          'ii) f=(float)20/3 → f=6.666667   Output: 6.666667',
          'iii) big=(10>5)?10:5 → big=10   Output: 10',
          'iv) y=m++ → y=5 (post-increment: use first then increment)   Output: 5',
          'v) q=--p → p=9, q=9 (pre-decrement: decrement first then use)   Output: 9',
        ]},
      { type:'list', heading:'Expression ii: x=a-b/3-c*2-1 (a=10,b=12,c=3)',
        items:[
          'Step 1: b/3 = 12/3 = 4',
          'Step 2: c*2 = 3*2 = 6',
          'Step 3: x = 10 - 4 - 6 - 1 = -1   →   x = -1',
          'Expression iii: 10!=10 || 5<4 && 8',
          '→ 0 || 0 && 8  →  0 || 0  →  0   (FALSE)   Output: 0',
        ]},
    ]
  },

  {
    id: 'M1-6',
    module: 'Module 1',
    topic: 'Type Conversion',
    priority: 2,
    marks: 8,
    years: ['Jul2024','Jul2024supp','Sep2024','Sep2024supp'],
    questions: [
      'Define type conversion? List the different types of conversions? Explain with an example for each category. (8M)',
      'What is type conversion? Explain with an example. (5M)',
    ],
    answer: [
      { type:'text', heading:'Definition',
        text:'Type conversion is the process of converting one data type to another. C supports two types: Implicit (automatic) and Explicit (manual using cast operator).' },
      { type:'list', heading:'1. Implicit Type Conversion (Automatic / Widening)',
        items:[
          'Done automatically by the compiler when mixing different data types in an expression',
          'Converts smaller type to larger type: char → int → float → double',
          'No data loss occurs',
          'Example: int + float → result is float automatically',
        ]},
      { type:'code', heading:'Implicit Conversion Example',
        code:`#include<stdio.h>
void main()
{
    int  a = 5;
    float b = 2.5;
    float result = a + b;  /* int a auto-converted to float */
    printf("Result = %.2f\\n", result); /* Output: 7.50 */
}`},
      { type:'list', heading:'2. Explicit Type Conversion (Casting)',
        items:[
          'Programmer manually converts using cast operator: (datatype) expression',
          'Syntax: (target_type) expression',
          'May cause data loss (e.g., float to int drops decimal)',
        ]},
      { type:'code', heading:'Explicit Conversion Example',
        code:`#include<stdio.h>
void main()
{
    int a = 20, b = 3;
    float result;

    result = a / b;              /* Both int → result = 6 (wrong!) */
    printf("Without cast = %.2f\\n", result);

    result = (float)a / b;       /* a cast to float → result = 6.67 */
    printf("With cast    = %.2f\\n", result);

    int x = (int)6.9;            /* float to int → truncates to 6 */
    printf("Float to int = %d\\n", x);
}`},
    ]
  },

  {
    id: 'M1-7',
    module: 'Module 1',
    topic: 'Tokens — Keywords, Identifiers, Constants',
    priority: 2,
    marks: 10,
    years: ['Feb2025','Jul2025','Mar2025','Sep2025'],
    questions: [
      'Define token? List and explain different types of tokens available in C. (10M)',
      'Explain the following with examples: i) Keyword  ii) Identifier  iii) Constants (6M)',
      'Explain the terms keywords, identifiers and constants. Also identify them in a given program. (8M)',
    ],
    answer: [
      { type:'text', heading:'Definition of Token',
        text:'A token is the smallest individual unit in a C program that is meaningful to the compiler. C has 6 types of tokens.' },
      { type:'table', heading:'6 Types of Tokens in C',
        headers:['Token Type','Definition','Example'],
        rows:[
          ['Keywords','Reserved words with fixed meaning in C. Cannot be used as variable names.','int, float, if, else, while, for, return, void, struct, break'],
          ['Identifiers','Names given to variables, functions, arrays by the programmer. Must start with letter or _.','count, total, main, sum_of, _value'],
          ['Constants','Fixed values that do not change during program execution.','10, 3.14, \'A\', "Hello"'],
          ['Strings','Sequence of characters enclosed in double quotes.','\"Hello World\", \"MCE\"'],
          ['Special Symbols','Characters with special meaning in C.','{ } ( ) [ ] ; , # &'],
          ['Operators','Symbols that perform operations.','+ - * / % = == != > <'],
        ]},
      { type:'list', heading:'Rules for Identifiers',
        items:[
          '1. Must begin with a letter (a-z, A-Z) or underscore (_)',
          '2. Can contain letters, digits (0-9), and underscore',
          '3. Cannot contain spaces or special characters',
          '4. Cannot be a keyword (reserved word)',
          '5. Case-sensitive: Sum and sum are different identifiers',
          'Valid: count, _PPC_Lab, ForEver, total2   |   Invalid: 2count, cust-name, auto (keyword), total marks (space)',
        ]},
      { type:'code', heading:'Identify Tokens in This Program',
        code:`#include<stdio.h>
void main()
{
    int a, b, sum;   /* Keywords: int, void  |  Identifiers: main, a, b, sum */
    a   = 10;        /* Constants: 10 */
    b   = 20;        /* Constants: 20 */
    sum = a + b;     /* Operators: =, +  |  Special: ;, {} */
    printf("%d\\n", sum); /* Identifier: printf  |  String: "%d\\n" */
}
/* Keywords in above: void, int
   Identifiers: main, a, b, sum, printf
   Constants: 10, 20
   String constant: "%d\\n"
   Operators: =, +
   Special symbols: { } ( ) ; , */`},
    ]
  },

  {
    id: 'M1-8',
    module: 'Module 1',
    topic: 'Variables — Declaration and Rules',
    priority: 2,
    marks: 7,
    years: ['Jan2026','Feb2025','Mar2025','Jul2025'],
    questions: [
      'Define variable. With example show how to declare and initialize variables? Classify the following as valid/invalid: i) _PPC_Lab  ii) ForEver  iii) auto  iv) cust-name (7M)',
      'Write the rules to frame variable names. Classify as valid/invalid: i) doubles  ii) sum  iii) 12_total  iv) total marks (6M)',
      'What are the rules to construct variable? Classify as valid/invalid: i) num2  ii) $num1  iii) +add  iv) 199-sp (6M)',
      'What are variables? Explain how variables are declared and initialized with example. (6M)',
    ],
    answer: [
      { type:'text', heading:'Definition',
        text:'A variable is a named memory location that stores a value which can change during program execution. Every variable must be declared before use.' },
      { type:'list', heading:'Rules for Variable Names',
        items:[
          '1. Must start with a letter (a-z, A-Z) or underscore (_) — NOT a digit',
          '2. Can contain letters, digits (0-9), and underscore only',
          '3. Cannot contain spaces, hyphen (-), $, @, or other special characters',
          '4. Cannot be a keyword (int, float, if, while, etc.)',
          '5. Case-sensitive: Total and total are two different variables',
          '6. No limit on length (first 31 characters are significant)',
        ]},
      { type:'table', heading:'Valid / Invalid Classification',
        headers:['Variable Name','Valid or Invalid','Reason'],
        rows:[
          ['_PPC_Lab','✅ Valid','Starts with underscore, contains only letters/underscore'],
          ['ForEver','✅ Valid','Starts with letter, mixed case is allowed'],
          ['auto','❌ Invalid','auto is a keyword in C'],
          ['cust-name','❌ Invalid','Hyphen (-) not allowed in variable names'],
          ['doubles','✅ Valid','Note: double is keyword but doubles is not'],
          ['sum','✅ Valid','Simple valid name'],
          ['12_total','❌ Invalid','Starts with digit — not allowed'],
          ['total marks','❌ Invalid','Contains space — not allowed'],
          ['num2','✅ Valid','Letter start + digit is allowed'],
          ['$num1','❌ Invalid','$ is not allowed'],
          ['+add','❌ Invalid','Starts with + operator'],
          ['199-sp','❌ Invalid','Starts with digit and has hyphen'],
        ]},
      { type:'code', heading:'Declaration and Initialization',
        code:`#include<stdio.h>
void main()
{
    /* Declaration */
    int   a;
    float f;
    char  c;

    /* Initialization (separate) */
    a = 10;
    f = 3.14;
    c = 'A';

    /* Declaration + Initialization (combined) */
    int   x = 5;
    float pi = 3.14;
    char  ch = 'B';

    printf("a=%d  f=%.2f  c=%c\\n", a, f, c);
}`},
    ]
  },

  {
    id: 'M1-9',
    module: 'Module 1',
    topic: 'Compiling and Running a C Program',
    priority: 3,
    marks: 8,
    years: ['Jul2025'],
    questions: [
      'With a neat diagram, explain the process of compiling and running C program. (8M)',
    ],
    answer: [
      { type:'list', heading:'Steps to Compile and Run a C Program',
        items:[
          '1. WRITE — Write the C source code using a text editor and save with .c extension (e.g., program.c)',
          '2. PREPROCESSOR — Preprocessor handles #include and #define directives before compilation',
          '3. COMPILE — Compiler (gcc) translates source code (.c) to object code (.obj or .o)',
          '4. LINKER — Linker combines object code with library functions to create executable (.exe)',
          '5. LOAD — Loader loads the executable into memory',
          '6. EXECUTE — CPU executes the program and produces output',
        ]},
      { type:'list', heading:'Diagram Description (draw this in exam)',
        items:[
          'Source Code (.c) → [Preprocessor] → Expanded Source → [Compiler] → Object Code (.obj)',
          'Object Code + Library Files → [Linker] → Executable (.exe)',
          'Executable → [Loader] → Memory → [CPU] → Output',
        ]},
      { type:'list', heading:'Commands (for GCC)',
        items:[
          'Compile: gcc program.c -o program',
          'For math functions: gcc program.c -o program -lm',
          'Run: ./program (Linux) or program.exe (Windows)',
        ]},
    ]
  },

  /* ══════════════════════════════════════════════
     MODULE 2 — DECISION MAKING AND LOOPS
  ══════════════════════════════════════════════ */

  {
    id: 'M2-1',
    module: 'Module 2',
    topic: 'Roots of Quadratic Equation',
    priority: 1,
    marks: 10,
    years: ['Dec2023','Sep2024supp','Jul2024','Jul2024supp','Jul2025','Sep2025','Jan2026'],
    questions: [
      'Develop a C program for finding roots of quadratic equation. (10M)',
      'Develop a C program to find the roots of a quadratic equation using else-if statement. (8M)',
      'Write a C program to find the roots of a quadratic equation using nested if else statement. (7M)',
    ],
    answer: [
      { type:'text', heading:'Logic',
        text:'For ax²+bx+c=0, compute Discriminant D = b²-4ac.\nIf D>0: Two real distinct roots.\nIf D=0: Two real equal roots.\nIf D<0: Two complex (imaginary) roots.' },
      { type:'code', heading:'Complete Program',
        code:`#include<stdio.h>
#include<math.h>

void main()
{
    float a, b, c, disc, root1, root2, realpart, imagpart;

    printf("Enter coefficients a, b, c: ");
    scanf("%f %f %f", &a, &b, &c);

    disc = b*b - 4*a*c;          /* Discriminant */

    if (disc > 0)
    {
        root1 = (-b + sqrt(disc)) / (2*a);
        root2 = (-b - sqrt(disc)) / (2*a);
        printf("Roots are Real and Distinct\\n");
        printf("Root1 = %.2f\\n", root1);
        printf("Root2 = %.2f\\n", root2);
    }
    else if (disc == 0)
    {
        root1 = root2 = -b / (2*a);
        printf("Roots are Real and Equal\\n");
        printf("Root = %.2f\\n", root1);
    }
    else
    {
        realpart = -b / (2*a);
        imagpart = sqrt(-disc) / (2*a);
        printf("Roots are Complex\\n");
        printf("Root1 = %.2f + %.2fi\\n", realpart, imagpart);
        printf("Root2 = %.2f - %.2fi\\n", realpart, imagpart);
    }
}`},
      { type:'output', text:'Input: a=1 b=-5 c=6\nDisc = 25-24 = 1 > 0\nRoots are Real and Distinct\nRoot1 = 3.00\nRoot2 = 2.00' },
    ]
  },

  {
    id: 'M2-2',
    module: 'Module 2',
    topic: 'if / if-else / Nested if / else-if Ladder',
    priority: 1,
    marks: 10,
    years: ['Dec2023','Sep2024supp','Feb2025','Jul2025','Mar2025','Sep2024'],
    questions: [
      'Explain if, if-else, nested if else, if-else ladder with syntax, flowchart and example. (10M)',
      'Define branching. List and explain branching statement with example and syntax. (10M)',
      'With syntax and flowchart explain the working of if else statement. Give example. (5M)',
      'Explain the following with syntax, example and flowchart: i) else-if-ladder  ii) Nested if (10M)',
      'List the branching statement in C. Explain any two branching statements with an example. (7M)',
    ],
    answer: [
      { type:'text', heading:'Definition',
        text:'Branching (decision-making) statements change the flow of execution based on a condition being true or false. C provides 4 types.' },
      { type:'code', heading:'1. Simple if — Executes only if condition is TRUE',
        code:`/* Syntax */
if (condition)
{
    statement(s);   /* Executes if condition = TRUE */
}

/* Example */
int n = 10;
if (n > 0)
    printf("Positive\\n");   /* Executes because 10 > 0 is TRUE */`},
      { type:'code', heading:'2. if-else — One of two paths executes',
        code:`/* Syntax */
if (condition)
    statement1;   /* TRUE path */
else
    statement2;   /* FALSE path */

/* Example: Even or Odd */
if (n % 2 == 0)
    printf("Even\\n");
else
    printf("Odd\\n");`},
      { type:'code', heading:'3. Nested if-else — if inside another if',
        code:`/* Example: Largest of three numbers */
#include<stdio.h>
void main()
{
    int a, b, c;
    printf("Enter 3 numbers: ");
    scanf("%d %d %d", &a, &b, &c);

    if (a > b)
    {
        if (a > c)
            printf("Largest = %d\\n", a);
        else
            printf("Largest = %d\\n", c);
    }
    else
    {
        if (b > c)
            printf("Largest = %d\\n", b);
        else
            printf("Largest = %d\\n", c);
    }
}`},
      { type:'code', heading:'4. else-if Ladder — Chain of conditions',
        code:`/* Example: Grade based on marks */
#include<stdio.h>
void main()
{
    float marks;
    printf("Enter percentage: ");
    scanf("%f", &marks);

    if (marks >= 90)
        printf("Grade A\\n");
    else if (marks >= 80)
        printf("Grade B\\n");
    else if (marks >= 70)
        printf("Grade C\\n");
    else if (marks >= 60)
        printf("Grade D\\n");
    else
        printf("Grade F\\n");
}`},
    ]
  },

  {
    id: 'M2-3',
    module: 'Module 2',
    topic: 'Switch Statement',
    priority: 2,
    marks: 8,
    years: ['Jan2026','Jul2024','Jul2024supp','Sep2025'],
    questions: [
      'Explain the working of switch statement with syntax and flowchart. (8M)',
      'Explain the syntax of switch statement. (6M)',
      'Write a C program to read average marks and assign grade using switch statement. (7M)',
    ],
    answer: [
      { type:'text', heading:'Definition',
        text:'Switch statement evaluates an expression and compares it with multiple case values. When a match is found, the corresponding block executes. break prevents fall-through. default handles no-match.' },
      { type:'code', heading:'Syntax',
        code:`switch (expression)
{
    case value1:
        statement(s);
        break;        /* IMPORTANT: prevents fall-through */
    case value2:
        statement(s);
        break;
    default:
        statement(s); /* Executes if no case matches */
}`},
      { type:'code', heading:'Example — Simple Calculator',
        code:`#include<stdio.h>
void main()
{
    float a, b, result;
    char op;
    printf("Enter operator (+,-,*,/): ");
    scanf(" %c", &op);
    printf("Enter two numbers: ");
    scanf("%f %f", &a, &b);

    switch (op)
    {
        case '+': result = a+b; printf("Result = %.2f\\n", result); break;
        case '-': result = a-b; printf("Result = %.2f\\n", result); break;
        case '*': result = a*b; printf("Result = %.2f\\n", result); break;
        case '/':
            if (b != 0) { result = a/b; printf("Result = %.2f\\n", result); }
            else printf("Division by zero!\\n");
            break;
        default: printf("Invalid operator!\\n");
    }
}`},
      { type:'code', heading:'Grade using Switch',
        code:`#include<stdio.h>
void main()
{
    int marks;
    printf("Enter marks (0-100): ");
    scanf("%d", &marks);
    int grade = marks / 10;

    switch (grade)
    {
        case 10:
        case 9:  printf("Honours\\n"); break;
        case 8:
        case 7:  printf("First Division\\n"); break;
        case 6:  printf("Second Division\\n"); break;
        case 5:  printf("Third Division\\n"); break;
        default: printf("Fail\\n");
    }
}`},
    ]
  },

  {
    id: 'M2-4',
    module: 'Module 2',
    topic: 'Loops — while, for, do-while',
    priority: 1,
    marks: 10,
    years: ['Dec2023','Sep2024supp','Sep2024','Mar2025','Jul2025','Feb2025'],
    questions: [
      'Explain different types of loops in C program language with syntax. (10M)',
      'Explain different types of loops with syntax and flowchart. (8M)',
      'With syntax and flowchart explain working of while loop. Give example. (5M)',
      'Explain do-while statement with an example program. (6M)',
    ],
    answer: [
      { type:'code', heading:'1. while Loop — Entry Controlled (condition checked first)',
        code:`/* Syntax */
initialization;
while (condition)
{
    statement(s);
    update;
}

/* Flowchart: START → [condition?] → TRUE → body → update → back to condition
                                  → FALSE → exit

/* Example: Sum of first N natural numbers */
#include<stdio.h>
void main()
{
    int i = 1, n, sum = 0;
    printf("Enter N: ");
    scanf("%d", &n);
    while (i <= n)
    {
        sum = sum + i;
        i++;
    }
    printf("Sum = %d\\n", sum);
}`},
      { type:'code', heading:'2. for Loop — Compact Entry Controlled',
        code:`/* Syntax */
for (initialization; condition; update)
{
    statement(s);
}

/* Example: Print N to 1 (reverse) */
#include<stdio.h>
void main()
{
    int i, n;
    printf("Enter N: ");
    scanf("%d", &n);
    for (i = n; i >= 1; i--)
        printf("%d ", i);
}`},
      { type:'code', heading:'3. do-while Loop — Exit Controlled (body runs at least ONCE)',
        code:`/* Syntax */
initialization;
do
{
    statement(s);
    update;
} while (condition);   /* Semicolon REQUIRED */

/* Flowchart: START → body → update → [condition?] → TRUE → back to body
                                                   → FALSE → exit

/* Key difference: Body executes at least once even if condition is FALSE */
#include<stdio.h>
void main()
{
    int i = 1;
    do
    {
        printf("%d ", i);
        i++;
    } while (i <= 5);
    /* Output: 1 2 3 4 5 */
}`},
      { type:'table', heading:'while vs do-while — 4 Key Differences',
        headers:['Feature','while','do-while'],
        rows:[
          ['Type','Entry-controlled (pre-test)','Exit-controlled (post-test)'],
          ['Condition check','Checked BEFORE executing body','Checked AFTER executing body'],
          ['Min. executions','Zero (may not execute at all)','At least ONE (always executes once)'],
          ['Semicolon','while(cond) — no semicolon','while(cond); — semicolon needed'],
          ['Use case','When 0 iterations possible','Menu-driven programs'],
        ]},
    ]
  },

  {
    id: 'M2-5',
    module: 'Module 2',
    topic: 'break and continue',
    priority: 2,
    marks: 4,
    years: ['Jul2024','Jul2024supp','Sep2024','Sep2024supp','Feb2025'],
    questions: [
      'List any four differences between: i) while and do-while loop  ii) break and continue (8M)',
      'Differentiate: i) While loop and do-while loop  ii) Break and continue (8M)',
    ],
    answer: [
      { type:'table', heading:'break vs continue',
        headers:['Feature','break','continue'],
        rows:[
          ['Purpose','Terminates (exits) the loop immediately','Skips current iteration, continues to next'],
          ['Effect','Loop ends — no more iterations','Loop continues with next iteration'],
          ['Used in','Loops and switch statement','Only in loops'],
          ['After break','Execution moves to statement after loop','Execution goes to loop update/condition'],
        ]},
      { type:'code', heading:'Example',
        code:`/* break example: stop at 5 */
for (int i = 1; i <= 10; i++)
{
    if (i == 5) break;      /* Exit loop when i=5 */
    printf("%d ", i);
}
/* Output: 1 2 3 4 */

/* continue example: skip 5 */
for (int i = 1; i <= 10; i++)
{
    if (i == 5) continue;   /* Skip when i=5 */
    printf("%d ", i);
}
/* Output: 1 2 3 4 6 7 8 9 10 */`},
    ]
  },

  {
    id: 'M2-6',
    module: 'Module 2',
    topic: 'Palindrome Check',
    priority: 2,
    marks: 8,
    years: ['Mar2025','Jul2025','Sep2024','Sep2024supp'],
    questions: [
      'Develop a C program to check whether a given number is palindrome or not. (8M)',
      'Develop a C program to check the given 4 digit number is a palindrome or not. (8M)',
      'A person wants to register his car with a palindrome number. Write a C program to check. (8M)',
    ],
    answer: [
      { type:'text', heading:'Logic',
        text:'A palindrome reads the same forwards and backwards (121, 1221, 12321). Reverse the digits of the number and compare with original. If equal → palindrome.' },
      { type:'code', heading:'Program',
        code:`#include<stdio.h>
void main()
{
    int n, original, rev = 0, rem;

    printf("Enter a number: ");
    scanf("%d", &n);

    original = n;            /* Save original value */

    while (n != 0)
    {
        rem = n % 10;        /* Extract last digit */
        rev = rev * 10 + rem; /* Build reversed number */
        n   = n / 10;        /* Remove last digit */
    }

    if (original == rev)
        printf("%d is a PALINDROME\\n", original);
    else
        printf("%d is NOT a Palindrome\\n", original);
}`},
      { type:'output', text:'Input: 121\nReverse = 121\n121 is a PALINDROME\n\nInput: 123\nReverse = 321\n123 is NOT a Palindrome' },
    ]
  },

  {
    id: 'M2-7',
    module: 'Module 2',
    topic: 'Sine Series',
    priority: 2,
    marks: 7,
    years: ['Feb2025','Sep2025','Jan2026'],
    questions: [
      'Write a C program to find sine value for a given angle (sin x = x - x³/3! + x⁵/5! - x⁷/7! up to n terms). Also verify using built-in function. (7M)',
      'Sine series is sin x = x - x³/3! + x⁵/5! - x⁷/7! up to n terms. Write a C program to find sine value. Also verify using built-in function. (7M)',
      'Write a C program to find sine value up to n terms. Also verify using built-in function. (6M)',
    ],
    answer: [
      { type:'text', heading:'Formula',
        text:'sin(x) = x - x³/3! + x⁵/5! - x⁷/7! + ...\nAngle must be in radians. Convert degrees to radians: x = angle × π / 180' },
      { type:'code', heading:'Program',
        code:`#include<stdio.h>
#include<math.h>

void main()
{
    float x, angle, sinx = 0, term;
    int i, n;

    printf("Enter angle in degrees: ");
    scanf("%f", &angle);
    printf("Enter number of terms: ");
    scanf("%d", &n);

    x    = angle * 3.14159 / 180.0; /* Convert to radians */
    term = x;
    sinx = x;

    for (i = 1; i < n; i++)
    {
        /* Next term = prev term * (-x²) / ((2i)(2i+1)) */
        term = term * (-1) * x * x / ((2*i) * (2*i + 1));
        sinx = sinx + term;
    }

    printf("Calculated sin(%.1f) = %.4f\\n", angle, sinx);
    printf("Built-in   sin(%.1f) = %.4f\\n", angle, sin(x));
}`},
      { type:'output', text:'Input: angle=30, n=5\nCalculated sin(30.0) = 0.5000\nBuilt-in   sin(30.0) = 0.5000' },
    ]
  },

  {
    id: 'M2-8',
    module: 'Module 2',
    topic: 'Sum of Series 1/2! + 1/3! + ... 1/n!',
    priority: 2,
    marks: 6,
    years: ['Jul2024','Jul2024supp'],
    questions: [
      'Develop a C program to find the sum of N numbers for the given series: 1/2! + 1/3! + 1/4! + ... + 1/n! (6M)',
    ],
    answer: [
      { type:'code', heading:'Program',
        code:`#include<stdio.h>
void main()
{
    int i, j, n;
    float sum = 0, fact;

    printf("Enter N: ");
    scanf("%d", &n);

    for (i = 2; i <= n + 1; i++)    /* i = 2, 3, 4, ..., n+1 */
    {
        fact = 1;
        for (j = 1; j <= i; j++)    /* Calculate i! */
            fact = fact * j;
        sum = sum + (1.0 / fact);   /* Add 1/i! to sum */
    }

    printf("Sum = %.4f\\n", sum);
}`},
      { type:'output', text:'Input: N=5\nTerms: 1/2!+1/3!+1/4!+1/5!+1/6! = 0.5+0.1667+0.0417+0.0083+0.0014\nSum = 0.7181' },
    ]
  },

  {
    id: 'M2-9',
    module: 'Module 2',
    topic: 'Sum of Digits',
    priority: 2,
    marks: 6,
    years: ['Feb2025'],
    questions: [
      'Write a C program to find sum of digits of a given number. (6M)',
    ],
    answer: [
      { type:'code', heading:'Program',
        code:`#include<stdio.h>
void main()
{
    int n, sum = 0, rem;

    printf("Enter a number: ");
    scanf("%d", &n);

    while (n != 0)
    {
        rem = n % 10;   /* Extract last digit */
        sum = sum + rem;
        n   = n / 10;   /* Remove last digit */
    }

    printf("Sum of digits = %d\\n", sum);
}
/* Example: n=123 → 1+2+3 = 6 */`},
    ]
  },

  {
    id: 'M2-10',
    module: 'Module 2',
    topic: 'Pattern Printing',
    priority: 2,
    marks: 6,
    years: ['Jul2025'],
    questions: [
      'Develop a C program to print the following pattern using any looping technique:\n1\n1 2\n1 2 3\n1 2 3 4 (6M)',
    ],
    answer: [
      { type:'code', heading:'Program',
        code:`#include<stdio.h>
void main()
{
    int i, j, n;
    printf("Enter number of rows: ");
    scanf("%d", &n);

    for (i = 1; i <= n; i++)
    {
        for (j = 1; j <= i; j++)
            printf("%d ", j);
        printf("\\n");
    }
}
/* Output for n=4:
   1
   1 2
   1 2 3
   1 2 3 4 */`},
    ]
  },

  {
    id: 'M2-11',
    module: 'Module 2',
    topic: 'Prime Numbers in Range',
    priority: 2,
    marks: 8,
    years: ['Mar2025'],
    questions: [
      'Write a C program to print prime numbers in the given range. (8M)',
    ],
    answer: [
      { type:'code', heading:'Program',
        code:`#include<stdio.h>
void main()
{
    int low, high, i, j, isPrime;

    printf("Enter lower and upper limit: ");
    scanf("%d %d", &low, &high);

    printf("Prime numbers between %d and %d:\\n", low, high);

    for (i = low; i <= high; i++)
    {
        if (i < 2) continue;
        isPrime = 1;
        for (j = 2; j <= i/2; j++)
        {
            if (i % j == 0) { isPrime = 0; break; }
        }
        if (isPrime) printf("%d ", i);
    }
}`},
    ]
  },

  {
    id: 'M2-12',
    module: 'Module 2',
    topic: 'Electric Power Charges',
    priority: 3,
    marks: 9,
    years: ['Feb2025'],
    questions: [
      'An electric power company charges: 0-200 units: Rs.0.50/unit; 201-400: Rs.100+Rs.0.65/unit excess; 401-600: Rs.230+Rs.0.80/unit excess; 601+: Rs.390+Rs.1.00/unit excess. Write a C program to read customer number, power consumed and display amount. (9M)',
    ],
    answer: [
      { type:'code', heading:'Program',
        code:`#include<stdio.h>
void main()
{
    int custno, units;
    float amount;

    printf("Enter customer number: ");
    scanf("%d", &custno);
    printf("Enter units consumed: ");
    scanf("%d", &units);

    if (units <= 200)
        amount = units * 0.50;
    else if (units <= 400)
        amount = 100 + (units - 200) * 0.65;
    else if (units <= 600)
        amount = 230 + (units - 400) * 0.80;
    else
        amount = 390 + (units - 600) * 1.00;

    printf("Customer No : %d\\n", custno);
    printf("Units Used  : %d\\n", units);
    printf("Amount Due  : Rs. %.2f\\n", amount);
}`},
    ]
  },

  {
    id: 'M2-13',
    module: 'Module 2',
    topic: 'Sum of First N Natural Numbers',
    priority: 3,
    marks: 7,
    years: ['Sep2025'],
    questions: [
      'Write a C program to find sum of first N natural numbers. (7M)',
    ],
    answer: [
      { type:'code', heading:'Program',
        code:`#include<stdio.h>
void main()
{
    int i, n, sum = 0;
    printf("Enter N: ");
    scanf("%d", &n);
    for (i = 1; i <= n; i++)
        sum = sum + i;
    printf("Sum of first %d natural numbers = %d\\n", n, sum);
}
/* Formula check: sum = n*(n+1)/2 = 10*11/2 = 55 for n=10 */`},
    ]
  },

  {
    id: 'M2-14',
    module: 'Module 2',
    topic: 'Case Conversion (Upper to Lower)',
    priority: 3,
    marks: 6,
    years: ['Jul2025'],
    questions: [
      'Develop a C program to convert the character in lower case to upper case or upper case to lower case. (6M)',
    ],
    answer: [
      { type:'code', heading:'Program',
        code:`#include<stdio.h>
void main()
{
    char c;
    printf("Enter a character: ");
    scanf(" %c", &c);

    if (c >= 'a' && c <= 'z')
    {
        c = c - 32;      /* lowercase to uppercase: subtract 32 */
        printf("Uppercase: %c\\n", c);
    }
    else if (c >= 'A' && c <= 'Z')
    {
        c = c + 32;      /* uppercase to lowercase: add 32 */
        printf("Lowercase: %c\\n", c);
    }
    else
        printf("Not a letter\\n");
}`},
    ]
  },

  /* ══════════════════════════════════════════════
     MODULE 3 — ARRAYS AND STRINGS
  ══════════════════════════════════════════════ */

  {
    id: 'M3-1',
    module: 'Module 3',
    topic: 'String Handling Functions',
    priority: 1,
    marks: 10,
    years: ['Dec2023','Sep2024supp','Jul2024','Sep2024','Jul2025','Sep2025','Mar2025','Feb2025'],
    questions: [
      'Explain the following string handling functions: i) strcat  ii) strcmp  iii) strcpy  iv) strlen  v) strrev (10M)',
      'Explain with an example any five string handling functions. (10M)',
      'List the string handling functions in C. Explain any 3 string functions with an example. (8M)',
      'Explain following string functions: i) strlen()  ii) strcpy()  iii) strcmp()  iv) strcat() (7M)',
      'Define string. List all the string manipulation functions. Explain any four with example. (10M)',
    ],
    answer: [
      { type:'text', heading:'Header Required',
        text:'All string functions require: #include<string.h>' },
      { type:'table', heading:'5 String Handling Functions',
        headers:['Function','Purpose','Syntax','Example → Output'],
        rows:[
          ['strlen(s)','Returns length of string (excluding null \\0)','int strlen(char s[])','strlen("hello") → 5'],
          ['strcpy(d,s)','Copies string s into destination d','char* strcpy(char d[], char s[])','strcpy(d,"hello") → d="hello"'],
          ['strcmp(s1,s2)','Compares strings: 0=equal, >0=s1>s2, <0=s1<s2','int strcmp(char s1[], char s2[])','strcmp("abc","abc") → 0'],
          ['strcat(d,s)','Appends s to end of d','char* strcat(char d[], char s[])','strcat("Hello","World") → "HelloWorld"'],
          ['strrev(s)','Reverses the string','char* strrev(char s[])','strrev("hello") → "olleh"'],
        ]},
      { type:'code', heading:'Complete Example Program',
        code:`#include<stdio.h>
#include<string.h>
void main()
{
    char s1[50] = "Hello";
    char s2[20] = "World";
    char s3[50];

    printf("strlen(s1)   = %d\\n",   strlen(s1));     /* 5 */
    strcpy(s3, s1);
    printf("strcpy s3    = %s\\n",   s3);             /* Hello */
    printf("strcmp       = %d\\n",   strcmp(s1,s2));  /* negative */
    strcat(s1, s2);
    printf("strcat s1    = %s\\n",   s1);             /* HelloWorld */
    strrev(s2);
    printf("strrev s2    = %s\\n",   s2);             /* dlroW */
}`},
    ]
  },

  {
    id: 'M3-2',
    module: 'Module 3',
    topic: '1D and 2D Array Declaration & Initialization',
    priority: 1,
    marks: 10,
    years: ['Dec2023','Sep2024supp','Jul2024','Jul2024supp','Feb2025','Jul2025','Mar2025','Sep2025'],
    questions: [
      'Illustrate initialization and declaration of 1-dimensional and 2-dimensional arrays with example. (10M)',
      'Define array? How to declare 1D array? How to initialize 1D array? Explain with an example the different ways of initializing 1D array. (10M)',
      'Define array. Explain how one-dimension and two-dimension arrays are declared and initialized. (8M)',
      'Define array. Explain how to declare and initialize one dimensional array. Also write the output of the program (given code). (5M)',
    ],
    answer: [
      { type:'text', heading:'Definition',
        text:'An array is a collection of elements of the same data type stored in contiguous memory locations, accessed using a common name and index.' },
      { type:'list', heading:'1D Array — Declaration and Initialization',
        items:[
          'Declaration: datatype arrayname[size];   Example: int a[5];',
          'Method 1 — At declaration: int a[5] = {10, 20, 30, 40, 50};',
          'Method 2 — Partial init: int a[5] = {10, 20}; → remaining elements = 0',
          'Method 3 — Without size: int a[] = {10, 20, 30}; → size auto = 3',
          'Method 4 — At runtime: scanf("%d", &a[i]);',
          'Index starts from 0. a[0]=first element, a[n-1]=last element',
        ]},
      { type:'code', heading:'1D Array Program',
        code:`#include<stdio.h>
void main()
{
    int a[5] = {10, 20, 30, 40, 50};
    int i, sum = 0;

    for (i = 0; i < 5; i++)
    {
        printf("a[%d] = %d\\n", i, a[i]);
        sum = sum + a[i];
    }
    printf("Sum = %d\\n", sum);   /* Sum = 150 */
}`},
      { type:'list', heading:'2D Array — Declaration and Initialization',
        items:[
          'Declaration: datatype arrayname[rows][cols];   Example: int a[3][3];',
          'Initialization: int a[2][3] = {{1,2,3},{4,5,6}};',
          'Access: a[row][col]   Example: a[0][0]=1, a[1][2]=6',
          'Row-major storage: elements stored row by row in memory',
        ]},
      { type:'code', heading:'2D Array Program — Read and Print Matrix',
        code:`#include<stdio.h>
void main()
{
    int a[3][3], i, j;
    printf("Enter 9 elements of 3x3 matrix:\\n");
    for (i = 0; i < 3; i++)
        for (j = 0; j < 3; j++)
            scanf("%d", &a[i][j]);

    printf("Matrix:\\n");
    for (i = 0; i < 3; i++)
    {
        for (j = 0; j < 3; j++)
            printf("%d\\t", a[i][j]);
        printf("\\n");
    }
}`},
    ]
  },

  {
    id: 'M3-3',
    module: 'Module 3',
    topic: 'Matrix Multiplication',
    priority: 1,
    marks: 10,
    years: ['Jul2024','Jul2024supp','Sep2024','Mar2025','Jul2025','Feb2025'],
    questions: [
      'Develop a C program to find the product of two matrices. (10M)',
      'Write a C program to read two matrices, check whether multipliable. If so, find the product matrix. Otherwise, display suitable message. (10M)',
      'Develop a C program to compute the product of two given matrix. (8M)',
      'Write a C program to read two matrices and find the product of them and print given matrices as well as product matrix. (8M)',
    ],
    answer: [
      { type:'text', heading:'Rule',
        text:'Matrix multiplication A×B is possible ONLY when columns of A = rows of B.\nIf A is m×n and B is n×p, then result C is m×p.\nC[i][j] = sum of A[i][k] × B[k][j] for k = 0 to n-1' },
      { type:'code', heading:'Complete Program',
        code:`#include<stdio.h>
void main()
{
    int a[10][10], b[10][10], c[10][10];
    int m, n, p, q, i, j, k;

    printf("Enter rows and cols of A: ");
    scanf("%d %d", &m, &n);
    printf("Enter rows and cols of B: ");
    scanf("%d %d", &p, &q);

    if (n != p)
    {
        printf("Multiplication NOT possible! Columns of A must equal Rows of B\\n");
        return;
    }

    printf("Enter elements of A:\\n");
    for (i = 0; i < m; i++)
        for (j = 0; j < n; j++)
            scanf("%d", &a[i][j]);

    printf("Enter elements of B:\\n");
    for (i = 0; i < p; i++)
        for (j = 0; j < q; j++)
            scanf("%d", &b[i][j]);

    /* Matrix Multiplication */
    for (i = 0; i < m; i++)
        for (j = 0; j < q; j++)
        {
            c[i][j] = 0;
            for (k = 0; k < n; k++)
                c[i][j] = c[i][j] + a[i][k] * b[k][j];
        }

    printf("\\nProduct Matrix C = A x B:\\n");
    for (i = 0; i < m; i++)
    {
        for (j = 0; j < q; j++)
            printf("%d\\t", c[i][j]);
        printf("\\n");
    }
}`},
    ]
  },

  {
    id: 'M3-4',
    module: 'Module 3',
    topic: 'Bubble Sort',
    priority: 2,
    marks: 7,
    years: ['Mar2025','Feb2025','Jul2025'],
    questions: [
      'Develop a C program to sort the given array in ascending order using bubble sort technique. (7M)',
      'Write a C program to read n numbers using array. Sort them using bubble sort technique. Print sorted array on the screen. (6M)',
    ],
    answer: [
      { type:'text', heading:'Logic',
        text:'Bubble sort compares adjacent elements and swaps them if out of order. After each pass, the largest element "bubbles up" to its correct position. Needs n-1 passes for n elements.' },
      { type:'code', heading:'Program',
        code:`#include<stdio.h>
void main()
{
    int a[50], n, i, j, temp;

    printf("Enter number of elements: ");
    scanf("%d", &n);
    printf("Enter elements: ");
    for (i = 0; i < n; i++)
        scanf("%d", &a[i]);

    /* Bubble Sort */
    for (i = 0; i < n-1; i++)          /* n-1 passes */
    {
        for (j = 0; j < n-i-1; j++)    /* Compare adjacent */
        {
            if (a[j] > a[j+1])         /* Swap if out of order */
            {
                temp    = a[j];
                a[j]    = a[j+1];
                a[j+1]  = temp;
            }
        }
    }

    printf("Sorted Array (Ascending): ");
    for (i = 0; i < n; i++)
        printf("%d ", a[i]);
}`},
      { type:'output', text:'Input: 5 elements: 64 34 25 12 22\nSorted: 12 22 25 34 64' },
    ]
  },

  {
    id: 'M3-5',
    module: 'Module 3',
    topic: 'Count Vowels and Consonants',
    priority: 2,
    marks: 10,
    years: ['Sep2024supp','Feb2025','Sep2025'],
    questions: [
      'Write a C program to accept a string and count the vowels, consonants and digits in it. (10M)',
      'Write a C program to read a string, find number of vowels and consonants in it. (7M)',
    ],
    answer: [
      { type:'code', heading:'Program',
        code:`#include<stdio.h>
void main()
{
    char str[100];
    int i, vowels = 0, consonants = 0, digits = 0;

    printf("Enter a string: ");
    gets(str);

    for (i = 0; str[i] != '\\0'; i++)
    {
        char c = str[i];
        if (c=='a'||c=='e'||c=='i'||c=='o'||c=='u'||
            c=='A'||c=='E'||c=='I'||c=='O'||c=='U')
            vowels++;
        else if ((c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z'))
            consonants++;
        else if (c >= '0' && c <= '9')
            digits++;
    }

    printf("Vowels     = %d\\n", vowels);
    printf("Consonants = %d\\n", consonants);
    printf("Digits     = %d\\n", digits);
}`},
      { type:'output', text:'Input: Hello123\nVowels     = 2\nConsonants = 3\nDigits     = 3' },
    ]
  },

  {
    id: 'M3-6',
    module: 'Module 3',
    topic: 'Matrix Transpose',
    priority: 2,
    marks: 7,
    years: ['Sep2025','Sep2024supp'],
    questions: [
      'Write a C program to find the transpose of a matrix. Print both the given and transposed matrix. (7M)',
      'Write a program in C to find transpose of a given matrix and also sum of upper triangle and lower triangle elements of the transposed matrix. (8M)',
    ],
    answer: [
      { type:'text', heading:'Logic',
        text:'Transpose of matrix A is obtained by swapping rows and columns. If A[i][j], then Transpose T[j][i].' },
      { type:'code', heading:'Program',
        code:`#include<stdio.h>
void main()
{
    int a[10][10], t[10][10], r, c, i, j;

    printf("Enter rows and columns: ");
    scanf("%d %d", &r, &c);

    printf("Enter matrix elements:\\n");
    for (i = 0; i < r; i++)
        for (j = 0; j < c; j++)
            scanf("%d", &a[i][j]);

    /* Transpose: T[j][i] = A[i][j] */
    for (i = 0; i < r; i++)
        for (j = 0; j < c; j++)
            t[j][i] = a[i][j];

    printf("Original Matrix:\\n");
    for (i = 0; i < r; i++)
    { for (j = 0; j < c; j++) printf("%d\\t", a[i][j]); printf("\\n"); }

    printf("Transposed Matrix:\\n");
    for (i = 0; i < c; i++)
    { for (j = 0; j < r; j++) printf("%d\\t", t[i][j]); printf("\\n"); }
}`},
    ]
  },

  {
    id: 'M3-7',
    module: 'Module 3',
    topic: 'Linear Search',
    priority: 3,
    marks: 8,
    years: ['Jul2025'],
    questions: [
      'Develop a C program to search a given number using linear search. (8M)',
    ],
    answer: [
      { type:'text', heading:'Logic',
        text:'Linear search checks each element one by one from beginning to end. If found, print position. If not found after checking all elements, print "Not Found".' },
      { type:'code', heading:'Program',
        code:`#include<stdio.h>
void main()
{
    int a[50], n, key, i, found = 0;

    printf("Enter number of elements: ");
    scanf("%d", &n);
    printf("Enter elements: ");
    for (i = 0; i < n; i++)
        scanf("%d", &a[i]);

    printf("Enter element to search: ");
    scanf("%d", &key);

    for (i = 0; i < n; i++)
    {
        if (a[i] == key)
        {
            printf("%d found at position %d\\n", key, i+1);
            found = 1;
            break;
        }
    }
    if (!found)
        printf("%d NOT found in array\\n", key);
}`},
    ]
  },

  {
    id: 'M3-8',
    module: 'Module 3',
    topic: 'Sum of Array Elements / Largest Element',
    priority: 3,
    marks: 7,
    years: ['Sep2024supp','Sep2025','Jul2025'],
    questions: [
      'Write a C program to read N elements and find the sum of array elements. (6M)',
      'Write a C program to find the smallest element in the given array. (7M)',
      'Design a C program to read the elements of the matrix of size 3x3 and compute largest element of matrix elements. (7M)',
    ],
    answer: [
      { type:'code', heading:'Sum, Largest, Smallest in Array',
        code:`#include<stdio.h>
void main()
{
    int a[50], n, i, sum = 0, largest, smallest;

    printf("Enter number of elements: ");
    scanf("%d", &n);
    printf("Enter elements: ");
    for (i = 0; i < n; i++)
        scanf("%d", &a[i]);

    largest  = a[0];
    smallest = a[0];

    for (i = 0; i < n; i++)
    {
        sum = sum + a[i];
        if (a[i] > largest)  largest  = a[i];
        if (a[i] < smallest) smallest = a[i];
    }

    printf("Sum      = %d\\n", sum);
    printf("Largest  = %d\\n", largest);
    printf("Smallest = %d\\n", smallest);
}`},
    ]
  },

  /* ══════════════════════════════════════════════
     MODULE 4 — FUNCTIONS, STRUCTURES, POINTERS
  ══════════════════════════════════════════════ */

  {
    id: 'M4-1',
    module: 'Module 4',
    topic: 'Categories of Functions',
    priority: 1,
    marks: 10,
    years: ['Dec2023','Sep2024supp','Mar2025','Jul2024','Sep2024','Sep2025'],
    questions: [
      'Explain the structure of function and elements of user defined functions. (10M)',
      'List the categories of functions? Explain with an example the categories of functions. (10M)',
      'Describe the elements of user defined function. (8M)',
      'With example program explain: i) Functions with arguments and no return value  ii) Functions with arguments and one return value (8M)',
      'With example, explain different categories of functions with respect to argument and return type. (8M)',
    ],
    answer: [
      { type:'list', heading:'Elements of a User-Defined Function',
        items:[
          '1. Function Declaration (Prototype) — Tells compiler about function before it is defined. Written before main(). Syntax: returntype functionname(parameter types);',
          '2. Function Definition — Actual body of the function with the code. Written as a complete block.',
          '3. Function Call — Statement that invokes (calls) the function. Written inside main() or another function.',
        ]},
      { type:'table', heading:'4 Categories Based on Arguments and Return Value',
        headers:['Category','Arguments?','Return Value?','Syntax','Call'],
        rows:[
          ['Type 1','No','No (void)','void display()','display();'],
          ['Type 2','Yes','No (void)','void add(int a, int b)','add(5,3);'],
          ['Type 3','No','Yes','int getval()','x = getval();'],
          ['Type 4','Yes','Yes','int add(int a, int b)','x = add(5,3);'],
        ]},
      { type:'code', heading:'All 4 Types with Examples',
        code:`#include<stdio.h>

/* Type 1: No args, no return */
void display()
{
    printf("Hello World\\n");
}

/* Type 2: With args, no return */
void add(int a, int b)
{
    printf("Sum = %d\\n", a + b);
}

/* Type 3: No args, with return */
int getvalue()
{
    return 10;
}

/* Type 4: With args, with return */
int multiply(int a, int b)
{
    return a * b;
}

void main()
{
    display();              /* Type 1 */
    add(5, 3);              /* Type 2 */
    int x = getvalue();     /* Type 3 */
    printf("x = %d\\n", x);
    int result = multiply(4, 5); /* Type 4 */
    printf("Product = %d\\n", result);
}`},
    ]
  },

  {
    id: 'M4-2',
    module: 'Module 4',
    topic: 'Call by Value vs Call by Reference',
    priority: 1,
    marks: 10,
    years: ['Dec2023','Sep2024supp','Feb2025','Jul2024','Sep2024','Sep2024supp'],
    questions: [
      'Differentiate call by value and call by reference with suitable example. (10M)',
      'Discuss the various ways of passing parameter to function. (10M)',
      'Explain with an example: i) pass by value  ii) pass by reference (10M)',
      'Explain call by value and call by reference with examples. (8M)',
    ],
    answer: [
      { type:'table', heading:'Call by Value vs Call by Reference',
        headers:['Feature','Call by Value','Call by Reference'],
        rows:[
          ['What is passed?','Copy of actual value','Address of variable (using &)'],
          ['Effect on original','Original NOT changed','Original IS changed'],
          ['Syntax','void f(int a)','void f(int *a)'],
          ['How to call','f(x);','f(&x);'],
          ['Safety','Safer','Less safe — original modifiable'],
          ['Use case','When original must not change','swap, sort (must modify original)'],
        ]},
      { type:'code', heading:'Call by Value — Original unchanged',
        code:`void change(int x)
{
    x = 100;
    printf("Inside: x = %d\\n", x);
}
void main()
{
    int a = 10;
    change(a);
    printf("Outside: a = %d\\n", a); /* Still 10 */
}`},
      { type:'code', heading:'Call by Reference — Swap using Pointers',
        code:`#include<stdio.h>
void swap(int *x, int *y)
{
    int temp;
    temp = *x;   /* Value at address x */
    *x   = *y;
    *y   = temp;
}
void main()
{
    int a = 10, b = 20;
    printf("Before: a=%d b=%d\\n", a, b);
    swap(&a, &b);
    printf("After:  a=%d b=%d\\n", a, b);
}
/* Output:
   Before: a=10 b=20
   After:  a=20 b=10 */`},
    ]
  },

  {
    id: 'M4-3',
    module: 'Module 4',
    topic: 'Structures',
    priority: 1,
    marks: 10,
    years: ['Dec2023','Sep2024supp','Jul2024','Sep2024','Feb2025','Mar2025','Sep2025'],
    questions: [
      'Define structure? How to declare structure? How to initialize structure members? List any five major differences between structure and union. (10M)',
      'Develop a C program to read and print N student records (Name, roll number, marks) using structures. (10M)',
      'Define a structure data type called student with members: name, usn, marks of CIE1, CIE2, CIE3, activity1, activity2. Write a C program. (8M)',
      'Define a structure called employee. Read information of 50 employees whose salary is above 50,000. (10M)',
      'Define a structure data type called time with members hour, minute, second. Display time as 03:45:56. (7M)',
    ],
    answer: [
      { type:'text', heading:'Definition',
        text:'A structure is a user-defined data type that groups variables of different data types under a single name. It is declared using keyword struct. Members are accessed using dot (.) operator.' },
      { type:'code', heading:'Syntax',
        code:`/* Define structure */
struct structure_name
{
    datatype member1;
    datatype member2;
};

/* Declare variable */
struct structure_name variable_name;

/* Access members */
variable_name.member1 = value;`},
      { type:'code', heading:'Program — Student Record for N Students',
        code:`#include<stdio.h>
struct student
{
    char  name[50];
    int   rollno;
    float marks;
};
void main()
{
    struct student s[50];
    int i, n;
    printf("Enter number of students: ");
    scanf("%d", &n);
    for (i = 0; i < n; i++)
    {
        printf("Name: ");   scanf("%s",  s[i].name);
        printf("Roll: ");   scanf("%d", &s[i].rollno);
        printf("Marks: ");  scanf("%f", &s[i].marks);
    }
    printf("\\nName\\t\\tRoll\\tMarks\\n");
    printf("------------------------------\\n");
    for (i = 0; i < n; i++)
        printf("%s\\t\\t%d\\t%.2f\\n", s[i].name, s[i].rollno, s[i].marks);
}`},
      { type:'table', heading:'Structure vs Union — 5 Differences',
        headers:['Feature','Structure (struct)','Union (union)'],
        rows:[
          ['Keyword','struct','union'],
          ['Memory','Sum of all member sizes','Size of largest member'],
          ['Storage','All members have own memory','All members share one memory'],
          ['Simultaneous values','All members hold values at same time','Only ONE member holds value at a time'],
          ['Size example','int+float+char = 4+4+1 = 9 bytes','int+float+char = 4 bytes'],
        ]},
    ]
  },

  {
    id: 'M4-4',
    module: 'Module 4',
    topic: 'Pointers',
    priority: 2,
    marks: 6,
    years: ['Feb2025','Mar2025','Jul2025','Sep2024supp'],
    questions: [
      'What is a pointer? How are pointers declared and initialized? (6M)',
      'What is a pointer? How do you declare and initialize pointer? Give examples. (5M)',
      'Explain pointer variable, declaration, initialization and arithmetic operations with example. (6M)',
    ],
    answer: [
      { type:'text', heading:'Definition',
        text:'A pointer is a variable that stores the memory address of another variable. It is declared using * symbol. & (address-of) operator gives the address. * (dereference) operator gives the value at that address.' },
      { type:'code', heading:'Declaration, Initialization, Dereferencing',
        code:`#include<stdio.h>
void main()
{
    int a = 10;
    int *p;          /* Declaration: p is pointer to int */
    p = &a;          /* Initialization: p stores address of a */

    printf("Value of a        = %d\\n", a);   /* 10 */
    printf("Address of a (&a) = %u\\n", &a);  /* some address */
    printf("p (address stored)= %u\\n", p);   /* same address */
    printf("*p (value at p)   = %d\\n", *p);  /* 10 */

    *p = 20;         /* Change value through pointer */
    printf("After *p=20, a = %d\\n", a);      /* 20 */
}`},
      { type:'code', heading:'Pointer Arithmetic',
        code:`int a[3] = {10, 20, 30};
int *p = a;          /* p points to a[0] */

printf("%d\\n", *p);     /* 10 → a[0] */
p++;                    /* Move to next int (adds 4 bytes) */
printf("%d\\n", *p);     /* 20 → a[1] */
p++;
printf("%d\\n", *p);     /* 30 → a[2] */`},
    ]
  },

  {
    id: 'M4-5',
    module: 'Module 4',
    topic: 'Factorial Function + nCr',
    priority: 2,
    marks: 8,
    years: ['Feb2025','Mar2025'],
    questions: [
      'Write a user defined function to find the factorial of a number. Using above function write a main function to find the binomial coefficient: nCr = n! / (r!(n-r)!) (8M)',
      'Write a function to calculate factorial of a number. Using this function write a C program to find nCr. (8M)',
    ],
    answer: [
      { type:'code', heading:'Program',
        code:`#include<stdio.h>

/* User-defined function for factorial */
int factorial(int n)
{
    int i, fact = 1;
    for (i = 1; i <= n; i++)
        fact = fact * i;
    return fact;
}

void main()
{
    int n, r, ncr;
    printf("Enter n and r (n >= r): ");
    scanf("%d %d", &n, &r);

    /* nCr = n! / (r! * (n-r)!) */
    ncr = factorial(n) / (factorial(r) * factorial(n - r));

    printf("nC%d = %d\\n", r, ncr);
}
/* Example: n=5, r=2
   5C2 = 5! / (2! * 3!) = 120 / (2*6) = 10 */`},
    ]
  },

  {
    id: 'M4-6',
    module: 'Module 4',
    topic: 'Sum of Array using Pointers',
    priority: 2,
    marks: 10,
    years: ['Jul2024','Sep2024','Dec2023'],
    questions: [
      'Develop a C program to read an array of N elements and find the sum of even numbers and sum of odd numbers using pointers. (10M)',
      'Explain the array of pointer with a example program that computes the sum of elements stored in an array. (10M)',
    ],
    answer: [
      { type:'code', heading:'Sum of Even and Odd using Pointers',
        code:`#include<stdio.h>
void main()
{
    int a[50], n, i;
    int *p;
    int even_sum = 0, odd_sum = 0;

    printf("Enter number of elements: ");
    scanf("%d", &n);
    printf("Enter elements: ");
    for (i = 0; i < n; i++)
        scanf("%d", &a[i]);

    p = a;    /* p points to first element */

    for (i = 0; i < n; i++)
    {
        if (*(p + i) % 2 == 0)
            even_sum += *(p + i);
        else
            odd_sum  += *(p + i);
    }

    printf("Sum of even numbers = %d\\n", even_sum);
    printf("Sum of odd  numbers = %d\\n", odd_sum);
}`},
    ]
  },

  {
    id: 'M4-7',
    module: 'Module 4',
    topic: 'File Handling',
    priority: 3,
    marks: 10,
    years: ['Jul2024','Sep2024','Dec2023','Sep2024supp'],
    questions: [
      'Define file? Explain how to read and write data to files, with a simple example program. List all the file handling functions used in C language. (10M)',
      'Develop a C program that takes a number from the user and stores in the file num.txt. Display appropriate error messages. (10M)',
      'Explain the different file operations with example. (6M)',
    ],
    answer: [
      { type:'text', heading:'Definition',
        text:'A file is a collection of data stored permanently on a storage device. C provides file handling functions through stdio.h using a FILE pointer.' },
      { type:'table', heading:'File Handling Functions',
        headers:['Function','Purpose','Syntax'],
        rows:[
          ['fopen()','Open a file','FILE *fopen(filename, mode)'],
          ['fclose()','Close a file','fclose(fp)'],
          ['fprintf()','Write formatted data to file','fprintf(fp, format, vars)'],
          ['fscanf()','Read formatted data from file','fscanf(fp, format, &vars)'],
          ['fgetc()','Read one character from file','char fgetc(fp)'],
          ['fputc()','Write one character to file','fputc(char, fp)'],
          ['fgets()','Read a string from file','fgets(str, n, fp)'],
          ['fputs()','Write a string to file','fputs(str, fp)'],
        ]},
      { type:'table', heading:'File Opening Modes',
        headers:['Mode','Meaning'],
        rows:[
          ['"r"','Open for reading. Error if file not exists.'],
          ['"w"','Open for writing. Creates new or overwrites existing.'],
          ['"a"','Open for appending. Creates new if not exists.'],
          ['"r+"','Open for reading and writing.'],
        ]},
      { type:'code', heading:'Program — Write number to file num.txt',
        code:`#include<stdio.h>
void main()
{
    FILE *fp;
    int num;

    fp = fopen("num.txt", "w");   /* Open for writing */
    if (fp == NULL)
    {
        printf("Error: Cannot open file!\\n");
        return;
    }

    printf("Enter a number: ");
    scanf("%d", &num);

    fprintf(fp, "%d", num);       /* Write to file */
    fclose(fp);                   /* Close file */
    printf("Number %d written to num.txt\\n", num);

    /* Read back from file */
    fp = fopen("num.txt", "r");
    fscanf(fp, "%d", &num);
    printf("Read from file: %d\\n", num);
    fclose(fp);
}`},
    ]
  },

  {
    id: 'M4-8',
    module: 'Module 4',
    topic: 'GCD using Function',
    priority: 3,
    marks: 8,
    years: ['Sep2024supp'],
    questions: [
      'Write a C program to find the Greatest Common Divisor (GCD) of two numbers using a function. The program should prompt the user to enter two integers and then display their GCD. (8M)',
    ],
    answer: [
      { type:'code', heading:'Program — GCD using Function',
        code:`#include<stdio.h>

/* Function to find GCD using Euclidean algorithm */
int gcd(int a, int b)
{
    while (b != 0)
    {
        int temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

void main()
{
    int a, b, result;
    printf("Enter two integers: ");
    scanf("%d %d", &a, &b);
    result = gcd(a, b);
    printf("GCD of %d and %d = %d\\n", a, b, result);
}
/* Example: a=48, b=18 → GCD = 6 */`},
    ]
  },

  /* ══ MODULE 1 — MISSING TOPICS ══ */

  {
    id: 'M1-10',
    module: 'Module 1',
    topic: 'Conditional (Ternary) Operator',
    priority: 2,
    marks: 4,
    years: ['Sep2024supp','Jul2024','Jul2024supp'],
    questions: [
      'Explain the conditional operator with syntax and example. (4M)',
      'Write a C program to find the largest of two floating point numbers using ternary operator (?:). (6M)',
    ],
    answer: [
      { type:'text', heading:'Definition',
        text:'The conditional (ternary) operator is a shorthand for if-else. It takes 3 operands. Syntax: condition ? expression_if_true : expression_if_false. It is the only ternary operator in C.' },
      { type:'list', heading:'Syntax',
        items:[
          'Syntax: variable = (condition) ? value_if_true : value_if_false;',
          'Example: big = (a > b) ? a : b;   — assigns a if a>b, else assigns b',
          'Can be nested: x = (a>b) ? (a>c ? a : c) : (b>c ? b : c);',
        ]},
      { type:'code', heading:'Example — Largest of Two Floating Point Numbers',
        code:`#include<stdio.h>
void main()
{
    float a, b, big;
    printf("Enter two numbers: ");
    scanf("%f %f", &a, &b);

    big = (a > b) ? a : b;   /* Ternary operator */

    printf("Largest = %.2f\\n", big);
}
/* Output: Enter two numbers: 3.5  7.2
           Largest = 7.20 */`},
      { type:'code', heading:'Example — Even or Odd using Ternary',
        code:`#include<stdio.h>
void main()
{
    int n;
    printf("Enter a number: ");
    scanf("%d", &n);
    (n % 2 == 0) ? printf("Even\\n") : printf("Odd\\n");
}`},
    ]
  },

  {
    id: 'M1-11',
    module: 'Module 1',
    topic: 'Identifier — Definition and Rules',
    priority: 2,
    marks: 4,
    years: ['Dec2023','Sep2024supp'],
    questions: [
      'Define identifier. Explain the rules for constructing an identifier. (4M)',
    ],
    answer: [
      { type:'text', heading:'Definition',
        text:'An identifier is a name given by the programmer to a variable, function, array, or any user-defined entity in a C program. Every identifier must follow specific rules.' },
      { type:'list', heading:'Rules for Constructing an Identifier',
        items:[
          '1. Must begin with a letter (a–z, A–Z) or underscore (_)',
          '2. After the first character, can contain letters, digits (0–9), and underscore',
          '3. Cannot contain spaces, hyphen (-), $, @, or other special characters',
          '4. Cannot be a keyword (reserved word like int, if, while, return, etc.)',
          '5. Case-sensitive: Total and total are treated as two different identifiers',
          '6. Length: No strict limit, but first 31 characters are significant',
          'Valid: sum, _total, count2, myFunction   |   Invalid: 2count, my-var, int, total marks',
        ]},
    ]
  },

  {
    id: 'M1-12',
    module: 'Module 1',
    topic: 'Output Questions — Code Trace (M1)',
    priority: 2,
    marks: 5,
    years: ['Feb2025','Mar2025','Sep2025'],
    questions: [
      'Write the output of the following C code: int n=0,m; for(m=1; m<=n+1; m++) printf("%d%d",++m,m++); (4M)',
      'Write the final value of K: int K=5, i=3, j=252, m; m=i*1000+j*10; K=m/1000+K; K=m%K; K=++K; (5M)',
      'Determine the output: void main() { int a=10,b=20,c=30,p,q,x,y,z; z=++a/b; x=b- -+c%2; y=c=30; p=b/a*x; q=x++-++y; printf("%d %d %d %d %d",p,q,x,y,z); } (5M)',
    ],
    answer: [
      { type:'list', heading:'Output 1: int n=0,m; for(m=1; m<=n+1; m++) printf("%d%d",++m,m++);',
        items:[
          'n=0, so loop condition: m <= 0+1 → m <= 1',
          'm starts at 1. Check: 1<=1 → TRUE',
          'printf("%%d%%d", ++m, m++):  ++m makes m=2, then m++ uses 2 then makes m=3',
          'Output: 2 2   (then m becomes 3)',
          'm++ in loop: m becomes 4. Check: 4<=1 → FALSE. Loop ends.',
          'Final Output: 22',
        ]},
      { type:'list', heading:'Output 2: K value trace (K=5, i=3, j=252)',
        items:[
          'Step 1: m = i*1000 + j*10 = 3000 + 2520 = 5520',
          'Step 2: K = m/1000 + K = 5520/1000 + 5 = 5 + 5 = 10',
          'Step 3: K = m % K = 5520 % 10 = 0',
          'Step 4: K = ++K = ++0 = 1',
          'Final K = 1',
        ]},
    ]
  },

  /* ══ MODULE 2 — MISSING TOPICS ══ */

  {
    id: 'M2-15',
    module: 'Module 2',
    topic: 'Biggest / Smallest of Three Numbers',
    priority: 2,
    marks: 7,
    years: ['Feb2025','Mar2025'],
    questions: [
      'Write a C program to find biggest of three numbers. (3M)',
      'Write a C program to find the smallest of three numbers. (7M)',
    ],
    answer: [
      { type:'code', heading:'Biggest of Three Numbers',
        code:`#include<stdio.h>
void main()
{
    int a, b, c, big;
    printf("Enter 3 numbers: ");
    scanf("%d %d %d", &a, &b, &c);

    big = a;               /* Assume a is biggest */
    if (b > big) big = b;  /* Check b */
    if (c > big) big = c;  /* Check c */

    printf("Biggest = %d\\n", big);
}
/* Using ternary: big = (a>b) ? ((a>c)?a:c) : ((b>c)?b:c); */`},
      { type:'code', heading:'Smallest of Three Numbers',
        code:`#include<stdio.h>
void main()
{
    int a, b, c, small;
    printf("Enter 3 numbers: ");
    scanf("%d %d %d", &a, &b, &c);

    small = a;
    if (b < small) small = b;
    if (c < small) small = c;

    printf("Smallest = %d\\n", small);
}`},
    ]
  },

  {
    id: 'M2-16',
    module: 'Module 2',
    topic: 'Grade — else-if Ladder (90/80/70/60 criteria)',
    priority: 2,
    marks: 8,
    years: ['Jan2026'],
    questions: [
      'Write a C program that takes a student\'s percentage as input and prints their corresponding grade based on: 90% or above: Grade A, 80-89%: Grade B, 70-79%: Grade C, 60-69%: Grade D, below 60%: Grade F. (8M)',
    ],
    answer: [
      { type:'code', heading:'Program',
        code:`#include<stdio.h>
void main()
{
    float percentage;
    printf("Enter percentage: ");
    scanf("%f", &percentage);

    if (percentage >= 90)
        printf("Grade A\\n");
    else if (percentage >= 80)
        printf("Grade B\\n");
    else if (percentage >= 70)
        printf("Grade C\\n");
    else if (percentage >= 60)
        printf("Grade D\\n");
    else
        printf("Grade F\\n");
}
/* Output: Enter percentage: 85
           Grade B */`},
    ]
  },

  {
    id: 'M2-17',
    module: 'Module 2',
    topic: 'Grade — switch (Honours/First/Second/Third/Fail)',
    priority: 2,
    marks: 7,
    years: ['Sep2025'],
    questions: [
      'Write a C program to read average marks and assign grade according to the following rule using switch statement: 80-100: Honours, 60-79: First Division, 50-59: Second Division, 40-49: Third Division, 0-39: Fail. (7M)',
    ],
    answer: [
      { type:'code', heading:'Program',
        code:`#include<stdio.h>
void main()
{
    int marks;
    printf("Enter average marks (0-100): ");
    scanf("%d", &marks);

    switch (marks / 10)        /* Integer division: 85/10=8 */
    {
        case 10:
        case 9:
        case 8:  printf("Honours\\n");         break;
        case 7:
        case 6:  printf("First Division\\n");  break;
        case 5:  printf("Second Division\\n"); break;
        case 4:  printf("Third Division\\n");  break;
        default: printf("Fail\\n");
    }
}
/* marks=85: 85/10=8 → case 8 → Honours
   marks=65: 65/10=6 → case 6 → First Division
   marks=35: 35/10=3 → default → Fail */`},
    ]
  },

  {
    id: 'M2-18',
    module: 'Module 2',
    topic: 'Quadrant of a Point',
    priority: 2,
    marks: 7,
    years: ['Mar2025'],
    questions: [
      'Write a C program to read the coordinates of a point and find in which quadrant it lies. (7M)',
    ],
    answer: [
      { type:'list', heading:'Logic',
        items:[
          'Q1: x > 0 and y > 0',
          'Q2: x < 0 and y > 0',
          'Q3: x < 0 and y < 0',
          'Q4: x > 0 and y < 0',
          'On axis: x = 0 or y = 0',
        ]},
      { type:'code', heading:'Program',
        code:`#include<stdio.h>
void main()
{
    float x, y;
    printf("Enter x and y coordinates: ");
    scanf("%f %f", &x, &y);

    if (x == 0 && y == 0)
        printf("Origin (0,0)\\n");
    else if (x == 0 || y == 0)
        printf("Point lies on an axis\\n");
    else if (x > 0 && y > 0)
        printf("First Quadrant (Q1)\\n");
    else if (x < 0 && y > 0)
        printf("Second Quadrant (Q2)\\n");
    else if (x < 0 && y < 0)
        printf("Third Quadrant (Q3)\\n");
    else
        printf("Fourth Quadrant (Q4)\\n");
}`},
    ]
  },

  {
    id: 'M2-19',
    module: 'Module 2',
    topic: 'Even Numbers Divisible by 3 (2 to 50)',
    priority: 3,
    marks: 6,
    years: ['Sep2024supp'],
    questions: [
      'Write a program to print even numbers and which are divisible by 3 between 2 and 50. (6M)',
    ],
    answer: [
      { type:'code', heading:'Program',
        code:`#include<stdio.h>
void main()
{
    int i;
    printf("Even numbers between 2 and 50 divisible by 3:\\n");
    for (i = 2; i <= 50; i++)
    {
        if (i % 2 == 0 && i % 3 == 0)   /* Even AND divisible by 3 */
            printf("%d ", i);
    }
    printf("\\n");
}
/* Output: 6 12 18 24 30 36 42 48 */`},
    ]
  },

  {
    id: 'M2-20',
    module: 'Module 2',
    topic: 'Output Analysis — Code Snippets (M2)',
    priority: 2,
    marks: 6,
    years: ['Jul2024','Jul2024supp','Sep2024','Sep2024supp'],
    questions: [
      'Analyze and write the output: void main() { int a=5,b=-7,c=0; if(a==5) printf("hello"); if(b==-7) printf("programming"); if(c) printf("c language"); } (6M)',
      'Analyze the output of: void main() { int i; for(i=0;i<4;i++) { if(i==2) printf("%d",i); } printf("%d",i); } (4M)',
      'What is the output? i) char x=\'A\'; do { printf("%c\\t",x); x=x+2; } while(x<=\'M\'); (6M)',
    ],
    answer: [
      { type:'list', heading:'Output 1: if(a==5) / if(b==-7) / if(c)',
        items:[
          'a=5: if(a==5) → TRUE → prints "hello"',
          'b=-7: if(b==-7) → TRUE → prints "programming"',
          'c=0: if(c) → if(0) → FALSE → nothing printed',
          'Final Output: helloprogramming',
        ]},
      { type:'list', heading:'Output 2: for loop with if(i==2)',
        items:[
          'i=0: 0<4 TRUE, if(0==2) FALSE → skip',
          'i=1: 1<4 TRUE, if(1==2) FALSE → skip',
          'i=2: 2<4 TRUE, if(2==2) TRUE → prints 2',
          'i=3: 3<4 TRUE, if(3==2) FALSE → skip',
          'i=4: 4<4 FALSE → loop ends',
          'After loop: printf("%d",i) → prints 4',
          'Final Output: 24',
        ]},
      { type:'list', heading:'Output 3: char x=\'A\'; do-while with x=x+2',
        items:[
          '\'A\'=65, \'M\'=77',
          'x=A(65): print A, x=C(67)',
          'x=C(67): <=M? YES, print C, x=E(69)',
          'x=E(69): <=M? YES, print E, x=G(71)',
          'x=G(71): <=M? YES, print G, x=I(73)',
          'x=I(73): <=M? YES, print I, x=K(75)',
          'x=K(75): <=M? YES, print K, x=M(77)',
          'x=M(77): <=M? YES, print M, x=O(79)',
          'x=O(79): <=M? NO, exit',
          'Final Output: A   C   E   G   I   K   M',
        ]},
    ]
  },

  /* ══ MODULE 3 — MISSING TOPICS ══ */

  {
    id: 'M3-9',
    module: 'Module 3',
    topic: 'String — Declaration, Initialization, gets/puts',
    priority: 1,
    marks: 6,
    years: ['Mar2025'],
    questions: [
      'What is string? How do you declare and initialize string? Give example. (6M)',
    ],
    answer: [
      { type:'text', heading:'Definition',
        text:'A string is a sequence of characters terminated by a null character (\\0). In C, strings are stored as character arrays. There is no separate string data type in C.' },
      { type:'list', heading:'String Declaration',
        items:[
          'Syntax: char arrayname[size];',
          'Example: char name[50];   — can store up to 49 characters + null \\0',
          'The last position is always reserved for the null terminator \\0',
        ]},
      { type:'list', heading:'String Initialization — 3 Methods',
        items:[
          'Method 1 — At declaration: char name[] = "Hello";   → automatically adds \\0',
          'Method 2 — Character by character: char name[] = {\'H\',\'e\',\'l\',\'l\',\'o\',\'\\0\'};',
          'Method 3 — At runtime using scanf: scanf("%s", name);   (no & needed for char array)',
          'gets(str) — reads entire line including spaces (scanf stops at space)',
          'puts(str) — prints string followed by newline (equivalent to printf("%s\\n", str))',
        ]},
      { type:'code', heading:'Example Program',
        code:`#include<stdio.h>
void main()
{
    char name[50];
    char city[] = "Hassan";  /* Direct initialization */

    printf("Enter your name: ");
    gets(name);              /* Reads full name with spaces */

    printf("Hello, ");
    puts(name);              /* prints name + newline */

    printf("City: %s\\n", city);

    printf("Name length: %lu\\n", strlen(name)); /* need string.h */
}`},
    ]
  },

  {
    id: 'M3-10',
    module: 'Module 3',
    topic: 'Character Arrays + Arithmetic on Characters',
    priority: 2,
    marks: 10,
    years: ['Dec2023','Sep2024supp'],
    questions: [
      'Explain the following concepts of arrays in C: i) Character Arrays  ii) Arithmetic operation on characters (10M)',
    ],
    answer: [
      { type:'text', heading:'Character Arrays',
        text:'A character array is an array that stores characters. It is used to store strings in C. Each character is stored using its ASCII value. The last character must be null (\\0) to mark end of string.' },
      { type:'code', heading:'Character Array — Declaration and Use',
        code:`#include<stdio.h>
void main()
{
    char str[20] = "Hello";   /* Stored as: H e l l o \\0 */
    int i;

    printf("String: %s\\n", str);

    /* Access individual characters */
    for (i = 0; str[i] != '\\0'; i++)
        printf("str[%d] = %c  (ASCII = %d)\\n", i, str[i], str[i]);
}
/* Output:
   str[0] = H  (ASCII = 72)
   str[1] = e  (ASCII = 101)
   str[2] = l  (ASCII = 108)
   str[3] = l  (ASCII = 108)
   str[4] = o  (ASCII = 111) */`},
      { type:'list', heading:'Arithmetic Operations on Characters',
        items:[
          'Each character has an ASCII value (integer). You can perform arithmetic on it.',
          '\'A\' = 65,  \'Z\' = 90,  \'a\' = 97,  \'z\' = 122,  \'0\' = 48',
          'Uppercase to Lowercase: add 32.  \'A\' + 32 = 97 = \'a\'',
          'Lowercase to Uppercase: subtract 32.  \'a\' - 32 = 65 = \'A\'',
          'Character to digit: \'5\' - \'0\' = 53 - 48 = 5 (actual integer value)',
        ]},
      { type:'code', heading:'Arithmetic on Characters — Example',
        code:`#include<stdio.h>
void main()
{
    char c = 'A';

    printf("ASCII of A  = %d\\n", c);        /* 65 */
    printf("Lowercase   = %c\\n", c + 32);   /* a */
    printf("Next letter = %c\\n", c + 1);    /* B */

    /* Convert digit character to integer */
    char digit = '7';
    int num = digit - '0';                   /* 55 - 48 = 7 */
    printf("'7' as int  = %d\\n", num);       /* 7 */
}`},
    ]
  },

  {
    id: 'M3-11',
    module: 'Module 3',
    topic: 'String Concatenation Without Library Function',
    priority: 2,
    marks: 7,
    years: ['Sep2024supp'],
    questions: [
      'Write a C program to concatenate 2 strings, without using string handling function. (7M)',
    ],
    answer: [
      { type:'text', heading:'Logic',
        text:'To concatenate without strcat(): Find the end of string s1 (where \\0 is). Start copying characters of s2 from that position. Add \\0 at the end.' },
      { type:'code', heading:'Program — Concatenation Without strcat()',
        code:`#include<stdio.h>
void main()
{
    char s1[100], s2[50];
    int i = 0, j = 0;

    printf("Enter first string: ");
    gets(s1);
    printf("Enter second string: ");
    gets(s2);

    /* Find the end of s1 */
    while (s1[i] != '\\0')
        i++;

    /* Copy s2 characters to s1 starting from end of s1 */
    while (s2[j] != '\\0')
    {
        s1[i] = s2[j];
        i++;
        j++;
    }

    s1[i] = '\\0';   /* Add null terminator */

    printf("Concatenated String: %s\\n", s1);
}
/* Input: s1="Hello"  s2=" World"
   Output: Hello World */`},
    ]
  },

  {
    id: 'M3-12',
    module: 'Module 3',
    topic: 'Sum of All Matrix Elements',
    priority: 2,
    marks: 8,
    years: ['Jul2025'],
    questions: [
      'Develop a C program to find sum of all the elements in a given matrix. (8M)',
    ],
    answer: [
      { type:'code', heading:'Program',
        code:`#include<stdio.h>
void main()
{
    int a[10][10], r, c, i, j, sum = 0;

    printf("Enter rows and columns: ");
    scanf("%d %d", &r, &c);

    printf("Enter matrix elements:\\n");
    for (i = 0; i < r; i++)
        for (j = 0; j < c; j++)
            scanf("%d", &a[i][j]);

    /* Print matrix */
    printf("\\nMatrix:\\n");
    for (i = 0; i < r; i++)
    {
        for (j = 0; j < c; j++)
            printf("%d\\t", a[i][j]);
        printf("\\n");
    }

    /* Sum of all elements */
    for (i = 0; i < r; i++)
        for (j = 0; j < c; j++)
            sum = sum + a[i][j];

    printf("Sum of all elements = %d\\n", sum);
}
/* Example 3x3: [[1,2,3],[4,5,6],[7,8,9]] → Sum = 45 */`},
    ]
  },

  /* ══ MODULE 4 — MISSING TOPICS ══ */

  {
    id: 'M4-9',
    module: 'Module 4',
    topic: 'Advantages of User-Defined Functions',
    priority: 2,
    marks: 4,
    years: ['Sep2024supp'],
    questions: [
      'What are the advantages of using user-defined functions? (4M)',
    ],
    answer: [
      { type:'list', heading:'Advantages of User-Defined Functions',
        items:[
          '1. Modularity — Program is divided into small, manageable modules. Each function does one specific task.',
          '2. Reusability — Once written, a function can be called multiple times anywhere in the program. No need to rewrite code.',
          '3. Readability — Makes the program easier to read and understand. Main program looks clean and logical.',
          '4. Easy Debugging — Errors can be located and fixed in individual functions without affecting the rest.',
          '5. Reduces Redundancy — Avoids writing the same code repeatedly. Common tasks are written once as a function.',
          '6. Team Development — Different programmers can work on different functions simultaneously.',
        ]},
    ]
  },

  {
    id: 'M4-10',
    module: 'Module 4',
    topic: 'Swap Two Numbers Using Pointers (Function)',
    priority: 2,
    marks: 10,
    years: ['Feb2025'],
    questions: [
      'Develop a C function to swap two numbers using pointers. Write a C program using the above function to swap two numbers. (10M)',
    ],
    answer: [
      { type:'text', heading:'Logic',
        text:'To swap using a function, we must use pointers (call by reference). If we use call by value, original values will NOT swap. Pass addresses using & and access values using *.' },
      { type:'code', heading:'Program — Swap Function Using Pointers',
        code:`#include<stdio.h>

/* Function declaration */
void swap(int *x, int *y);

void main()
{
    int a, b;
    printf("Enter two numbers: ");
    scanf("%d %d", &a, &b);

    printf("Before swap: a = %d, b = %d\\n", a, b);

    swap(&a, &b);   /* Pass addresses */

    printf("After  swap: a = %d, b = %d\\n", a, b);
}

/* Function definition — swap using pointers */
void swap(int *x, int *y)
{
    int temp;
    temp = *x;     /* temp = value at address x */
    *x   = *y;     /* value at x = value at y */
    *y   = temp;   /* value at y = temp */
}
/* Output:
   Before swap: a = 10, b = 20
   After  swap: a = 20, b = 10 */`},
    ]
  },

  {
    id: 'M4-11',
    module: 'Module 4',
    topic: 'Maximum of Two Numbers Using Pointer',
    priority: 2,
    marks: 6,
    years: ['Sep2024supp'],
    questions: [
      'Write a C program to find the maximum number between two numbers using a pointer. (6M)',
    ],
    answer: [
      { type:'code', heading:'Program',
        code:`#include<stdio.h>
void main()
{
    int a, b, *p, *q;

    printf("Enter two numbers: ");
    scanf("%d %d", &a, &b);

    p = &a;   /* p points to a */
    q = &b;   /* q points to b */

    if (*p > *q)
        printf("Maximum = %d\\n", *p);
    else
        printf("Maximum = %d\\n", *q);
}
/* Output: Enter two numbers: 15  30
           Maximum = 30 */`},
    ]
  },

  {
    id: 'M4-12',
    module: 'Module 4',
    topic: 'Structure — time (hour, minute, second)',
    priority: 2,
    marks: 7,
    years: ['Mar2025'],
    questions: [
      'Define a structure data type called time containing three members integer hour, integer minute and integer second. Develop a program that would assign values and display the time in the form 03:45:56. (7M)',
    ],
    answer: [
      { type:'code', heading:'Program',
        code:`#include<stdio.h>

struct time                /* Structure definition */
{
    int hour;
    int minute;
    int second;
};

void main()
{
    struct time t;         /* Structure variable */

    printf("Enter hour, minute, second: ");
    scanf("%d %d %d", &t.hour, &t.minute, &t.second);

    /* Display in HH:MM:SS format using %02d (leading zero) */
    printf("Time = %02d:%02d:%02d\\n", t.hour, t.minute, t.second);
}
/* Output: Enter hour, minute, second: 3 45 56
           Time = 03:45:56 */`},
    ]
  },

  {
    id: 'M4-13',
    module: 'Module 4',
    topic: 'Structure — Complex Number Addition',
    priority: 2,
    marks: 8,
    years: ['Sep2024supp'],
    questions: [
      'Define structure "Complex" with two members real and img both integer type. Create two complex structure variables C1 and C2 and design a C program to add two complex numbers. (8M)',
    ],
    answer: [
      { type:'text', heading:'Logic',
        text:'To add complex numbers: result.real = c1.real + c2.real, result.img = c1.img + c2.img. Display as a + bi.' },
      { type:'code', heading:'Program',
        code:`#include<stdio.h>

struct Complex
{
    int real;
    int img;
};

void main()
{
    struct Complex c1, c2, result;

    printf("Enter real and imaginary of C1: ");
    scanf("%d %d", &c1.real, &c1.img);

    printf("Enter real and imaginary of C2: ");
    scanf("%d %d", &c2.real, &c2.img);

    result.real = c1.real + c2.real;
    result.img  = c1.img  + c2.img;

    printf("C1     = %d + %di\\n", c1.real, c1.img);
    printf("C2     = %d + %di\\n", c2.real, c2.img);
    printf("Sum    = %d + %di\\n", result.real, result.img);
}
/* Output: C1 = 3+2i, C2 = 1+4i → Sum = 4+6i */`},
    ]
  },

  {
    id: 'M4-14',
    module: 'Module 4',
    topic: 'Structure — Employee (salary > 50000)',
    priority: 2,
    marks: 10,
    years: ['Sep2025'],
    questions: [
      'Define a structure called employee. Using employee, declare a suitable structure and read the information of 50 employees whose salary is above 50,000. (10M)',
    ],
    answer: [
      { type:'code', heading:'Program',
        code:`#include<stdio.h>

struct employee
{
    char  name[50];
    int   empid;
    float salary;
};

void main()
{
    struct employee e[50];
    int i, n, count = 0;

    printf("Enter number of employees: ");
    scanf("%d", &n);

    for (i = 0; i < n; i++)
    {
        printf("\\nEnter Name: ");
        scanf("%s", e[i].name);
        printf("Enter Employee ID: ");
        scanf("%d", &e[i].empid);
        printf("Enter Salary: ");
        scanf("%f", &e[i].salary);
    }

    printf("\\nEmployees with salary above 50000:\\n");
    printf("%-20s %-10s %-10s\\n", "Name", "EmpID", "Salary");
    printf("------------------------------------------\\n");

    for (i = 0; i < n; i++)
    {
        if (e[i].salary > 50000)
        {
            printf("%-20s %-10d %.2f\\n", e[i].name, e[i].empid, e[i].salary);
            count++;
        }
    }
    printf("\\nTotal employees with salary > 50000: %d\\n", count);
}`},
    ]
  },

  {
    id: 'M4-15',
    module: 'Module 4',
    topic: 'Structure — Student with Highest Marks',
    priority: 2,
    marks: 8,
    years: ['Sep2024supp'],
    questions: [
      'Make use of structure to write a C program to read n student details like name, USN, marks and print the details of the student who has secured highest marks. (8M)',
    ],
    answer: [
      { type:'code', heading:'Program',
        code:`#include<stdio.h>

struct student
{
    char  name[50];
    char  usn[20];
    float marks;
};

void main()
{
    struct student s[50];
    int i, n, maxIdx = 0;

    printf("Enter number of students: ");
    scanf("%d", &n);

    for (i = 0; i < n; i++)
    {
        printf("\\nEnter Name: "); scanf("%s", s[i].name);
        printf("Enter USN: ");   scanf("%s", s[i].usn);
        printf("Enter Marks: "); scanf("%f", &s[i].marks);
    }

    /* Find student with highest marks */
    for (i = 1; i < n; i++)
        if (s[i].marks > s[maxIdx].marks)
            maxIdx = i;

    printf("\\nStudent with Highest Marks:\\n");
    printf("Name  : %s\\n", s[maxIdx].name);
    printf("USN   : %s\\n", s[maxIdx].usn);
    printf("Marks : %.2f\\n", s[maxIdx].marks);
}`},
    ]
  },

  {
    id: 'M4-16',
    module: 'Module 4',
    topic: 'Pointer Output Questions',
    priority: 2,
    marks: 6,
    years: ['Mar2025'],
    questions: [
      'What is the output? i) int m[2]; int *p=m; m[0]=100; m[1]=200; printf("%d %d", ++*p, *p); ii) int m[2]; *(m+1)=100; *m=*(m+1); printf("%d", m[0]); (6M)',
    ],
    answer: [
      { type:'list', heading:'Output 1: ++*p and *p',
        items:[
          'int m[2]; int *p=m; — p points to m[0]',
          'm[0]=100, m[1]=200',
          'printf("%d %d", ++*p, *p):',
          '  ++*p → increment value at p: m[0] becomes 101, yields 101',
          '  *p → value at p = 101 (already incremented)',
          'Output: 101 101',
        ]},
      { type:'list', heading:'Output 2: *(m+1)=100; *m=*(m+1);',
        items:[
          '*(m+1) = 100 → m[1] = 100',
          '*m = *(m+1) → m[0] = m[1] = 100',
          'printf("%d", m[0]) → prints 100',
          'Output: 100',
        ]},
    ]
  },

  {
    id: 'M4-17',
    module: 'Module 4',
    topic: 'Structure — Student CIE Marks (Internal Assessment)',
    priority: 2,
    marks: 8,
    years: ['Feb2025'],
    questions: [
      'Define a structure data type called student containing members: name, usn, marks of CIE1, CIE2, CIE3, activity1, activity2. Write a C program to assign values and display them along with total internal marks. (8M)',
    ],
    answer: [
      { type:'code', heading:'Program',
        code:`#include<stdio.h>

struct student
{
    char  name[50];
    char  usn[20];
    int   cie1;
    int   cie2;
    int   cie3;
    int   activity1;
    int   activity2;
    float total;
};

void main()
{
    struct student s;

    printf("Enter Name: ");       scanf("%s", s.name);
    printf("Enter USN: ");        scanf("%s", s.usn);
    printf("Enter CIE1: ");       scanf("%d", &s.cie1);
    printf("Enter CIE2: ");       scanf("%d", &s.cie2);
    printf("Enter CIE3: ");       scanf("%d", &s.cie3);
    printf("Enter Activity1: ");  scanf("%d", &s.activity1);
    printf("Enter Activity2: ");  scanf("%d", &s.activity2);

    /* Best 2 of 3 CIE marks */
    int best2 = s.cie1 + s.cie2 + s.cie3;
    int worst = s.cie1;
    if (s.cie2 < worst) worst = s.cie2;
    if (s.cie3 < worst) worst = s.cie3;
    best2 = best2 - worst;   /* Sum of best 2 CIE */

    s.total = best2 + s.activity1 + s.activity2;

    printf("\\nName: %s  USN: %s\\n", s.name, s.usn);
    printf("CIE1=%d CIE2=%d CIE3=%d\\n", s.cie1, s.cie2, s.cie3);
    printf("Activity1=%d Activity2=%d\\n", s.activity1, s.activity2);
    printf("Total Internal Marks = %.2f\\n", s.total);
}`},
    ]
  },

];

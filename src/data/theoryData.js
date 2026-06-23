export const theories = [
  {
    id: 1,
    title: "Basic Structure of C Program",
    module: "Module 1",
    marks: 10,
    frequency: 8,
    examTip: "Write all 6 sections with names. Always include an example program. This question is guaranteed — memorize it.",
    content: [
      {
        heading: "Definition",
        text: "A C program has a well-defined structure divided into sections. Each section has a specific purpose."
      },
      {
        heading: "6 Sections of a C Program",
        isList: true,
        items: [
          "1. Documentation Section — Comments describing the program (author, date, purpose). Written using /* */ or //",
          "2. Link Section — Header files included using #include. Example: #include<stdio.h>, #include<math.h>",
          "3. Definition Section — Symbolic constants defined using #define. Example: #define PI 3.14",
          "4. Global Declaration Section — Variables declared outside main(), accessible by all functions",
          "5. Main Function Section — void main() containing variable declarations and executable statements",
          "6. Subprogram Section — User-defined functions written after main()"
        ]
      },
      {
        heading: "Example Program",
        isCode: true,
        code: `/* Documentation: Area and Circumference of Circle */
#include<stdio.h>          /* Link Section */
#define PI 3.14159         /* Definition Section */

int count = 0;             /* Global Declaration */

void main()                /* Main Function */
{
    float r, area, circum; /* Variable Declaration */
    printf("Enter radius: ");
    scanf("%f", &r);
    area = PI * r * r;
    circum = 2 * PI * r;
    printf("Area = %.2f\\n", area);
    printf("Circumference = %.2f\\n", circum);
}                          /* End of Main */`
      }
    ]
  },
  {
    id: 2,
    title: "Data Types in C — Size and Range",
    module: "Module 1",
    marks: 8,
    frequency: 6,
    examTip: "Draw a table with 4 columns: Data Type | Size | Range | Example. This gives easy marks.",
    content: [
      {
        heading: "Definition",
        text: "A data type defines the type of data a variable can store and the memory it occupies."
      },
      {
        heading: "Basic Data Types Table",
        isTable: true,
        headers: ["Data Type", "Size", "Range", "Example"],
        rows: [
          ["int", "2 or 4 bytes", "-32768 to 32767 (2 bytes) OR -2147483648 to 2147483647 (4 bytes)", "int a = 10;"],
          ["float", "4 bytes", "3.4×10⁻³⁸ to 3.4×10⁺³⁸ (6 decimal digits)", "float f = 3.14;"],
          ["double", "8 bytes", "1.7×10⁻³⁰⁸ to 1.7×10⁺³⁰⁸ (15 decimal digits)", "double d = 3.14159;"],
          ["char", "1 byte", "-128 to 127 (signed) or 0 to 255 (unsigned)", "char c = 'A';"],
          ["void", "0 bytes", "No value", "void main()"],
        ]
      },
      {
        heading: "Derived Data Types",
        isList: true,
        items: [
          "Array — Collection of same data type elements. Example: int a[10];",
          "Pointer — Variable that stores address of another variable. Example: int *p;",
          "Structure — Collection of different data types. Example: struct student { };",
          "Union — Similar to structure but shares memory among members."
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Call by Value vs Call by Reference",
    module: "Module 4",
    marks: 10,
    frequency: 5,
    examTip: "Write in tabular form with 4 differences, then write one program for each. Swap program is the best example for both.",
    content: [
      {
        heading: "Difference Table",
        isTable: true,
        headers: ["Feature", "Call by Value", "Call by Reference"],
        rows: [
          ["What is passed?", "A copy of the actual value", "Address (memory location) of the variable"],
          ["Effect on original", "Changes do NOT affect original", "Changes DO affect original variable"],
          ["Syntax", "void add(int a, int b)", "void swap(int *x, int *y)"],
          ["How to call", "add(5, 10); — directly", "swap(&a, &b); — with & operator"],
          ["Safety", "Safer — original data protected", "Less safe — original can be modified"],
          ["Memory", "Extra memory for copy", "No extra memory for copy"],
        ]
      },
      {
        heading: "Call by Value Example",
        isCode: true,
        code: `void change(int x)   /* x is a copy of a */
{
    x = 100;         /* Only local copy changes */
}
void main()
{
    int a = 10;
    change(a);
    printf("%d", a); /* Output: 10 (unchanged) */
}`
      },
      {
        heading: "Call by Reference Example (Swap)",
        isCode: true,
        code: `void swap(int *x, int *y)  /* x and y are pointers */
{
    int temp;
    temp = *x;
    *x = *y;
    *y = temp;
}
void main()
{
    int a = 10, b = 20;
    swap(&a, &b);     /* Pass addresses */
    printf("a=%d b=%d", a, b); /* Output: a=20 b=10 */
}`
      }
    ]
  },
  {
    id: 4,
    title: "4 Categories of User-Defined Functions",
    module: "Module 4",
    marks: 10,
    frequency: 5,
    examTip: "Write all 4 types with a one-line program for each. The examiner wants to see: function definition, function call, and output.",
    content: [
      {
        heading: "Definition",
        text: "Based on arguments (parameters) and return values, functions are classified into 4 categories."
      },
      {
        heading: "Type 1: No Arguments, No Return Value",
        isCode: true,
        code: `void display()        /* No parameters */
{
    printf("Hello World\\n");
    /* No return statement */
}
void main()
{
    display();        /* Call: no arguments */
}`
      },
      {
        heading: "Type 2: With Arguments, No Return Value",
        isCode: true,
        code: `void add(int a, int b)   /* Has parameters */
{
    printf("Sum = %d\\n", a + b);
    /* No return */
}
void main()
{
    add(5, 3);    /* Call with arguments */
}`
      },
      {
        heading: "Type 3: No Arguments, With Return Value",
        isCode: true,
        code: `int getvalue()         /* No parameters */
{
    return 10;         /* Returns a value */
}
void main()
{
    int x = getvalue(); /* Store returned value */
    printf("%d", x);
}`
      },
      {
        heading: "Type 4: With Arguments, With Return Value",
        isCode: true,
        code: `int add(int a, int b)  /* Has parameters AND returns */
{
    return a + b;
}
void main()
{
    int result = add(5, 3); /* 8 */
    printf("Sum = %d", result);
}`
      }
    ]
  },
  {
    id: 5,
    title: "while vs do-while Loop — 4 Differences",
    module: "Module 2",
    marks: 8,
    frequency: 4,
    examTip: "Always give syntax for both. Then give the key difference: do-while executes at least once even if condition is false.",
    content: [
      {
        heading: "Difference Table",
        isTable: true,
        headers: ["Feature", "while loop", "do-while loop"],
        rows: [
          ["Type", "Entry-controlled (pre-test)", "Exit-controlled (post-test)"],
          ["Condition check", "Checked BEFORE executing body", "Checked AFTER executing body"],
          ["Minimum executions", "Zero (body may not execute if condition is false)", "At least ONE (body always executes once)"],
          ["Syntax", "while(condition) { statements; }", "do { statements; } while(condition);"],
          ["Semicolon", "No semicolon after condition", "Semicolon required after while(condition);"],
          ["Use case", "When iterations may be zero", "When at least one execution is needed (menu programs)"],
        ]
      },
      {
        heading: "while Loop Syntax + Flowchart",
        isCode: true,
        code: `/* while loop: condition checked first */
int i = 1;
while(i <= 5)
{
    printf("%d ", i);
    i++;
}
/* Output: 1 2 3 4 5 */`
      },
      {
        heading: "do-while Loop Syntax + Example",
        isCode: true,
        code: `/* do-while: body executes first */
int i = 1;
do
{
    printf("%d ", i);
    i++;
} while(i <= 5);
/* Output: 1 2 3 4 5 */

/* Key difference — if i=10 initially: */
/* while(i<=5) — body does NOT execute */
/* do-while    — body executes ONCE */`
      }
    ]
  },
  {
    id: 6,
    title: "String Handling Functions",
    module: "Module 3",
    marks: 10,
    frequency: 6,
    examTip: "Write function name + purpose + syntax + one example for each. strrev() is not in ANSI C but is valid in Turbo C / GCC for exam purposes.",
    content: [
      {
        heading: "Header File Required",
        text: "#include<string.h> must be included to use string functions."
      },
      {
        heading: "String Functions Table",
        isTable: true,
        headers: ["Function", "Purpose", "Syntax", "Example", "Output"],
        rows: [
          ["strlen(s)", "Returns length of string (excluding null)", "int strlen(char s[])", "strlen(\"hello\")", "5"],
          ["strcpy(d, s)", "Copies string s into d", "char* strcpy(char d[], char s[])", "strcpy(d, \"hello\")", "d = \"hello\""],
          ["strcmp(s1, s2)", "Compares two strings. Returns 0 if equal, >0 if s1>s2, <0 if s1<s2", "int strcmp(char s1[], char s2[])", "strcmp(\"abc\",\"abc\")", "0"],
          ["strcat(d, s)", "Appends string s at end of d", "char* strcat(char d[], char s[])", "strcat(\"hello\",\" world\")", "\"hello world\""],
          ["strrev(s)", "Reverses the string", "char* strrev(char s[])", "strrev(\"hello\")", "\"olleh\""],
        ]
      },
      {
        heading: "Example Program — Using All 5 Functions",
        isCode: true,
        code: `#include<stdio.h>
#include<string.h>

void main()
{
    char s1[50] = "Hello";
    char s2[50] = "World";
    char s3[50];

    printf("Length of s1 = %d\\n", strlen(s1));  /* 5 */

    strcpy(s3, s1);
    printf("Copied string = %s\\n", s3);          /* Hello */

    printf("Compare result = %d\\n", strcmp(s1, s2)); /* negative */

    strcat(s1, s2);
    printf("After strcat = %s\\n", s1);           /* HelloWorld */

    strrev(s2);
    printf("After strrev = %s\\n", s2);           /* dlroW */
}`
      }
    ]
  },
  {
    id: 7,
    title: "Structure — Definition, Declaration, Initialization",
    module: "Module 4",
    marks: 10,
    frequency: 5,
    examTip: "Always use struct student as example. Show: struct definition → variable declaration → member initialization → printing. Note: members accessed with dot (.) operator.",
    content: [
      {
        heading: "Definition",
        text: "A structure is a user-defined data type that groups variables of different data types under a single name. It is declared using the keyword struct."
      },
      {
        heading: "Syntax",
        isCode: true,
        code: `/* Structure Definition */
struct structure_name
{
    datatype member1;
    datatype member2;
    datatype member3;
};

/* Structure Variable Declaration */
struct structure_name variable_name;

/* Accessing Members */
variable_name.member_name = value;`
      },
      {
        heading: "Complete Example — Student Record",
        isCode: true,
        code: `#include<stdio.h>

struct student            /* Structure definition */
{
    char name[50];        /* Member 1 */
    int rollno;           /* Member 2 */
    float marks;          /* Member 3 */
};

void main()
{
    struct student s1;    /* Variable declaration */

    /* Initialization */
    printf("Enter Name: ");
    scanf("%s", s1.name);
    printf("Enter Roll No: ");
    scanf("%d", &s1.rollno);
    printf("Enter Marks: ");
    scanf("%f", &s1.marks);

    /* Display */
    printf("Name: %s\\n", s1.name);
    printf("Roll No: %d\\n", s1.rollno);
    printf("Marks: %.2f\\n", s1.marks);
}`
      },
      {
        heading: "Structure vs Union",
        isTable: true,
        headers: ["Feature", "Structure", "Union"],
        rows: [
          ["Keyword", "struct", "union"],
          ["Memory", "Sum of all member sizes", "Size of largest member only"],
          ["Member access", "All members can hold values simultaneously", "Only one member holds value at a time"],
          ["Purpose", "Store related data together", "Save memory when only one member needed at a time"],
        ]
      }
    ]
  },
  {
    id: 8,
    title: "Pointers — Declaration, Initialization, Arithmetic",
    module: "Module 4",
    marks: 6,
    frequency: 4,
    examTip: "Use & (address-of) and * (dereference) operators clearly. Show an example with printf showing both address and value. Draw a small box diagram in exam for extra marks.",
    content: [
      {
        heading: "Definition",
        text: "A pointer is a variable that stores the memory address of another variable. It is declared using * symbol."
      },
      {
        heading: "Declaration and Initialization",
        isCode: true,
        code: `/* Declaration */
int *p;        /* p is a pointer to int */
float *fp;     /* fp is a pointer to float */
char *cp;      /* cp is a pointer to char */

/* Initialization */
int a = 10;
p = &a;        /* p stores address of a */
               /* & is 'address-of' operator */

/* Dereferencing */
printf("%d", *p);  /* * gives value at address */
                   /* Output: 10 */

/* Changing value through pointer */
*p = 20;
printf("%d", a);   /* Output: 20 (a is changed!) */`
      },
      {
        heading: "Pointer Arithmetic",
        isCode: true,
        code: `int a[3] = {10, 20, 30};
int *p = a;       /* p points to a[0] */

printf("%d\\n", *p);     /* 10 */
p++;                    /* Move to next integer */
printf("%d\\n", *p);     /* 20 */
p++;
printf("%d\\n", *p);     /* 30 */

/* p++ adds sizeof(int) = 4 bytes to address */`
      },
      {
        heading: "Sum of Array using Pointer",
        isCode: true,
        code: `#include<stdio.h>

void main()
{
    int a[5], i, sum = 0;
    int *p = a;     /* Point to first element */

    printf("Enter 5 elements: ");
    for(i = 0; i < 5; i++)
        scanf("%d", &a[i]);

    for(i = 0; i < 5; i++)
    {
        sum += *(p + i);  /* Access a[i] via pointer */
    }

    printf("Sum = %d\\n", sum);
}`
      }
    ]
  }
];

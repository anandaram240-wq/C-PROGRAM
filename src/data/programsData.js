export const programs = [
  {
    id: 1,
    title: "Basic Structure + Area of Circle",
    module: "Module 1",
    topic: "Basic Structure of C",
    frequency: 8,
    explanation: "The basic C program has 6 sections: Documentation, Link (headers), Definition (#define), Global declaration, Main function, and Subprograms. This program demonstrates all sections and calculates area and circumference of a circle.",
    code: `#include<stdio.h>       /* Link Section */
#define PI 3.14159        /* Definition Section */

/* Main Function Section */
void main()
{
    /* Variable Declaration */
    float r, area, circum;

    /* Executable Statements */
    printf("Enter radius: ");
    scanf("%f", &r);

    area = PI * r * r;
    circum = 2 * PI * r;

    printf("Area = %.2f\\n", area);
    printf("Circumference = %.2f\\n", circum);
}`
  },
  {
    id: 2,
    title: "Roots of Quadratic Equation",
    module: "Module 2",
    topic: "Roots of Quadratic Equation (EVERY EXAM)",
    frequency: 7,
    explanation: "ax² + bx + c = 0. The discriminant D = b²-4ac decides the nature of roots. D>0: real and distinct. D=0: real and equal. D<0: complex roots. This program uses math.h for sqrt().",
    code: `#include<stdio.h>
#include<math.h>

void main()
{
    float a, b, c, disc, root1, root2, realpart, imagpart;

    printf("Enter a, b, c: ");
    scanf("%f %f %f", &a, &b, &c);

    disc = b*b - 4*a*c;

    if(disc > 0)
    {
        root1 = (-b + sqrt(disc)) / (2*a);
        root2 = (-b - sqrt(disc)) / (2*a);
        printf("Roots are real and distinct\\n");
        printf("Root1 = %.2f\\n", root1);
        printf("Root2 = %.2f\\n", root2);
    }
    else if(disc == 0)
    {
        root1 = -b / (2*a);
        printf("Roots are real and equal\\n");
        printf("Root = %.2f\\n", root1);
    }
    else
    {
        realpart = -b / (2*a);
        imagpart = sqrt(-disc) / (2*a);
        printf("Roots are complex\\n");
        printf("Root1 = %.2f + %.2fi\\n", realpart, imagpart);
        printf("Root2 = %.2f - %.2fi\\n", realpart, imagpart);
    }
}`
  },
  {
    id: 3,
    title: "Grade using Else-If Ladder",
    module: "Module 2",
    topic: "Grade / Marks Programs",
    frequency: 3,
    explanation: "Uses else-if ladder to classify student grade based on percentage. Conditions are checked from highest to lowest. Only one block executes.",
    code: `#include<stdio.h>

void main()
{
    float marks;

    printf("Enter percentage: ");
    scanf("%f", &marks);

    if(marks >= 90)
        printf("Grade A\\n");
    else if(marks >= 80)
        printf("Grade B\\n");
    else if(marks >= 70)
        printf("Grade C\\n");
    else if(marks >= 60)
        printf("Grade D\\n");
    else
        printf("Grade F\\n");
}`
  },
  {
    id: 4,
    title: "Simple Calculator using Switch",
    module: "Module 2",
    topic: "Switch Statement",
    frequency: 3,
    explanation: "Switch statement evaluates an expression and matches it against case values. The break statement prevents fall-through. Default handles unknown input.",
    code: `#include<stdio.h>

void main()
{
    float a, b, result;
    char op;

    printf("Enter operator (+, -, *, /): ");
    scanf(" %c", &op);
    printf("Enter two numbers: ");
    scanf("%f %f", &a, &b);

    switch(op)
    {
        case '+':
            result = a + b;
            printf("Result = %.2f\\n", result);
            break;
        case '-':
            result = a - b;
            printf("Result = %.2f\\n", result);
            break;
        case '*':
            result = a * b;
            printf("Result = %.2f\\n", result);
            break;
        case '/':
            if(b != 0)
            {
                result = a / b;
                printf("Result = %.2f\\n", result);
            }
            else
                printf("Division by zero!\\n");
            break;
        default:
            printf("Invalid operator!\\n");
    }
}`
  },
  {
    id: 5,
    title: "Palindrome Number Check",
    module: "Module 2",
    topic: "Palindrome Check",
    frequency: 4,
    explanation: "A palindrome reads same forwards and backwards (e.g., 121, 1221). We reverse the number by extracting digits one by one and compare with original.",
    code: `#include<stdio.h>

void main()
{
    int n, original, rev = 0, rem;

    printf("Enter a number: ");
    scanf("%d", &n);

    original = n;

    while(n != 0)
    {
        rem = n % 10;       /* Extract last digit */
        rev = rev * 10 + rem; /* Build reversed number */
        n = n / 10;         /* Remove last digit */
    }

    if(original == rev)
        printf("%d is a Palindrome\\n", original);
    else
        printf("%d is NOT a Palindrome\\n", original);
}`
  },
  {
    id: 6,
    title: "Sum of Series 1/2! + 1/3! + ... + 1/n!",
    module: "Module 2",
    topic: "Series Programs",
    frequency: 3,
    explanation: "For each term i (from 2 to n+1), calculate i! using inner loop and add 1/i! to sum. Use 1.0/fact to get float division.",
    code: `#include<stdio.h>

void main()
{
    int i, j, n;
    float sum = 0, fact;

    printf("Enter N: ");
    scanf("%d", &n);

    for(i = 2; i <= n + 1; i++)
    {
        fact = 1;
        for(j = 1; j <= i; j++)
            fact = fact * j;

        sum = sum + (1.0 / fact);
    }

    printf("Sum = %.4f\\n", sum);
}`
  },
  {
    id: 7,
    title: "Sine Series",
    module: "Module 2",
    topic: "Sine Series",
    frequency: 3,
    explanation: "sin(x) = x - x³/3! + x⁵/5! - x⁷/7! ... up to n terms. Angle is input in degrees and converted to radians. Compare with sin() from math.h.",
    code: `#include<stdio.h>
#include<math.h>

void main()
{
    float x, angle, sinx = 0, term;
    int i, n;

    printf("Enter angle in degrees: ");
    scanf("%f", &angle);
    printf("Enter number of terms: ");
    scanf("%d", &n);

    /* Convert degrees to radians */
    x = angle * 3.14159 / 180.0;

    term = x;
    sinx = x;

    for(i = 1; i < n; i++)
    {
        term = term * (-1) * x * x / ((2*i) * (2*i + 1));
        sinx = sinx + term;
    }

    printf("Calculated sin(%.1f) = %.4f\\n", angle, sinx);
    printf("Built-in   sin(%.1f) = %.4f\\n", angle, sin(x));
}`
  },
  {
    id: 8,
    title: "Pattern Printing (1 / 1 2 / 1 2 3 ...)",
    module: "Module 2",
    topic: "Pattern Programs",
    frequency: 2,
    explanation: "Outer loop controls rows (1 to n). Inner loop prints numbers from 1 to current row number. printf(\"\\n\") moves to next line after each row.",
    code: `#include<stdio.h>

void main()
{
    int i, j, n;

    printf("Enter number of rows: ");
    scanf("%d", &n);

    for(i = 1; i <= n; i++)
    {
        for(j = 1; j <= i; j++)
            printf("%d ", j);
        printf("\\n");
    }
}

/* Output for n=4:
   1
   1 2
   1 2 3
   1 2 3 4
*/`
  },
  {
    id: 9,
    title: "Bubble Sort (Ascending Order)",
    module: "Module 3",
    topic: "Bubble Sort",
    frequency: 3,
    explanation: "Bubble sort compares adjacent elements and swaps if out of order. After each pass, the largest element 'bubbles up' to the end. Needs n-1 passes for n elements.",
    code: `#include<stdio.h>

void main()
{
    int a[50], n, i, j, temp;

    printf("Enter number of elements: ");
    scanf("%d", &n);

    printf("Enter elements: ");
    for(i = 0; i < n; i++)
        scanf("%d", &a[i]);

    /* Bubble Sort */
    for(i = 0; i < n - 1; i++)
    {
        for(j = 0; j < n - i - 1; j++)
        {
            if(a[j] > a[j + 1])
            {
                /* Swap */
                temp = a[j];
                a[j] = a[j + 1];
                a[j + 1] = temp;
            }
        }
    }

    printf("Sorted Array (Ascending): ");
    for(i = 0; i < n; i++)
        printf("%d ", a[i]);
    printf("\\n");
}`
  },
  {
    id: 10,
    title: "Matrix Multiplication",
    module: "Module 3",
    topic: "Matrix Multiplication",
    frequency: 5,
    explanation: "Matrix multiplication is possible only when columns of A = rows of B. If A is m×n and B is n×p, then C is m×p. Each element C[i][j] = sum of A[i][k] * B[k][j] for all k.",
    code: `#include<stdio.h>

void main()
{
    int a[10][10], b[10][10], c[10][10];
    int m, n, p, q, i, j, k;

    printf("Enter rows and cols of Matrix A: ");
    scanf("%d %d", &m, &n);
    printf("Enter rows and cols of Matrix B: ");
    scanf("%d %d", &p, &q);

    if(n != p)
    {
        printf("Multiplication NOT possible!\\n");
        return;
    }

    printf("Enter elements of Matrix A:\\n");
    for(i = 0; i < m; i++)
        for(j = 0; j < n; j++)
            scanf("%d", &a[i][j]);

    printf("Enter elements of Matrix B:\\n");
    for(i = 0; i < p; i++)
        for(j = 0; j < q; j++)
            scanf("%d", &b[i][j]);

    /* Matrix Multiplication */
    for(i = 0; i < m; i++)
    {
        for(j = 0; j < q; j++)
        {
            c[i][j] = 0;
            for(k = 0; k < n; k++)
                c[i][j] += a[i][k] * b[k][j];
        }
    }

    printf("\\nProduct Matrix:\\n");
    for(i = 0; i < m; i++)
    {
        for(j = 0; j < q; j++)
            printf("%d\\t", c[i][j]);
        printf("\\n");
    }
}`
  },
  {
    id: 11,
    title: "Count Vowels and Consonants",
    module: "Module 3",
    topic: "Count Vowels & Consonants",
    frequency: 3,
    explanation: "Traverse the string character by character. Check if each character is a vowel (a,e,i,o,u — both cases). If yes, increment vowel count; otherwise increment consonant count.",
    code: `#include<stdio.h>

void main()
{
    char str[100];
    int i, vowels = 0, consonants = 0;

    printf("Enter a string: ");
    gets(str);

    for(i = 0; str[i] != '\\0'; i++)
    {
        char c = str[i];

        if(c=='a' || c=='e' || c=='i' || c=='o' || c=='u' ||
           c=='A' || c=='E' || c=='I' || c=='O' || c=='U')
            vowels++;
        else if((c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z'))
            consonants++;
    }

    printf("Vowels     = %d\\n", vowels);
    printf("Consonants = %d\\n", consonants);
}`
  },
  {
    id: 12,
    title: "Student Records using Structure",
    module: "Module 4",
    topic: "Structures — Definition, Declaration, Initialization",
    frequency: 5,
    explanation: "A structure groups different data types under one name. Members are accessed using dot (.) operator. Here we store name, roll number, and marks for N students.",
    code: `#include<stdio.h>

struct student
{
    char name[50];
    int rollno;
    float marks;
};

void main()
{
    struct student s[50];
    int i, n;

    printf("Enter number of students: ");
    scanf("%d", &n);

    /* Read student data */
    for(i = 0; i < n; i++)
    {
        printf("\\nEnter Name: ");
        scanf("%s", s[i].name);
        printf("Enter Roll No: ");
        scanf("%d", &s[i].rollno);
        printf("Enter Marks: ");
        scanf("%f", &s[i].marks);
    }

    /* Display student data */
    printf("\\n%-20s %10s %10s\\n", "Name", "RollNo", "Marks");
    printf("----------------------------------------------\\n");
    for(i = 0; i < n; i++)
        printf("%-20s %10d %10.2f\\n", s[i].name, s[i].rollno, s[i].marks);
}`
  },
  {
    id: 13,
    title: "Swap Two Numbers using Pointers (Call by Reference)",
    module: "Module 4",
    topic: "Call by Value vs Call by Reference",
    frequency: 5,
    explanation: "Call by reference passes the address of variables using pointers. Changes inside the function reflect in the calling function. Use *p to dereference a pointer (access the value).",
    code: `#include<stdio.h>

/* Function to swap using pointers */
void swap(int *x, int *y)
{
    int temp;
    temp = *x;    /* temp = value at address x */
    *x = *y;      /* value at x = value at y */
    *y = temp;    /* value at y = temp */
}

void main()
{
    int a, b;

    printf("Enter two numbers: ");
    scanf("%d %d", &a, &b);

    printf("Before Swap: a = %d, b = %d\\n", a, b);

    swap(&a, &b);   /* Pass addresses */

    printf("After Swap:  a = %d, b = %d\\n", a, b);
}`
  },
  {
    id: 14,
    title: "Factorial Function + nCr (Binomial Coefficient)",
    module: "Module 4",
    topic: "Factorial Function + nCr",
    frequency: 3,
    explanation: "Write a separate function for factorial. Call it 3 times to compute nCr = n! / (r! × (n-r)!). This demonstrates functions with arguments and return value.",
    code: `#include<stdio.h>

/* User-defined function to compute factorial */
int factorial(int n)
{
    int i, fact = 1;
    for(i = 1; i <= n; i++)
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

/* Example: n=5, r=2 => 5!/(2!*3!) = 120/(2*6) = 10 */`
  }
];

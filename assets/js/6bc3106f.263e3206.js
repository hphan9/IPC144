(self.webpackChunkipc_144=self.webpackChunkipc_144||[]).push([[216],{3905:function(n,e,t){"use strict";t.d(e,{Zo:function(){return m},kt:function(){return h}});var i=t(7294);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,i)}return t}function o(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function s(n,e){if(null==n)return{};var t,i,r=function(n,e){if(null==n)return{};var t,i,r={},a=Object.keys(n);for(i=0;i<a.length;i++)t=a[i],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(i=0;i<a.length;i++)t=a[i],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var l=i.createContext({}),u=function(n){var e=i.useContext(l),t=e;return n&&(t="function"==typeof n?n(e):o(o({},e),n)),t},m=function(n){var e=u(n.components);return i.createElement(l.Provider,{value:e},n.children)},c={inlineCode:"code",wrapper:function(n){var e=n.children;return i.createElement(i.Fragment,{},e)}},d=i.forwardRef((function(n,e){var t=n.components,r=n.mdxType,a=n.originalType,l=n.parentName,m=s(n,["components","mdxType","originalType","parentName"]),d=u(t),h=r,p=d["".concat(l,".").concat(h)]||d[h]||c[h]||a;return t?i.createElement(p,o(o({ref:e},m),{},{components:t})):i.createElement(p,o({ref:e},m))}));function h(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var a=t.length,o=new Array(a);o[0]=d;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=n,s.mdxType="string"==typeof n?n:r,o[1]=s;for(var u=2;u<a;u++)o[u]=t[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9602:function(n,e,t){"use strict";t.r(e),t.d(e,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return m},default:function(){return d}});var i=t(2122),r=t(9756),a=(t(7294),t(3905)),o=["components"],s={sidebar_position:6},l="Algorithms",u={unversionedId:"F-Refinements/algorithms",id:"F-Refinements/algorithms",isDocsHomePage:!1,title:"Algorithms",description:"Learning Outcomes",source:"@site/docs/F-Refinements/algorithms.md",sourceDirName:"F-Refinements",slug:"/F-Refinements/algorithms",permalink:"/F-Refinements/algorithms",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/F-Refinements/algorithms.md",version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"courseNotesSidebar",previous:{title:"Two-Dimensional Arrays",permalink:"/F-Refinements/two-dimensional-arrays"},next:{title:"Portability",permalink:"/F-Refinements/portability"}},m=[{value:"Learning Outcomes",id:"learning-outcomes",children:[]},{value:"Introduction",id:"introduction",children:[]},{value:"Searching",id:"searching",children:[{value:"Two Algorithms",id:"two-algorithms",children:[]}]},{value:"Masking",id:"masking",children:[]},{value:"Sorting",id:"sorting",children:[{value:"Selection Sort",id:"selection-sort",children:[]},{value:"Bubble Sort",id:"bubble-sort",children:[]},{value:"Sorting Strings (Optional)",id:"sorting-strings-optional",children:[]}]},{value:"Mixing (Optional)",id:"mixing-optional",children:[]}],c={toc:m};function d(n){var e=n.components,t=(0,r.Z)(n,o);return(0,a.kt)("wrapper",(0,i.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"algorithms"},"Algorithms"),(0,a.kt)("h2",{id:"learning-outcomes"},"Learning Outcomes"),(0,a.kt)("p",null,"After reading this section, you will be able to:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Design procedures using selection and iteration constructs to solve a programming task"),(0,a.kt)("li",{parentName:"ul"},"Design data collections using arrays to manage information efficiently")),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"The central aspect of solving a programming task is the design of an appropriate algorithm.  An algorithm is the set of rules that define the sequence of operations required to complete the task.  Examples of tasks that require algorithms include finding the elements in a list satisfying a specified condition, sorting the elements of a list in a specified order and mixing the elements of a list.  The design of an algorithm typically involves selections and iterations; in some cases, nested selections and nested iterations.  Often, there is more than one algorithm that solves the programming task.  Different algorithms exhibit different efficiencies. "),(0,a.kt)("p",null,"This chapter introduces the implementations of a few more common algorithms.  We implement them in function form for use as black boxes in other applications. "),(0,a.kt)("h2",{id:"searching"},"Searching"),(0,a.kt)("p",null,"Search algorithms finds the index of one or more array elements that satisfy a specified condition or set of conditions.  These algorithms work with key-value pairs.  Each key is unique while the values are not necessarily unique. "),(0,a.kt)("h3",{id:"two-algorithms"},"Two Algorithms"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Unsorted Key Array")),(0,a.kt)("p",null,"Given an unsorted key array, we start our search at the first element and progress through the array element by element until we find a match.  This algorithm involves an iteration and a selection:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'// Find Unit Price\n// find.c\n\n#include <stdio.h>\n\n// find returns the index of the first element in skuData[skuCount]\n// that contains the value \'findSKU\'; -1 if not found\n//\nint find(int skuData[], int skuCount, int findSKU)\n{\n        int i, skuIndex = -1;\n\n        for (i = 0; skuIndex < 0 && i < skuCount; i++)\n        {\n                if (findSKU == skuData[i])\n                {\n                        skuIndex = i; // save the index\n                }\n        }\n\n        return skuIndex;\n}\n\nint main(void)\n{\n        int i, searchSKU;\n        int sku[]      = { 2156, 4633, 3122, 5611};\n        double price[] = {12.34, 7.89, 6.56, 9.32};\n        const int itemCount    = 4;\n\n        printf("SKU   : ");\n        scanf("%d", &searchSKU);\n\n        i = find(sku, itemCount, searchSKU);\n\n        if (i >= 0 && i < itemCount)\n                printf("Price : $%0.2lf\\n", price[i]); \n        else\n                printf("%d not in system\\n", searchSKU);\n\n        return 0;\n}\n')),(0,a.kt)("p",null,"The above program produces the following output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"SKU   : 4633\nPrice : $7.89 \n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note"),(0,a.kt)("br",null),"\nThe value returned by find() (variable ",(0,a.kt)("inlineCode",{parentName:"p"},"i"),") is validated to ensure that it is within the bounds of the key array (that is, we check that it is not -1 and not more than the number of items in the array). ")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Sorted Key Array (Optional)")),(0,a.kt)("p",null,"Given a sorted key array, we start our search in the middle of the array and at each step discard the half that doesn't contain the search key.  Although this algorithm is slightly more complicated than the unsorted one, it is significantly faster, which is important with a large number of elements. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'// Find Unit Price - Sorted Keys Ascending Order\n// find_ascend.c\n\n#include <stdio.h>\n\n// find_ascend returns the index of the first element\n// in ascending order skuData[n] that contains the value \'findSKU\' \n// returns -1 if not found\n//\nint find_ascend(int skuData[], int skuCount, int findSKU)\n{\n    int i, low = 0, high = skuCount - 1, skuIndex = -1;\n    do {\n        i = (low + high) / 2;\n        if (skuData[i] < findSKU)\n            low = i + 1;\n        else if (skuData[i] > findSKU)\n            high = i - 1;\n        else\n            skuIndex = i;\n    } while (low <= high && skuIndex == -1);\n\n    return skuIndex;\n}\n\nint main(void)\n{\n    int i, searchSKU;\n    int sku[] = { 2156, 3122, 4633, 5611 };\n    double price[] = { 12.34, 6.56, 7.89, 9.32 };\n    const int itemCount = 4;\n\n    printf("SKU   : ");\n    scanf("%d", &searchSKU);\n\n    i = find_ascend(sku, itemCount, searchSKU);\n\n    if (i >= 0 && i < itemCount)\n        printf("Price : $%0.2lf\\n", price[i]);\n    else\n        printf("%d not in system\\n", searchSKU);\n\n    return 0;\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"SKU   : 4633\nPrice : $7.89 \n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note"),(0,a.kt)("br",null),"\nThe above example using a divide and conquor approach is refered to as a ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"binary search")),".")),(0,a.kt)("h2",{id:"masking"},"Masking"),(0,a.kt)("p",null,"Masking algorithms distinguish certain array elements from all other elements.  The masking array is a ",(0,a.kt)("em",{parentName:"p"},"parallel array")," with respect to the other arrays in the set.  The elements of the masking array are ",(0,a.kt)("em",{parentName:"p"},"flags")," that identify inclusion or exclusion. "),(0,a.kt)("p",null,"Consider the following program, which calculates the total purchase price for a set of products.  The user enters the sku for each product purchased and the quantity.  Some products attract HST (Harmonized Sales Tax), while others do not.  We store the skus, unit prices and tax status in three parallel arrays.  The tax status array is the masking array.  The user enters 0 to terminate input."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'// Total Purchase Price\n// masking.c\n\n#include <stdio.h>\n\n#define HST 0.13\n\nint find(int skuData[], int skuCount, int findSKU)\n{\n    int i, skuIndex = -1;\n    for (i = 0; skuIndex < 0 && i < skuCount; i++)\n    {\n        if (findSKU == skuData[i])\n        {\n            skuIndex = i;\n        }\n    }\n\n    return skuIndex;\n}\n\nint main(void)\n{\n    int i, searchSKU, quantity;\n    int sku[] = { 2156, 3122, 4633, 5611 };\n    double price[] = { 12.34, 6.56, 7.89, 9.32 };\n    int tax[] = { 1,    0,    0,    1 };\n    const int itemCount = 4;\n    double sum = 0.0;\n\n    do {\n        printf("SKU     : ");\n        scanf("%d", &searchSKU);\n\n        if (searchSKU != 0)\n        {\n            i = find(sku, itemCount, searchSKU);\n\n            if (i >= 0 && i < itemCount)\n            {\n                printf("Quantity: ");\n                scanf("%d", &quantity);\n\n                if (tax[i] == 1)\n                    sum += quantity * price[i] * (1.0 + HST);\n                else\n                    sum += quantity * price[i];\n            }\n            else \n            {\n                printf("%d not in system\\n", searchSKU);\n            }\n        }\n    } while (searchSKU != 0);\n\n    printf("Total is $%0.2lf\\n", sum);\n\n    return 0;\n}\n')),(0,a.kt)("p",null,"The below output is a sample execution of the above program:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"SKU     : 2156\nQuantity: 3\nSKU     : 3121\n3121 not in system\nSKU     : 3122\nQuantity: 2\nSKU     : 5611\nQuantity: 1\nSKU     : 0\nTotal is $65.48\n")),(0,a.kt)("h2",{id:"sorting"},"Sorting"),(0,a.kt)("p",null,"Sorting algorithms rearrange the elements of an array according to a pre-defined rule.  Typically, this rule is ascending or descending order.  The sorting criterion may be numeric or based upon a collating sequence such as ASCII or EBCDIC."),(0,a.kt)("p",null,"The two simplest algorithms are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"selection sort"),(0,a.kt)("li",{parentName:"ul"},"bubble sort")),(0,a.kt)("h3",{id:"selection-sort"},"Selection Sort"),(0,a.kt)("p",null,"A selection sort selects a reference element and steps through the rest of the elements looking for any one with a value that does not meet the test condition.  If found, the algorithm swaps that element with the reference element. "),(0,a.kt)("p",null,"The following program sorts the array in ascending order.  Starting with the first element in the array, it picks the first unsorted element as the reference element, swaps it with the smallest element in the unsorted part of the array, and iterates until it reaches the last element in the array."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'// Selection Sort\n// selectionSort.c\n\n#include <stdio.h>\n\n// selectSort sorts the elements of data[itemCount] in ascending order\n//\nvoid selectSort(int data[], int itemCount)\n{\n    int i, j, minIdx;\n    int temp;\n\n    for (i = 0; i < itemCount; i++) \n    {\n        minIdx = i;\n\n        for (j = i + 1; j < itemCount; j++)\n        {\n            if (data[j] < data[minIdx])\n            {\n                minIdx = j;\n            }\n        }\n\n        if (minIdx != i)\n        {\n            temp = data[i];\n            data[i] = data[minIdx];\n            data[minIdx] = temp;\n        }\n    }\n}\n\nint main(void)\n{\n    int i;\n    int sku[] = { 2156, 4633, 3122, 5611 };\n    const int skuCount = 4;\n\n    selectSort(sku, skuCount);\n\n    for (i = 0; i < skuCount; i++)\n        printf("%6d\\n", sku[i]);\n\n    return 0;\n}\n')),(0,a.kt)("p",null,"The above program produces the following output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"  2156\n  3122\n  4633\n  5611 \n")),(0,a.kt)("h3",{id:"bubble-sort"},"Bubble Sort"),(0,a.kt)("p",null,"A bubble sort moves through the array element by element swapping elements if the next one does not satisfy the sort condition.  The algorithm repeats this process for each unsorted subset of the array starting with the first element.  The algorithm moves elements to their terminal positions just like bubbles rising through a liquid - hence the name bubble sort."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'// Bubble Sort\n// bubbleSort.c\n\n#include <stdio.h>\n\n// bubbleSort sorts the elements of a[skuCount] in ascending order \n//\nvoid bubbleSort(int data[], int itemCount)\n{\n    int i, j;\n    int temp;\n\n    for (i = itemCount - 1; i > 0; i--)\n    {\n        for (j = 0; j < i; j++) \n        {\n            if (data[j] > data[j + 1])\n            {\n                temp = data[j];\n                data[j] = data[j + 1];\n                data[j + 1] = temp;\n            }\n        }\n    }\n}\n\nint main(void)\n{\n    int i;\n    int sku[] = { 2156, 4633, 3122, 5611 };\n    const int skuCount = 4;\n\n    bubbleSort(sku, skuCount);\n\n    for (i = 0; i < skuCount; i++)\n        printf("%6d\\n", sku[i]);\n\n    return 0;\n}\n')),(0,a.kt)("p",null,"The above program produces the following output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"  2156\n  3122\n  4633\n  5611 \n")),(0,a.kt)("h3",{id:"sorting-strings-optional"},"Sorting Strings (Optional)"),(0,a.kt)("p",null,"The following program accepts a list of names, sorts them in alphabetic order and displays the sorted list:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'// Sort a List of Names\n// sortNames.c\n\n#include <stdio.h>\n#include <string.h>\n\n#define MAX_NAMES 10      // maximum number of names in the list\n#define MAX_NAME_LEN 30   // maximum number of characters in a name\n#define FMT_NAME_LEN "30" // used in the format string of scanf()\n\nvoid bubble(char names[][MAX_NAME_LEN + 1], int size);\n\nint main(void)\n{\n    char name[MAX_NAMES][MAX_NAME_LEN + 1];\n    int i, nameCount, keepgoing;\n\n    // Input the list of names\n    printf("Enter names (^ to stop)\\n");\n    i = 0;\n    do {\n        printf("Name-%d: ", i + 1);\n        scanf(" %"FMT_NAME_LEN"[^\\n]", name[i]);\n    \n        keepgoing = strcmp(name[i], "^") != 0;\n        i++;\n    } while (keepgoing == 1 && i < MAX_NAMES);\n\n    if (keepgoing == 1)\n        nameCount = MAX_NAMES;\n    else\n        nameCount = i - 1;\n\n    // sort the names\n    bubble(name, nameCount);\n\n    // display thesorted list\n    for (i = 0; i < nameCount; i++)\n        printf("%s\\n", name[i]);\n\n    return 0;\n}\n\n// bubbleSort sorts the elements of names[size] in ascending order \n//\nvoid bubble(char names[][MAX_NAME_LEN + 1], int size)\n{\n    int i, j;\n    char temp[MAX_NAME_LEN + 1];\n\n    for (i = size - 1; i > 0; i--) \n    {\n        for (j = 0; j < i; j++) \n        {\n            if (strcmp(names[j], names[j + 1]) > 0)\n            {\n                strcpy(temp, names[j]);\n                strcpy(names[j], names[j + 1]);\n                strcpy(names[j + 1], temp);\n            }\n        }\n    }\n}\n')),(0,a.kt)("p",null,"The below output is a sample execution of the above program:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Enter names (^ to stop)\nName-1: Timmothy\nName-2: Helen\nName-3: Demetri\nName-4: Zamphire\nName-5: Ariana\nName-6: ^\nAriana\nDemetri\nHelen\nTimmothy\nZamphire\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note"),(0,a.kt)("br",null),"\nNOtice the concatenation of string literals in the format string of the call to ",(0,a.kt)("inlineCode",{parentName:"p"},"scanf()"),".  This lets us set the maximum number of input characters alongside the maximum number of characters in the array of strings at the head of the program code.  The C compiler converts a concatenation of string literals into a single literal removing the intermediate pairs of double quotes; that is, to the compiler ",(0,a.kt)("inlineCode",{parentName:"p"},'"a""b""c"')," is the same as ",(0,a.kt)("inlineCode",{parentName:"p"},'"abc"'),".")),(0,a.kt)("h2",{id:"mixing-optional"},"Mixing (Optional)"),(0,a.kt)("p",null,"Mixing algorithms have applications in games of chance.  Examples include shuffling the cards in a deck or tumbling numbered balls into a lottery chute.  The algorithm depends on the extent to which we seek to generate a truly fair result. "),(0,a.kt)("p",null,"Consider the following program, which tumbles 10 balls into a lottery chute.  To simulate mixing, the algorithm picks the index of a reference element, randomly picks the index of another element further along in the array and swap the values stored in the two elements.  This algorithm is attributed to Donald Knuth, a pioneer of computer science."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'// Mix Lottery Balls\n// mix.c\n\n#include <stdio.h>\n#include <stdlib.h>\n#include <time.h>\n\n#define BALL_COUNT 10\n\n// mix mixes the elements in data[arraySize] randomly \n//\nvoid shuffle(int data[], int arraySize)\n{\n    int i, remainingItems, j, temp;\n\n    remainingItems = arraySize;\n\n    for (i = 0; i < arraySize; i++) \n    {\n        j = i + rand() % remainingItems;\n\n        temp = data[i];\n        data[i] = data[j];\n        data[j] = temp;\n\n        remainingItems--;\n    }\n}\n\nint main(void)\n{\n    int i;\n    int ball[BALL_COUNT];\n\n    for (i = 0; i < BALL_COUNT; i++)\n        ball[i] = i + 1;\n    \n    srand(time(NULL));\n    shuffle(ball, BALL_COUNT);\n    \n    for (i = 0; i < BALL_COUNT; i++)\n        printf("%2d\\n", ball[i]);\n\n    return 0;\n}\n')),(0,a.kt)("p",null,"The below output is a sample execution of the above program:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"}," 2\n 7\n 3\n 8\n 6\n 9\n 5\n10\n 1\n 4\n")))}d.isMDXComponent=!0}}]);
# Guide to Using the Testing Panel

How each test works and how to interpret the results in the console.

---

## **Testing Panel Overview**

The testing panel has **4 main sections**:

```
┌─────────────────────────────────────┐
│ TESTING & VALIDATION PANEL          │
├─────────────────────────────────────┤
│ 1. TEST PROFILES (6 buttons)        │
│    - Accounting Amy                 │
│    - Cyber Carl                     │
│    - Welding Wendy                  │
│    - Medical Mary                   │
│    - Balanced Bailey                │
│    - Random Answers                 │
├─────────────────────────────────────┤
│ 2. VALIDATION TOOLS (4 buttons)     │
│    - Check Zero Programs            │
│    - Verify Weights                 │
│    - Regression Test                │
│    - Export Results                 │
├─────────────────────────────────────┤
│ 3. ANSWER MAPPING                   │
│    (Shows current answer order)     │
├─────────────────────────────────────┤
│ 4. TEST OUTPUT CONSOLE              │
│    [All results appear here]        │
└─────────────────────────────────────┘
```

---

## **SECTION 1: TEST PROFILES**

### **How They Work:**

Each profile simulates a student with specific career interests by **automatically selecting answers** that match certain keywords.

| Profile | What It Does | Expected Result |
|---------|--------------|-----------------|
| **Accounting Amy** | Selects answers with words like: *accurate, numbers, balance, precision* | ACC should be #1 |
| **Cyber Carl** | Selects answers with words like: *fix, problem, troubleshoot, diagnose* | CYB should be #1 |
| **Welding Wendy** | Selects answers with words like: *build, repair, create, hands-on* | WELD or COL should be #1 |
| **Medical Mary** | Selects answers with words like: *help, people, care, patients* | MA or NA should be #1 |
| **Balanced Bailey** | Alternates: A,B,C,D,A,B,C,D... | Mixed results |
| **Random Answers** | Completely random selections | Varies each time |

### **How to Use:**
1. Click any profile button
2. Watch the questionnaire auto-fill (1 second delay)
3. A popup asks: *"Submit [Profile]'s answers to see results?"*
4. Click OK to see results
5. Check the console output

### **Console Output Example (Accounting Amy):**
```
[14:32:15]  Running test: Accounting Amy
[14:32:15]   Loves accuracy, organization, and procedures
[14:32:16]  Applied 20 answers for Accounting Amy
[14:32:16]    Pattern: keyword-based
[14:32:18]  Validating results...
[14:32:18]    Expected top: ACC, MAS, PHARM
[14:32:18]    Actual top:   ACC, MAS, PHARM
[14:32:18]  Validation PASSED - Expected program in top 3
[14:32:18]  Top 5 scores:
[14:32:18]    1. ACC: 85 pts (85%)
[14:32:18]    2. MAS: 72 pts (72%)
[14:32:18]    3. PHARM: 68 pts (68%)
```

### **What to Look For:**
-  **PASSED** = Test is working correctly
-  **WARNING** = Expected program not in top 3 (possible weighting issue)
- The **Actual top** should match or be close to **Expected top**

---

##  **SECTION 2: VALIDATION TOOLS**

### **1. Check Zero Programs**

**What it does:** Identifies any programs that **never receive points** from any answer combination.

**When to use it:** After adding/updating questions or weights

**Console Output Example (GOOD - No zeros):**
```
[14:35:22]  Checking for programs with ZERO points...
[14:35:22]  All programs have at least one point!
```

**Console Output Example (BAD - Has zeros):**
```
[14:35:22]  Checking for programs with ZERO points...
[14:35:22]  Found 3 programs with ZERO points:
[14:35:22]    - PROG: Database App Dev & Programming
[14:35:22]    - CONST: Building Construction
[14:35:22]    - DRAFT: Drafting
```

**How to interpret:**
- **GOOD**: "All programs have at least one point" 
- **BAD**: Any program listed means it can NEVER be recommended to students
- **Fix**: Add that program to appropriate answer weights

---

### **2. Verify Weights**

**What it does:** Analyzes the **distribution of weights** across all questions

**Console Output Example:**
```
[14:38:45]  Analyzing weight distribution across all questions...
[14:38:45] Weight Distribution:
[14:38:45]    5-point weights: 45
[14:38:45]    4-point weights: 78
[14:38:45]    3-point weights: 92
[14:38:45]    2-point weights: 34
[14:38:45]    1-point weights: 12

[14:38:45]  Top 10 Programs by Appearance:
[14:38:45]    MA: 18 appearances
[14:38:45]    CYB: 17 appearances
[14:38:45]    ACC: 16 appearances
[14:38:45]    NA: 15 appearances
[14:38:45]    WELD: 14 appearances
[14:38:45]    ... (more)

[14:38:45]  Programs with <5 appearances:
[14:38:45]    PROG: 0 appearances
[14:38:45]    CONST: 0 appearances
[14:38:45]    DRAFT: 0 appearances
```

**How to interpret:**
- **Weight Distribution**: Should be balanced (more 3s and 4s than 5s)
- **Top Programs**: Healthcare (MA, NA) and Technical (CYB) should appear most
- ** Warning**: Programs with <5 appearances may need more visibility

---

### **3. Regression Test**

**What it does:** Runs ALL profiles automatically and reports pass/fail

**Console Output Example:**
```
[14:42:10]  STARTING COMPLETE REGRESSION TEST
[14:42:10] =================================

Testing: Accounting Amy
   Top: ACC (85 pts)
   Expected in top? 

Testing: Cyber Carl
   Top: CYB (82 pts)
   Expected in top? 

Testing: Welding Wendy
   Top: WELD (78 pts)
   Expected in top? 

Testing: Medical Mary
   Top: MA (88 pts)
   Expected in top? 

REGRESSION TEST SUMMARY:
   accounting: PASS - Top: ACC
   cybersecurity: PASS - Top: CYB
   welding: PASS - Top: WELD
   medical: PASS - Top: MA

 4/4 tests passed
```

**How to interpret:**
- **PASS** = Profile's expected program was in top 3
- **FAIL** = Profile's expected program was NOT in top 3
- **4/4 passed** = All profiles working correctly
- **<4 passed** = Some profiles need weight adjustments

---

### **4. Export Test Results**

**What it does:** Downloads a text file with all test data

**File Contents Example:**
```
=== CURRENT TEST RESULTS ===
Timestamp: 2024-01-15T14:45:23.456Z

Program,Code,Score,Percentage
Accounting Operations,ACC,85,85%
Applied Cybersecurity,CYB,82,82%
Medical Assisting,MA,78,78%
...

=== WEIGHT DISTRIBUTION ===
Weight 5: 45 occurrences
Weight 4: 78 occurrences
Weight 3: 92 occurrences
Weight 2: 34 occurrences
Weight 1: 12 occurrences
```

**When to use:**
- Save test results for documentation
- Share with team members
- Compare after making changes

---

##  **SECTION 3: ANSWER MAPPING**

**What it shows:** The current order of answers for each question (important with randomization)

**Example Display:**
```
Q1:
0: Knowing the numbers are accurate...
1: Fixing a problem no one else...
2: Creating something that looks...
3: Helping a person feel safer...

Q2:
0: Step-by-step procedures...
1: Troubleshooting a system...
...
```

**How to use:**
- Click **Refresh Mapping** to update
- Useful when debugging why a profile selected certain answers
- Confirms randomization is working

---

##  **SECTION 4: TEST OUTPUT CONSOLE**

### **Color Coding:**

| Color | Meaning | Example |
|-------|---------|---------|
| **Blue** | Information | ` Running test: Accounting Amy` |
| **Green** | Success/Pass | ` Validation PASSED` |
| **Yellow** | Warning | ` Expected program not in top 3` |
| **Red** | Error/Fail | ` Found 3 programs with ZERO points` |
| **Gray** | Details/Data | `   ACC: 85 pts` |

### **Common Console Messages & What They Mean:**

| Message | Meaning | Action Needed |
|---------|---------|---------------|
| ` Validation PASSED` | Test working correctly | None |
| ` Validation WARNING` | Expected program not in top 3 | Check weights for that profile |
| ` Found X programs with ZERO points` | Some programs never appear | Add missing programs to weights |
| ` Programs with <5 appearances` | Programs appear too rarely | Consider adding more connections |
| ` 4/4 tests passed` | All good! | None |
| ` 2/4 tests passed` | Some profiles failing | Adjust weights for failing profiles |

---

##  **Complete Testing Workflow**

### **Step 1: Quick Check**
1. Click **Accounting Amy** → Should see ACC in top 3
2. Click **Cyber Carl** → Should see CYB in top 3
3. Click **Welding Wendy** → Should see WELD in top 3
4. Click **Medical Mary** → Should see MA/NA in top 3

### **Step 2: Validation**
5. Click **Check Zero Programs** → Should say "All programs have points"
6. Click **Verify Weights** → Check for programs with <5 appearances

### **Step 3: Full Regression**
7. Click **Regression Test** → Should show 4/4 passed

### **Step 4: Document**
8. Click **Export Results** → Save file for reference

---

##  **Troubleshooting Common Issues**

### **Issue: Profile test shows WARNING**
```
 Validation WARNING - Expected program not in top 3
   Expected top: ACC, MAS, PHARM
   Actual top: CYB, CSIT, ESIA
```

**Problem:** The profile selected answers that led to wrong program
**Fix:** Check weights for that profile's answers - they may be too heavily weighted toward other programs

---

### **Issue: Zero programs found**
```
 Found 3 programs with ZERO points
```

**Problem:** Some programs never appear in any answer
**Fix:** Add those programs to appropriate answer weights (like we did with PROG, CONST, DRAFT)

---

### **Issue: Regression test shows 2/4 passed**
```
 REGRESSION TEST SUMMARY:
   accounting: PASS
   cybersecurity: FAIL
   welding: PASS
   medical: FAIL
```

**Problem:** Cyber Carl and Medical Mary profiles not working
**Fix:** Check weights for CYB and MA/NA - they may need stronger connections


# Dataset: User Stories

Dưới đây là **18 user stories** cho Student Management Pro, được viết theo format **INVEST** và sử dụng Jira để quản lý.

---

## Sprint 1 User Stories

### US-01: Notification System (SMP-1)

```
Jira Key: SMP-1

As a user, I want to see toast notifications when I perform actions,
so that I know whether my actions were successful or failed.

Priority: P1
Estimate: 2 SP
Story Points: 2
Assignee: Dev A

Acceptance Criteria:
- [ ] Toast notification appears at top-right corner
- [ ] Different colors for success (green), error (red), warning (yellow)
- [ ] Toast auto-dismisses after 3 seconds
- [ ] User can dismiss toast by clicking X button
- [ ] Multiple toasts queue and display sequentially

Jira Tasks:
- [ ] Create toast component (HTML/CSS/JS)
- [ ] Implement toast queue system
- [ ] Add toast triggers for add/edit/delete actions
```

---

### US-02: Grade Calculation (GPA) (SMP-2)

```
Jira Key: SMP-2

As a teacher, I want the system to automatically calculate student GPA,
so that I can quickly see academic performance.

Priority: P1
Estimate: 3 SP
Story Points: 3
Assignee: Dev B

Acceptance Criteria:
- [ ] Student can have multiple subject scores
- [ ] GPA displays in student list table
- [ ] GPA displays in student profile
- [ ] GPA updates automatically when scores change
- [ ] GPA classification shown: Excellent/Good/Average/Poor

Jira Tasks:
- [ ] Add subjects/scores data structure
- [ ] Implement GPA calculation function
- [ ] Add GPA column to student table
- [ ] Add GPA display to profile
```

---

### US-03: Data Validation Enhancement (SMP-3)

```
Jira Key: SMP-3

As a system, I want to validate student data more strictly,
so that data quality is maintained.

Priority: P1
Estimate: 2 SP
Story Points: 2
Assignee: Dev A

Acceptance Criteria:
- [ ] Student ID: 5-10 chars, alphanumeric only, unique
- [ ] Name: 2-50 chars, letters and spaces only
- [ ] Email: valid email format
- [ ] Score: 0-10, one decimal place allowed
- [ ] Error messages display below each field
- [ ] Validate on blur and on submit

Tasks:
- [ ] Create validation functions
- [ ] Add error message display
- [ ] Add visual feedback (red border for invalid)
- [ ] Test all validation cases
```

---

### US-04: Student Status Toggle (SMP-4)

```
Jira Key: SMP-4

As an admin, I want to mark students as active or inactive,
so that I can manage student enrollment status.

Priority: P2
Estimate: 2 SP
Story Points: 2
Assignee: Dev B

Acceptance Criteria:
- [ ] Each student has status: Active or Inactive
- [ ] Default status is Active on creation
- [ ] Toggle switch to change status
- [ ] Filter to show: All / Active only / Inactive only
- [ ] Inactive students excluded from statistics
- [ ] Inactive students shown with visual indicator (grayed out)

Tasks:
- [ ] Add status field to data model
- [ ] Add toggle UI component
- [ ] Add filter dropdown
- [ ] Update statistics logic
```

---

## Sprint 2 User Stories

### US-05: Export to Excel/CSV (SMP-5)

```
Jira Key: SMP-5

As a teacher, I want to export student data to Excel or CSV,
so that I can share data with others or do further analysis.

Priority: P2
Estimate: 3 SP
Story Points: 3
Assignee: Dev A

Acceptance Criteria:
- [ ] Export button visible in toolbar
- [ ] Dropdown to select format: Excel or CSV
- [ ] File contains: ID, Name, Class, Score, GPA, Status
- [ ] Filename includes date: students_YYYYMMDD.xlsx
- [ ] "No data" message when list is empty
- [ ] Proper Unicode handling in export

Tasks:
- [ ] Create CSV generation function
- [ ] Create Excel export (using SheetJS or similar)
- [ ] Add export button and dropdown
- [ ] Test export with special characters
```

---

### US-06: Pagination (SMP-6)

```
Jira Key: SMP-6

As a user, I want to see students in pages,
so that the interface is not overwhelmed with large lists.

Priority: P2
Estimate: 3 SP
Story Points: 3
Assignee: Dev B

Acceptance Criteria:
- [ ] Default 20 students per page
- [ ] Page size options: 10, 20, 50, 100
- [ ] Pagination controls: First, Prev, 1 2 3 ..., Next, Last
- [ ] "Showing X-Y of Z students" text
- [ ] Pagination persists during search/filter
- [ ] Keyboard navigation for pages

Tasks:
- [ ] Implement pagination logic
- [ ] Create pagination UI component
- [ ] Handle page size change
- [ ] Maintain state during filtering
```

---

### US-07: Bulk Import from CSV (SMP-7)

```
Jira Key: SMP-7

As an admin, I want to import multiple students from a CSV file,
so that I can quickly populate the system with batch data.

Priority: P2
Estimate: 5 SP
Story Points: 5
Assignee: Dev A

Acceptance Criteria:
- [ ] Import button in toolbar
- [ ] File input accepts only .csv files
- [ ] Downloadable CSV template
- [ ] Preview shows: X valid, Y errors
- [ ] Confirmation before actual import
- [ ] Success toast with count
- [ ] Error toast with details for failed rows

Tasks:
- [ ] Create file upload component
- [ ] Parse CSV file
- [ ] Validate each row
- [ ] Show preview modal
- [ ] Implement import logic
- [ ] Handle duplicates and errors
```

---

### US-08: Statistics Dashboard (SMP-8)

```
Jira Key: SMP-8

As an admin, I want to see visual statistics about students,
so that I can understand the data better.

Priority: P2
Estimate: 8 SP
Story Points: 8
Assignee: Dev B

Acceptance Criteria:
- [ ] Pie chart: Students by class
- [ ] Bar chart: Score distribution (0-2, 2-4, 4-6, 6-8, 8-10)
- [ ] Stats cards: Total, Active, Average Score, Top GPA
- [ ] Charts are responsive
- [ ] Charts update when data changes

Tasks:
- [ ] Integrate Chart.js or similar
- [ ] Create chart components
- [ ] Calculate statistics data
- [ ] Make charts responsive
- [ ] Add export as image option
```

---

## Sprint 3 User Stories

### US-09: Student Profile Page (SMP-9)

```
Jira Key: SMP-9

As a teacher, I want to view detailed student profile,
so that I can see all information about a student in one place.

Priority: P2
Estimate: 5 SP
Story Points: 5
Assignee: Dev A

Acceptance Criteria:
- [ ] Click student row opens profile modal
- [ ] Profile shows: Avatar, ID, Name, Class, Email, Scores, GPA
- [ ] Subject-wise score breakdown
- [ ] Attendance summary
- [ ] Edit button to update info
- [ ] Close button to dismiss

Tasks:
- [ ] Create profile modal component
- [ ] Fetch and display all student data
- [ ] Add subject scores section
- [ ] Add attendance summary
- [ ] Add edit functionality
```

---

### US-10: Attendance Tracking (SMP-10)

```
Jira Key: SMP-10

As a teacher, I want to track student attendance for each class session,
so that I can monitor student participation.

Priority: P2
Estimate: 8 SP
Story Points: 8
Assignee: Dev B

Acceptance Criteria:
- [ ] Create new attendance session with date and subject
- [ ] Mark each student as Present, Absent, or Late
- [ ] "Mark all Present" quick action
- [ ] Save attendance to localStorage
- [ ] View attendance history by week/month
- [ ] Attendance percentage shown in profile

Tasks:
- [ ] Create attendance session form
- [ ] Build attendance marking UI
- [ ] Implement storage logic
- [ ] Create history view
- [ ] Calculate and display attendance %
```

---

### US-11: Audit Log (SMP-11)

```
Jira Key: SMP-11

As an admin, I want to see who did what and when,
so that I can track changes and troubleshoot issues.

Priority: P3
Estimate: 5 SP
Story Points: 5
Assignee: Dev A

Acceptance Criteria:
- [ ] Log all create/update/delete actions
- [ ] Each log entry: timestamp, action, target, user
- [ ] View log in modal or separate tab
- [ ] Filter by action type and date
- [ ] Export log to JSON
- [ ] Auto-cleanup after 30 days

Tasks:
- [ ] Create audit log data structure
- [ ] Add logging to all mutations
- [ ] Build log viewer UI
- [ ] Add filtering functionality
- [ ] Implement export
- [ ] Add cleanup job
```

---

## Additional User Stories (Backlog - Future Sprints)

### US-12: Multi-language Support (SMP-12)

```
Jira Key: SMP-12 (Backlog)

As a user, I want to use the app in my language,
so that I can understand the interface better.

Priority: P3
Estimate: 5 SP
Story Points: 5
Assignee: TBD

Acceptance Criteria:
- [ ] Language selector in header
- [ ] Two languages: Vietnamese (default), English
- [ ] All UI text is internationalized
- [ ] Language preference saved in localStorage
- [ ] Language switch without page reload

Jira Tasks:
- [ ] Create translation files
- [ ] Implement i18n system
- [ ] Translate all UI text
- [ ] Add language selector
```

---

### US-13: Search Enhancement (SMP-13)

```
Jira Key: SMP-13 (Backlog)

As a user, I want to search students by multiple fields,
so that I can find students quickly.

Priority: P2
Estimate: 2 SP
Story Points: 2
Assignee: TBD

Acceptance Criteria:
- [ ] Search by ID, name, class
- [ ] Search by GPA range
- [ ] Search by status
- [ ] Clear search button
- [ ] "No results" message

Jira Tasks:
- [ ] Enhance search input
- [ ] Add filter dropdowns
- [ ] Update search logic

Tasks:
- [ ] Enhance search input
- [ ] Add filter dropdowns
- [ ] Update search logic
- [ ] Add clear button
```

---

### US-14: Student Sorting

```
As a user, I want to sort students by different columns,
so that I can organize the list as needed.

Priority: P2
Estimate: 1 SP
Story Points: 1

Acceptance Criteria:
- [ ] Click column header to sort
- [ ] Toggle ascending/descending
- [ ] Visual indicator for sort direction
- [ ] Sort persists during pagination

Tasks:
- [ ] Add click handlers to headers
- [ ] Implement sort logic
- [ ] Add visual indicators
```

---

### US-15: Keyboard Shortcuts

```
As a power user, I want keyboard shortcuts,
so that I can navigate faster.

Priority: P3
Estimate: 2 SP
Story Points: 2

Acceptance Criteria:
- [ ] Ctrl+F: Focus search
- [ ] Ctrl+N: New student
- [ ] Escape: Close modals
- [ ] Arrow keys: Navigate pagination
- [ ] Shortcuts listed in help modal

Tasks:
- [ ] Create keyboard handler
- [ ] Implement shortcuts
- [ ] Add help modal
```

---

### US-16: Dark/Light Theme (Enhancement)

```
As a user, I want to toggle between dark and light themes,
so that I can use the app comfortably in different lighting.

Priority: P2
Estimate: 2 SP
Story Points: 2

Acceptance Criteria:
- [ ] Theme toggle button in header
- [ ] Dark and light themes available
- [ ] Theme preference saved
- [ ] Smooth transition animation
- [ ] System preference detection on first load

Tasks:
- [ ] Add CSS variables for themes
- [ ] Create toggle component
- [ ] Add localStorage persistence
- [ ] Add system preference detection
```

---

### US-17: Data Backup/Restore

```
As an admin, I want to backup and restore my data,
so that I don't lose data accidentally.

Priority: P3
Estimate: 3 SP
Story Points: 3

Acceptance Criteria:
- [ ] Export all data to JSON file
- [ ] Import data from JSON file
- [ ] Confirmation before restore
- [ ] Warning if data will be overwritten

Tasks:
- [ ] Create backup function
- [ ] Create restore function
- [ ] Add confirmation dialog
- [ ] Handle merge/replace logic
```

---

### US-18: Bulk Delete

```
As an admin, I want to delete multiple students at once,
so that I can clean up data faster.

Priority: P2
Estimate: 2 SP
Story Points: 2

Acceptance Criteria:
- [ ] Checkbox column in table
- [ ] "Select All" option
- [ ] Bulk delete button
- [ ] Confirmation dialog
- [ ] Success toast with count

Tasks:
- [ ] Add checkboxes to table
- [ ] Add select all functionality
- [ ] Add bulk delete button
- [ ] Add confirmation dialog
- [ ] Implement delete logic
```

---

## User Story Mapping

| Backlog Area | Sprint 1 | Sprint 2 | Sprint 3 |
|--------------|----------|----------|----------|
| Core Features | US-01, US-02, US-03, US-04 | - | - |
| Data Management | - | US-05, US-06, US-07 | - |
| Visualization | - | US-08 | - |
| Advanced | - | - | US-09, US-10, US-11 |
| Enhancements | US-16 | US-13, US-14, US-18 | US-12, US-15, US-17 |

Total: 18 User Stories, 53 Story Points

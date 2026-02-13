// Staff/Trainer specific data - Limited to their own teaching activities

export const getStaffData = (staffName, center) => {
  const staffProfiles = {
    "Amit Verma": {
      personalInfo: {
        name: "Amit Verma",
        employeeId: "EMP001",
        role: "Senior Faculty",
        department: "General Studies",
        center: "Delhi Center",
        joinDate: "2020-01-15",
        email: "amit.verma@sriram.com",
        phone: "+91 98765 43210",
      },

      todaySchedule: [
        {
          time: "09:00 AM - 10:30 AM",
          subject: "Indian Polity",
          batch: "Morning A",
          room: "101",
          students: 45,
        },
        {
          time: "11:00 AM - 12:30 PM",
          subject: "Current Affairs",
          batch: "Morning B",
          room: "102",
          students: 38,
        },
        {
          time: "02:00 PM - 03:30 PM",
          subject: "Indian Polity",
          batch: "Evening A",
          room: "201",
          students: 52,
        },
        {
          time: "04:00 PM - 05:30 PM",
          subject: "Mock Discussion",
          batch: "Evening B",
          room: "202",
          students: 41,
        },
      ],

      weekSchedule: [
        { day: "Monday", classes: 4, hours: 6, students: 176 },
        { day: "Tuesday", classes: 4, hours: 6, students: 168 },
        { day: "Wednesday", classes: 3, hours: 4.5, students: 135 },
        { day: "Thursday", classes: 4, hours: 6, students: 182 },
        { day: "Friday", classes: 4, hours: 6, students: 179 },
        { day: "Saturday", classes: 5, hours: 7.5, students: 215 },
      ],

      myStudents: [
        {
          name: "Rahul Kumar",
          batch: "Morning A",
          attendance: 95,
          performance: 88,
          lastTest: 92,
        },
        {
          name: "Priya Sharma",
          batch: "Evening A",
          attendance: 98,
          performance: 91,
          lastTest: 94,
        },
        {
          name: "Amit Patel",
          batch: "Morning B",
          attendance: 92,
          performance: 85,
          lastTest: 89,
        },
        {
          name: "Neha Singh",
          batch: "Evening B",
          attendance: 88,
          performance: 78,
          lastTest: 82,
        },
      ],

      performanceMetrics: {
        totalStudents: 156,
        averageAttendance: 89.5,
        averageScore: 82.3,
        studentSatisfaction: 4.7,
        completionRate: 94.2,
        passPercentage: 87.5,
      },

      recentTests: [
        {
          date: "2024-02-10",
          subject: "Indian Polity",
          batch: "Morning A",
          avgScore: 78.5,
          highest: 96,
        },
        {
          date: "2024-02-08",
          subject: "Current Affairs",
          batch: "Evening A",
          avgScore: 82.1,
          highest: 98,
        },
        {
          date: "2024-02-06",
          subject: "Indian Polity",
          batch: "Morning B",
          avgScore: 76.8,
          highest: 94,
        },
      ],

      attendanceLog: [
        { date: "2024-02-12", present: 142, absent: 14, percentage: 91.0 },
        { date: "2024-02-11", present: 138, absent: 18, percentage: 88.5 },
        { date: "2024-02-10", present: 145, absent: 11, percentage: 92.9 },
        { date: "2024-02-09", present: 140, absent: 16, percentage: 89.7 },
      ],

      materialsAssigned: [
        {
          title: "Indian Constitution - Fundamentals",
          type: "PDF",
          students: 156,
          downloads: 148,
        },
        {
          title: "Current Affairs - January 2024",
          type: "PDF",
          students: 156,
          downloads: 152,
        },
        {
          title: "Mock Test Series - Polity",
          type: "Test",
          students: 156,
          completed: 134,
        },
      ],

      pendingTasks: [
        {
          task: "Grade Mock Test - Batch A",
          deadline: "Today",
          priority: "high",
        },
        {
          task: "Prepare Weekly Report",
          deadline: "Tomorrow",
          priority: "medium",
        },
        { task: "Update Study Material", deadline: "3 days", priority: "low" },
      ],

      studentQueries: [
        {
          student: "Rahul Kumar",
          query: "Doubt in Article 370",
          time: "2 hours ago",
          status: "pending",
        },
        {
          student: "Priya Sharma",
          query: "Emergency provisions",
          time: "5 hours ago",
          status: "resolved",
        },
      ],

      salaryInfo: {
        basic: 45000,
        hra: 13500,
        allowances: 8000,
        deductions: 2500,
        netSalary: 64000,
        lastPaid: "2024-02-01",
      },

      leaveBalance: {
        casual: 8,
        medical: 12,
        earned: 15,
        taken: 5,
      },
    },
  };

  return staffProfiles[staffName] || staffProfiles["Amit Verma"];
};

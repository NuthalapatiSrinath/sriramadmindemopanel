# Backend Integrated Section - Admin Panel

## Overview

The admin panel now includes a dedicated "Backend Integrated" section that connects directly to your backend API for real-time data management. This section is available to all roles: **Super Admin**, **Center Admin**, and **Staff/Trainer**.

## 📁 Folder Structure

```
demoadminpanel/src/pages/backend/
├── BackendUsersManagement.jsx          # Real-time user management
├── BackendUserActivityAnalytics.jsx    # User activity tracking & analytics
└── BackendContactsManagement.jsx       # Contact form submissions management
```

## 🎯 Features

### 1️⃣ **Backend Users Management** (`/backend/users`)

**Purpose:** Manage all registered users from the backend database

**Features:**

- ✅ View all users with pagination
- ✅ Search by name or email
- ✅ Filter by verification status (verified/unverified)
- ✅ Filter by role (user/admin/staff)
- ✅ View user details (name, email, phone, center, join date)
- ✅ Verify unverified users
- ✅ Delete users
- ✅ Role-based filtering (center admins/staff see only their center's users)

**Access Control:**

- **Super Admin:** See all users from all centers
- **Center Admin:** See only users from their assigned center (or selected center)
- **Staff:** See only users from their assigned center

### 2️⃣ **Backend User Activity Analytics** (`/backend/user-activity`)

**Purpose:** Track and analyze user interactions on the frontend website

**Features:**

- ✅ Real-time activity tracking (page views, clicks, navigation, scrolls, etc.)
- ✅ Filter by activity type (20+ types tracked)
- ✅ Filter by date range (today/week/month/all)
- ✅ View activity details (timestamp, user email, center, action metadata)
- ✅ Analytics dashboard with stats:
  - Total activities
  - Unique users
  - Average time spent
  - Today's activity count
- ✅ Search by user email
- ✅ Export functionality (coming soon)

**Tracked Activity Types:**

- Page views
- Navigation clicks
- Dropdown interactions
- Link clicks
- Scroll behavior
- Hover events
- Mobile touch gestures
- Login/Logout events
- Button clicks
- Form interactions
- Video plays
- Carousel swipes
- Modal opens/closes
- Copy/Paste actions
- And more...

**Access Control:**

- **Super Admin:** See all activity from all centers
- **Center Admin:** See only activity from their center's users
- **Staff:** See only activity from their center's users

### 3️⃣ **Backend Contacts Management** (`/backend/contacts`)

**Purpose:** Manage contact form submissions from the website

**Features:**

- ✅ View all contact submissions
- ✅ Search by name or email
- ✅ Filter by status (pending/resolved)
- ✅ View full contact details in modal
- ✅ Mark contacts as resolved
- ✅ Delete contact submissions
- ✅ See contact center preference

**Access Control:**

- **Super Admin:** See all contacts from all centers
- **Center Admin:** See only contacts for their center
- **Staff:** See only contacts for their center

## 🔐 Role-Based Access System

### How It Works

Each backend page automatically filters data based on the logged-in user's role:

```javascript
// Example from BackendUsersManage ment.jsx
if (user.role === "centeradmin" || user.role === "staff") {
  const centerToFilter = selectedCenter || user.centerName;
  if (centerToFilter && centerToFilter !== "All Centers") {
    params.append("center", centerToFilter);
  }
}
```

### Role Hierarchy

1. **Super Admin**
   - Full access to all centers
   - Can switch between centers using the center selector
   - Sees all users, activities, and contacts

2. **Center Admin**
   - Access only to their assigned center's data
   - Can switch between their allowed centers
   - Sees only their center's users, activities, and contacts

3. **Staff/Trainer**
   - Access only to their assigned center's data
   - Cannot switch centers
   - Sees only their center's users, activities, and contacts

## 🎨 UI Features

### Consistent Design

- Modern gradient cards
- Smooth animations with Framer Motion
- Responsive tables with pagination
- Real-time loading states
- Toast notifications for actions
- Search and filter capabilities
- Beautiful modal dialogs

### Color Coding

- **Users Management:** Blue gradient (from-blue-500 to-indigo-500)
- **User Activity:** Purple gradient (from-purple-500 to-pink-500)
- **Contacts:** Teal gradient (from-teal-500 to-cyan-500)

## 📊 API Integration

### Endpoints Used

All pages connect to the backend via `api/axiosInstance.js`:

**Users:**

- `GET /admin/users?page=1&limit=10&center=CenterName&isVerified=true&role=user`
- `DELETE /admin/users/:userId`
- `PATCH /admin/users/:userId/verify`

**User Activity:**

- `GET /admin/user-activities?page=1&limit=20&type=page_view&dateRange=today&center=CenterName`

**Contacts:**

- `GET /admin/contacts?page=1&limit=20&status=pending&center=CenterName`
- `DELETE /admin/contacts/:contactId`
- `PATCH /admin/contacts/:contactId/resolve`

### Request Flow

```
Component → api/axiosInstance.js → Backend API
                ↓
        Includes auth token from localStorage
                ↓
        Role-based filtering applied
                ↓
        Returns filtered data
```

## 🚀 Usage

### For Super Admin

1. Login to admin panel
2. Click "Backend Integrated" in sidebar
3. Select any of the three pages
4. Use center selector to view specific center data or "All Centers"
5. Use filters and search to find specific data

### For Center Admin

1. Login to admin panel
2. Click "Backend Integrated" in sidebar
3. Select any of the three pages
4. Automatically see only your center's data
5. Switch centers if you have multiple assigned centers

### For Staff/Trainer

1. Login to admin panel
2. Click "Backend Integrated" in sidebar
3. Select any of the three pages
4. See only your assigned center's data
5. Use filters and search within your center's data

## 🔧 Configuration

### Adding to Sidebar

The backend section is automatically added to all role menus in `layouts/Sidebar.jsx`:

```javascript
{
  section: "backend",
  title: "Backend Integrated",
  icon: Database,
  items: [
    {
      path: "/backend/users",
      label: "Users Management",
      badge: "Live",
      gradient: "from-blue-500 to-indigo-500"
    },
    // ... other items
  ]
}
```

### Routes Configuration

Routes are defined in `routes/AppRoutes.jsx`:

```javascript
{
  path: "/backend/users",
  element: <BackendUsersManagement />,
  title: "Users Management (Backend)"
}
```

## 📱 Responsive Design

All backend pages are fully responsive:

- Desktop: Full-width tables with all columns
- Tablet: Horizontal scroll for tables
- Mobile: Optimized card layout (can be enhanced)

## 🎯 Future Enhancements

- [ ] Export data to CSV/Excel
- [ ] Bulk actions (delete multiple, verify multiple)
- [ ] Advanced filtering options
- [ ] Real-time updates with WebSockets
- [ ] Activity heatmaps and charts
- [ ] Email templates for contacting users
- [ ] Automated responses for contacts
- [ ] Analytics dashboards with graphs

## 🐛 Troubleshooting

### Data not loading?

- Check browser console for API errors
- Verify backend is running and accessible
- Check if auth token is valid (logout and login again)
- Verify backend endpoints are correctly configured

### Seeing wrong center's data?

- Check your user's `centerName` field in database
- Verify `selectedCenter` in Redux state
- Check backend role-based filtering logic

### Actions not working?

- Verify API endpoints exist in backend
- Check user permissions for the action
- Look for error messages in toast notifications
- Check network tab in browser dev tools

## 📞 Support

For issues or questions:

1. Check browser console for errors
2. Verify backend API is running
3. Check user role and permissions
4. Review backend route documentation

---

**Last Updated:** February 19, 2026  
**Version:** 1.0.0  
**Author:** AI Assistant

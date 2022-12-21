export const navigations = [
  { name: "Dashboard", path: "/dashboard/default", icon: "dashboard" },
  { label: "Trang chủ", type: "label" },
  {
    name: "Bảo mật",
    icon: "security",
    children: [],
  },

  {
    name: "Lãnh đạo",
    icon: "collections_bookmark",
    children: [
      { name: "Chờ duyệt", path: "/test1", icon: "cached" },
      { name: "Đã duyệt", path: "/test2", icon: "published_with_changes" },
    ],
  },

  {
    name: "Quản lý",
    icon: "group",
    children: [
      { name: "Thêm mới nhân viên", path: "/addnew_employee", icon: "person_add_alt_1" },
      { name: "Quản lý nhân viên", path: "/manage_employee", icon: "manage_accounts" },
      { name: "Kết thúc", path: "/nolongerworking", icon: "person_off" },
      { name: "Nội dung liên quan", path: "/related_info", icon: "sensor_occupied" },
    ],
  },
];

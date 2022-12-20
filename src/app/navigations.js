export const navigations = [
  { name: "Dashboard", path: "/dashboard/default", icon: "dashboard" },
  { label: "Trang chủ", type: "label" },
  {
    name: "Bảo mật",
    icon: "security",
    children: [],
  },
  { label: "Lãnh đạo", type: "label" },
  {
    name: "Phê duyệt",
    icon: "collections_bookmark",
    children: [
      { name: "Chờ duyệt", path: "/test1", icon: "cached" },
      { name: "Đã duyệt", path: "/test2", icon: "published_with_changes" },
    ],
  },
  { label: "Quản Lý", type: "label" },

  {
    name: "Nhân viên",
    icon: "group",
    children: [
      { name: "Thêm mới nhân viên", path: "/test3", icon: "person_add_alt_1" },
      { name: "Quản lý nhân viên", path: "/test4", icon: "manage_accounts" },
      { name: "Kết thúc", path: "/test5", icon: "person_off" },
      { name: "Nội dung liên quan", path: "/test6", icon: "sensor_occupied" },
    ],
  },
];

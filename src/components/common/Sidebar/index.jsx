"use client"; // Necessary for client-side hooks

import { useState } from "react";
import {
  FiHome,
  FiShoppingCart,
  FiPackage,
  FiCreditCard,
  FiUsers,
  FiBell,
  FiHelpCircle,
  FiSettings,
  FiChevronLeft,
  FiChevronRight,
  FiChevronDown,
  FiChevronUp,
  FiTool,
  FiStar,
} from "react-icons/fi";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [expandedMenus, setExpandedMenus] = useState({});
  const pathname = usePathname();

  const toggleMenu = (menu) => {
    setExpandedMenus((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  const menuItems = [
    { name: "Dashboard", icon: <FiHome />, href: "/" },
    { name: "Orders", icon: <FiShoppingCart />, href: "/orders" },
    {
      name: "Inventory Management",
      icon: <FiPackage />,
      href: "/inventory",
      subItems: [
        { name: "Inventory", href: "/inventory" },
        { name: "Category Management", href: "/inventory/categories" },
        { name: "Subcategory Management", href: "/inventory/subcategories" },
        { name: "Bulk Uploads", href: "/inventory/bulk-uploads" }, // New feature added here
      ],
    },
    {
      name: "Reviews & Ratings",
      icon: <FiStar />, // Or any other suitable icon
      href: "/reviews",
    },
    { name: "Payments", icon: <FiCreditCard />, href: "/payments" },
    { name: "Customers", icon: <FiUsers />, href: "/customers" },
    { name: "Notifications", icon: <FiBell />, href: "/notifications" },
    {
      name: "Marketing & Promotions",
      icon: <FiShoppingCart />,
      href: "/marketing",
      subItems: [
        { name: "Discount Codes", href: "/marketing/discount-codes" },
        { name: "Email Campaigns", href: "/marketing/email-campaigns" },
        { name: "Product Promotions", href: "/marketing/product-promotions" },
        { name: "SEO Management", href: "/marketing/seo-management" },
      ],
    },
    {
      name: "Content Management",
      icon: <FiPackage />,
      href: "/content",
      subItems: [
        { name: "CMS Integration", href: "/content/cms-integration" },
        { name: "Blog Management", href: "/content/blog-management" },
        { name: "Banner Management", href: "/content/banner-management" },
      ],
    },
    {
      name: "Analytics & Reporting",
      icon: <FiPackage />, // Change this icon to something more suitable
      href: "/analytics-reporting",
      subItems: [
        { name: "Sales Reports", href: "/analytics-reporting/sales-reports" },
        {
          name: "Customer Reports",
          href: "/analytics-reporting/customer-reports",
        },
        {
          name: "Inventory Reports",
          href: "/analytics-reporting/inventory-reports",
        },
        { name: "Order Reports", href: "/analytics-reporting/order-reports" },
      ],
    },
    {
      name: "User Management",
      icon: <FiUsers />,
      href: "/user-management",
      subItems: [
        {
          name: "Customer Accounts",
          href: "/user-management/customer-accounts",
        },
        {
          name: "Admin Roles & Permissions",
          href: "/user-management/admin-roles",
        },
        { name: "Activity Logs", href: "/user-management/activity-logs" },
      ],
    },
    {
      name: "Customer Support",
      icon: <FiHelpCircle />,
      href: "/customer-support",
      subItems: [
        {
          name: "Ticketing System",
          href: "/customer-support/ticketing-system",
        },
        {
          name: "Live Chat Support",
          href: "/customer-support/live-chat-support",
        },
        { name: "FAQ Management", href: "/customer-support/faq-management" },
      ],
    },
    {
      name: "Settings & Configurations",
      icon: <FiSettings />,
      href: "/settings",
      subItems: [
        { name: "Site Settings", href: "/settings/site" },
        {
          name: "Payment Gateway Configuration",
          href: "/settings/payment-gateway",
        },
        { name: "Shipping Options", href: "/settings/shipping" },
        { name: "Notification Settings", href: "/settings/notifications" },
        { name: "Language & Localization", href: "/settings/language" },
      ],
    },
    {
      name: "Security & Compliance",
      icon: <FiTool />,
      href: "/security",
      subItems: [
        { name: "Audit Logs", href: "/security/audit-logs" },
        { name: "GDPR Compliance", href: "/security/gdpr" },
        { name: "Two-Factor Authentication", href: "/security/2fa" },
      ],
    },
    { name: "Help & Support", icon: <FiHelpCircle />, href: "/help-support" },
  ];

  return (
    <aside
      className={`bg-gray-900 text-gray-400 flex flex-col h-screen fixed transition-all duration-300 ${
        isCollapsed ? "w-20" : "w-64"
      }`}
    >
      <div className="flex flex-col flex-grow overflow-y-auto">
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <FiTool className="text-white" />
            {!isCollapsed && (
              <span className="font-semibold text-base text-white truncate">
                Mate
              </span>
            )}
          </div>
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="text-gray-400 hover:text-white"
          >
            {isCollapsed ? <FiChevronRight /> : <FiChevronLeft />}
          </button>
        </div>
        <nav className="flex-grow">
          <ul>
            {menuItems.map((item) => (
              <li key={item.name} className="px-4 py-2">
                {item.subItems ? (
                  <>
                    <div
                      onClick={() => toggleMenu(item.name)}
                      className={`flex items-center space-x-2 rounded-md p-2 hover:bg-gray-800 cursor-pointer ${
                        pathname === item.href
                          ? "bg-gray-800 text-white"
                          : "text-gray-500"
                      }`}
                    >
                      {item.icon}
                      {!isCollapsed && (
                        <span className="flex-grow truncate text-sm">
                          {item.name}
                        </span>
                      )}
                      {!isCollapsed && (
                        <span>
                          {expandedMenus[item.name] ? (
                            <FiChevronUp />
                          ) : (
                            <FiChevronDown />
                          )}
                        </span>
                      )}
                    </div>
                    {!isCollapsed && expandedMenus[item.name] && (
                      <ul className="ml-4">
                        {item.subItems.map((subItem) => (
                          <li key={subItem.name} className="px-4 py-2">
                            <Link
                              href={subItem.href}
                              passHref
                              className={`flex items-center space-x-2 rounded-md p-2 hover:bg-gray-800 ${
                                pathname === subItem.href
                                  ? "bg-gray-800 text-white"
                                  : "text-gray-500"
                              }`}
                            >
                              <span className="truncate text-sm">
                                {subItem.name}
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    passHref
                    className={`flex items-center space-x-2 rounded-md p-2 hover:bg-gray-800 ${
                      pathname === item.href
                        ? "bg-gray-800 text-white"
                        : "text-gray-500"
                    }`}
                  >
                    {item.icon}
                    {!isCollapsed && (
                      <span className="truncate text-sm">{item.name}</span>
                    )}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="p-4 flex items-center space-x-2 bg-gray-900 border-t border-gray-700">
        <img
          src="https://via.placeholder.com/150"
          alt="Profile"
          className="w-8 h-8 rounded-full"
        />
        {!isCollapsed && (
          <span className="truncate text-sm text-gray-300">
            Olivia Williams
          </span>
        )}
      </div>
    </aside>
  );
}

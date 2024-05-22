import React from "react";

import "./styles.css"; // Make sure to create and link the CSS file
import Link from "next/link";
import { usePathname } from "next/navigation";

const Dashboard = () => {
  const currentPath = usePathname();

  const links = [
    { label: "Quản lý trang", href: "/page" },
    { label: "Quản lý Banner", href: "/banner" },
    { label: "Quản lý Config", href: "/config" },
    { label: "Quản lý tin tức", href: "/news" },
    { label: "Kiểm duyệt", href: "/approval" },
    { label: "Quản lý Broadcast", href: "/broadcast" },
    { label: "Quản lý liên hệ hợp tác", href: "/partnership" },
    { label: "Quản lý đăng ký streamer", href: "/streamerRegistration" },
    { label: "Quản lý top hiển thị", href: "/topDisplay" },
    { label: "Quản lý Module", href: "/module" },
    { label: "Quản lý User", href: "/user" },
    { label: "Quản lý Quyền", href: "/role" },
  ];

  return (
    <div className="container">
      <nav className="sidebar">
        <div className="logo">
          <Link href="/">
            <img src="logo.png" alt="ON Live" className="logo-img" />
          </Link>
        </div>
        <ul className="flex space-x-6">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                className={`nav-link ${
                  link.href === currentPath ? "text-zinc-900" : ""
                }`}
                href={link.href}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <main className="main-content">
        <header className="header">
          <div className="header-right">
            <div className="icon bell"></div>
            <div className="icon user"></div>
            <span className="username">Tran Tan</span>
          </div>
        </header>
        <div className="content">
          <h1>Welcome to ON Live CMS</h1>
        </div>
      </main>
    </div>
  );
};
export default Dashboard;

import React from "react";
import { useAuth } from "../Context/AuthContext";
import { useI18n } from "../Utils/intlHelper";
import CategorySidebar from "../Components/CategorySidebar";
import UserProfile from "../Components/UserProfile";

const UserInfoPage = (props) => {
  const { intlHelper } = useI18n();

  const categories = [
    intlHelper("personal.settings"),
    "categories2",
    "categories3",
    "categories4",
    "categories5",
    "categories6",
    "categories7",
    "categories8",
  ];
  const { isAuthenticated, logout } = useAuth();
  return (
    <div className="flex flex-col lg:flex-row min-h-screen dark:bg-gray-900 dark:text-white">
      <aside className="hidden lg:block lg:w-1/5 border-r p-4">
        <CategorySidebar categories={categories} title="Settings" />
      </aside>

      <main className="flex-1 p-4">
        <UserProfile />
      </main>
    </div>
  );
};

export default UserInfoPage;

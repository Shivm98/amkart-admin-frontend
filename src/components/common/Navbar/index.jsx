import ThemeToggle from "@/components/common/ThemeToggle";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center bg-gray-100 dark:bg-gray-800 p-4 shadow-md">
      <div className="flex items-center space-x-4">
        {/* Other Navbar items */}
      </div>
      <div className="flex items-center space-x-4">
        <ThemeToggle />
        <div className="flex items-center space-x-2">
          <img
            src="https://via.placeholder.com/150"
            alt="Profile"
            className="w-8 h-8 rounded-full"
          />
          <span className="text-gray-800 dark:text-gray-100">
            Olivia Williams
          </span>
        </div>
      </div>
    </div>
  );
}

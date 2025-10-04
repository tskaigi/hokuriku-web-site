interface RoleBadgeProps {
  role: string;
}

const RoleBadge = ({ role }: RoleBadgeProps) => {
  const colorClass = (() => {
    switch (role) {
      case "Naming Rights":
        return "bg-yellow-400 text-black";
      default:
        return "bg-gray-300 text-black";
    }
  })();

  return (
    <span className={`rounded-full px-3 py-1 text-sm font-semibold ${colorClass}`}>{role}</span>
  );
};

export default RoleBadge;

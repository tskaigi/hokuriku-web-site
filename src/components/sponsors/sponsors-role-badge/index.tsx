import clsx from "clsx";

interface RoleBadgeProps {
  role: string;
}

const RoleBadge = ({ role }: RoleBadgeProps) => {
  const colorClass =
    {
      "Naming Rights": "bg-yellow-400 text-black",
    }[role] ?? "bg-gray-300 text-black";

  return (
    <span className={clsx("rounded-full px-3 py-1 text-sm font-semibold", colorClass)}>{role}</span>
  );
};

export default RoleBadge;

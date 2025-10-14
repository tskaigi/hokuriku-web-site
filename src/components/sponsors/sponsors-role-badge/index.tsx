interface RoleBadgeProps {
  role: string;
}

const RoleBadge = ({ role }: RoleBadgeProps) => {
  return (
    <span className="rounded-full bg-black px-3 py-1 text-sm font-semibold text-white">{role}</span>
  );
};

export default RoleBadge;

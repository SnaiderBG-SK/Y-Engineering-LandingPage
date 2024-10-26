/**
 * interface for ContactListItem
 */
interface ContactListItemProps {
  index: number;
  iconClassName: string;
  title: string;
  description: string;
}
/**
 * Functional Component for ContactListItem
 * @param param0
 * @returns
 */
export const ContactListItem: React.FC<ContactListItemProps> = ({
  index,
  iconClassName,
  title,
  description,
}) => {
  return (
    <div className={`grid grid-cols-12 ${index !== 0 ? "mt-5" : ""}`}>
      {/* Icon */}
      <div className="col-span-1 my-auto">
        <i className={`${iconClassName} text-main-color text-2xl`}></i>
      </div>
      <div className="col-span-11 pl-4">
        {/* Title */}
        <div>
          <span className="font-semibold text-lg">{title}</span>
        </div>
        {/* Description */}
        <div>
          <span className="text-sm text-primary-gray-color">{description}</span>
        </div>
      </div>
    </div>
  );
};

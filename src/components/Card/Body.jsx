import { GiHappySkull } from "react-icons/gi";
import { FaSkullCrossbones } from "react-icons/fa";
import { GiCrownedSkull } from "react-icons/gi";

function Body(props) {
  const { title, total } = props;
  let color = title == 'confirmed' ? 'text-blue-500'
    : title == 'recovered' ? 'text-green-500'
      : title == 'death' ? 'text-red-500'
        : '';

  let icon = title == 'confirmed' ? <GiCrownedSkull />
    : title == 'recovered' ? <GiHappySkull />
      : title == 'death' ? <FaSkullCrossbones />
        : '';

  const totalStyle = `text-2xl font-bold ${color} hover:cursor-default`;

  return (
    <>
      <div className="flex justify-between items-center mb-2">
        <div className="text-left">
          <h2 className="hover:cursor-default">{title}</h2>
          <p className={totalStyle}>{total}</p>
        </div>
        <div className={totalStyle}>
          {icon}
        </div>
      </div>
    </>
  )
}

export default Body;
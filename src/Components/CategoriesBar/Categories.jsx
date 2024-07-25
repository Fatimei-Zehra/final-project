//!FATIME
import { Link } from 'react-router-dom';
import { customProductArray } from '../../Server/AllJson';
import subStyle from "./submenu.module.css"

const Categories = ({ setHoverCategory }) => {
  
  return (
    <div className={subStyle.dropdown} id='dropdown' >
      <ul >
        {customProductArray.map((item, index) => (
          <li
            key={index}
            onMouseEnter={() => setHoverCategory(item.children)}
            onMouseLeave={() => setHoverCategory(null)}
          >
            <Link to={"#"}>
              {item.title} 
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
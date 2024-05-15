
import remixiconUrl from 'remixicon/fonts/remixicon.symbol.svg';

const MenuItem = ({ icon, title, action, isActive = null }) => (
    <button
        className={"menu-item bg-gray-300 size-6 rounded-full flex items-center justify-center hover:bg-gray-800 fill-gray-800 hover:fill-white transition-colors duration-100 " }
        onClick={action}
        title={title}
    >
        <svg className="remix h-2/3 w-2/3 ">
            <use xlinkHref={`${remixiconUrl}#ri-${icon}`} />
        </svg>
    </button>
);

export default MenuItem;

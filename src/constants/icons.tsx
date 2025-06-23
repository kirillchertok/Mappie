import { FaSearch } from 'react-icons/fa';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaSun } from 'react-icons/fa6';
import { FaMoon } from 'react-icons/fa6';
import { FaRoute } from 'react-icons/fa6';
import { FaPlus } from 'react-icons/fa6';
import { FaMinus } from 'react-icons/fa6';
import { FaLocationCrosshairs } from 'react-icons/fa6';
import { FaBookmark } from 'react-icons/fa6';
import { FaUser } from 'react-icons/fa6';
import { IoMdArrowDropleft } from 'react-icons/io';
import { IoMdArrowDropright } from 'react-icons/io';

const searchIconNotPressed = <FaSearch color='white' />;

const searchIconPressed = <FaSearch color='rgba(94, 123, 199, 1)' />;

const searchIconField = <FaSearch color='gray)' />;

const favoritesIconNotPressed = <FaBookmark color='white' />;

const favoritesIconPressed = <FaBookmark color='red' />;

const favoritesIconGray = <FaBookmark color='gray' />;

const logInIconNotPressed = <FaUser color='white' />;

const logInIconPressed = <FaUser color='black' />;

const arrowLeftIcon = <IoMdArrowDropleft color='var(--font-color-black)' />;

const arrowRightIcon = <IoMdArrowDropright color='var(--font-color-black)' />;

const mapPointIcon = <FaMapMarkerAlt color='white' />;

const darkThemeIcon = <FaMoon color='black' />;

const ligthThemeIcon = <FaSun color='white' />;

const routeIcon = <FaRoute color='white' />;

const plusIcon = <FaPlus color='white' />;

const minusIcon = <FaMinus color='white' />;

const locationIcon = <FaLocationCrosshairs color='white' />;

export {
    arrowLeftIcon,
    arrowRightIcon,
    darkThemeIcon,
    favoritesIconGray,
    favoritesIconNotPressed,
    favoritesIconPressed,
    ligthThemeIcon,
    locationIcon,
    logInIconNotPressed,
    logInIconPressed,
    mapPointIcon,
    minusIcon,
    plusIcon,
    routeIcon,
    searchIconField,
    searchIconNotPressed,
    searchIconPressed,
};

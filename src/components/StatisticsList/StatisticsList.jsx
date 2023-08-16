import PropTypes from "prop-types";
import css from "./StatisticsList.module.css"
import {makeBackground} from "./MakeBackground"
 
export const StatisticsList = ({ stats }) => {
    return (
        <ul className={css.statList}>
            {stats.map( ({id, label, percentage}) => {
                return (<li className={css.item} key={id} style={{backgroundColor: `${makeBackground()}`}}>
                    <span className={css.label}>{label}</span>
                    <span className={css.percentage}>{percentage}%</span>
            </li>)
            })}
        </ul>
    )
};

StatisticsList.propTypes = {
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        }).isRequired
    ).isRequired
}

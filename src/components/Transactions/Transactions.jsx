import css from "./Transactions.module.css"
import PropTypes from "prop-types";

export const Transactions = ({items}) => {
    return (
        <tbody>
            {items.map(({ id, type, amount, currency }) => {
                return (<tr className={css.row} key={id}>
                    <td className={css.rowItem}>{type}</td>
                    <td className={css.rowItem}>{amount}</td>
                    <td className={css.rowItem}>{currency}</td>
                </tr>)
            })}
        </tbody>
    );
};

Transactions.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    }).isRequired
    ).isRequired,
}
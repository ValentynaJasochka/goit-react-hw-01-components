// import css from './TransactionHistory.module.css'
import PropTypes from "prop-types";
import { Transactions } from "../Transactions/Transactions";
import css from "./TransactionHistory.module.css"

export const TransactionHistory = ({ items }) => {
    return (<table className={css.transactionHistory}>
        <thead>
            <tr className={css.titleRow}>
                <th className={css.titleItem}>Type</th>
                <th className={css.titleItem}>Amount</th>
                <th className={css.titleItem}>Currency</th>
            </tr>
        </thead>

        <Transactions items={items} />
    </table>)
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    }).isRequired
    ).isRequired,
}
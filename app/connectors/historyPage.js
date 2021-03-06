import { connect } from "react-redux";
import { selectorMap } from "../fp";
import * as sel from "../selectors";

const mapStateToProps = selectorMap({
  walletService: sel.walletService,
  txPerPage: sel.txPerPage,
  spendableTotalBalance: sel.spendableTotalBalance,
  transactions: sel.transactions
});

export default connect(mapStateToProps);

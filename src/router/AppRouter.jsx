import { BrowserRouter, Route, Switch } from "react-router-dom";
import AddExpensePage from "../components/AddExpensePage";
import EditExpensePage from "../components/EditExpensePage";
import ExpenseDashboardPage from "../components/ExpenseDashboardPage";
import Header from "../components/Header";
import Help from "../components/Help";
import NotFoundPage from "../components/NotFoundPage";

function AppRouter() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact={true} />
        <Route path="/AddExpense" component={AddExpensePage} />
        <Route path="/EditExpense/:id" component={EditExpensePage} />
        <Route path="/Help" component={Help} />
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default AppRouter;

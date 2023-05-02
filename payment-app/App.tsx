import { BrowserRouter, Route, Switch } from "react-router-dom"
import CardSlider from "./components/CardSlider"
import CartSummary from "./components/CartSummary"
import NewCardForm from "./components/NewCardForm"
import PaymentConfirmation from "./components/PaymentConfirmation"

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={CartSummary} />
                <Route path="/cards" component={CardSlider} />
                <Route path="/new-card" component={NewCardForm}} />
                <Route path="/confirmation" component={PaymentConfirmation}} />
            </Switch>
        </BrowserRouter>
    )
}

export default App
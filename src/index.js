import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import { BrowserRouter as Router } from "react-router-dom"
import { setupStore } from "./store"
import { Provider } from "react-redux"

const store = setupStore()
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
	<Provider store={store}>
		<Router basename={process.env.PUBLIC_URL} >
			<App />
		</Router>
	</Provider>
)

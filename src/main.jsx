import React from "react";
import ReactDOM from "react-dom/client";
import "@radix-ui/themes/styles.css";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import NotFound from "./pages/NotFound";
import AppLayout from "./Layout";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
			<AppLayout>
				<Routes>
					<Route path="/" element={<App />} />
					<Route path="*" element={<NotFound />} />
					{/* TODO: setup dynamic routing to route to the coin page */}
				</Routes>
			</AppLayout>
		</BrowserRouter>
	</React.StrictMode>,
);

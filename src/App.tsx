import "./App.css";
import BanglaInput from "./banglaInput";
import packageJson from "../package.json";

function App() {
	const avroVersion = packageJson.dependencies[
		"avro-bangla-suggestions"
	].replace("^", "");
	return (
		<>
			<BanglaInput />
			<div
				style={{
					display: "flex",
					gap: "8px",
					alignItems: "center",
					marginBottom: "8px",
					justifyContent: "center",
					fontSize: "12px",
					marginTop: "8px",
				}}
			>
				Using Avro Bangla Suggestions v{avroVersion}
			</div>
		</>
	);
}

export default App;

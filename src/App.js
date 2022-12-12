import { useState } from "react";
import Container from "./components/Container";
import Sidebar from "./components/Sidebar/Sidebar";
import MainInfo from "./components/MainInfo/MainInfo";
import ActionButtons from "./components/ActionButtons";

function App() {

  const [activeStep, setActiveStep] = useState(1);
  const [formData, setFormData] = useState({name: '', email: '', phone: ''});
  const [showError, setShowError] = useState({name: false, email: false, phone: false});

	const handleGoBackClick = () => {
		setActiveStep(activeStep - 1);
	};

	const handleGoForwardClick = () => {
    if(formData.name !== '' && formData.email !=='' && formData.phone !== '') {
		setActiveStep(activeStep + 1)}
    else {

           setShowError({
							name: formData.name === "" ? true : false,
							email: formData.email === "" ? true : false,
							phone: formData.phone === "" ? true : false,
						});
        }

    return;
	};

  const handleFormData = (key, value) => {
    setFormData({
			...formData,
			[key]: value,
		});
  }

	return (
		<div className="App">
			<Container>
				<Sidebar activeStep={activeStep}></Sidebar>
				<MainInfo
					activeStep={activeStep}
					handleFormData={handleFormData}
					formData={formData}
					showError={showError}
				>
					<ActionButtons
						activeStep={activeStep}
						onGoBackClick={handleGoBackClick}
						onGoForwardClick={handleGoForwardClick}
					></ActionButtons>
				</MainInfo>
			</Container>
		</div>
	);
}

export default App;

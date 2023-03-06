import { useState } from "react";
import Container from "./components/Container";
import Sidebar from "./components/Sidebar/Sidebar";
import MainInfo from "./components/MainInfo/MainInfo";
import ActionButtons from "./components/ActionButtons";
import { useDispatch, useSelector } from "react-redux";
import { formActions } from './store'

function App() {

  const [formData, setFormData] = useState({name: '', email: '', phone: ''});
  const [showError, setShowError] = useState({name: false, email: false, phone: false});
	// const [activePlan, setActivePlan] = useState(1);

	const handleGoBackClick = () => {
		dispatch(formActions.decrement());
	};

	const handleGoForwardClick = () => {
    if(formData.name !== '' && formData.email !=='' && formData.phone !== '') {
		dispatch(formActions.increment())}
    else {

           setShowError({
							name: formData.name === "" ? true : false,
							email: formData.email === "" ? true : false,
							phone: formData.phone === "" ? true : false,
						});
        }

    return;
	};

	const activeStep = useSelector((state) => state.activeStep);

	const dispatch = useDispatch();

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
					// activePlan={activePlan}
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

import PersonalInfo from "./PersonalInfo";
import SelectPlan from "./SelectPlan";
import "../../variables.css";
import styled from "styled-components";
import Addons from "./Addons";

const InfoMain = styled.div`
	flex: 2;
`;

const MainInfo = ({
	activeStep,
	children,
	handleFormData,
	formData,
	showError,
}) => {
	return (
		<InfoMain>
		{activeStep === 1 ? (
			<PersonalInfo
				handleFormData={handleFormData}
				formData={formData}
				showError={showError}
			/>) : activeStep === 2 ?
			(<SelectPlan/>) : (
				<Addons />
			)}
			{children}
		</InfoMain>
	);
};

export default MainInfo;

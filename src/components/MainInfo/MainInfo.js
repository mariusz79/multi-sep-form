import PersonalInfo from "./PersonalInfo";
import "../../variables.css";
import styled from "styled-components";

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
			<PersonalInfo
				handleFormData={handleFormData}
				formData={formData}
				showError={showError}
			/>
			{children}
		</InfoMain>
	);
};

export default MainInfo;

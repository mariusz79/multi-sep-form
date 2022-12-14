import "../../variables.css";
import styled from "styled-components";

const MainStep = styled.div`
	display: flex;
	align-items: center;
	gap: 12px;
`;

const StepNumber = styled.div`
	border: 1px solid var(--white);
	border-radius: 50%;
	color: ${(props) => (props.active ? "black" : "var(--white)")};
	background-color: ${(props) => (props.active ? "var(--light-blue)" : "transparent")};
`;

const StepInfo = styled.div``;

const StepTitle = styled.p`
	color: var(--cool-gray);
`;

const StepDescription = styled.p`
	color: var(--white);
`;

const Step = ({ num, description, active }) => {
	
	return (
		<MainStep>
			<StepNumber active={active}>{num}</StepNumber>
			<StepInfo>
				<StepTitle>STEP {num}</StepTitle>
				<StepDescription>{description.toUpperCase()}</StepDescription>
			</StepInfo>
		</MainStep>
	);
};
 
export default Step;
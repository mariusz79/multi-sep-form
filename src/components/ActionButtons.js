import "../variables.css";
import styled from "styled-components";


const ButtonsContainer = styled.div`
	display: flex;
  align-items: center;
  justify-content: ${props=>props.activeStep !== 1 ? 'space-between' : 'flex-end'}
`;

const BackButton = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	color: var(--marine-blue);
	font-size: var(--font-size-18);
	font-weight: var(--font-weight-500);
	cursor: pointer;
	padding: 10px 10px 10px 0px;
	&:hover {
		opacity: 0.75;
	}
`;

const ForwardButton = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: var(--marine-blue);
	font-size: var(--font-size-18);
	cursor: pointer;
	color: var(--white);
	padding: 10px 16px;
	border-radius: var(--border-radius-small);
	&:hover {
		opacity: 0.75;
	}
`;

const ActionButtons = ({ onGoBackClick, onGoForwardClick, activeStep }) => {
	return (
		<ButtonsContainer activeStep={activeStep}>
			{activeStep !== 1 ? <BackButton onClick={onGoBackClick}>Go Back</BackButton> : null}
			<ForwardButton onClick={onGoForwardClick}>Next Step</ForwardButton>
		</ButtonsContainer>
	);
};

export default ActionButtons;

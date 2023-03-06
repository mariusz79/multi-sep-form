import { useDispatch, useSelector } from "react-redux";
import { formActions } from "../../store"
import "../../variables.css";
import styled from "styled-components";

const Container = styled.div`
	display: flex;
  align-items: center;
  justify-content: center;
	background-color: var(--magnolia);
`;

const Title = styled.p`
	color: var(--marine-blue);
	font-size: var(--font-size-32);
	font-weight: var(--font-weight-700);
`;

const CheckBoxWrapper = styled.div`
	position: relative;
	
	display: flex;
`;
const CheckBoxLabel = styled.label`
	position: absolute;
	top: 0;
	left: 0;
	width: 42px;
	height: 26px;
	border-radius: 15px;
	background: #bebebe;
	cursor: pointer;
	&::after {
		content: "";
		display: block;
		border-radius: 50%;
		width: 18px;
		height: 18px;
		margin: 3px;
		background: #ffffff;
		box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
		transition: 0.2s;
	}
`;
const CheckBox = styled.input`
	opacity: 0;
	z-index: 1;
	border-radius: 15px;
	width: 42px;
	height: 26px;
	&:checked + ${CheckBoxLabel} {
		/* background: #4fbe79; */
		&::after {
			content: "";
			display: block;
			border-radius: 50%;
			width: 18px;
			height: 18px;
			margin-left: 21px;
			transition: 0.2s;
		}
	}
`;

const Switch = ({ handleFormData, formData, showError }) => {
	const yearly = useSelector((state) => state.yearly);

	const dispatch = useDispatch();

	const handleCheckboxClick = () => {
		dispatch(formActions.toggleYearly())
	}

	return (
		<Container>
		<Title>Monthly</Title>
			<CheckBoxWrapper>
				<CheckBox id="checkbox" type="checkbox" checked={yearly} onChange={handleCheckboxClick} />
				<CheckBoxLabel htmlFor="checkbox" />
			</CheckBoxWrapper>
			<Title>Yearly</Title>
		</Container>
	);
};

export default Switch;

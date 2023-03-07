import "../../variables.css";
import styled from "styled-components";
import checkIcon from '../../assets/images/icon-checkmark.svg'

const Card = styled.div`
	display: flex;
	border: 1px solid;
	border-color: ${(props) =>
		props.activeAddon ? "var(--purplish-blue)" : "var(--light-gray)"};
	background-color: ${(props) =>
		props.activeAddon ? "var(--magnolia)" : "var(--white)"};
	border-radius: var(--border-radius-small);
	padding: var(--border-radius-medium);
	&:hover {
		border-color: var(--purplish-blue);
	}
`;

const CheckBoxWrapper = styled.div`
	position: relative;
	display: flex;
`;

const CheckboxDisplay = styled.div``;

const CheckboxInput  = styled.input`
	display: none;
  box-sizing: border-box;
	& + ${CheckboxDisplay} {
    width: 20px;
    height: 20px;
    border: 1px solid darkgray;
    border-radius: 6px;
    box-sizing: border-box;
  }
	 &:hover + ${CheckboxDisplay} {
		border: 1px solid var(--purplish-blue);
  }

  &:checked + ${CheckboxDisplay} {
    background-image: url('${checkIcon}');
		background-color: var(--purplish-blue);
		border: 1px solid var(--purplish-blue);
		background-repeat: no-repeat;
    background-size: auto;
    background-position: center;
  }
`;

const TitleWrapper = styled.div`
`;

const Title = styled.p`
	color: var(--marine-blue);
	font-size: var(--font-size-18);
	font-weight: var(--font-weight-700);
`;

const UnderTitle = styled.p`
	color: var(--marine-blue);
	font-size: var(--font-size-18);
	font-weight: var(--font-weight-700);
`;

const Price = styled.p`
	color: var(--cool-gray);
`;

const Addon = ({ title, underTitle, price, yearly, choice, activeAddon, handleSelectAddons}) => {
	
	return (
		<Card activeAddon={activeAddon} onClick={()=>{handleSelectAddons(choice)}}>
      <CheckBoxWrapper>
				<CheckboxInput  id="checkbox" type="checkbox" checked={activeAddon} />
				<CheckboxDisplay />
			</CheckBoxWrapper>
      <TitleWrapper>
			  <Title>{title}</Title>
        <UnderTitle>{underTitle}</UnderTitle>
      </TitleWrapper>
			<Price>{`$${price}/`} {yearly ? 'yr' : 'mo'}</Price>
		</Card>
	);
};

export default Addon;

import "../../variables.css";
import styled from "styled-components";

const Card = styled.div`
	display: flex;
	flex-direction: column;
	border: 1px solid;
	border-color: ${(props) =>
		props.activePlanCard ? "var(--purplish-blue)" : "var(--light-gray)"};
	background-color: ${(props) =>
		props.activePlanCard ? "var(--magnolia)" : "var(--white)"};
	border-radius: var(--border-radius-small);
	padding: var(--border-radius-medium);
	&:hover {
		border-color: var(--purplish-blue);
	}
`;

const Image = styled.img`
	width: 45px;
  height: 45px;
`;

const Title = styled.p`
	color: var(--marine-blue);
	font-size: var(--font-size-18);
	font-weight: var(--font-weight-700);
`;

const Price = styled.p`
	color: var(--cool-gray);
`;

const ExtraInfo = styled.p`
	color: var(--cool-gray);
`;

const PlanCard = ({ title, price, Image, choice, monthly, activePlan, handleSelectPlan  }) => {
console.log(choice)
	
	
	return (
		<Card activePlanCard={activePlan} onClick={()=>{handleSelectPlan(choice)}}>
		<p>{choice}</p>
      <Image />
			<Title>{title}</Title>
			<Price>{`$${price}/ monthly ? 'mo' : 'yr'`}</Price>
      {!monthly ? <ExtraInfo>2 month free</ExtraInfo> : null}
		</Card>
	);
};

export default PlanCard;

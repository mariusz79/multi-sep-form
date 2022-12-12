import "../../variables.css";
import styled from "styled-components";

const Card = styled.div`
	display: flex;
	flex-direction: column;
	border-color: ${(props) =>
		props.activePlanCard ? "var(--magnolia)" : "var(--light-gray)"};
	border-radius: var(--border-radius-small);
	padding: var(--border-radius-medium);
	&:hover {
		border-color: var(--purplish-blue);
	}
`;

const Icon = styled.img`
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

const PlanCard = ({ title, price, activePlanCard, icon, monthly }) => {
	
	return (
		<Card activePlanCard={activePlanCard}>
      <Icon src={icon}/>
			<Title>{title}</Title>
			<Price>{`$${price}/ monthly ? 'mo' : 'yr'`}</Price>
      {!monthly ? <ExtraInfo>2 month free</ExtraInfo> : null}
		</Card>
	);
};

export default PlanCard;

import { useState } from "react";
import "../../variables.css";
import styled from "styled-components";
import PlanCard from "./PlanCard";

const Container = styled.div`
	display: flex;
	flex-direction: column;
`;

const Title = styled.p`
	color: var(--marine-blue);
	font-size: var(--font-size-32);
	font-weight: var(--font-weight-700);
`;

const UnderTitle = styled.p`
	color: var(--cool-gray);
`;

const SelectPlan = ({ handleFormData, formData, showError }) => {

  const [activePlanCard, setActivePlanCard] = useState(1);
  const [monthly, setMonthly] = useState(true)

  const handlePlanClick = (num)=> {
    setActivePlanCard(num)
  }
	
	const plans = [
		{
			title: "Arcade",
			priceMonthly: 9,
			priceYearly: 90,
			icon: "../../assets/images/icon-arcade.svg",
			number: 1,
		},
		{
			title: "Advanced",
			priceMonthly: 12,
			priceYearly: 120,
			icon: "../../assets/images/icon-advanced.svg",
			number: 2,
		},
		{
			title: "Pro",
			priceMonthly: 15,
			priceYearly: 150,
			icon: "../../assets/images/icon-pro.svg",
			number: 3,
		},
	];
	return (
		<Container>
			<Title>Select your plan</Title>
			<UnderTitle>You have the option of monthly or yearly billing.</UnderTitle>
			{plans.map(({title, priceMonthly, priceYearly, icon, number})=> {
        return (
					<PlanCard
						key={title}
						title={title}
						price={monthly ? priceMonthly : priceYearly}
						icon={icon}
						monthly={monthly}
						activePlanCard={activePlanCard}
						onClick={() => handlePlanClick(number)}
					/>
				);
      })}
		</Container>
	);
};

export default SelectPlan;

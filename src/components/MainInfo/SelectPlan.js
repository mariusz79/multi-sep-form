import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { formActions }  from "../../store";
import "../../variables.css";
import styled from "styled-components";
import { ReactComponent as IconArcade } from "../../assets/images/icon-arcade.svg";
import { ReactComponent as IconAdvanced } from "../../assets/images/icon-advanced.svg";
import { ReactComponent as IconPro } from "../../assets/images/icon-pro.svg";
import PlanCard from "./PlanCard";
import Switch from "./Switch";

const Container = styled.div`
	display: flex;
	flex-direction: column;
`;

const Title = styled.p`
	color: var(--marine-blue);
	font-size: var(--font-size-32);
	font-weight: var(--font-weight-700);
`;

const Plans = styled.div`
	display: flex;
`;

const UnderTitle = styled.p`
	color: var(--cool-gray);
`;

const SelectPlan = ({ handleFormData, formData, showError }) => {

	const activePlan = useSelector((state) => state.activePlan)
	const yearly = useSelector((state) => state.yearly)

	const dispatch = useDispatch();

	const handleSelectPlan = (choice) => {
		dispatch(formActions.setPlan(choice));
	}

	const plans = [
		{
			title: "Arcade",
			priceMonthly: 9,
			priceYearly: 90,
			Image: IconArcade,
			choice: 1,
		},
		{
			title: "Advanced",
			priceMonthly: 12,
			priceYearly: 120,
			Image: IconAdvanced,
			choice: 2,
		},
		{
			title: "Pro",
			priceMonthly: 15,
			priceYearly: 150,
			Image: IconPro,
			choice: 3,
		},
	];
	return (
		<Container>
			<Title>Select your plan</Title>
			<UnderTitle>You have the option of monthly or yearly billing.</UnderTitle>
			<Plans>
				{plans.map(({title, priceMonthly, priceYearly, Image, choice})=> {
					return (
						<PlanCard
							key={title}
							title={title}
							price={!yearly ? priceMonthly : priceYearly}
							Image={Image}
							yearly={yearly}
							choice={choice}
							activePlan={activePlan===choice}
							handleSelectPlan={handleSelectPlan}
						/>
					);
				})}
			</Plans>
			<Switch />
		</Container>
	);
};

export default SelectPlan;

import { useDispatch, useSelector } from "react-redux";
import { formActions }  from "../../store";
import "../../variables.css";
import styled from "styled-components";
import Addon from "./Addon";

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

const Details = styled.div`
	background-color: var(--magnolia);
  border-radius: var(--border-radius-medium);
`;

const DetailsPlan = styled.div`
	display: flex;
  justify-content: space-between;
`;

const DetailsAddons = styled.div`
	
`;
const Price = styled.div`
	
`;

const Total = styled.div`
	display: flex;
  justify-content: space-between;
`;


const Summary = () => {
  const activePlan = useSelector((state) => state.activePlan)
  const plansData = useSelector((state) => state.plansData)
  const chosenPlan = plansData.filter((p)=>p.choice===activePlan); 

  const addons = useSelector((state) => state.addons)
  const addonsData = useSelector((state) => state.addonsData)
  const chosenAddons = addonsData.filter((a)=>addons.includes(a.choice));

  const yearly = useSelector((state) => state.yearly)

  const total = useSelector((state) => state.total)

	const dispatch = useDispatch();

	const handleSelectAddons = (choice) => {
		dispatch(formActions.handleAddons(choice));
	}

  return ( 	
    <Container>
			<Title>Finishing up</Title>
			<UnderTitle>Double-check everything looks OK before confirming.</UnderTitle>
			<Details>
        <DetailsPlan>
          <Title>
            <p>{chosenPlan[0].title}</p>
          </Title>
          <Price>${yearly? chosenPlan[0].priceYearly : chosenPlan[0].priceMonthly}/{yearly? "yr" : "mo"}</Price>
        </DetailsPlan>
        <DetailsAddons></DetailsAddons>
      </Details>
      <Total>
        <p>Total({yearly? "per year" : "per month"})</p>
        <p>${total}/{yearly? "yr" : "mo"}</p>
      </Total>
		</Container> );
}
 
export default Summary;


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

const AddonsList = styled.div`
	/* display: flex; */
`;

const UnderTitle = styled.p`
	color: var(--cool-gray);
`;

const Addons = () => {
  const addons = useSelector((state) => state.addons)
  const addonsData = useSelector((state) => state.addonsData)
  
  const yearly = useSelector((state) => state.yearly)

	const dispatch = useDispatch();

	const handleSelectAddons = (choice) => {
		dispatch(formActions.handleAddons(choice));
	}

  return ( 	
    <Container>
			<Title>Pick add-ons</Title>
			<UnderTitle>Add-ons help enhance your gaming experience.</UnderTitle>
			<AddonsList>
				{addonsData.map(({title, underTitle, priceMonthly, priceYearly, choice})=> {
					return (
						<Addon
							key={title}
							title={title}
              underTitle={underTitle}
							price={!yearly ? priceMonthly : priceYearly}
							yearly={yearly}
							choice={choice}
							activeAddon={addons.includes(choice)}
							handleSelectAddons={handleSelectAddons}
						/>
					);
				})}
			</AddonsList>
		</Container> );
}
 
export default Addons;


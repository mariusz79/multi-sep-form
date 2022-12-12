import '../../variables.css'
import styled from "styled-components";
import Step from './Step';
import BigSidebarDesktopImg from '../../assets/images/bg-sidebar-desktop.svg'

const DesktopSidebar = styled.div`
	background-image: url("${BigSidebarDesktopImg}");
	background-size: cover;
	background-repeat: no-repeat;
	background-position: 50% 50%;
	flex: 1;
	border-radius: var(--border-radius-small);
`;

const Sidebar = ({onStepClick, activeStep}) => {
	

	const steps = [
		{ num: 1, description: "Your info" },
		{ num: 2, description: "Select plan" },
		{ num: 3, description: "Add-ons" },
		{ num: 4, description: "Summary" },
	];

	return (
		<DesktopSidebar>
			{steps.map(({ num, description }) => {
				return (
					<Step
						key={description}
						num={num}
						description={description}
						active={num === activeStep}
						onStepClick={onStepClick}
					/>
				);
			})}
		</DesktopSidebar>
	);
};
 
export default Sidebar;
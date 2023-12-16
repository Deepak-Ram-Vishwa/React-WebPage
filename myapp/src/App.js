import Car from "./Day 8/Car";
import ComponentLifeCycle from "./Day 8/ComponentLifeCycle";
import ErrorBoundary from "./Day 8/ErrorBoundary";
import LifecycleFunctional from "./Day 8/LifeCycleFunctional";
import TryCatch from "./Day 8/TryCatch";
import List from "./Day6/List";
import ListCollection from "./Day6/ListCollection";
import ListProps from "./Day6/ListProps";
import BasicButtons from "./MaterialUI/Buttons";
import SvgIconsColor from "./MaterialUI/Icons";
import SignInSide from "./MaterialUI/SignInPage";
import DefaultProps from "./Props/DefaultProps";
import DynamicRendering from "./Props/DynamicRendering";
import Parent from "./Props/ParentChildCommunication";
import PropsArrow from "./Props/PropsArrow";
import PropsClass from "./Props/PropsClass";
import PropsFunctional from "./Props/PropsFunctional";
import PropsFunctionalEx1 from "./Props/PropsFunctionalEx1";
import StateClassCom from "./Props/StateClassCom";
import StateFunction from "./Props/StateFunction";
import StateHoldObject from "./Props/StateHoldObject";
import TwoWayBinding from "./Props/TwoWayBinding";

export default function App()
{
  return(<div>
    <PropsFunctional name="Deepak"></PropsFunctional>
    <PropsClass college="SKCT"></PropsClass>
    <PropsFunctionalEx1 college="SKCT" place="Coimbatore"/>
    <PropsArrow name="Sri Krishna College of Technology"/>
    <StateClassCom/>
    <StateFunction/>
    <StateHoldObject/>
    <Parent/>
    <DynamicRendering/>
    <TwoWayBinding/>
    <DefaultProps/>
    <List/>
    <ListProps/>
    <ListCollection/>
    <BasicButtons/>
    <SvgIconsColor/>
    <SignInSide/>
    {/* <ErrorBoundary>
    <Car heroName="Joker"/>
    </ErrorBoundary>
    <ErrorBoundary>
      <TryCatch fruit="Onion"/>
    </ErrorBoundary> */}
    <ComponentLifeCycle/>
    <LifecycleFunctional/>
  </div>)

}
import FirstComponent from './FirstComponent';
// braces indicate this is not default export
import {InnerComponent} from './FirstComponent';
import SecondComponent from './SecondComponent';
import ThirdComponent from './ThirdComponent';
// ACTUALLY any name
import ActuallyAnyName from './FourthComponent';
import LearningJavaScript from "./LearningJavaScript";

export default function LearningComponent() {
    return (
        <div className="LearningComponent">
            <FirstComponent/>
            <InnerComponent/>
            <SecondComponent/>
            <ThirdComponent/>
            <ActuallyAnyName/>
            <LearningJavaScript/>
        </div>
    );
}
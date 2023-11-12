import ES5Function from "./ES5Functions";
import ArrowFunctions from "./ArrowFunctions";
import ImpliedReturns from "./ImpliedReturn";
import FunctionParenthesisAndParameters from "./FunctionParenthesisAndParameters";

function WorkingWithFunctions() {
    return(
        <div>
            <h1>Working with functions</h1>
            <ES5Function />
            <ArrowFunctions />
            <ImpliedReturns />
            <FunctionParenthesisAndParameters />
        </div>
    );
}
export default WorkingWithFunctions;
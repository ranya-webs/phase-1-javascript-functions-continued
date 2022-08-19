/*
 * This function returns the default activity 'roller-skate' when no arguments are passed. 
 * It permits the default activity to be overriden
 */
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}
saturdayFun();
saturdayFun("bathe my dog");


/*
 * uses the default activity 'go to the office' when no arguments are passed, and permits the default
 activity to be overriden. 
 */
function mondayWork(defaultActivity = "go to the office") {
    return `This Monday, I will ${defaultActivity}.`;
}
mondayWork();
mondayWork("work from home")


/*
when initialized with a symbol, e.g.'*', this function creates a function that, when called, wraps 
an adjective in a highlight
*/
function wrapAdjective(symbol) {
    return text => `You are ${symbol}${text}${symbol}!`;
}
wrapAdjective("*");
wrapAdjective("||");

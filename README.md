# use-effect

A simple, vanilla JavaScript implementation of React.js' useEffect() hook, sort of. It offers the ability to perform actions when state variables change, using syntax similar to useEffect()'s syntax. It's not a 100% replacement.

## The gist

JavaScript Proxy is the tech behind this. Does React.js use that? I assume so, but who knows.

In a nutshell, Proxy can intercept a state variable change and then hand you control, allowing you to run your own code in addition to changing the state variable's value. Sounds like useEffect() to me, or at least close enough to it to pretend. 

Everything in this solution comes free inside every modern web browser (Chrome, Edge, etc). No library downloads required.

See index.html for an example of how this is implemented in a web page. Pretty straightforward if you're familiar with JavaScript and possibly React.js.

## Confession

I knew about Proxy ahead of time, and I've done quite a bit of React.js coding and too much HTML/CSS/JavaScript coding to quantify in a simple number...but the variations of how Proxy can be used drove me to employ Claude.ai to do the coding. He over-engineered it and I had to reign him back, but I think the final solution is clean enough to be proud of. Gotta keep an eye on those AI critters.

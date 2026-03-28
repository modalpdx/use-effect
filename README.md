# use-effect

A simple, vanilla JavaScript implementation of React.js' useEffect() hook, sort of. It offers the ability to perform actions when state variables change, using syntax similar to useEffect()'s syntax. It's not a 100% replacement.

## The gist

JavaScript Proxy is the tech behind this. Does React.js use that? I assume so, but who knows.

In a nutshell, Proxy can intercept a state variable change and then hand you control, allowing you to run your own code in addition to changing the state variable's value. Sounds like useEffect() to me, or at least close enough to it to pretend. 

Everything in this solution comes free inside every modern web browser (Chrome, Edge, etc). No library downloads required.
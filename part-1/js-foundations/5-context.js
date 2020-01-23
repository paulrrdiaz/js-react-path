// Context
// Think: how the function was called
// Think: It doesn't matter where you called it
// Think: implicit binding

this;

function whatthecontext() {
  return this;
}

const myObj = {
  callMe: function() {
    return this;
  },
};

whatthecontext();
new whatthecontext();
myObj.callMe();


/*
*
*
*
*
*


// Dynamic context

fn.call(context, param1, param2, param3);

fn.apply(context, [params])

fnBounded = fn.bind(context)
fnBounded(param1, param2, param3)


*
*
*
*
*/
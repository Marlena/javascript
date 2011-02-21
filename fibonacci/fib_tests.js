<script type="text/javascript" src="fib.js"></script>

module ("Fibonacci tests");

// 0 1 1 2 3 5 8
//
//RIGHT-Bicep tests

test("Right: Happy path works", function(){
        equal(fibonacci.calculate(5), 8, "Right: a test that exercises the happy path");}
    );

//boundaries are C.O.R.R.E.C.T

//"C"onforms to expected format
test("floating point", function(){
        equal(fibonnaci.calculate(0.1),0);}
    );

//"R"ange is as expected
test("0 returns 0", function(){
        equal(fibonacci.calculate(0),0);}
    );

test("1 returns 1", function(){
    equal(fibonacci.calculate(1),1);}
    );

//"E"xists - what happens if method is passed null or no value
test("empty value", function(){
        equal(fibonacci.calculate(),0,"No value passed to method");}
    );

test("null value", function(){
        equal(fibonacci.calculate(),0,"Null value passed to method");}
    );



var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "root-1-2-3",
  "level": "1",
  "url": "root-1-2-3.html",
  "type": "Front Matter",
  "number": "",
  "title": "Front Matter",
  "body": "Dr. Brian Walton James Madison University as of   "
},
{
  "id": "introduction",
  "level": "1",
  "url": "introduction.html",
  "type": "Section",
  "number": "",
  "title": "Introductory Examples",
  "body": " Introductory Examples   Graph Analysis 1 (Begin Day 2)  and >   Graph Analysis 2  >  "
},
{
  "id": "sec_4-1_algebraic_functions",
  "level": "1",
  "url": "sec_4-1_algebraic_functions.html",
  "type": "Section",
  "number": "",
  "title": "Section 4.1: Algebraic Functions",
  "body": " Section 4.1: Algebraic Functions   Learning Goals    Know and use meaning, shape, and properties of rational powers .    Know and apply relationship between roots and factors of polynomials, including root multiplicity.    Use synthetic division to determine factorization for polynomials when some exact roots are known.    Use polynomial long division rewrite an improper rational function as a polynomial plus a simplified proper rational function using the remainder.   >   Summary of Properties for Rational Powers    Recall that for (integer), (roots are powers).  For integers with , we define  (first root, then power)    Domain and symmetry:  For even, is defined on .  For odd, is defined on . In this case, if is even , then is an even function (left\/right symmetry). If is odd , then is an odd function (left\/right opposite).   >   Exploration of Simple Rational Powers  Link to Desmos activity: https:\/\/www.desmos.com\/calculator\/thbilpya5l .   QR code to the desmos URL   Explore what changes about the graph as you modify the root and the power . Be sure to try both positive and negative values of . What happens when is greater than or less than ? >   Polynomials: Root and Factor Relation    For any polynomial , knowing is a root of is equivalent to knowing is a factor of .  That is, is equivalent to for some other polynomial .     graph of a polynomial showing clear roots at x=-2 and x=1   >   Synthetic Division  We can find the other polynomial factor using synthetic division. Let be a root so that is the factor. Complete a synthetic division table with three rows.    First row: All coefficients in descending powers (include 0 terms). To left, write value of .    Second row: Below leading coefficient, write 0. All other terms will be found by multiplying the previous value in 3rd row times .    Third row: Add the values in the first and second rows.    Interpret: The last value in 3rd row will be a remainder, and should be 0 for roots. All other values become coefficients of the polynomial . The degree of this polynomial has gone down by 1. >   Example of Synthetic Division  The polynomial appears to have roots at and . Complete the factorization. >   Motivating Polynomial Division (Begin Day 3\/Day 4)  Recall that division is trying to find a value so that . If and are integers, there may or may not be an integer that makes this true, which is why we have remainders . We find the closest value for and then use so that   The same thing happens with polynomials. Dividing a polynomial by another is trying to find a quotient polynomial and a remainder polynomial so that The degree for must be smaller than that for . >   Polynomial Multiplication by Table  To generalize the FOIL method of multiplication for two polynomials and , make a table.   Write each term (with sign) of as row headers.    Write each term (with sign) of as column headers.    In each cell of table, multiply the row and column headers to find the value.    The product is found by adding all terms together.     Example: Multiply . >   Polynomial Division  One approach to polynomial division is to think about the table multiplication process where one polynomial is know, the other isn't, but the final answer is known. You can reverse solve for the missing terms one at a time starting with the highest power.   Only one term contributes to the leading term, so you can quickly find the first term of the quotient. Once that is known, you can fill out the rest of the column\/row.    The next term of the answer will be missing only one additional term coming from the first value in the next column\/row. So you can again quickly find that next term of the quotient and then complete the column\/row by multiplying.    Repeat this until all terms are identified.    There may still be some terms that don't match. The remainder is whatever still needs to be added to the product to give the final result.    >   Polynomial Division Example     We are seeking a quotient polynomial and a remainder polynomial (which must have degree smaller than 2) so that . >  "
},
{
  "id": "sec_4-2_algebraic_functions",
  "level": "1",
  "url": "sec_4-2_algebraic_functions.html",
  "type": "Section",
  "number": "",
  "title": "Section 4.2: Power Functions",
  "body": " Section 4.2: Power Functions   Learning Goals    Determine limits of power functions for and .    Use implicit differentiation to show power rule works for all rational powers.    Use graph analysis to describe graphs of power functions.    Model data using a power function.   >   End Behavior and Limits  Summary of Behaviors    Even and odd powers have same behavior as and opposite behavior as .    Positive powers are unbounded as . Since , negative powers have as     Negative powers have a vertical asymptote .    Describe the limits associated with and . >   Derivatives (Power Rule)  If , then and we can differentiate using implicit differentiation and the chain rule. >   Graph Analysis (Begin Day 5)  Use graph analysis to describe and then sketch the graph of the functions.     >   Models Using Power Functions  A power function is a constant multiple times to a rational power with a model equation: . Your task is to find and based on given data.  Until we learn about logarithms, we will need to work with examples where we can recognize common powers of simple numbers: , and . >   Find the Model  Find a power function that passes through and . >  "
},
{
  "id": "sec_4-3_polynomials",
  "level": "1",
  "url": "sec_4-3_polynomials.html",
  "type": "Section",
  "number": "",
  "title": "Section 4.3: Polynomials",
  "body": " Section 4.3: Polynomials   Learning Goals    Understand the relation between factorization of a polynomial and its graph, including roots and their multiplicity, turning points, and irreducible quadratic factors.    Role of leading term for end behavior and limits as .    Use information about roots and function values to create polynomial models of a function.   >   Multiplicity of Roots and Factors  When a polynomial has a factor associated with a root , the number of times the factor appears is called the multiplicity .  For example, :    is a root with multiplicity 1    is a root with multiplicity 2    is a root with multiplicity 3    is a root with multiplicity 1     Graph of the polynomial p(x) showing roots and multiplicity     >   Shape of Multiplicity   Locally (if you zoom in), the behavior of a graph near a root behaves like where is the multiplicity of the root.   : Graph locally looks like a line passing through axis    : Graph locally looks like a parabola touching axis    : Graph locally looks like a cubic passing through axis    : Higher even roots look like very flat parabola    : Higher odd roots look like very flat cubic    >   Roots and Multiplicity to Formula  Knowing the roots and their multiplicity allows us to write down the factored representation of a polynomial except for the leading coefficient:    Graph of a polynomial with roots at x=-4 (looks like parabola), x=-2 (looks like parabola), x=0 (looks cubic), and x=2 (looks like parabola)   >   End Behavior from Leading Term (Begin Day 6)  Limits of a polynomial as behave like just the leading term.   The sign of the leading coefficient always matches the sign as .    For even degree, limits are the same for .    For odd degree, limits for is the opposite of the limit for .                            >   Irreducible Factors  There can be polynomial factors that don't have any roots, always made up from irreducible quadratic , which are polynomials of degree 2 that have complex roots . The discriminant that appears in the quadratic formula will be negative. These complex roots come in conjugate pairs.  Polynomials always have at least one turning point between any two roots. Any extra turning points must come from irreducible quadratic factors.   A polynomial of degree can have at most  real roots (counting multiplicity). (Count number of roots; degree must be that value or bigger)    The difference between the number of real roots (counting multiplicity) and the degree must be a multiple of 2.    A polynomial of degree can have at most  turning points. (Count number of turning points; degree must be at least one bigger)    >   Equations for Coefficients  Another common modeling problem relating to polynomials is to find a polynomial of a given degree with certain known function or derivative values.   Write a model formula, such as , that matches degree.    For each known function value or derivative, use the model formula with the given value to create an equation about the coefficients.    Once the number of coefficient equations matches the number of coefficients, solve the system of equations to find the coefficients.    Write down the final model using the calculated coefficients.     Example: Find a quadratic polynomial with , , and . >  "
},
{
  "id": "sec_4-3_polynomials-3-2",
  "level": "2",
  "url": "sec_4-3_polynomials.html#sec_4-3_polynomials-3-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "multiplicity "
},
{
  "id": "sec_4-3_polynomials-7-2",
  "level": "2",
  "url": "sec_4-3_polynomials.html#sec_4-3_polynomials-7-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "irreducible quadratic "
},
{
  "id": "sec_4-4_rational",
  "level": "1",
  "url": "sec_4-4_rational.html",
  "type": "Section",
  "number": "",
  "title": "Section 4.4: Rational Functions",
  "body": " Section 4.4: Rational Functions   Learning Goals    Be able to define a rational function as a quotient of two polynomials. That is, if where are polynomials, then is a rational function .    Determine the domain of a rational function, interpreting discontinuities as vertical asymptotes or holes.    Use polynomial division to find slant and curve asymptotes.    Analyze the graph of a rational function.   >   Domain, Holes, and Vertical Asymptotes  Starting with a rational function , completely factor and .  Then is continuous everywhere except at the roots of . Suppose is a root of so that . If also, then cancel as many common factors as possible.   If the simplified polynomials still have a factor in the denominator, then is a vertical asymptote or the location of a hole , `also called a removable discontinuity    If completely canceled out from the denominator, then has a hole at (removable discontinuity).    >   Shape and Multiplicity  If we cancel all common factors of the numerator and denominator polynomials to get and these simplified polynomials are factored, then   The multiplicity of factors of (numerator) will match the shape of with the shape of polynomials at roots.    The multiplicity of factors of (denominator) result in vertical asymptotes with opposite infinite limits when the factor has odd multiplicity and with the same infinite limits when the factor has even multiplicity.     Describe the discontinuities and roots of . >   Polynomial Division and Horizontal, Slant and Curve Asymptotes  Begin Day 7  For a rational function with polynomials , compare the degrees of the polynomials.   If (higher degree in denominator), then has a horizontal asymptote .    If (same degree), then has a horizontal asymptote given by the ratio of leading coefficients.    If (higher degree in numerator), then has a slant or curve asymptote given by the quotient when doing polynomial division . If is linear (degree 1), it is a slant asymptote. Any higher degree is called a curve asymptote.                 >   Shape Analysis  Find where is increasing and decreasing. >  "
},
{
  "id": "sec_4-4_rational-2-2-1-1",
  "level": "2",
  "url": "sec_4-4_rational.html#sec_4-4_rational-2-2-1-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "rational function "
},
{
  "id": "sec_4-4_rational-3-3",
  "level": "2",
  "url": "sec_4-4_rational.html#sec_4-4_rational-3-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "continuous root vertical asymptote hole removable discontinuity hole "
},
{
  "id": "sec_5-1_exponential-logarithm-functions",
  "level": "1",
  "url": "sec_5-1_exponential-logarithm-functions.html",
  "type": "Section",
  "number": "",
  "title": "Section 5.1: Exponential and Logarithmic Functions",
  "body": " Section 5.1: Exponential and Logarithmic Functions   Learning Goals    Know the definition of an exponential function where and and the alternate definition in terms of the natural base , , where and can be any real numbers.    Distinguish between exponential growth ( ) and exponential decay ( ).    Understand and apply the inverse property of elementary exponentials and logarithms , such that you can move between the equivalence of and as well as the cancellation for any and for any .    Know and apply the algebraic rules of exponents and logarithms, particular for products, quotients, and powers.   >   Exponential Functions    An elementary exponential function can be defined for any positive base as . The properties of the functions follow from the properties of exponents.   and    and       and      >   Exponential Models  A more general exponential function has a constant multiple or amplitude factor, . We will later learn about the natural base and discover that every exponential function can alternatively be written , where the value of and the base are related by .    When the base is greater than 1 (or ), we say we have exponential growth .    When the base is less than 1 (or ), we say that we have exponential decay .    An example of fitting data to an exponential model was given in the Snow Day Makeup Video. >   Logarithms as Inverses  Recall that an inverse function allows us to solve for the that makes true, . When we want to solve for an exponent , , we want the inverse of the elementary exponential function.  For every positive base with and , the equation has a unique solution. (That is, the elementary exponential functions are one-to-one .) The inverse function finds this solution and is called the logarithm with base , .  Because for all , the domain of requires . (The logarithm is undefined for zero and negative values.) >   Exponential and Logarithm Equivalent Equations  Every equation about elementary exponentials can be rewritten in an equivalent equation about logarithms. The key is to recognize that the logarithm is talking about the value of the exponent while the exponential is actually talking about the final power of the base.     has a base , and exponent and a final power (4th power of 2).  As a logarithm statement, we have an equivalent equation , which says that the input 16 can be identified as a power of the base 2. What power? 4.    What is ?    If we know , what is ?   >   Properties of Logarithms  Begin Day 9  Logarithms inherit their properties from the properties of powers.   is from and    for all , and for all ( Inverse Property ).    ( Product Rule ).    ( Quotient Rule ).    ( Power Rule ).    ( Change of Base ).    >   Solving Equations  When the unknown is inside of an exponent, we first need to isolate the exponential term and then use a logarithm.         >   Simplifying Formulas  There will be multiple circumstances where we need to apply properties of logarithms to rewrite an expression. The most relevant in calculus is to take a logarithm that involves products, quotients, or powers, and expand the expression using the corresponding rules.         >  "
},
{
  "id": "sec_5-1_exponential-logarithm-functions-3-2-1-1",
  "level": "2",
  "url": "sec_5-1_exponential-logarithm-functions.html#sec_5-1_exponential-logarithm-functions-3-2-1-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "elementary exponential function "
},
{
  "id": "sec_5-1_exponential-logarithm-functions-4-3-1-1",
  "level": "2",
  "url": "sec_5-1_exponential-logarithm-functions.html#sec_5-1_exponential-logarithm-functions-4-3-1-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "exponential growth "
},
{
  "id": "sec_5-1_exponential-logarithm-functions-4-3-2-1",
  "level": "2",
  "url": "sec_5-1_exponential-logarithm-functions.html#sec_5-1_exponential-logarithm-functions-4-3-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "exponential decay "
},
{
  "id": "sec_5-1_exponential-logarithm-functions-5-2",
  "level": "2",
  "url": "sec_5-1_exponential-logarithm-functions.html#sec_5-1_exponential-logarithm-functions-5-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "exponent inverse "
},
{
  "id": "sec_5-1_exponential-logarithm-functions-5-3",
  "level": "2",
  "url": "sec_5-1_exponential-logarithm-functions.html#sec_5-1_exponential-logarithm-functions-5-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "unique one-to-one logarithm "
},
{
  "id": "sec_5-1_exponential-logarithm-functions-6-2",
  "level": "2",
  "url": "sec_5-1_exponential-logarithm-functions.html#sec_5-1_exponential-logarithm-functions-6-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "logarithm "
},
{
  "id": "sec_5-1_exponential-logarithm-functions-7-3",
  "level": "2",
  "url": "sec_5-1_exponential-logarithm-functions.html#sec_5-1_exponential-logarithm-functions-7-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Inverse Property Product Rule Quotient Rule Power Rule Change of Base "
},
{
  "id": "sec_5-1_exponential-logarithm-functions-9-2",
  "level": "2",
  "url": "sec_5-1_exponential-logarithm-functions.html#sec_5-1_exponential-logarithm-functions-9-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "expand "
},
{
  "id": "sec_5-2_5-3_exponential-limits-derivatives",
  "level": "1",
  "url": "sec_5-2_5-3_exponential-limits-derivatives.html",
  "type": "Section",
  "number": "",
  "title": "Section 5.2 &amp; 5.3: Exponential and Logarithmic Limits and Derivatives",
  "body": " Section 5.2 & 5.3: Exponential and Logarithmic Limits and Derivatives   Learning Goals (Begin Day 10)    Compute end behavior for exponential and logarithmic functions, using the ideas of exponential growth vs decay and the inverse property for logarithms.    Recognize how the derivatives of the exponential and logarithm come from the definition of the derivative and the properties of derivatives.    Compute derivatives using derivative rules involving the natural exponential and logarithm function, including the use of other derivative rules (product, quotient, chain).    Shapes of graphs based on derivative sign analysis.   >   Exponential Functions and Limits     Core Fact : Exponential functions are continuous , so we evaluate limits at points with simple evaluation. As the inverse of a monotonic continuous function, the logarithm must also be continuous.    Think about the graph of exponential growth and decay to determine limits as .   If , then is exponential growth and limits and .   Graph of exponential growth with b > 1 so that y tends to 0 on the left and to infinity on the right.      If , then is exponential decay and limits and .      Graph of exponential growth with 0 < b < 1 so that y tends to infinity on the left and to 0 on the right.     >   Derivative of Exponential  For each new function, we need to use the definition of the derivative to discover the corresponding derivative rule. When , we use the exponent sum rule to rewrite : Consequently, the derivative of an elementary exponential is always some constant times the original function , where  >   Natural Base  The value of is exactly the value of the derivative of at . Different bases have different slopes at this point.  The base is that number such that so that the tangent line is exactly : The value as a decimal approximation is .  Since , we have the remarkable derivative rule . Incorporating the chain rule, for any formula , we have . >   Practice Derivatives with Exponentials  Find the derivatives of the following functions.      >   The Natural Logarithm  Now that we have defined the natural base , we can also define the natural logarithm , which is the inverse function to : .  Like all logarithms , we have .  Because , we also have for and for . >   Limits of Logarithms  A logarithm is the inverse of an exponential. This means that if is on the graph , then is on the graph of . That is, the roles of and are reversed.     Graph of exponential growth y = b^x with b > 1     Graph of logarithm y = logarithm of x with base b > 1    For :      Graph of exponential growth y = b^x with b < 1     Graph of logarithm y = logarithm of x with base b < 1    For :    >   The Natural Logarithm's Derivative  To find , we will do the same approach as for all inverse functions use implicit differentiation: That is, , and for any expression , the chain rule gives:  >   Practice Derivatives with Logarithms (Begin Day 12)  Find the derivatives of the following functions.      >   Logarithms and Absolute Value   The function is only defined on .  The function is only defined on .  The function is defined on .  Find  >   Using Logarithm Expansion Before Differentiation  If or or , differentiation is much easier if you first apply the logarithm expansion rules before doing the derivative.             >   Logarithmic Differentiation  If a function is written as products, quotients or powers ( without a logarithm ), then we can often simplify finding by calculating , expanding it fully, and then computing a derivative using the relation , multiplying both sides of this result by to recover .             >  "
},
{
  "id": "sec_5-2_5-3_exponential-limits-derivatives-3-2-1-1",
  "level": "2",
  "url": "sec_5-2_5-3_exponential-limits-derivatives.html#sec_5-2_5-3_exponential-limits-derivatives-3-2-1-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "continuous "
},
{
  "id": "sec_5-2_5-3_exponential-limits-derivatives-7-2",
  "level": "2",
  "url": "sec_5-2_5-3_exponential-limits-derivatives.html#sec_5-2_5-3_exponential-limits-derivatives-7-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "natural logarithm "
},
{
  "id": "sec_5-4_exponential-models",
  "level": "1",
  "url": "sec_5-4_exponential-models.html",
  "type": "Section",
  "number": "",
  "title": "Section 5.4: Exponential Models",
  "body": " Section 5.4: Exponential Models   Learning Goals    All exponentials and even powers can be written in terms of the natural exponential.    After rewriting in terms of base , we can compute derivatives using the chain rule.    Recognize cues for exponential growth and decay applications.   >   Change of Base  Any positive value can be rewritten .  Rewrite the following in terms of to a power.      for       >   Derivatives with Other Bases  Change the base to the natural base and then find the derivative.               >   Exponential Growth and Decay  We know that has a derivative . Rewriting as where shows that .  That is, every simple exponential model has the property the derivative (or rate of change) is proportional to the function value .   Radioactive decay: The number of atoms that decay during a short interval is proportional to the total number of atoms.    Population growth: The number of births or deaths during a short interval is proportional to the total population.     Example: A population grows at a rate that is proportional to the current population. At , there are 400 individuals and at , there are 600 individuals. Find a model for the population.  Example: Carbon-14 has a half-life of 5730 years. If a sample now has 40% of the amount of Carbon-14 that it started with, find the time when the sample began. >  "
},
{
  "id": "sec_5-5_LHopital-Rule",
  "level": "1",
  "url": "sec_5-5_LHopital-Rule.html",
  "type": "Section",
  "number": "",
  "title": "Section 5.5: L’Hopital’s Rule",
  "body": " Section 5.5: L'Hopital's Rule   Learning Goals    Only indeterminate limits that have the form or apply to L'Hopital's Rule    Evaluate limits using L'Hopital's rule    Be able to rewrite other indeterminate limits in the L'Hopital-style indeterminate form, including those involving powers   >   Indeterminate Limit Forms  A limit form refers to evaluating the individual terms of a limit and combining the resulting limits. The limit form is indeterminate if there are different limit answers possible for the same limit form, usually coming from cancellation involving infinity or zero.               , ,    >   L'Hopital's Rule  When a function is a quotient of two functions and we have:   either and as (limit form )    or and as (limit form )   If exists, then .  You must verify that the limit form is either or  and show that the limit of itself has a limit. If both are true, then the limit of will have the same limit.  We can repeat using the rule on the new formula if it is still indeterminate. >   Examples of L'Hopital's Rule          (Begin Day 14)      >   Rewriting Indeterminate Forms  A function with indeterminate form should be rewritten by rewriting one of the factors as division by the reciprocal.              (Begin Day 15) A function with indeterminate form involving a power should be rewritten as using logarithms, find and then use as the final limit.             >  "
},
{
  "id": "sec_5-5_LHopital-Rule-3-2",
  "level": "2",
  "url": "sec_5-5_LHopital-Rule.html#sec_5-5_LHopital-Rule-3-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "limit form indeterminate "
},
{
  "id": "sec_6-1_Trigonometry",
  "level": "1",
  "url": "sec_6-1_Trigonometry.html",
  "type": "Section",
  "number": "",
  "title": "Section 6.1: Trigonometric Functions",
  "body": " Section 6.1: Trigonometric Functions   Learning Goals    Trigonometric functions were first defined for angles of right triangles: SOH CAH TOA    Two special triangles: 30-60-90 and 45-45-90    Change definition to use unit circle instead of right triangles    Measure angles in degrees (360 per circle) and radians (2 pi per circle)   >   Right Triangles  Start by introducing some geometric ideas.   An acute angle is an angle smaller than a right angle (90 degrees).    Two geometric shapes are similar if corresponding angles are equal and corresponding edges are all proportional.    Two right triangles (have 90 degree angle) if one acute angle matches.     Define trigonometric functions (SOH CAH TOA): Given acute angle  , take a right triangle with angle and identify the legs that are opposite and adjacent and the hypotenuse .    Right triangle ABC with angle theta at vertex A and right angle at vertex C and the complementary acute angle at vertex B. Leg BC is opposite, leg AC is adjacent, and AB is the hypotenuse.                   >   Geometric Applications  The triangle definitions for trigonometric functions allow us to solve for the lengths of various right triangles in applications:   A kite is flying with 100 ft of string and we measure the angle of the string from the ground as . How high is the kite?    When standing 20 feet away from the base of a tower, we find we need to look up to see the top. How tall is the tower?    At a stretch where a river flows in a straight line, you look directly across the river and identify a landmark. Then you walk 50 feet upriver and again look at the same landmark. But to see the landmark, you are looking along a line that is now 30˚ away from the bank. How wide is the river?    >   Two Special Triangles  You should be able to reproduce the exact trigonometric values for the following two triangles. Remember the Pythagorean Theorem: (leg lengths are and )     The isosceles right triangle has 45 degree angles.    A bisected equilateral triangle is a right triangle with 30 and 60 degree angles.       45-45-90 right triangle is isosceles with legs having length 1 and a hypotenuse length of square root of 2.       30-60-90 right triangle is a bisected equilateral triangle with a hypotenuse having length 1, a leg of length 1\/2 and another leg of length square root of 3 over 2.      >   Generalizing Trigonometry: Step 1  Only defining the trigonometric values for acute angles is limiting. We want to define it for arbitrary angles.  Step 1: Define everything in terms of sine and cosine.   Tangent:    Secant:    Cotangent:    Cosecant:    >   Generalizating Trigonometry: Step 2  Step 2: Define angles in terms of rotation.   360 degrees = 1 full rotation (circle)    radians = 1 full rotation (circle)     Draw a unit circle (radius 1) with axes going through the center. Sun rises in the east (right side) and sets in the west (left side)   Angle is measured from the positive  axis to the origin to a ray extending to infinity.    1 radian is the angle that travels exactly 1 radius length on the arc (partial circumference).     >   Angle Conversions (Begin Day 16)  To convert measures of angles between degrees and radians, you just need to know that 360 degrees and radians both measure the same angle, and all other angles use the same proportionality.   Given an angle in degrees: Divide by 360 to find out the number of rotations, multiply by to get the equivalent radians.    Given an angle in radians: Divide by to find out the number of rotations, multiply by to get the equivalent degrees.     Practice:   90 degrees to radians    -900 degrees to radians    0.75 radians to degrees    >   Generalizing Trigonometry: Step 3  The critical observation connecting the circle to trigonometry is that for a unit circle , an acute angle with the angle placed at the origin has a hypotenuse of 1.   opposite length: height of the triangle is equal to coordinate on circle    adjacent length: width of the triangle is equal to coordinate on circle   So we define sine and cosine using the coordinates of the terminal point for any angle.        All other functions are defined from there.   and    and    >   Practice Finding Trig Values  Find and and then all other trigonometric function values.               >  "
},
{
  "id": "sec_6-1_Trigonometry-3-2",
  "level": "2",
  "url": "sec_6-1_Trigonometry.html#sec_6-1_Trigonometry-3-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "acute similar "
},
{
  "id": "sec_6-1_Trigonometry-3-3",
  "level": "2",
  "url": "sec_6-1_Trigonometry.html#sec_6-1_Trigonometry-3-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "acute angle opposite adjacent hypotenuse "
},
{
  "id": "sec_6-1_Trigonometry-5-3",
  "level": "2",
  "url": "sec_6-1_Trigonometry.html#sec_6-1_Trigonometry-5-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "isosceles equilateral "
},
{
  "id": "sec_6-1_Trigonometry-7-3",
  "level": "2",
  "url": "sec_6-1_Trigonometry.html#sec_6-1_Trigonometry-7-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "unit circle positive radian arc "
},
{
  "id": "sec_6-1_Trigonometry-9-2",
  "level": "2",
  "url": "sec_6-1_Trigonometry.html#sec_6-1_Trigonometry-9-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "unit circle define "
},
{
  "id": "sec_6-2_Trig-Identities",
  "level": "1",
  "url": "sec_6-2_Trig-Identities.html",
  "type": "Section",
  "number": "",
  "title": "Section 6.2: Trigonometric Identities",
  "body": " Section 6.2: Trigonometric Identities   Learning Goals    The unit circle equation is . This leads to three Pythagorean identities for trigonometry.    Sine and cosine have sum identities to expand and .    Use identities to take given information to find trigonometric values of various combinations or transformations of angles.    Trigonometric functions have symmetries: even vs odd, periodic   >   Pythagorean Identity  The unit circle equation in terms of coordinates is . Because and are the coordinates, the unit circle equation also gives us the Pythagorean identities, valid for any angle . We most commonly work with the identity relating sine and cosine. Use quadrants to identify signs.   Example : If and , find . >   Sum Identities  The unit circle interpretation of an angle is as a rotation of the point around the center of the circle. Adding angles corresponds to combining rotations. The sum identities tell us how to find the coordinates for a rotation formed by adding two rotations based on the known coordinates of the individual rotations.    Example : Suppose is the angle ending in Q2 with . Find and . >   Even\/Odd Symmetry  If we compare angles and on the unit circle, we can immediately recognize that their standard positions terminate with the same x-coordinates and opposite y-coordinates. This implies that (an odd function ) and that (an even function ).  Consequently, the sum identities also give us difference identities :  >   Visualizing the Graphs: Periodic Behavior  For every full rotation by an angle , we return to the same point on the unit circle. This means that all of the trigonometric functions are periodic because they satisfy The value is called a period , the amount a function can be shifted horizontally and start over exactly again.  The tangent and cotangent functions actually repeat twice per full rotation and have period .    Graphs of sine (red, solid) and cosine (blue, dashed) to show their periods of 2 pi.     Graphs of tangent (red, solid) and cotangent (blue, dashed) to show their periods of 2 pi.     Graphs of secant (red, solid) and cosecant (blue, dashed) to show their periods of 2 pi.    >   Double-Angle Identities  Doubling an angle corresponds to adding it to itself. This gives us so-called double-angle identities .    If we use the Pythagorean identity and solve for or for , we arrive at two alternative representations of the cosine's double-angle identity:  >   Half-Angle Identities  Using the double-angle identity and solving for or , we create what are called the half-angle identities .        Note that because or appears squared, there are actually two locations for a half-angle based on the unit circle location. The identities become useful in Calculus 2 (MATH 236) when learning about integration methods. >  "
},
{
  "id": "sec_6-2_Trig-Identities-2-2-2-1",
  "level": "2",
  "url": "sec_6-2_Trig-Identities.html#sec_6-2_Trig-Identities-2-2-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "sum identities "
},
{
  "id": "sec_6-2_Trig-Identities-4-2",
  "level": "2",
  "url": "sec_6-2_Trig-Identities.html#sec_6-2_Trig-Identities-4-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "rotation "
},
{
  "id": "sec_6-2_Trig-Identities-5-2",
  "level": "2",
  "url": "sec_6-2_Trig-Identities.html#sec_6-2_Trig-Identities-5-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "odd function even function "
},
{
  "id": "sec_6-2_Trig-Identities-5-3",
  "level": "2",
  "url": "sec_6-2_Trig-Identities.html#sec_6-2_Trig-Identities-5-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "difference identities "
},
{
  "id": "sec_6-2_Trig-Identities-6-2",
  "level": "2",
  "url": "sec_6-2_Trig-Identities.html#sec_6-2_Trig-Identities-6-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "periodic period "
},
{
  "id": "sec_6-2_Trig-Identities-7-2",
  "level": "2",
  "url": "sec_6-2_Trig-Identities.html#sec_6-2_Trig-Identities-7-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "double-angle identities "
},
{
  "id": "sec_6-2_Trig-Identities-8-2",
  "level": "2",
  "url": "sec_6-2_Trig-Identities.html#sec_6-2_Trig-Identities-8-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "half-angle identities "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})

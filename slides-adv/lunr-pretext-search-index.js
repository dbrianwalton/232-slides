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
  "body": " Section 5.2 & 5.3: Exponential and Logarithmic Limits and Derivatives   Learning Goals (Begin Day 10)    Compute end behavior for exponential and logarithmic functions, using the ideas of exponential growth vs decay and the inverse property for logarithms.    Recognize how the derivatives of the exponential and logarithm come from the definition of the derivative and the properties of derivatives.    Compute derivatives using derivative rules involving the natural exponential and logarithm function, including the use of other derivative rules (product, quotient, chain).    Shapes of graphs based on derivative sign analysis.   >   Exponential Functions and Limits     Core Fact : Exponential functions are continuous , so we evaluate limits at points with simple evaluation. As the inverse of a monotonic continuous function, the logarithm must also be continuous.    Think about the graph of exponential growth and decay to determine limits as .   If , then is exponential growth and limits and .   Graph of exponential growth with b > 1 so that y tends to 0 on the left and to infinity on the right.      If , then is exponential decay and limits and .      Graph of exponential growth with 0 < b < 1 so that y tends to infinity on the left and to 0 on the right.     >   Derivative of Exponential  For each new function, we need to use the definition of the derivative to discover the corresponding derivative rule. When , we use the exponent sum rule to rewrite : Consequently, the derivative of an elementary exponential is always some constant times the original function , where  >   Natural Base  The value of is exactly the value of the derivative of at . Different bases have different slopes at this point.  The base is that number such that so that the tangent line is exactly : The value as a decimal approximation is .  Since , we have the remarkable derivative rule . Incorporating the chain rule, for any formula , we have . >   Practice Derivatives with Exponentials  Find the derivatives of the following functions.      >   The Natural Logarithm  Now that we have defined the natural base , we can also define the natural logarithm , which is the inverse function to : .  Like all logarithms , we have .  Because , we also have for and for . >   Limits of Logarithms  A logarithm is the inverse of an exponential. This means that if is on the graph , then is on the graph of . That is, the roles of and are reversed.     Graph of exponential growth y = b^x with b > 1     Graph of logarithm y = logarithm of x with base b > 1    For :      Graph of exponential growth y = b^x with b < 1     Graph of logarithm y = logarithm of x with base b < 1    For :    >   The Natural Logarithm's Derivative  To find , we will do the same approach as for all inverse functions use implicit differentiation: That is, , and for any expression , the chain rule gives:  >   Practice Derivatives with Logarithms  Find the derivatives of the following functions.      >   Logarithms and Absolute Value   The function is only defined on .  The function is only defined on .  The function is defined on .  Find  >   Using Logarithm Expansion Before Differentiation  If or or , differentiation is much easier if you first apply the logarithm expansion rules before doing the derivative.             >   Logarithmic Differentiation  If a function is written as products, quotients or powers ( without a logarithm ), then we can often simplify finding by calculating , expanding it fully, and then computing a derivative using the relation , multiplying both sides of this result by to recover .             >  "
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

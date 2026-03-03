var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "quiz-solutions",
  "level": "1",
  "url": "quiz-solutions.html",
  "type": "Chapter",
  "number": "1",
  "title": "Weekly Quiz Solutions",
  "body": " Weekly Quiz Solutions   Week 3 Quiz   Question  The function has one local minimum at . Use this information, synthetic division and factoring, and sign analysis of derivatives to determine intervals on which is increasing or decreasing.  You should be able to do this without looking at a graph.    Solution  We find intervals on which a function is increasing or decreasing by doing sign analysis on the first derivative. If we needed to find intervals on which the function is concave up or down, then we would do sign analysis on the second derivative. Our basic steps are:   Find and factor it completely. For this step, we will use the fact has a minimum at . We know at an extreme value (minimum), so will be one factor. We can use synthetic division to find the other factors.    Find all roots of by solving and also points where does not exist. These are called the critical points of .    Make a sign chart number line for by marking all of critical points of .    Determine the sign of by testing points inside each interval. Or find the sign on one interval and then use multiplicity of roots to determine the remaining signs.    Interpret the sign chart. For each positive sign, we say is increasing on the corresponding interval. For each negative sign, we say is decreasing on the corresponding interval.   Now let's do the work.  Calculate the derivative: Use the minimum at to know and synthetic division.    -3  1 -3 -10 24     0 -3 18 -24     1 -6 8 0    So . Our sign chart number line will have marks at three roots: , , and . Each of these roots has multiplicity 1, so changes sign at each point. Choose , such as and discover . Using multiplicity or testing each interval, we soon complete our sign chart.   Sign chart number line showing f prime has signs that are negative to the left of -3, positive between -3 and 2, negative between 2 and 4, and positive to the right of 4.    We are now ready to interpret the sign chart.   is increasing on the intervals and .    is decreasing on the intervals and .   It is common to just talk about the open intervals, so that the endpoints are not included on either side, and that is what I would accept. However, the most correct interpretation is to include every endpoint at which the original function is continuous.     Week 4 Quiz   Question  The function is a power function that passes through the points and .  Find  Use derivative sign analysis to determine intervals on which is increasing or decreasing  Use derivative sign analysis to determine intervals on which is concave up or concave down  Sketch a graph of .      Solution     Because is a power function , we know for constants and . We use the points to create equations for and . Since we know , we substitute into the second equation and then isolate to get We now recognize that 8 and 4 are both powers of 2, and so that we can reach an equation where the exponents must match:   We have found .    Now that we know , we can find : The exponent is negative , so is undefined at . The root (cube root) is odd, so the domain includes both negative and positive values. The power is also odd, so the sign changes at . We have  For , we have (negative)  For , we have (positive)  So is increasing on and decreasing on .    From , we can compute : We are still working with odd (cube) roots, and this time there is an even power, so the sign of is the same on both intervals. For we have (positive). So is concave up on and on . (It is not valid to combine these intervals because is not continuous at .    Key features you need in your graph:  has a negative power, so there will be a vertical asymptote at and a horizontal asymptote   The left side of the graph on the interval is increasing and concave up, which has the shape of the bottom right quadrant of a circle  The right side of the graph on the interval is decreasing and concave up, which has the shape of the bottom left quadrant of a circle     Graph of f(x) showing increasing and concave up on the left to a vertical asymptote and then decreasing and concave up on the right coming back down to a horizontal asymptote          Week 5 Quiz   Question  The function is a rational function that when completely factored can be written   Find the domain of and describe all discontinuities.  Compute the limit at each discontinuity. For any infinite limits, justify left- and right-sided limits clearly.  Determine .      Solution     A rational function's domain is all real numbers except for the roots of the denominator's polynomial. The factors of the denominator include and , so is undefined at and . Written in interval notation, the domain is .  There are discontinuities at and . We simplify the factors by cancelling any common factors: In the simplified formula, only remains as a denominator's factor. So is a removable discontinuity while is an infinite discontinuity (vertical asymptote).    We need to find limits for each discontinuity.  At the removable discontinuity, we just use the simplified formula. The new formula is continuous so that we can just evaluate using the x-value.   At the infinite discontinuity, the one-sided limits are infinite. We use sign analysis to determine whether the limits are or . Because the simplified formulas has multiplicity 2 for each formula factor, the function never changes signs and is positive on each interval. Because the one-sided limits are the same, we write     To find the limit at infinity, we need to know the highest power terms from the numerator and denominator. We don't actually need to multiply out all of the terms. Each factor will contribute a single power of , so the numerator's leading term using the simplified formula will be and the denominator's leading term will be . Thus, for limits at infinity, we have:        "
},
{
  "id": "week-3-quiz-3-2",
  "level": "2",
  "url": "quiz-solutions.html#week-3-quiz-3-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "sign analysis roots critical points increasing on decreasing on "
},
{
  "id": "week-3-quiz-3-7",
  "level": "2",
  "url": "quiz-solutions.html#week-3-quiz-3-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "increasing on decreasing on "
},
{
  "id": "quiz-solutions-3-2-2",
  "level": "2",
  "url": "quiz-solutions.html#quiz-solutions-3-2-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "power function "
},
{
  "id": "quiz-solutions-3-3-2",
  "level": "2",
  "url": "quiz-solutions.html#quiz-solutions-3-3-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "power function negative undefined increasing decreasing concave up vertical asymptote horizontal asymptote "
},
{
  "id": "quiz-solutions-4-3-2",
  "level": "2",
  "url": "quiz-solutions.html#quiz-solutions-4-3-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "removable discontinuity "
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

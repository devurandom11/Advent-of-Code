



Day 1 - Advent of Code 2015





window.addEventListener('click', function(e,s,r){if(e.target.nodeName==='CODE'&&e.detail===3){s=window.getSelection();s.removeAllRanges();r=document.createRange();r.selectNodeContents(e.target);s.addRange(r);}});
<!--




Oh, hello!  Funny seeing you here.

I appreciate your enthusiasm, but you aren't going to find much down here.
There certainly aren't clues to any of the puzzles.  The best surprises don't
even appear in the source until you unlock them for real.

Please be careful with automated requests; I'm not a massive company, and I can
only take so much traffic.  Please be considerate so that everyone gets to play.

If you're curious about how Advent of Code works, it's running on some custom
Perl code. Other than a few integrations (auth, analytics, social media), I
built the whole thing myself, including the design, animations, prose, and all
of the puzzles.

The puzzles are most of the work; preparing a new calendar and a new set of
puzzles each year takes all of my free time for 4-5 months. A lot of effort
went into building this thing - I hope you're enjoying playing it as much as I
enjoyed making it for you!

If you'd like to hang out, I'm @ericwastl on Twitter.

- Eric Wastl


















































-->

Advent of Code[About][Events][Shop][Settings][Log Out]devurandom11 12*&nbsp;&nbsp;{year=&gt;2015}[Calendar][AoC++][Sponsors][Leaderboard][Stats]





--- Day 1: Not Quite Lisp ---Santa was hoping for a white Christmas, but his weather machine's "snow" function is powered by stars, and he's fresh out!  To save Christmas, he needs you to collect fifty stars by December 25th.
Collect stars by helping Santa solve puzzles.  Two puzzles will be made available on each day in the Advent calendar; the second puzzle is unlocked when you complete the first.  Each puzzle grants one star. Good luck!
Here's an easy puzzle to warm you up.
Santa is trying to deliver presents in a large apartment building, but he can't find the right floor - the directions he got are a little confusing. He starts on the ground floor (floor 0) and then follows the instructions one character at a time.
An opening parenthesis, (, means he should go up one floor, and a closing parenthesis, ), means he should go down one floor.
The apartment building is very tall, and the basement is very deep; he will never find the top or bottom floors.
For example:

(()) and ()() both result in floor 0.
((( and (()(()( both result in floor 3.
))((((( also results in floor 3.
()) and ))( both result in floor -1 (the first basement level).
))) and )())()) both result in floor -3.

To what floor do the instructions take Santa?

Your puzzle answer was 232.--- Part Two ---Now, given the same instructions, find the position of the first character that causes him to enter the basement (floor -1).  The first character in the instructions has position 1, the second character has position 2, and so on.
For example:

) causes him to enter the basement at character position 1.
()()) causes him to enter the basement at character position 5.

What is the position of the character that causes Santa to first enter the basement?

Your puzzle answer was 1783.Both parts of this puzzle are complete! They provide two gold stars: **
At this point, you should return to your Advent calendar and try another puzzle.
If you still want to see it, you can get your puzzle input.
You can also [Shareon
  Twitter
  Mastodon</a
>] this puzzle.




(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-69522494-1', 'auto');
ga('set', 'anonymizeIp', true);
ga('send', 'pageview');




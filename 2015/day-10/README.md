



Day 10 - Advent of Code 2015





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

Advent of Code[About][Events][Shop][Settings][Log Out]devurandom11 12*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;λy.2015[Calendar][AoC++][Sponsors][Leaderboard][Stats]





--- Day 10: Elves Look, Elves Say ---Today, the Elves are playing a game called look-and-say.  They take turns making sequences by reading aloud the previous sequence and using that reading as the next sequence.  For example, 211 is read as "one two, two ones", which becomes 1221 (1 2, 2 1s).
Look-and-say sequences are generated iteratively, using the previous value as input for the next step.  For each step, take the previous value, and replace each run of digits (like 111) with the number of digits (3) followed by the digit itself (1).
For example:

1 becomes 11 (1 copy of digit 1).
11 becomes 21 (2 copies of digit 1).
21 becomes 1211 (one 2 followed by one 1).
1211 becomes 111221 (one 1, one 2, and two 1s).
111221 becomes 312211 (three 1s, two 2s, and one 1).

Starting with the digits in your puzzle input, apply this process 40 times.  What is the length of the result?

Your puzzle input is 1113122113.
Answer:  
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




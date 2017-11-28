/**
 * @author Scott Christopher Stauffer <scstauf at gmail dot com>
 *
 * an implementation of a "look-and-say sequence" algorithm in JavaScript
 * (https://en.wikipedia.org/wiki/Look-and-say_sequence)
 */

function lookAndSay(ns) {
    var i = 0, count = 0,
        c = '\0',
        last = '\0',
        seq = '';
    
    if (typeof ns !== 'string' || ns.length === 0) return ns;
    
    for (var i = 0, c = ns[0]; i < ns.length; i++, c = ns[i]) {
        if (i === 0) {
            last = c;
        }
        else if (last !== c) {
            seq += count + last;
            last = c;
            count = 0;
        }
        
        ++count;
    }
    
    if (last !== '\0') {
        seq += count + last;
    }
    
    console.log(seq);
    return seq;
}

for (var i = 0, s = '1'; i < 10; i++) {
    s = lookAndSay(s);
}

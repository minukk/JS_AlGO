const permutations = str => 
  (str.length <= 1) 
    ? [str] 
    : Array.from(new Set(
				str.split('')
  			.map((char, i) => permutations(
          str.substr(0, i) + str.substr(i + 1)
        ).map(p => char + p)
            ).reduce((r, x) => 
                     r.concat(x), [])
	));

const unique = xs => [ ...new Set(xs) ]
const concat = (a, b) => [ ...a, ...b ] 
const drop = i => xs => [ ...xs.slice(0, i), ...xs.slice(i + 1) ]

const permute = (x, i, xs) => 
  combinations(drop(i)(xs)).map(y => x + y)

const combinations = s =>
  s.length === 1 ? [ s ] : [ ...s ].map(permute).reduce(concat)

const permutations = s => unique(combinations(s))


permutations('1234');
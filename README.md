# @reidphilpot/functional

## Functor

If the specified value is a function, returns the specified value. Otherwise, returns a function that returns the specified value

    functor('value')()
      //=> 'value'

    functor(function() { return 'value' })()
      //=> 'value'

## Maybe

`maybe` reduces the logic of checking for nothing to a function call, either:

    function checksForSomething = maybe(function (value) {
      // function's true logic
    })

or:

    var something = maybe(doesntCheckForSomething)(value)

## Negate

Returns a new negated version of the predicate function.

    var isFalsy = negate(Boolean)
    [-2, -1, 0, 1, 2].filter(isFalsy)
      //=> [0]

## Pluck

A convenient version of what is perhaps the most common use-case for `map`: extracting a list of property values.

    var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
    pluck('name')(stooges)
      //=> '["moe", "larry", "curly"]

## Property

Returns a function that will itself return the `key` property of any passed-in object.

    var stooge = {name: 'moe'}
    property('name')(stooge)
      //=> "moe"

Will also check for nested objects:

    var stooge = {name: 'moe', address: { street: 'Broadway'}}
    property('address.street')(stooge)
      //=> "Broadway"

## Splat

A function that wraps around `map` and turns any other function into a mapping.

    var squareMap = splat(function (n) { 
      return n*n 
    });
    
    squareMap([1, 2, 3, 4, 5])
      //=> [1, 4, 9, 16, 25]
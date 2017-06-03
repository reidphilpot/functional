# @reidphilpot/functional

[![Build Status](https://travis-ci.org/reidphilpot/functional.svg?branch=master)](https://travis-ci.org/reidphilpot/functional)

## Functor

If the specified value is a function, returns the specified value. Otherwise, returns a function that returns the specified value

``` javascript
functor('value')()
//=> 'value'

functor(() => 'value')()
//=> 'value'
```

## Maybe

`maybe` reduces the logic of checking for nothing to a function call, either:

``` javascript
const maybeFoo = maybe(value => value === 'foo')
const something = maybeFoo('foo')
// => true
```

## Negate

Returns a new negated version of the predicate function.

``` javascript
const isFalsy = negate(Boolean)
[-2, -1, 0, 1, 2].filter(isFalsy)
//=> [0]
```

## Partial

Partially apply a function by filling in any number of its arguments, without changing its dynamic `this` value.

``` javascript
const subtract = (a, b) => b - a
sub5 = partial(subtract, 5)
sub5(20)
//=> 15
```

## Pluck

A convenient version of what is perhaps the most common use-case for `map`: extracting a list of property values.

``` javascript
const stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
pluck('name')(stooges)
//=> '["moe", "larry", "curly"]
```

## Property

Returns a function that will itself return the `key` property of any passed-in object.

``` javascript
const stooge = {name: 'moe'}
property('name')(stooge)
//=> "moe"
```

Also handles nested objects:

``` javascript
const stooge = {name: 'moe', address: { street: 'Broadway'}}
property('address.street')(stooge)
//=> "Broadway"
```

## Splat

A function that wraps around `map` and turns any other function into a mapping.

``` javascript
const squareMap = splat(n => n*n)

squareMap([1, 2, 3, 4, 5])
//=> [1, 4, 9, 16, 25]
```

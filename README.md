# Description
This is a simple module with some helper methods related to classic role game calculations.

# Provided methods
## random
Returns an integer value between 0 and the provided value (included).

## randomFromList
Returns a random element from a given list.

## critic
Returns an integer indicating if a critic has happened. To consider a critic it gets a random number between 0 and 100, below 10 is a low critic and avobe 90 is a high critic. The method returns -1 for a low critic, 1 for a high critic and 0 otherwise.

## hit
Returns an integer representing the damage of a hit with the specified attack to an specified defense.

## against
Returns a boolean indicating whether the first value wins a second value in a random check.

## coin
Returns a boolean indicating whether the result is head(true) or tails(false).

## check
Returns a boolean indicating whether a random check against a percentage has succeded or not.
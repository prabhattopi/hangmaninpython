import random
with open("wordlist.txt", "r") as f:
    words=f.readlines()

word = random.choice(words)[:-1]

allowedErrors = 7

guesses = []

done = False

while not done:
    for letter in word:
        if letter.lower() in guesses:
            print(letter, end=" ")
        else:
            print("_", end=" ")

    print("")

    guess = input(f"Allowed Errros left {allowedErrors},Another Guesses: ")
    guesses.append(guess.lower())
    if guess.lower() not in word.lower():
        allowedErrors -= 1
        if allowedErrors == 0:
            break

    done = True
    for letter in word:
        if letter.lower() not in guesses:
            done = False
if done:
    print(f"You find the word! it was {word}")
else:
    print(f"Game over You died! The word was {word}")

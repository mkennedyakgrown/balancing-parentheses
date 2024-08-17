def balancing_parentheses(string):
    openings = 0
    missing = 0

    for e in string:
        if e == "(":
            openings += 1
        else:
            if openings > 0:
                openings -= 1
            else:
                missing += 1

    return openings + missing

print("Expecting: 0")
print(balancing_parentheses("(()())"))

print("")

print("Expecting: 2")
print(balancing_parentheses("()))"))

print("")

print("Expecting: 1")
print(balancing_parentheses(")"))
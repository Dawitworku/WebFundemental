# Print HelloWorld
print ("Hello Word")

# 2. print "Hello Noelle!" with the name in a variable
name = "Noelle!"

print("Hello" , name)
print("Hello" + name)

# 3. print "Hello 42!" with the number in a variable
name = 42

print("Hello" , name)
print("Hello " + str(name)) # can only add a string to a string 
# not to a number. So put the variable in a quotation to change to string.

# 4. print "I love to eat sushi and pizza." with the foods in variables
fave_food1 = "sushi"
fave_food2 = "pizza"

print("I love to eat {} and {}.".format(fave_food1, fave_food2))

print(f"I love to eat {fave_food1} and {fave_food2}.")

print(fave_food1.title() + " and " + fave_food2.title())
print(fave_food1.index("i"))
print(fave_food1.count("s"))

my_dict = { "name": "Noelle", "language": "Python" }

# another way to iterate through the keys
for key in my_dict.keys():
     print(key)
#to iterate through the values
for val in my_dict.values():
     print(val)
#to iterate through both keys and values
for key, val in my_dict.items():
     print(key, " = ", val)

for k in my_dict:
    print(k, '=', my_dict[k]) # it doesn't print the index  but the key instead
    print(k)

for count in range(0,5):
    print("looping - " + str(count))

for v in "string":
    if v == "i":
        break
    print(v)
# output: s, t, r

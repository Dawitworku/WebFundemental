# 1 Basic
num = 0
while num < 151:
    print(num)
    num += 1

# 2 Multiples fo Five
for i in range(5, 1001, 5):
    print(i)

# 3 Counting, the Dojo Way
for i in range(0, 101):  # since we need to increment by 1, forget the 3rd interation argument
    if i % 10 == 0:
        print("Coding Dojo")
    elif i % 5 == 0:
        print("Coding")
    else:
        print(i)

# 4 Add odd integer from 0 to 500,000, and print the final sum.
sum = 0;
max = 500000;
for i in range(1, max, 2):
    sum += i
    #print(sum)

# 5 Countdown by Fours - Print positive numbers starting at 2018, counting down by fours.
for i in range(2018, 0 , -4):
    print(i)

# 6 Flexible Counter - Set three variables: lowNum, highNum, mult. Starting at lowNum and going through highNum, print only the integers that are a multiple of mult. For example, if lowNum=2, highNum=9, and mult=3, the loop should print 3, 6, 9 (on successive lines)
def flexible_counter(lowNum, highNum, mult):
    for i in range(lowNum, highNum+1, 1): # added +1 because the loop iterates but doesn't include the last
        if i % mult == 0:                 #number which is 9.
            print(i)
flexible_counter(2, 9, 3)

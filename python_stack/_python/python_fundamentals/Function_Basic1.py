# 1
def a():
    return 5   # prediction: 5
print(a())

# 2
def a():
    return 5   # prediction: 10
print(a()+a())

# 3
def a():
    return 5
    return 10  # prediction: 5
print(a())

# 4
def a():
    return 5
    print(10)  # prediction: 5


print(a())

# 5
def a():
    print(5)   # prediction: 5
x = a()        # correction: Also prints none because x is undefined. We need return statement for that
print(x)

# 6
def a(b, c):
    print(b+c)          # 3,5,undefined
print(a(1, 2) + a(2, 3))

# 7
def a(b, c):
    return str(b)+str(c)  # prediction: 25- typecasting changes int to str.
print(a(2, 5))

# 8
def a():
    b = 100
    print(b)
    if b < 10:
        return 5        # prediction: 100, 10
    else:
        return 10
    return 7
print(a())

#9
def a(b,c):
    if b<c:
        return 7    #prediction: 7,14,21
    else:
        return 14
    return 3
print(a(2,3))
print(a(5,3))
print(a(2,3) + a(5,3))

#10
def a(b,c):
    return b+c  #prediction: 8
    return 10
x = a(3,5)
print(x)

#11
b = 500
print(b)
def a():
    b = 300     #prediction: 500, 500,300,500
    print(b)
print(b)
a()
print(b)

#12
b = 500
print(b)

def a():
    b = 300     #prediction: 500,500,300,500
    print(b)
    return b
print(b)
a()
print(b)

#13
b = 500
print(b)

def a():
    b = 300     #prediction: 500,500,300,300
    print(b)
    return b
print(b)
b=a()
print(b)

#14
def a():
    print(1)   # prediction: 1,3,2
    b()
    print(2)
def b():
    print(3)
a()

#15
def a():
    print(1)
    x = b()
    print(x)
    return 10       # prediction: 1,3,5,10
def b():
    print(3)
    return 5
y = a()
print(y)

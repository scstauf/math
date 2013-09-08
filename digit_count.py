# digit_count.py
# by scstauf (scottyeatscode.blogspot.com)
#
# September 6, 2013

def sum_digits(n):
	if n < 10:
		return n
	return sum_digits((n - (n % 10)) / 10) + (n % 10)

def make_array(size, max):
	array = []
	n = ""
	
	for i in range(0, max):
		for j in range(i, i + size):
			n += str(j)
		array.append(n)
		n = ""
	
	return array

# I have found that the sum of all digits in 
# an incremental n-digit number is equal to
# the next sequential sum minus n
#
# sum(012) = 3
# sum(123) = 6
# sum(234) = 9
#
# n =>	i		=	s	...	c
# 1 =>	0		=	0	... 	0
# 2 =>	01		=	1	... 	1
# 3 =>	012		=	3	...	2
# 4 =>	0123		=	6	...	3
# 5 =>	01234		=	10	...	4
# 6 =>	012345		=	15	...	5
# 7 =>	0123456		=	21	...	6
# 8 =>	01234567	=	28	...	7
# 9 =>	012345678	=	36	...	8
#
# n = sequence, i = number, s = init sum, c = change in initial value from last sum

def test():
	stop = 10
	for i in range(1, stop):
		print(str(i) + " digit numbers...")
		array = make_array(i, stop)
		stop -= 1
			
		for e in array:
			print(e + " = " + str(sum_digits(int(e))))

test()

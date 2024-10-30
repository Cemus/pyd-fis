def explosif(number):
    array = []
    result = 0
    for i in range(number):
        if i % 3 == 0  or i % 5 == 0:
            array.append(i)
    for i in range(len(array)):     
        result += array[i]

    print("result",result)
explosif(1435)
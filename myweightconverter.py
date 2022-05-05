weight = input('Type the weight in KG here: ')
grams = isinstance(weight, int)
if grams == True:
    grams = int(weight) * 1000
else:
    grams = float(weight) * 1000
print(grams)
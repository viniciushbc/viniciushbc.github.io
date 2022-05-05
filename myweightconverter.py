weight = input('Type the weight in KG here: ')
grams = isinstance(weight, int)
ounces = isinstance(weight, int)
pounds = isinstance(weight, int)
if grams == True:
    grams = int(weight) * 1000
    print((int(weight)), 'Kg in grams are ', grams, 'grams')
else:
    grams = float(weight) * 1000
    print((float(weight)), 'Kg in grams are ', grams, 'grams')
if ounces == True:
    ounces = int(weight) * 35.27396195
    print((int(weight)), 'Kg in ounces are ', ounces, 'ounces')
else:
    ounces = float(weight) * 35.27396195
    print((float(weight)), 'Kg in ounces are ', round(ounces, 2), 'ounces')
if pounds == True:
    pounds = int(weight) * 2.20462262185
    print((int(weight)), 'Kg in pounds are ', pounds, 'pounds')
else:
    pounds = float(weight) * 2.20462262185
    print((float(weight)), 'Kg in pounds are ', round(pounds, 2), 'pounds')
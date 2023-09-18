names = ['asa','joujoniki','nibedita','roy']
# sorting
names.sort()
print(names)

# acccess list item
for name in names:
    print(name)

# change list elements
names[3] = "Nabila"
print(names)

# append() for single element insert
names.append('durjoy')
print(names)

# insert in a perticular index
names.insert(5,"sukla")
print(names)


# list insert to a list
new_names = ['shawon','zim','abir']
names.extend(new_names)
print(names)

# remove element
new_names = ['shawon','zim','abir']
new_names.remove('abir')
print(new_names)

# remove element by index
new_names.pop(1)
print(new_names)

# remove list
new_names = ['shawon','zim','abir']
del new_names[1]
print(new_names)

# remove list element
new_names.clear()
print(new_names)


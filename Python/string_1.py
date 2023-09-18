name = ' Joujoniki Asa Roy '
# Calculate the size of o string
print(name)
size = len(name)
print(size)

# remove the whitespace before starting and after ending
new_name = name.strip()
print(new_name)

# replace string element
new_string = new_name.replace("Joujoniki","Nibedita")
print(new_string)

# check if a string end with ef or not
result = name.endswith("ef")
print(result)

# reverse string
reverse_string = new_name[::-1]
print(reverse_string)

# sring concatenation
others_str = "My name is"
full_str = others_str +" "+new_name
print(full_str)

# modify string
print(full_str.upper())
print(full_str.lower())

# string slicing
print(new_name[0:10]) #start with index 0 and end with index 9
print(new_name[0:10:2]) # start with index 0 and increment by 2 and end with index 9;
print(new_name[-7:-4]) #it will print atfer -6 index to index-3
print(new_name[-7:]) #it will print everything after the -6 index

#  splits the string into substrings
print(full_str.split())

# use format method
age = 23
name = "joujoniki"
txt = "My name is {}, and I am {}"
print(txt.format(name,age))

# printing format
print(f"My name is joujoniki and i am {age}")

# How many specific time a value retrn from a string
print(new_name.count("o"))
print(new_name.encode())

# Searches the string for a specified value and returns the position of where it was found
print(new_name.find("Roy"))
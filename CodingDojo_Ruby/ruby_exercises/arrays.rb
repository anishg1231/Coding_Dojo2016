# Try the following methods at least once either on a separate Ruby file or on irb.
a = ["Matz", "Guido", "Dojo", "Choi", "John"]
b = [5,6,9,3,1,2,4,7,8,10]
c = ["Dojo", 9]

#return the first value or )th index of the array
# puts a[0]

x = (a + b) - c
puts x.to_s

# .at or .fetch
puts a.fetch(1)

# .delete
puts a.delete("dojo")

# .reverse
puts a.reverse

# .length
puts "Length of a is #{a.length}"

# .sort
puts a.sort

# .slice
a[1, 2]

# .shuffle
puts a.shuffle

# .join
puts a.join

# .insert
puts a.insert('Anish')

# values_at() -> returns an array with values specified in the param
puts b.values_at(1,3,5)

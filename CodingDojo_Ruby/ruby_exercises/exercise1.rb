#puts/basic syntax

puts 'Hello'
puts 'Coding'
puts 'Dojo'

print 'hello'
print 'coding'

BEGIN {
  puts 'this is in the begin block'
}

END{
  puts 'this is in the end block'
}

#puts

x = 5
y = 10
z = x+y

puts z

#variable

first_name = 'Anish'
last_name = 'Gheewala'

#one way
puts "Your Name is #{first_name} #{last_name} "

#second way
# puts 'your Name is '
# puts first_name
# puts last_name


z = 50
puts "Value of z is %d" %[z]

puts "I am 5'10\" tall"

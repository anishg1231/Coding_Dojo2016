age = 22
if age > 21
  puts "Welcome to the party"
else
  puts "Not Yet"
end

# using elsif

number = 15
if number % 3 == 0 && number % 5 == 0
  puts "FizzBuzz"
elsif number % 3 == 0
  puts "Fizz"
elsif number % 5 == 0
  puts "Buzz"
end

#sometimes we want to do something if something
if !(age < 21)
  puts "Welcome ot the party"
else
  puts "Not yet"
end

unless age < 21
  puts "Welcome to the party"
else
  puts "Not yet"
end

#nil
#In Ruby, only two things are false: nil and false.

if ""
  puts "I am positive"
end
if 0
  puts "I am positive"
end

#inline Conditionals
#we can write an if/unless statement in one line.

puts "i am positive" if "hello"
puts "i am positive" if 24
puts "i am negative" unless nil
puts "i am negative" unless false
puts "Hello" if nil
puts "goodbye" if []

# # print 1-255
# for i in 1..255
#   puts i
# end
#
# #print odd numbers between 1-255
# for i in 1..255
#   if i % 2 != 0
#     puts i
#   end
# end

#print sum
# sum = 0
# for i in 1..255
#   puts "New Number: #{i}"
#   sum = i + sum
#   puts "Sum: #{sum}"
# end

#iterating through an array
# x = [1,2,3,4,5,6]
# for i in x.length
#   puts (x[i])
# end

#find maximum
# x = [1,2,3,4,5,6]
# puts x.max

# get average

# def average
  arr = [2, 10, 3]
  sum = 0
  for i in arr.length
    sum += arr[i]
    puts(sum/arr.length)
  end
end
average

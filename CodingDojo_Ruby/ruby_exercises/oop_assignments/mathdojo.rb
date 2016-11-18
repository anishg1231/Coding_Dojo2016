class MathDojo
  # attr_accessor :result
  #
  # def initialize
  #   @result = result
  # end

  def add(*args)
    sum = 0
    args.each do |number|
      sum += number
    end
    sum
  end

  def subtract(*args)
    sum = 0
    args.each do |number|
      sum -= number
    end
    sum.abs
  end

end

# puts MathDojo.new.add(1, 2).add(2, 5).subtract(3, 2)
# puts dojo1
# p dojo1.add(1,2)
# puts dojo1.to_s

dojo = MathDojo.new

puts add = dojo.add(2,2,5)
puts subtract = dojo.subtract(3,2)

puts add - subtract


# Develop a ruby class called MathDojo that has the following functions: add, subtract. Have these 2 functions take at least 1 parameter. MathDojo.new.add(2).add(2, 5).subtract(3, 2).result should perform 0+2+(2+5)-(3+2) and return 4.
# Modify MathDojo to take an array as a parameter with as many values passed into the array as needed. (e.g. MathDojo.new.add(1).add([3, 5, 7, 8], [2, 4.3, 1.25]).subtract([2,3], [1.1, 2.3]).result should do 0+1+(3+5+7+8)+(2+4.3+1.25)-(2+3)-(1.1+2.3) and return its result.

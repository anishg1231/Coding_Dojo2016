i = 0
num = 5
while i < num do
  puts "inside the loop i = #{i}"
  i += 1
end

# another way to do this loop which is also less common is:
i = 0
num = 5
begin
  puts "inside the loop i = #{i}"
  i += 1
end while i < num

# 1. break - teminates the most internal loop
# 2. next - jumps to the next iteraton
# 3. redo - retarts the iteration of the most internal loop

for i in 0..5
  puts "Value of local variable is #{i}"
end

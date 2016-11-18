# .any? {|obj| block} -> true or false

%w[ant, bear, cat].any? {|word| print word.length >= 3}

# or you could write it this way
# using do
%w[cat,dog,bone] do |word|
  word.length <= 3
end

# .each -> calls block once for each element in self, passing that element as a parameter.

%w[ant, bear, cat].each {|word| print word, "--"}

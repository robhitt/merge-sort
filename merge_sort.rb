def merge_sort(list)
  if list.length < 2
    list
  else
    mid = (list.length / 2).floor
    left_array = merge_sort(list[0..mid - 1])
    right_array = merge_sort(list[mid..list.length])
    merge(left_array, right_array)
  end
end

def merge(left, right)
  if left.empty?
    right
  elsif right.empty?
    left
  elsif left[0] < right[0]
    [left.first] + merge(left[1..left.length], right)
  else
    [right.first] + merge(left, right[1..right.length])
  end
end

arr = [12,3,2,1,5,7,9]
print merge_sort(arr)

from typing import Tuple, List


def zoom_array(lst: Tuple, factor: int = 2) -> List:
    zoomed_in: Tuple = [(item, i) for item in lst for i in range(int(factor))]
    return zoomed_in


array: list = [12, 72, 91]

zoom_2x: Tuple = zoom_array(array)

zoom_3x: Tuple = zoom_array(array, 3.0)

print(zoom_2x)
print(zoom_3x)


a = []

def fine(arr):
    arr.append("cool")
    
fine(a)

print(a)


print([[0] * 3 for _ in range(3)])

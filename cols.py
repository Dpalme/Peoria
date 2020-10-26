import pyperclip

final_string = ""

for index in range(1, 21):
    final_string += """.col-%d-o                       { margin-left: calc(%d*var(--grid));         }
""" % (index, index*5)

pyperclip.copy(final_string)

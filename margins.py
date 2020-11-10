import pyperclip

final_string = ""

for index in range(1, 21):
    final_string += """
.p-%d                           { padding: calc(%d*var(--grid));           }
.pl-%d                          { padding-left: calc(%d*var(--grid));      }
.pr-%d                          { padding-right: calc(%d*var(--grid));     }
.pb-%d                          { padding-bottom: calc(%d*var(--grid));    }
.pt-%d                          { padding-top: calc(%d*var(--grid));       }
.py-%d                          { padding: calc(%d*var(--grid)) initial;   }
.px-%d                          { padding: initial calc(%d*var(--grid));   }
""" % (index, index*5, index, index*5, index, index*5, index, index*5, index, index*5, index, index*5, index, index*5)

pyperclip.copy(final_string)
